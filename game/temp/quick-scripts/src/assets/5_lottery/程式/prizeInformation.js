"use strict";
cc._RF.push(module, '409dcppUFVAl6bepj90o461', 'prizeInformation');
// 5_lottery/程式/prizeInformation.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  setinformation: function setinformation(i) {
    var self = this;
    cc.assetManager.loadRemote(gameModel.Prizestack_picture[i], {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.node.getComponent(cc.Sprite).spriteFrame = picture;
      }
    });
  } // update (dt) {},

});

cc._RF.pop();