"use strict";
cc._RF.push(module, 'db8feOc69tHCbzSR5QPl9mm', 'Host1_ShowQuestion');
// 4._Q&A/程式碼/Host1_ShowQuestion.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {
    Bar: {
      "default": null,
      type: cc.Sprite
    },
    Question: {
      "default": null,
      type: cc.Node
    },
    ShowQuestionBtn: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {},
  start: function start() {
    gameModel.QuestionCount++;
    this.AlreadyShowQuestion = false; //this.Question.getComponent(cc.Label).string = gameModel.Question[gameModel.QuestionCount]
  },
  ShowQuestion: function ShowQuestion() {
    this.OpacityAni();
    this.schedule(this.ProgressBar, 0.01);
    this.Question.active = true;
  },
  OpacityAni: function OpacityAni() {
    cc.tween(this.ShowQuestionBtn).to(0.2, {
      opacity: 0
    }).start();
  },
  ProgressBar: function ProgressBar() {
    this.Bar.getComponent(cc.Sprite).fillRange -= 0.003;

    if (this.Bar.getComponent(cc.Sprite).fillRange <= 0) {
      this.unschedule(this.ProgressBar); //gameModel.WebSocket_GameStatus_Host("start",0.1)

      cc.director.loadScene("Host2_Game");
    }
  } // update (dt) {},

});

cc._RF.pop();