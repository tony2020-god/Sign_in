"use strict";
cc._RF.push(module, '03276Fbw89CPYjVjkDILSwm', 'Host3_ShowNewWinner_Score');
// 共用模塊/Host3_ShowNewWinner_Score.js

"use strict";

var gameModel = require("Model");

var WinnerItem = require('Host3_WinRecordItem_Score');

var Host3_ShowNewWinner_Original = require("Host3_ShowNewWinner"); ///主持人及時顯示玩家分數js


cc.Class({
  "extends": Host3_ShowNewWinner_Original,
  properties: {
    round: {
      "default": null,
      type: cc.Label
    },
    WaitingRank: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    this.alreadyend = false;
    this.itemlist = [];
    this.winlist = [];
    this.index = [];
    this.indexcount = 0;
    gameModel.WinnerData = this;
    gameModel.SpawnNewestWinner = false;
  },
  start: function start() {
    this.items_parent = cc.find("畫布/中獎列表/view/內容");
    gameModel.WebSocket_NumberOfLottery_Score_Host();
    this.round.string = gameModel.CurrentRound;
  },
  //列出得人獎物件
  SpawnNewWinner: function SpawnNewWinner() {
    if (gameModel.winner_name.length % 2 == 0) {
      this.indexcount++;
      this.index.push(this.indexcount);
      var node = cc.instantiate(this.items);
      node.parent = this.items_parent;
      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
    } else {
      this.indexcount++;
      this.index.push(this.indexcount);
      var node = cc.instantiate(this.items2);
      node.parent = this.items_parent;
      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
    }
  },
  ClearRank: function ClearRank() {
    this.indexcount = 0;
    this.index.length = 0;
    this.itemlist.length = 0;
    this.items_parent.removeAllChildren();
  },
  NextSence: function NextSence() {
    gameModel.WebSocket_GameStatus_Host("end", 0.1);
    gameModel.GameStatusMessage = "end";
    this.scheduleOnce(function () {
      cc.director.loadScene("Host4_Last" + gameModel.BackGround_Theme);
    }, 2);
  },
  CloseGame: function CloseGame() {
    gameModel.WebSocket_GameStatus_Host("calculate", 0.1);
    gameModel.GameStatusMessage = "calculate";
  },
  update: function update(dt) {
    if (gameModel.GameStatusMessage == "calculate" && this.alreadyend == false) {
      this.alreadyend = true;
      this.WaitingRank.active = true;
    }
  }
});

cc._RF.pop();