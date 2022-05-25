"use strict";
cc._RF.push(module, '47ce2xxDsBPgqV10snO3sxM', 'Guest_rwdPlayer');
// 共用模塊/Guest_rwdPlayer.js

"use strict";

///判斷視窗角度，並保持垂直螢幕js
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    //視窗監聽
    window.addEventListener('orientationchange', function (event) {
      if (cc.view._orientation != cc.macro.ORIENTATION_AUTO) cc.view.setOrientation(cc.macro.ORIENTATION_AUTO); //打開自動旋轉

      if (window.orientation == 180 || window.orientation == 0) cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT); //豎屏

      if (window.orientation == 90 || window.orientation == -90) cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT); //橫屏    
    });
  }
});

cc._RF.pop();