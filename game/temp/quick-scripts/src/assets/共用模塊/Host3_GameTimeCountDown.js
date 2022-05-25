"use strict";
cc._RF.push(module, 'edcd5kCsdpKrZH8BJltQ2Jk', 'Host3_GameTimeCountDown');
// 共用模塊/Host3_GameTimeCountDown.js

"use strict";

var gameModel = require("Model"); ///主持人遊戲時間倒數js


cc.Class({
  "extends": cc.Component,
  properties: {
    countdownText: {
      "default": null,
      type: cc.Label
    },
    tensecond: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    if (gameModel.XMLTimeLimit == true) {
      this.countdownText.string = gameModel.gametimeCountDown;
      this.schedule(function () {
        //每1秒鐘值行一次，重複做gameModel.gametimelimit + 1次
        this.countdown();
      }, 1, gameModel.gametimelimit + 1);
    } else if (gameModel.XMLTimeLimit == false && gameModel.GameName == "redpack") {
      this.NoLimitTime = cc.find("畫布/場景/倒數燈籠/無限時");
      this.NoLimitTime.active = true;
    }
  },
  start: function start() {},
  //遊戲倒數
  countdown: function countdown() {
    if (gameModel.GameStatusMessage == "end" || gameModel.gametimeCountDown == 0) return;
    gameModel.gametimeCountDown--;
    this.countdownText.string = gameModel.gametimeCountDown;
    if (gameModel.gametimeCountDown == 10) this.currentsound = cc.audioEngine.play(this.tensecond, true, 15);

    if (gameModel.gametimeCountDown == 0) {
      cc.audioEngine.stop(this.currentsound); //gameModel.WebSocket_GameStatus_Host("end",0.1)

      gameModel.GameStatusMessage = "end";
    }
  },
  update: function update(dt) {}
});

cc._RF.pop();