
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/5_lottery/程式/prizeInformation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '409dcppUFVAl6bepj90o461', 'prizeInformation');
// 5_lottery/程式/prizeInformation.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  setinformation: function setinformation(i) {
    var self = this;
    cc.assetManager.loadRemote(gameModel.Prizestack_picture[i], {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.node.getComponent(cc.Sprite).spriteFrame = picture;
      }
    });
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcNV9sb3R0ZXJ5XFznqIvlvI9cXHByaXplSW5mb3JtYXRpb24uanMiXSwibmFtZXMiOlsiZ2FtZU1vZGVsIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJzZXRpbmZvcm1hdGlvbiIsImkiLCJzZWxmIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsIlByaXplc3RhY2tfcGljdHVyZSIsImV4dCIsImVyciIsInRleHR1cmUiLCJjb25zb2xlIiwibG9nIiwicGljdHVyZSIsIlNwcml0ZUZyYW1lIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkI7O0FBR0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQTtBQUVBQyxFQUFBQSxLQVhLLG1CQVdJLENBRVIsQ0FiSTtBQWdCTEMsRUFBQUEsY0FoQkssMEJBZ0JVQyxDQWhCVixFQWdCWTtBQUNiLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQ1EsWUFBSCxDQUFnQkMsVUFBaEIsQ0FBMkJYLFNBQVMsQ0FBQ1ksa0JBQVYsQ0FBNkJKLENBQTdCLENBQTNCLEVBQTJEO0FBQUNLLE1BQUFBLEdBQUcsRUFBRSxVQUFRO0FBQWQsS0FBM0QsRUFBaUYsVUFBU0MsR0FBVCxFQUFhQyxPQUFiLEVBQ2pGO0FBQ0ksVUFBR0QsR0FBSCxFQUFRRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQVIsS0FFQTtBQUNJLFlBQUlDLE9BQU8sR0FBRyxJQUFJaEIsRUFBRSxDQUFDaUIsV0FBUCxDQUFtQkosT0FBbkIsQ0FBZCxDQURKLENBQytDOztBQUMzQ04sUUFBQUEsSUFBSSxDQUFDVyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJuQixFQUFFLENBQUNvQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBZ0RMLE9BQWhEO0FBQ0g7QUFDSixLQVJEO0FBU0gsR0EzQkksQ0E2Qkw7O0FBN0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcblxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBcclxuICAgIHNldGluZm9ybWF0aW9uKGkpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShnYW1lTW9kZWwuUHJpemVzdGFja19waWN0dXJlW2ldLHtleHQgOicuanBnJ3x8Jy5wbmcnfSxmdW5jdGlvbihlcnIsdGV4dHVyZSlcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBpZihlcnIpIGNvbnNvbGUubG9nKFwi6Yyv6KqkXCIpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBpY3R1cmUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7IC8vdGV4dHVyZSDovYkgU3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHBpY3R1cmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=