"use strict";
cc._RF.push(module, 'd675baYGPBGOqmNjozupxfo', 'Host3_RankRecordItem');
// 4._Q&A/程式碼/Host3_RankRecordItem.js

"use strict";

var gameModel = require("Model"); ///即時中獎玩家資訊物件js


cc.Class({
  "extends": cc.Component,
  properties: {
    playerName: {
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
    },
    playerAvatar: {
      "default": null,
      type: cc.Sprite
    },
    Rank: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  updateInfo: function updateInfo(i) {
    var self = this;
    this.playerName.string = gameModel.winner_name[i];
    this.Score.string = gameModel.winner_score[i];
    this.Time.string = gameModel.winner_Taketime;
    if (i > 3) this.Rank.string = i + 1; //遠端載入: 網址轉圖片

    cc.assetManager.loadRemote(gameModel.winner_picture[i], {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.playerAvatar.spriteFrame = picture;
      }
    });
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();