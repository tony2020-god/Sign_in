var gameModel = require("Model");

///玩家將獎品資訊顯示出來js
cc.Class({
    extends: cc.Component,

    properties: {
        timelabel: {
            default: null,
            type: cc.Label
        },
        roundlabel: {
            default: null,
            type: cc.Label
        },

        prize_namelabel: {
            default: null,
            type: cc.Label
        },
        
        PrizeMethod:{
            default:null,
            type: cc.Label
        },

        Prize_img:{
            default:null,
            type: cc.Sprite
        },

        AlreadyExchange:{
            default:null,
            type:cc.Node
        },
    },
    
    onLoad(){
        this.prize_method_chinese = null
    },

    //取得當前獎品資料
    updateInfo(i){ 
        var self = this
        cc.assetManager.loadRemote(gameModel.Domain + gameModel.prize_picture[i],{ext :'.jpg'||'.png'},function(err,texture)
        { 
            if(err) console.log("錯誤")
            else
            {
                var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame
                self.Prize_img.getComponent(cc.Sprite).spriteFrame = picture;
            }
         });
        this.timelabel.string = gameModel.Win_Time[i];  //顯示得獎時間
        this.roundlabel.string = "第" + gameModel.getprize_round[i] + "輪"; //顯示得獎輪次
        this.prize_namelabel.string = gameModel.prize_name_guest[i]; //顯示獎品名稱
        this.prize_method_chinese = gameModel.prize_method[gameModel.WhitchPrize_index] == "site" ? "現場兌換" : "郵件兌換" //將兌獎方式翻成中文
        this.PrizeMethod.string = this.prize_method_chinese; //顯示兌獎方式
        if(gameModel.exchangePrize[i] == "yes") this.AlreadyExchange.active = true; //若已兌換，兌換按鍵功能停止，並將圖片轉為已兌換
    },

    //取得當前獎品資料
    updatePrizeBlock(i){ 
        var self = this
        cc.assetManager.loadRemote(gameModel.Domain + gameModel.PrizeStaffs[i].picture,{ext :'.jpg'||'.png'},function(err,texture)
        { 
            if(err) console.log("錯誤")
            else
            {
                var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame
                self.Prize_img.getComponent(cc.Sprite).spriteFrame = picture;
            }
        });
        this.timelabel.string = gameModel.PrizeStaffs[i].win_time;  //顯示得獎時間
        this.roundlabel.string = "第" + gameModel.PrizeStaffs[i].round + "輪"; //顯示得獎輪次
        this.prize_namelabel.string = gameModel.PrizeStaffs[i].prize_name; //顯示獎品名稱
        this.prize_method_chinese = gameModel.PrizeStaffs[i].method == "site" ? "現場兌換" : "郵件兌換" //將兌獎方式翻成中文
        this.PrizeMethod.string = this.prize_method_chinese; //顯示兌獎方式
        if(gameModel.PrizeStaffs[i].status == "yes") this.AlreadyExchange.active = true; //若已兌換，兌換按鍵功能停止，並將圖片轉為已兌換
    },

    // update (dt) {},
});
