var gameModel = require("Model");
var Host3_WinRecordItem = require("Host3_WinRecordItem")

///即時中獎玩家資訊物件js
cc.Class({
    extends: Host3_WinRecordItem,

    properties: {
        Score:{
            default: null,
            type: cc.Label
        },
    },
    
    updateInfo(i){ 
        var self = this;
        this.playerName.string = gameModel.winner_name[i];
        this.Score.string = gameModel.winner_score[i]
        //遠端載入: 網址轉圖片
         cc.assetManager.loadRemote(gameModel.winner_picture[i],{ext :'.jpg'||'.png'},function(err,texture)
         { 
             if(err) console.log("錯誤")
             else
             {
                 var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame
                 self.playerAvatar.spriteFrame = picture;
             }
          });
    },

    onLoad () {},

    start () {},

    // update (dt) {},
});
