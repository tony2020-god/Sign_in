
///判斷視窗角度，並保持垂直螢幕js
cc.Class({
    extends: cc.Component,

    properties: {
    
    },


    onLoad () {
        //視窗監聽
        window.addEventListener('orientationchange', function (event) {
             if (cc.view._orientation != cc.macro.ORIENTATION_AUTO) cc.view.setOrientation(cc.macro.ORIENTATION_AUTO);  //打開自動旋轉
             if (window.orientation == 180 || window.orientation == 0) cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);  //豎屏
             if (window.orientation == 90 || window.orientation == -90) cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);  //橫屏    
        });
    },
});