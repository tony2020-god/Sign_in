var gameModel = require("Model");


cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    
    setinformation(i){
        var self = this;
        cc.assetManager.loadRemote(gameModel.Prizestack_picture[i],{ext :'.jpg'||'.png'},function(err,texture)
        { 
            if(err) console.log("錯誤")
            else
            {
                var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame
                self.node.getComponent(cc.Sprite).spriteFrame = picture;
            }
        });
    },

    // update (dt) {},
});
