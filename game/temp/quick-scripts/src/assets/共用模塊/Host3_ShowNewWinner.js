"use strict";
cc._RF.push(module, '061559Bg5ZGurxX7ddMHO9N', 'Host3_ShowNewWinner');
// 共用模塊/Host3_ShowNewWinner.js

"use strict";

var gameModel = require("Model");

var WinnerItem = require('Host3_WinRecordItem'); ///主持人及時顯示中獎玩家js


cc.Class({
  "extends": cc.Component,
  properties: {
    items: {
      "default": null,
      type: cc.Prefab
    },
    items2: {
      "default": null,
      type: cc.Prefab
    },
    prize_total: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    this.itemlist = [];
    this.winlist = [];
    this.index = [];
    this.indexcount = 0;
    this.alreadyend = false;
    cc.director.getPhysicsManager().enabled = true;
    gameModel.WinnerData = this;
    gameModel.SpawnNewestWinner = false;
  },
  start: function start() {
    this.items_parent = cc.find("畫布/中獎列表/view/內容");
    gameModel.WebSocket_NumberOfLottery_Host();
    this.prize_total.string = gameModel.prize_total;
  },
  //列出得人獎物件
  SpawnNewWinner: function SpawnNewWinner() {
    if (gameModel.winner_name.length % 2 == 0) {
      this.indexcount++;
      this.index.push(this.indexcount);
      var node = cc.instantiate(this.items);
      node.parent = this.items_parent;
      node.setSiblingIndex(0); //讓子物件顯示在最上層

      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
    } else {
      this.indexcount++;
      this.index.push(this.indexcount);
      var node = cc.instantiate(this.items2);
      node.parent = this.items_parent;
      node.setSiblingIndex(0); //讓子物件顯示在最上層

      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
    }

    this.prize_total.string = gameModel.prize_total;
  },
  //按下關閉遊戲鍵
  CloseGame: function CloseGame() {
    gameModel.WebSocket_GameStatus_Host("end", 0.1);
    gameModel.GameStatusMessage = "end";
  },
  update: function update(dt) {
    if (gameModel.GameStatusMessage == "end" && this.alreadyend == false) {
      this.alreadyend = true;
      gameModel.NumberOfLotteryWS_Host.close();
      cc.director.loadScene("Host4_Last" + gameModel.BackGround_Theme);
    }
  }
});

cc._RF.pop();