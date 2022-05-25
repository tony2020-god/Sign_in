"use strict";
cc._RF.push(module, '25315n6hs9I2Zo5QX1kiHB3', 'Guest_MouseManager');
// 3_whack_a_mole/遊戲模塊/Guest_MouseManager.js

"use strict";

var gameModel = require("Model"); //全域變數gameModel 不須加this就能提取


cc.Class({
  "extends": cc.Component,
  properties: {
    isLive: false,
    //代表老鼠是否被擊暈
    tag: null,
    dead: {
      "default": null,
      type: cc.SpriteFrame
    },
    bomb: {
      "default": null,
      type: cc.SpriteFrame
    },
    AddPoint: {
      "default": null,
      type: cc.Node
    },
    MinusPoint: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.HolesParent = cc.find("畫布/場景/地鼠洞");
    this.GameManager = cc.find("畫布").getComponent("Guest4_Whack_a_mole");
    this.GameScore = cc.find("畫布/場景/得分框/分數");
  },
  start: function start() {
    this.node.on("touchstart", this.Hit, this);
    this.StartPosition = this.node.position;
    this.HitAniTarget = null;
    this.delytime = 0;
    this.AddPoint_OriPos = this.AddPoint.position;
    this.MinusPoint_OriPos = this.MinusPoint.position;
  },
  Hit: function Hit() {
    if (this.isLive == true) {
      this.mouseani.stop();
      this.isLive = false;
      this.node.setPosition(-462.525, 414.31, 0);
      this.node.getComponent(cc.Sprite).spriteFrame = this.tag == 2 ? this.bomb : this.dead;

      if (this.tag < 2) //執行老鼠的算分函數刷新當前遊戲分數及打到動畫
        {
          if (this.tag == 0) {
            this.AddPoint.getComponent(cc.Label).string = 1;
            gameModel.Score += 1;
          } else {
            this.AddPoint.getComponent(cc.Label).string = 3;
            gameModel.Score += 3;
          }

          this.AddPoint.active = true;
          this.HitAniTarget = this.AddPoint;
        } else if (this.tag == 2) {
        gameModel.Score -= 1;
        gameModel.Score = gameModel.Score < 0 ? 0 : gameModel.Score; //判斷當前分數是否低於0，如果低於零則重置爲0

        this.MinusPoint.active = true;
        this.HitAniTarget = this.MinusPoint;
      }

      this.HitAnimation();
      this.GameScore.getComponent(cc.Label).string = gameModel.Score;
      this.scheduleOnce(function () {
        this.HitAniTarget.opacity = 255;
        this.AddPoint.active = false;
        this.AddPoint.position = this.AddPoint_OriPos;
        this.MinusPoint.active = false;
        this.MinusPoint.position = this.MinusPoint_OriPos;
        this.ResetHole();
      }, 0.5);
    }
  },
  GetData: function GetData(randomNodeIndex, randomSpriteFrameIndex) {
    this.randomNodeIndex = randomNodeIndex;
    if (randomSpriteFrameIndex == 2) this.delytime = 1;else this.delytime = 0.5;
  },
  //老鼠出現到消失動畫
  MouseAnimation: function MouseAnimation() {
    var _this = this;

    this.mouseani = cc.tween(this.node).by(0.5, {
      position: cc.v2(0, 520)
    }).delay(this.delytime).by(0.5, {
      position: cc.v2(0, -510)
    }).call(function () {
      _this.ResetHole();
    }).start();
  },
  //分數往上飄動畫
  HitAnimation: function HitAnimation() {
    this.hitani = cc.tween(this.HitAniTarget).to(0.5, {
      opacity: 0,
      position: cc.v2(this.HitAniTarget.position.x, 40)
    }).start();
  },
  ResetHole: function ResetHole() {
    this.node.position = this.StartPosition;
    this.GameManager.mouseIndexArr.splice(this.GameManager.mouseIndexArr.indexOf(this.randomNodeIndex, 0), 1); //已產生老鼠的陣列中，刪除目前資料的陣列位置
  } // update (dt) {},

});

cc._RF.pop();