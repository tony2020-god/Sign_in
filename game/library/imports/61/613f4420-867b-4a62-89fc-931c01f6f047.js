"use strict";
cc._RF.push(module, '613f4QghntKYon8kxwB9vBH', 'Host1_Congratulations');
// 5_lottery/程式/Host1_Congratulations.js

"use strict";

var gameModel = require("Model"); ///即時中獎玩家資訊物件js


cc.Class({
  "extends": cc.Component,
  properties: {
    prizeName: {
      "default": null,
      type: cc.Label
    },
    prizeAvatar: {
      "default": null,
      type: cc.Sprite
    }
  },
  updateInfo: function updateInfo(i) {
    var self = this;
    this.prizeName.string = "恭喜獲得 " + gameModel.prize_name_guest; //遠端載入: 網址轉圖片

    cc.assetManager.loadRemote(gameModel.Prizestack_picture[i], {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.prizeAvatar.spriteFrame = picture;
      }
    });
  },
  onLoad: function onLoad() {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();