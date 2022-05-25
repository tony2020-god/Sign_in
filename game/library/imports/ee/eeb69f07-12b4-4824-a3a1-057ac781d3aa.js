"use strict";
cc._RF.push(module, 'eeb698HErRIJKOhBXrHgdOq', 'Host1_WeelShowWinner');
// 5_lottery/程式/Host1_WeelShowWinner.js

"use strict";

var gameModel = require("Model");

var Host3_ShowNewWinner_Original = require("Host3_ShowNewWinner");

var WinnerItem2 = require("Host4_WinnerRedpaket");

cc.Class({
  "extends": Host3_ShowNewWinner_Original,
  properties: {
    Session: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.items_parent = cc.find("畫布/中獎列表/view/內容");
    gameModel.WebSocket_NumberOfLottery_Host();
    this.Session.string = "當前場次 : " + gameModel.Session;
  },
  SpawnNewWinner: function SpawnNewWinner() {
    this.indexcount++;
    this.index.push(this.indexcount);
    var node = cc.instantiate(this.items);
    node.parent = this.items_parent;
    node.setSiblingIndex(0); //讓子物件顯示在最上層

    var obj = node.getComponent(WinnerItem2); //抓取WinnerItem

    this.itemlist.push(obj);
    this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
  } // update (dt) {},

});

cc._RF.pop();