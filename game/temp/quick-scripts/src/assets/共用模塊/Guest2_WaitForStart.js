"use strict";
cc._RF.push(module, '6dc05RqXWxMa4vuAhRC6dsu', 'Guest2_WaitForStart');
// 共用模塊/Guest2_WaitForStart.js

"use strict";

var gameModel = require("Model"); ///玩家等待開始並取得遊戲資訊js


cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    this.waitonesecond = false;
    this.scheduleOnce(function () {
      this.waitonesecond = true;
    }, 1.1);
  },
  update: function update(dt) {
    if ((gameModel.GameStatusMessage == "start" || gameModel.GameStatusMessage == "gaming") && this.waitonesecond == true) {
      if (gameModel.AlreadyPlayed == 0) cc.director.loadScene("Guest3_CountDown" + gameModel.BackGround_Theme);else cc.director.loadScene("Guest5_Prize");
    } else if (gameModel.GameStatusMessage == "end" && this.waitonesecond == true) cc.director.loadScene("Guest5_Prize" + gameModel.BackGround_Theme);else if (gameModel.GameStatusMessage == "close" && this.waitonesecond == true) {
      gameModel.HostWindow = "close";
      cc.director.loadScene("Guest1_JoinGame" + gameModel.BackGround_Theme);
    }
  }
});

cc._RF.pop();