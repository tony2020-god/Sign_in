
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Guest_rwdPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxHdWVzdF9yd2RQbGF5ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ2aWV3IiwiX29yaWVudGF0aW9uIiwibWFjcm8iLCJPUklFTlRBVElPTl9BVVRPIiwic2V0T3JpZW50YXRpb24iLCJvcmllbnRhdGlvbiIsIk9SSUVOVEFUSU9OX1BPUlRSQUlUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBUUxDLEVBQUFBLE1BUkssb0JBUUs7QUFDTjtBQUNBQyxJQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLG1CQUF4QixFQUE2QyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3pELFVBQUlQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxZQUFSLElBQXdCVCxFQUFFLENBQUNVLEtBQUgsQ0FBU0MsZ0JBQXJDLEVBQXVEWCxFQUFFLENBQUNRLElBQUgsQ0FBUUksY0FBUixDQUF1QlosRUFBRSxDQUFDVSxLQUFILENBQVNDLGdCQUFoQyxFQURFLENBQ2tEOztBQUMzRyxVQUFJTixNQUFNLENBQUNRLFdBQVAsSUFBc0IsR0FBdEIsSUFBNkJSLE1BQU0sQ0FBQ1EsV0FBUCxJQUFzQixDQUF2RCxFQUEwRGIsRUFBRSxDQUFDUSxJQUFILENBQVFJLGNBQVIsQ0FBdUJaLEVBQUUsQ0FBQ1UsS0FBSCxDQUFTSSxvQkFBaEMsRUFGRCxDQUV5RDs7QUFDbEgsVUFBSVQsTUFBTSxDQUFDUSxXQUFQLElBQXNCLEVBQXRCLElBQTRCUixNQUFNLENBQUNRLFdBQVAsSUFBc0IsQ0FBQyxFQUF2RCxFQUEyRGIsRUFBRSxDQUFDUSxJQUFILENBQVFJLGNBQVIsQ0FBdUJaLEVBQUUsQ0FBQ1UsS0FBSCxDQUFTSSxvQkFBaEMsRUFIRixDQUcwRDtBQUN2SCxLQUpEO0FBS0g7QUFmSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8v5Yik5pa36KaW56qX6KeS5bqm77yM5Lim5L+d5oyB5Z6C55u06J6i5bmVanNcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvL+imlueql+ebo+iBvVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgaWYgKGNjLnZpZXcuX29yaWVudGF0aW9uICE9IGNjLm1hY3JvLk9SSUVOVEFUSU9OX0FVVE8pIGNjLnZpZXcuc2V0T3JpZW50YXRpb24oY2MubWFjcm8uT1JJRU5UQVRJT05fQVVUTyk7ICAvL+aJk+mWi+iHquWLleaXi+i9iVxyXG4gICAgICAgICAgICAgaWYgKHdpbmRvdy5vcmllbnRhdGlvbiA9PSAxODAgfHwgd2luZG93Lm9yaWVudGF0aW9uID09IDApIGNjLnZpZXcuc2V0T3JpZW50YXRpb24oY2MubWFjcm8uT1JJRU5UQVRJT05fUE9SVFJBSVQpOyAgLy/osY7lsY9cclxuICAgICAgICAgICAgIGlmICh3aW5kb3cub3JpZW50YXRpb24gPT0gOTAgfHwgd2luZG93Lm9yaWVudGF0aW9uID09IC05MCkgY2Mudmlldy5zZXRPcmllbnRhdGlvbihjYy5tYWNyby5PUklFTlRBVElPTl9QT1JUUkFJVCk7ICAvL+apq+WxjyAgICBcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pOyJdfQ==