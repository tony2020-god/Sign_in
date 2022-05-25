"use strict";
cc._RF.push(module, '89209mb7B5E7opQmXjzQ00M', 'Ani_UPandDOWN');
// 共用模塊/Ani_UPandDOWN.js

"use strict";

///動畫控制js
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    cc.tween(this.node).repeatForever(cc.tween().by(0.8, {
      position: cc.v2(0, 80)
    }).by(0.8, {
      position: cc.v2(0, -80)
    })).start();
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();