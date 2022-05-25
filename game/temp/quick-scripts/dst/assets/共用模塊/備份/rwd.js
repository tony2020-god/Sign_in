
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/備份/rwd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70071zniddBV7x/wyEJaTsF', 'rwd');
// 共用模塊/備份/rwd.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    window.addEventListener('orientationchange', function (event) {
      cc.log("：：：：：：：：：：：：：：：" + window.orientation);
      var currentScene = cc.director.getScene().name; //当前场景

      var changeScene = currentScene.replace('V', '');

      if (cc.sys.isMobile) {
        if (cc.view._orientation != cc.macro.ORIENTATION_AUTO) {
          cc.view.setOrientation(cc.macro.ORIENTATION_AUTO);
        }

        if (window.orientation == 180 || window.orientation == 0) //竖屏   -  创建旋转提示层
          {
            cc.log("竖屏, 角度:" + window.orientation);
            cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT); //cc.director.loadScene(changeScene + 'V')

            cc.log("changeScene: " + changeScene + 'V');
            gameModel.device = 1;
          }

        if (window.orientation == 90 || window.orientation == -90) //横屏   -  移除
          {
            cc.log("横屏, 角度:" + window.orientation);
            cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE); //cc.director.loadScene(changeScene)

            cc.log("changeScene: " + changeScene);
            gameModel.device = 2;
          }
      } else {
        cc.director.loadScene(changeScene);
        gameModel.device = 2;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFzlgpnku71cXHJ3ZC5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJsb2ciLCJvcmllbnRhdGlvbiIsImN1cnJlbnRTY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJuYW1lIiwiY2hhbmdlU2NlbmUiLCJyZXBsYWNlIiwic3lzIiwiaXNNb2JpbGUiLCJ2aWV3IiwiX29yaWVudGF0aW9uIiwibWFjcm8iLCJPUklFTlRBVElPTl9BVVRPIiwic2V0T3JpZW50YXRpb24iLCJPUklFTlRBVElPTl9QT1JUUkFJVCIsImRldmljZSIsIk9SSUVOVEFUSU9OX0xBTkRTQ0FQRSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQVFMQyxFQUFBQSxNQVJLLG9CQVFLO0FBQ05DLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQTZDLFVBQVVDLEtBQVYsRUFBaUI7QUFDMURQLE1BQUFBLEVBQUUsQ0FBQ1EsR0FBSCxDQUFPLG9CQUFvQkgsTUFBTSxDQUFDSSxXQUFsQztBQUNBLFVBQUlDLFlBQVksR0FBR1YsRUFBRSxDQUFDVyxRQUFILENBQVlDLFFBQVosR0FBdUJDLElBQTFDLENBRjBELENBRUc7O0FBQzdELFVBQUlDLFdBQVcsR0FBR0osWUFBWSxDQUFDSyxPQUFiLENBQXFCLEdBQXJCLEVBQTBCLEVBQTFCLENBQWxCOztBQUNBLFVBQUlmLEVBQUUsQ0FBQ2dCLEdBQUgsQ0FBT0MsUUFBWCxFQUFvQjtBQUNoQixZQUFJakIsRUFBRSxDQUFDa0IsSUFBSCxDQUFRQyxZQUFSLElBQXdCbkIsRUFBRSxDQUFDb0IsS0FBSCxDQUFTQyxnQkFBckMsRUFBdUQ7QUFDbkRyQixVQUFBQSxFQUFFLENBQUNrQixJQUFILENBQVFJLGNBQVIsQ0FBdUJ0QixFQUFFLENBQUNvQixLQUFILENBQVNDLGdCQUFoQztBQUNIOztBQUNELFlBQUloQixNQUFNLENBQUNJLFdBQVAsSUFBc0IsR0FBdEIsSUFBNkJKLE1BQU0sQ0FBQ0ksV0FBUCxJQUFzQixDQUF2RCxFQUErRDtBQUMvRDtBQUNJVCxZQUFBQSxFQUFFLENBQUNRLEdBQUgsQ0FBTyxZQUFZSCxNQUFNLENBQUNJLFdBQTFCO0FBRUFULFlBQUFBLEVBQUUsQ0FBQ2tCLElBQUgsQ0FBUUksY0FBUixDQUF1QnRCLEVBQUUsQ0FBQ29CLEtBQUgsQ0FBU0csb0JBQWhDLEVBSEosQ0FJSTs7QUFDQXZCLFlBQUFBLEVBQUUsQ0FBQ1EsR0FBSCxDQUFPLGtCQUFrQk0sV0FBbEIsR0FBZ0MsR0FBdkM7QUFDQWhCLFlBQUFBLFNBQVMsQ0FBQzBCLE1BQVYsR0FBaUIsQ0FBakI7QUFDSDs7QUFDRCxZQUFJbkIsTUFBTSxDQUFDSSxXQUFQLElBQXNCLEVBQXRCLElBQTRCSixNQUFNLENBQUNJLFdBQVAsSUFBc0IsQ0FBQyxFQUF2RCxFQUFnRTtBQUNoRTtBQUNJVCxZQUFBQSxFQUFFLENBQUNRLEdBQUgsQ0FBTyxZQUFZSCxNQUFNLENBQUNJLFdBQTFCO0FBRUFULFlBQUFBLEVBQUUsQ0FBQ2tCLElBQUgsQ0FBUUksY0FBUixDQUF1QnRCLEVBQUUsQ0FBQ29CLEtBQUgsQ0FBU0sscUJBQWhDLEVBSEosQ0FJSTs7QUFDQXpCLFlBQUFBLEVBQUUsQ0FBQ1EsR0FBSCxDQUFPLGtCQUFrQk0sV0FBekI7QUFDQWhCLFlBQUFBLFNBQVMsQ0FBQzBCLE1BQVYsR0FBaUIsQ0FBakI7QUFDSDtBQUNKLE9BdEJELE1BdUJJO0FBQ0F4QixRQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWWUsU0FBWixDQUFzQlosV0FBdEI7QUFDQWhCLFFBQUFBLFNBQVMsQ0FBQzBCLE1BQVYsR0FBaUIsQ0FBakI7QUFDSDtBQUNKLEtBL0JEO0FBZ0NIO0FBekNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLvvJrvvJrvvJrvvJrvvJrvvJrvvJrvvJrvvJrvvJrvvJrvvJrvvJrvvJrvvJpcIiArIHdpbmRvdy5vcmllbnRhdGlvbik7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7ICAgICAgICAgICAgICAvL+W9k+WJjeWcuuaZr1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlU2NlbmUgPSBjdXJyZW50U2NlbmUucmVwbGFjZSgnVicsICcnKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc01vYmlsZSl7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2Mudmlldy5fb3JpZW50YXRpb24gIT0gY2MubWFjcm8uT1JJRU5UQVRJT05fQVVUTykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0T3JpZW50YXRpb24oY2MubWFjcm8uT1JJRU5UQVRJT05fQVVUTyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Lm9yaWVudGF0aW9uID09IDE4MCB8fCB3aW5kb3cub3JpZW50YXRpb24gPT0gMCkgICAgICAvL+erluWxjyAgIC0gIOWIm+W7uuaXi+i9rOaPkOekuuWxglxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuerluWxjywg6KeS5bqmOlwiICsgd2luZG93Lm9yaWVudGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjYy52aWV3LnNldE9yaWVudGF0aW9uKGNjLm1hY3JvLk9SSUVOVEFUSU9OX1BPUlRSQUlUKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShjaGFuZ2VTY2VuZSArICdWJylcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJjaGFuZ2VTY2VuZTogXCIgKyBjaGFuZ2VTY2VuZSArICdWJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGVsLmRldmljZT0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5vcmllbnRhdGlvbiA9PSA5MCB8fCB3aW5kb3cub3JpZW50YXRpb24gPT0gLTkwKSAgICAgIC8v5qiq5bGPICAgLSAg56e76ZmkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5qiq5bGPLCDop5LluqY6XCIgKyB3aW5kb3cub3JpZW50YXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0T3JpZW50YXRpb24oY2MubWFjcm8uT1JJRU5UQVRJT05fTEFORFNDQVBFKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShjaGFuZ2VTY2VuZSlcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJjaGFuZ2VTY2VuZTogXCIgKyBjaGFuZ2VTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGVsLmRldmljZT0yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2hhbmdlU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGVsLmRldmljZT0yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19