"use strict";
cc._RF.push(module, 'bb6f1qnP6hJZbNXL4cYNlkr', 'Guest1_JoinGame');
// 共用模塊/Guest1_JoinGame.js

"use strict";

var gameModel = require("Model"); //玩家加入遊戲js


cc.Class({
  "extends": cc.Component,
  properties: {
    WrongAlert: {
      "default": null,
      type: cc.Node
    },
    AlertText: {
      "default": null,
      type: cc.Label
    }
  },
  start: function start() {
    gameModel.Guest1_Join_JS = this;
    gameModel.TopTitle = cc.find("畫布/場景/標題").getComponent(cc.Sprite).spriteFrame;
    gameModel.Prize_BackGround = cc.find("畫布/場景/背景").getComponent(cc.Sprite).spriteFrame;

    if (gameModel.HostWindow == "close") {
      this.AlertText.string = "主辦單位已關閉視窗，遊戲中止";
      this.WrongAlert.active = true;
    }
  },
  JoinGame: function JoinGame() {
    if (gameModel.GameStatusMessage == "close" && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") {
      this.AlertText.string = "請等待主辦方連接後再加入遊戲";
      this.WrongAlert.active = true;
    } else gameModel.WebSocket_NumberOfPeople_Guest(500, true);
  },
  ConnetSuccess: function ConnetSuccess() {
    if (gameModel.CannotJoinGame == "") cc.director.loadScene("Guest2_Wait" + gameModel.BackGround_Theme);else {
      this.AlertText.string = gameModel.CannotJoinGame;
      this.WrongAlert.active = true;
    }
  },
  ConnetFail: function ConnetFail() {
    this.AlertText.string = "無法連接伺服器";
    this.WrongAlert.active = true;
  },
  CloseAlert: function CloseAlert() {
    this.WrongAlert.active = false;
    if (gameModel.CannotJoinGame == "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲" && gameModel.HostWindow != "close") cc.director.loadScene("Guest5_Prize" + gameModel.BackGround_Theme);else gameModel.HostWindow = "open";
  }
});

cc._RF.pop();