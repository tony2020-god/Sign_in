"use strict";
cc._RF.push(module, '037baTi8DRKwokRLHQEF/UG', 'Guest4_GameCountDown');
// 共用模塊/Guest4_GameCountDown.js

"use strict";

var gameModel = require("Model"); //玩家遊戲倒數js


cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {
    this.already = false;
  },
  lateUpdate: function lateUpdate(dt) {
    if (gameModel.GameStatusMessage == "end" && this.already == false) {
      this.already = true;
      cc.director.loadScene("Guest_Prize");
    } else if (gameModel.GameStatusMessage == "close" && this.already == false) {
      this.already = true;
      gameModel.HostWindow = "close";
      cc.director.loadScene("Guest1_JoinGame" + gameModel.BackGround_Theme);
    }
  }
});

cc._RF.pop();