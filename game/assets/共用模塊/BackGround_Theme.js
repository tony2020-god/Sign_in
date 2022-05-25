var gameModel = require("Model");

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.boo = "炸彈"
    },

    start () {
        var self = this;
        cc.resources.load("winter/" + this.boo, cc.SpriteFrame, function (err, spriteFrame) {
            self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        
    },

    // update (dt) {},
});
