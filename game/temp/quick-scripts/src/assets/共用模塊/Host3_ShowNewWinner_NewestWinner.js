"use strict";
cc._RF.push(module, '01c0cvG7rtNEKfeKqtPa8Hn', 'Host3_ShowNewWinner_NewestWinner');
// 共用模塊/Host3_ShowNewWinner_NewestWinner.js

"use strict";

var gameModel = require("Model");

var Host3_ShowNewWinner_Original = require("Host3_ShowNewWinner"); ///主持人及時顯示中獎玩家並更新最新兩位中獎玩家js


cc.Class({
  "extends": Host3_ShowNewWinner_Original,
  properties: {
    items3_Text: {
      "default": null,
      type: cc.Label
    },
    items4_Text: {
      "default": null,
      type: cc.Label
    },
    items3_Picture: {
      "default": null,
      type: cc.Sprite
    },
    items4_Picture: {
      "default": null,
      type: cc.Sprite
    }
  },
  onLoad: function onLoad() {
    this.itemlist = [];
    this.winlist = [];
    this.index = [];
    this.indexcount = 0;
    this.alreadyend = false;
    this.items3_Text.string = "";
    this.items3_Picture.spriteFrame = null;
    gameModel.WinnerData = this;
    gameModel.SpawnNewestWinner = true;
  },
  //傳送最新2位最新得獎人資料
  NewestWinner: function NewestWinner() {
    var self = this;
    this.items3_Picture.spriteFrame = null;
    this.items3_Text.string = gameModel.winner_name[gameModel.winner_name.length - 1]; //遠端載入: 網址轉圖片

    cc.assetManager.loadRemote(gameModel.winner_picture[gameModel.winner_name.length - 1], {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.items3_Picture.spriteFrame = picture;
      }
    }); //取得第二新得獎人資料

    if (gameModel.winner_name.length >= 2) {
      self.items4_Picture.spriteFrame = null;
      this.items4_Text.string = gameModel.winner_name[gameModel.winner_name.length - 2]; //遠端載入: 網址轉圖片

      cc.assetManager.loadRemote(gameModel.winner_picture[gameModel.winner_name.length - 2], {
        ext: '.jpg' || '.png'
      }, function (err, texture) {
        if (err) console.log("錯誤");else {
          var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

          self.items4_Picture.spriteFrame = picture;
        }
      });
    } else {
      this.items4_Text.string = "";
      this.items4_Picture.spriteFrame = null;
    }
  }
});

cc._RF.pop();