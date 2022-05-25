
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Host3_GameTimeCountDown.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'edcd5kCsdpKrZH8BJltQ2Jk', 'Host3_GameTimeCountDown');
// 共用模塊/Host3_GameTimeCountDown.js

"use strict";

var gameModel = require("Model"); ///主持人遊戲時間倒數js


cc.Class({
  "extends": cc.Component,
  properties: {
    countdownText: {
      "default": null,
      type: cc.Label
    },
    tensecond: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    if (gameModel.XMLTimeLimit == true) {
      this.countdownText.string = gameModel.gametimeCountDown;
      this.schedule(function () {
        //每1秒鐘值行一次，重複做gameModel.gametimelimit + 1次
        this.countdown();
      }, 1, gameModel.gametimelimit + 1);
    } else if (gameModel.XMLTimeLimit == false && gameModel.GameName == "redpack") {
      this.NoLimitTime = cc.find("畫布/場景/倒數燈籠/無限時");
      this.NoLimitTime.active = true;
    }
  },
  start: function start() {},
  //遊戲倒數
  countdown: function countdown() {
    if (gameModel.GameStatusMessage == "end" || gameModel.gametimeCountDown == 0) return;
    gameModel.gametimeCountDown--;
    this.countdownText.string = gameModel.gametimeCountDown;
    if (gameModel.gametimeCountDown == 10) this.currentsound = cc.audioEngine.play(this.tensecond, true, 15);

    if (gameModel.gametimeCountDown == 0) {
      cc.audioEngine.stop(this.currentsound); //gameModel.WebSocket_GameStatus_Host("end",0.1)

      gameModel.GameStatusMessage = "end";
    }
  },
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxIb3N0M19HYW1lVGltZUNvdW50RG93bi5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb3VudGRvd25UZXh0IiwidHlwZSIsIkxhYmVsIiwidGVuc2Vjb25kIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiWE1MVGltZUxpbWl0Iiwic3RyaW5nIiwiZ2FtZXRpbWVDb3VudERvd24iLCJzY2hlZHVsZSIsImNvdW50ZG93biIsImdhbWV0aW1lbGltaXQiLCJHYW1lTmFtZSIsIk5vTGltaXRUaW1lIiwiZmluZCIsImFjdGl2ZSIsInN0YXJ0IiwiR2FtZVN0YXR1c01lc3NhZ2UiLCJjdXJyZW50c291bmQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJzdG9wIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUF2QixFQUVBOzs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFRLElBREc7QUFFWEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkcsS0FEUDtBQUtSQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZGO0FBTEgsR0FIUDtBQWNMQyxFQUFBQSxNQWRLLG9CQWNLO0FBQ04sUUFBR1gsU0FBUyxDQUFDWSxZQUFWLElBQTBCLElBQTdCLEVBQ0E7QUFDSSxXQUFLTixhQUFMLENBQW1CTyxNQUFuQixHQUE0QmIsU0FBUyxDQUFDYyxpQkFBdEM7QUFDQSxXQUFLQyxRQUFMLENBQWMsWUFBVztBQUFJO0FBQzFCLGFBQUtDLFNBQUw7QUFDRixPQUZELEVBRUcsQ0FGSCxFQUVLaEIsU0FBUyxDQUFDaUIsYUFBVixHQUEwQixDQUYvQjtBQUdILEtBTkQsTUFPSyxJQUFHakIsU0FBUyxDQUFDWSxZQUFWLElBQTBCLEtBQTFCLElBQW1DWixTQUFTLENBQUNrQixRQUFWLElBQXNCLFNBQTVELEVBQ0w7QUFDSSxXQUFLQyxXQUFMLEdBQW1CakIsRUFBRSxDQUFDa0IsSUFBSCxDQUFRLGdCQUFSLENBQW5CO0FBQ0EsV0FBS0QsV0FBTCxDQUFpQkUsTUFBakIsR0FBMEIsSUFBMUI7QUFDSDtBQUNKLEdBM0JJO0FBNkJMQyxFQUFBQSxLQTdCSyxtQkE2QkksQ0FBRSxDQTdCTjtBQStCTDtBQUNBTixFQUFBQSxTQWhDSyx1QkFnQ007QUFDUCxRQUFHaEIsU0FBUyxDQUFDdUIsaUJBQVYsSUFBK0IsS0FBL0IsSUFBd0N2QixTQUFTLENBQUNjLGlCQUFWLElBQStCLENBQTFFLEVBQTZFO0FBQzdFZCxJQUFBQSxTQUFTLENBQUNjLGlCQUFWO0FBQ0EsU0FBS1IsYUFBTCxDQUFtQk8sTUFBbkIsR0FBNEJiLFNBQVMsQ0FBQ2MsaUJBQXRDO0FBQ0EsUUFBR2QsU0FBUyxDQUFDYyxpQkFBVixJQUErQixFQUFsQyxFQUFzQyxLQUFLVSxZQUFMLEdBQW9CdEIsRUFBRSxDQUFDdUIsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtqQixTQUF6QixFQUFvQyxJQUFwQyxFQUEwQyxFQUExQyxDQUFwQjs7QUFDdEMsUUFBR1QsU0FBUyxDQUFDYyxpQkFBVixJQUErQixDQUFsQyxFQUNBO0FBQ0laLE1BQUFBLEVBQUUsQ0FBQ3VCLFdBQUgsQ0FBZUUsSUFBZixDQUFvQixLQUFLSCxZQUF6QixFQURKLENBRUk7O0FBQ0F4QixNQUFBQSxTQUFTLENBQUN1QixpQkFBVixHQUE4QixLQUE5QjtBQUNIO0FBQ0osR0EzQ0k7QUE2Q0pLLEVBQUFBLE1BN0NJLGtCQTZDSUMsRUE3Q0osRUE2Q1EsQ0FBRTtBQTdDVixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpOyBcclxuXHJcbi8vL+S4u+aMgeS6uumBiuaIsuaZgumWk+WAkuaVuGpzXHJcbmNjLkNsYXNzKHsgXHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNvdW50ZG93blRleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW5zZWNvbmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBpZihnYW1lTW9kZWwuWE1MVGltZUxpbWl0ID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZG93blRleHQuc3RyaW5nID0gZ2FtZU1vZGVsLmdhbWV0aW1lQ291bnREb3duO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkgeyAgIC8v5q+PMeenkumQmOWAvOihjOS4gOasoe+8jOmHjeikh+WBmmdhbWVNb2RlbC5nYW1ldGltZWxpbWl0ICsgMeasoVxyXG4gICAgICAgICAgICAgICB0aGlzLmNvdW50ZG93bigpO1xyXG4gICAgICAgICAgICB9LCAxLGdhbWVNb2RlbC5nYW1ldGltZWxpbWl0ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZ2FtZU1vZGVsLlhNTFRpbWVMaW1pdCA9PSBmYWxzZSAmJiBnYW1lTW9kZWwuR2FtZU5hbWUgPT0gXCJyZWRwYWNrXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLk5vTGltaXRUaW1lID0gY2MuZmluZChcIueVq+W4gy/loLTmma8v5YCS5pW454eI57GgL+eEoemZkOaZglwiKSBcclxuICAgICAgICAgICAgdGhpcy5Ob0xpbWl0VGltZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge30sXHJcbiAgICBcclxuICAgIC8v6YGK5oiy5YCS5pW4XHJcbiAgICBjb3VudGRvd24oKXtcclxuICAgICAgICBpZihnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPT0gXCJlbmRcIiB8fCBnYW1lTW9kZWwuZ2FtZXRpbWVDb3VudERvd24gPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGdhbWVNb2RlbC5nYW1ldGltZUNvdW50RG93bi0tO1xyXG4gICAgICAgIHRoaXMuY291bnRkb3duVGV4dC5zdHJpbmcgPSBnYW1lTW9kZWwuZ2FtZXRpbWVDb3VudERvd247XHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLmdhbWV0aW1lQ291bnREb3duID09IDEwKSB0aGlzLmN1cnJlbnRzb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy50ZW5zZWNvbmQsIHRydWUsIDE1KTtcclxuICAgICAgICBpZihnYW1lTW9kZWwuZ2FtZXRpbWVDb3VudERvd24gPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5jdXJyZW50c291bmQpXHJcbiAgICAgICAgICAgIC8vZ2FtZU1vZGVsLldlYlNvY2tldF9HYW1lU3RhdHVzX0hvc3QoXCJlbmRcIiwwLjEpXHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9IFwiZW5kXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgICB1cGRhdGUgKGR0KSB7fSxcclxufSk7Il19