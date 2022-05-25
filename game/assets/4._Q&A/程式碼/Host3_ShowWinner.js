var gameModel = require("Model");
var WinnerItem = require("Host3_WinRecordItem");

cc.Class({
    extends: cc.Component,

    properties: {
        Rank:{
            default: [],
            type: cc.Node
          },
    
    },


    onLoad () {
        this.itemlist=[];
        this.winlist=[];
        this.index = [];
        this.indexcount = 0;
        this.items_parent = cc.find("畫布/中獎列表/view/內容");
    },

    start () {
        this.SpawnWinner();
    },

    //列出得獎人和得到的獎品清單
    SpawnWinner(){
        //列出前三名得獎人
        for(var i = 0; i < 3; i++)
        {
            if(gameModel.winner_picture[i] == null) return;
            var ranked = this.Rank[i]
            var playerAvatar = ranked.getChildByName("頭相框").getChildByName("遮罩").getChildByName("玩家頭像").getComponent(cc.Sprite).spriteFrame
            ranked.getChildByName("玩家名稱").getComponent(cc.Label).string = gameModel.winner_name[i]
            ranked.getChildByName("玩家分數").getChildByName("分數").getComponent(cc.Label).string = gameModel.winner_Score[i]
            ranked.getChildByName("玩家耗時").getChildByName("耗時").getComponent(cc.Label).string = gameModel.winner_Taketime[i]
           
            //遠端載入: 網址轉圖片
           cc.assetManager.loadRemote(gameModel.winner_picture[i],{ext :'.jpg'||'.png'},function(err,texture)
           { 
             if(err) console.log("錯誤")
             else
             {
                 var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame
                 playerAvatar.spriteFrame = picture;
             }
           });
        }

        //列出剩下得獎人
        for(var i = 3; i < gameModel.winner_name.length; i++)
        {
            var node = cc.instantiate(this.items);
            node.parent = this.items_parent;
            var obj = node.getComponent(WinnerItem);//抓取WinnerItem
            this.itemlist.push(obj);
            this.itemlist[i].updateInfo(i);
        }
    },


    // update (dt) {},
});
