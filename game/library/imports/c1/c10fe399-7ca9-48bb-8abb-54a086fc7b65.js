"use strict";
cc._RF.push(module, 'c10feOZfKlIu4q7VKCG/Htl', 'Host1_ComboBox');
// 5_lottery/程式/Host1_ComboBox.js

"use strict";

var gameModel = require("Model");

var weel_js = require("weel");

var jiugongge_js = require("Jiugongge");

cc.Class({
  "extends": cc.Component,
  properties: {
    FirstOption: {
      "default": null,
      type: cc.Button
    },
    MainMode: {
      "default": null,
      type: cc.Label
    },
    Rule: {
      "default": null,
      type: cc.Label
    },
    OptionsBox: {
      "default": null,
      type: cc.Node
    },
    Winner_scroll: {
      "default": null,
      type: cc.Node
    },
    Prize_scroll: {
      "default": null,
      type: cc.Node
    },
    Mainobject: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    if (gameModel.game_type == "turntable") this.Weel_js = cc.find("畫布").getComponent(weel_js);else if (gameModel.game_type == "jiugongge") this.jiugongge_js = cc.find("畫布").getComponent(jiugongge_js);
  },
  start: function start() {
    gameModel.WebSocket_GameStatus_Host("close", 0.1);
    this.ChooseColor = this.FirstOption.normalColor; //淺藍色

    this.NormalColor = this.FirstOption.disabledColor; //灰色

    this.HoverColor = this.FirstOption.pressedColor; //白色

    this.lastChoose = this.FirstOption;
    this.BoxStatus = "close";
  },
  OptionBoxFuc: function OptionBoxFuc(event, customEventData) {
    if (customEventData == "controlBox") this.schedule(this.ProgressBar, 0.01);else {
      if (customEventData.includes("幸運輪盤")) {
        this.Weel_js.wheelState = 0;
        this.Mainobject.stopAllActions();
        this.Mainobject.rotation = 0;
      } else this.jiugongge_js.ClearStatus();

      gameModel.mode = customEventData.includes("順序參與") ? "order" : "simultaneous";
      this.Winner_scroll.active = customEventData.includes("順序參與") ? false : true;
      this.Prize_scroll.active = customEventData.includes("順序參與") ? true : false;

      if (customEventData.includes("同時參與")) {
        if (customEventData.includes("幸運輪盤")) this.aniSlow_In();else this.jiugongge_js.TogetherAni();
        gameModel.WebSocket_GameStatus_Host("open", 0.1);
      } else gameModel.WebSocket_GameStatus_Host("close", 0.1);

      this.MainMode.string = customEventData;
      this.Rule.string = customEventData.includes("順序參與") ? "參加者依序上台抽獎，並會在現場發放獎品" : "參加者掃QRC，會發放抽獎次數，將在各自的手機上抽獎";
      this.lastChoose.normalColor = this.NormalColor;
      this.lastChoose.hoverColor = this.HoverColor;
      event.target.getComponent(cc.Button).normalColor = event.target.getComponent(cc.Button).hoverColor = this.ChooseColor;
      this.lastChoose = event.target.getComponent(cc.Button);
      this.schedule(this.ProgressBar, 0.01);
    }
  },
  ProgressBar: function ProgressBar() {
    if (this.BoxStatus == "close") {
      this.OptionsBox.active = true;
      this.OptionsBox.getComponent(cc.Sprite).fillRange -= 0.2;

      if (this.OptionsBox.getComponent(cc.Sprite).fillRange <= -1) {
        this.unschedule(this.ProgressBar);
        this.BoxStatus = "open";
      }
    } else {
      this.OptionsBox.getComponent(cc.Sprite).fillRange += 0.2;

      if (this.OptionsBox.getComponent(cc.Sprite).fillRange >= 0) {
        this.unschedule(this.ProgressBar);
        this.OptionsBox.active = false;
        this.BoxStatus = "close";
      }
    }
  },
  aniSlow_In: function aniSlow_In() {
    //緩入動畫
    var ani_SlowIn = cc.tween(this.Mainobject).by(10, {
      angle: 360
    }, {
      easing: 'sineIn'
    }); //持續旋轉動畫

    var KeepTurn = cc.tween(this.Mainobject).by(5, {
      angle: 360
    }).repeatForever();
    this.ani_wheelState1 = cc.tween(this.Mainobject).then(ani_SlowIn).then(KeepTurn).start();
  } // update (dt) {},

});

cc._RF.pop();