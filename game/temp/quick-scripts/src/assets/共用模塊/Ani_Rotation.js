"use strict";
cc._RF.push(module, '83d5dDiahZKOLzPToLJTyQw', 'Ani_Rotation');
// 共用模塊/Ani_Rotation.js

"use strict";

///動畫控制js
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    cc.tween(this.node).repeatForever(cc.tween().by(15, {
      angle: 360
    })).start();
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();