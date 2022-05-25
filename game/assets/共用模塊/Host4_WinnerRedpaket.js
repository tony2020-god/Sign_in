var gameModel = require("Model");

///主持人結算場景中獎玩家資訊物件js
cc.Class({
    extends: cc.Component,

    properties: {
        playerName: {
            default:null,
            type:cc.Label
        },
        prize_name: {
            default:null,
            type:cc.Label
        },
        playerAvatar:{
            default:null,
            type:cc.Sprite
        },
    },

    updateInfo(i){ 
        var self = this;
        this.playerName.string = gameModel.winner_name[i];
        this.playerAvatar.spriteFrames = gameModel.winner_picture[i];
        this.prize_name.string = gameModel.prize_name_host[i];
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
