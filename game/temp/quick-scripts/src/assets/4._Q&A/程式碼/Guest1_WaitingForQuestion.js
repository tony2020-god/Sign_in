"use strict";
cc._RF.push(module, 'c2bd3wUqZlDsIwM6v+H0Fa5', 'Guest1_WaitingForQuestion');
// 4._Q&A/程式碼/Guest1_WaitingForQuestion.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {
    Rank: {
      "default": null,
      type: cc.Label
    },
    Score: {
      "default": null,
      type: cc.Label
    },
    Time: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  start: function start() {
    this.UpdateRankScore();
  },
  update: function update(dt) {
    if (gameModel.GameStatusMessage == "start") cc.director.loadScene("Guest2_Answer");
  },
  UpdateRankScore: function UpdateRankScore() {
    this.Rank.string = gameModel.Rank;
    this.Score.string = gameModel.Score;
    this.Time.string = gameModel.gametimelimit;
  }
});

cc._RF.pop();