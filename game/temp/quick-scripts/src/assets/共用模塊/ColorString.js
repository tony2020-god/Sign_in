"use strict";
cc._RF.push(module, 'ad2c1/DCDFPRYkAq8aXpcf/', 'ColorString');
// 共用模塊/ColorString.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  //調色盤
  colorOfString: function colorOfString(value) {
    if (value == null || value.length != 7) {
      return null;
    }

    var color = value.toLowerCase();

    if (color.charAt(0) != "#") {
      return;
    }

    color = color.slice(1);
    var r = parseInt(color[0] + color[1], 16);
    var g = parseInt(color[2] + color[3], 16);
    var b = parseInt(color[4] + color[5], 16);
    return new cc.Color(r, g, b, 255);
  } // update (dt) {},

});

cc._RF.pop();