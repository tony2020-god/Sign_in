"use strict";
cc._RF.push(module, '0f50cGW9sJAaIe0BHTkMxzZ', 'BackGround_Theme');
// 共用模塊/BackGround_Theme.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.boo = "炸彈";
  },
  start: function start() {
    var self = this;
    cc.resources.load("winter/" + this.boo, cc.SpriteFrame, function (err, spriteFrame) {
      self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    });
  } // update (dt) {},

});

cc._RF.pop();