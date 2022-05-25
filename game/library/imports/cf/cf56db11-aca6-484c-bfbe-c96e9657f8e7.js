"use strict";
cc._RF.push(module, 'cf56dsRrKZITL++yW6WV/jn', 'Ani_Opacity_Bright');
// 共用模塊/Ani_Opacity_Bright.js

"use strict";

///透明度漸層動畫js
cc.Class({
  "extends": cc.Component,
  properties: {
    Target: {
      "default": [],
      type: [cc.Node]
    }
  },
  start: function start() {
    this.OpacityAni();
  },
  OpacityAni: function OpacityAni() {
    this.node.opacity = 0;
    cc.tween(this.node).to(0.5, {
      opacity: 255
    }).start();
  } // update (dt) {},

});

cc._RF.pop();