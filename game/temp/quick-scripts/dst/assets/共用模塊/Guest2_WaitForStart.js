
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Guest2_WaitForStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6dc05RqXWxMa4vuAhRC6dsu', 'Guest2_WaitForStart');
// 共用模塊/Guest2_WaitForStart.js

"use strict";

var gameModel = require("Model"); ///玩家等待開始並取得遊戲資訊js


cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    this.waitonesecond = false;
    this.scheduleOnce(function () {
      this.waitonesecond = true;
    }, 1.1);
  },
  update: function update(dt) {
    if ((gameModel.GameStatusMessage == "start" || gameModel.GameStatusMessage == "gaming") && this.waitonesecond == true) {
      if (gameModel.AlreadyPlayed == 0) cc.director.loadScene("Guest3_CountDown" + gameModel.BackGround_Theme);else cc.director.loadScene("Guest5_Prize");
    } else if (gameModel.GameStatusMessage == "end" && this.waitonesecond == true) cc.director.loadScene("Guest5_Prize" + gameModel.BackGround_Theme);else if (gameModel.GameStatusMessage == "close" && this.waitonesecond == true) {
      gameModel.HostWindow = "close";
      cc.director.loadScene("Guest1_JoinGame" + gameModel.BackGround_Theme);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxHdWVzdDJfV2FpdEZvclN0YXJ0LmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwid2FpdG9uZXNlY29uZCIsInNjaGVkdWxlT25jZSIsInVwZGF0ZSIsImR0IiwiR2FtZVN0YXR1c01lc3NhZ2UiLCJBbHJlYWR5UGxheWVkIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJCYWNrR3JvdW5kX1RoZW1lIiwiSG9zdFdpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCLEVBRUE7OztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxLQVBLLG1CQU9JO0FBQ1AsU0FBS0MsYUFBTCxHQUFxQixLQUFyQjtBQUNBLFNBQUtDLFlBQUwsQ0FBa0IsWUFBVztBQUMzQixXQUFLRCxhQUFMLEdBQXFCLElBQXJCO0FBQ0gsS0FGQyxFQUVDLEdBRkQ7QUFHRCxHQVpJO0FBY0xFLEVBQUFBLE1BZEssa0JBY0dDLEVBZEgsRUFjTztBQUNQLFFBQUcsQ0FBQ1YsU0FBUyxDQUFDVyxpQkFBVixJQUErQixPQUEvQixJQUEwQ1gsU0FBUyxDQUFDVyxpQkFBVixJQUErQixRQUExRSxLQUF1RixLQUFLSixhQUFMLElBQXNCLElBQWhILEVBQ0E7QUFDRSxVQUFHUCxTQUFTLENBQUNZLGFBQVYsSUFBMkIsQ0FBOUIsRUFBaUNWLEVBQUUsQ0FBQ1csUUFBSCxDQUFZQyxTQUFaLENBQXNCLHFCQUFvQmQsU0FBUyxDQUFDZSxnQkFBcEQsRUFBakMsS0FDS2IsRUFBRSxDQUFDVyxRQUFILENBQVlDLFNBQVosQ0FBc0IsY0FBdEI7QUFDTixLQUpELE1BS0ssSUFBSWQsU0FBUyxDQUFDVyxpQkFBVixJQUErQixLQUEvQixJQUF3QyxLQUFLSixhQUFMLElBQXNCLElBQWxFLEVBQXdFTCxFQUFFLENBQUNXLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixpQkFBZ0JkLFNBQVMsQ0FBQ2UsZ0JBQWhELEVBQXhFLEtBQ0EsSUFBSWYsU0FBUyxDQUFDVyxpQkFBVixJQUErQixPQUEvQixJQUEwQyxLQUFLSixhQUFMLElBQXNCLElBQXBFLEVBQ0w7QUFDS1AsTUFBQUEsU0FBUyxDQUFDZ0IsVUFBVixHQUF1QixPQUF2QjtBQUNBZCxNQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixvQkFBbUJkLFNBQVMsQ0FBQ2UsZ0JBQW5EO0FBQ0o7QUFDTDtBQTFCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG5cclxuLy8v546p5a62562J5b6F6ZaL5aeL5Lim5Y+W5b6X6YGK5oiy6LOH6KiKanNcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgIHRoaXMud2FpdG9uZXNlY29uZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgdGhpcy53YWl0b25lc2Vjb25kID0gdHJ1ZTtcclxuICAgIH0sIDEuMSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAgaWYoKGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9PSBcInN0YXJ0XCIgfHwgZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwiZ2FtaW5nXCIpICYmIHRoaXMud2FpdG9uZXNlY29uZCA9PSB0cnVlIClcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlmKGdhbWVNb2RlbC5BbHJlYWR5UGxheWVkID09IDApIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkd1ZXN0M19Db3VudERvd25cIisgZ2FtZU1vZGVsLkJhY2tHcm91bmRfVGhlbWUpO1xyXG4gICAgICAgICAgIGVsc2UgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR3Vlc3Q1X1ByaXplXCIpO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgICBlbHNlIGlmIChnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPT0gXCJlbmRcIiAmJiB0aGlzLndhaXRvbmVzZWNvbmQgPT0gdHJ1ZSkgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR3Vlc3Q1X1ByaXplXCIrIGdhbWVNb2RlbC5CYWNrR3JvdW5kX1RoZW1lKTtcclxuICAgICAgICAgZWxzZSBpZiAoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwiY2xvc2VcIiAmJiB0aGlzLndhaXRvbmVzZWNvbmQgPT0gdHJ1ZSkgXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgICBnYW1lTW9kZWwuSG9zdFdpbmRvdyA9IFwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkd1ZXN0MV9Kb2luR2FtZVwiKyBnYW1lTW9kZWwuQmFja0dyb3VuZF9UaGVtZSk7XHJcbiAgICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=