"use strict";
cc._RF.push(module, '950f2YBL+VE0pB4ISoh9tdi', 'Host4_ShowWinner');
// 共用模塊/Host4_ShowWinner.js

"use strict";

var WinnerItem = require('Host4_WinnerRedpaket');

var gameModel = require("Model"); ///主持人結算場景顯示中獎玩家列表js


cc.Class({
  "extends": cc.Component,
  properties: {
    items: {
      "default": null,
      type: cc.Prefab
    },
    round: {
      "default": null,
      type: cc.Label
    },
    WrongAlert: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    this.itemlist = [];
    this.winlist = [];
    this.index = [];
    this.indexcount = 0;
    this.items_parent = cc.find("畫布/中獎列表/view/內容");
    this.AlertText = cc.find("畫布/警告/警告文字");
  },
  start: function start() {
    this.SpawnWinner();
    this.round.string = gameModel.CurrentRound;
  },
  //按下再來一輪鍵
  NextRound: function NextRound() {
    if (gameModel.prize_total == 0) {
      this.AlertText.getComponent(cc.Label).string = "沒有獎品了，無法開啟下一輪";
      this.WrongAlert.active = true;
    } else {
      gameModel.WebSocket_GameStatus_Host("open", 0.1);
      this.scheduleOnce(function () {
        if (gameModel.connet_ws == true) {
          gameModel.GameStatusMessage = "open";
          gameModel.winner_name = [];
          gameModel.prize_name_host = [];
          gameModel.winner_picture = [];
          gameModel.prize_name_host = [];
          gameModel.winner_score = [];
          cc.director.loadScene("Host1_Start" + gameModel.BackGround_Theme);
          gameModel.connet_ws = false;
        } else {
          this.AlertText.getComponent(cc.Label).string = "尚未與伺服器連接";
          this.WrongAlert.active = true;
        }
      }, 0.6);
    }
  },
  CloseAlert: function CloseAlert() {
    this.WrongAlert.active = false;
  },
  //列出得獎人和得到的獎品清單
  SpawnWinner: function SpawnWinner() {
    for (var i = 0; i < gameModel.winner_name.length; i++) {
      var node = cc.instantiate(this.items);
      node.parent = this.items_parent;
      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[i].updateInfo(i);
    }
  },
  update: function update(dt) {}
});

cc._RF.pop();