
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/1_redpack/遊戲模塊/Guest4_ShakeRedpacket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da8fbrVeyxAB7FB9/coyTfy', 'Guest4_ShakeRedpacket');
// 1_redpack/遊戲模塊/Guest4_ShakeRedpacket.js

"use strict";

var gameModel = require("Model"); ///玩家在遊戲中，打開陀螺儀，搖紅包判定抽獎js


cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.GetPrize = false; //是否拿到獎品

    this.shakecount = 0; //搖的次數
  },
  start: function start() {
    cc.systemEvent.setAccelerometerEnabled(true); //打開加速儀

    cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
  },
  onDeviceMotionEvent: function onDeviceMotionEvent(event) {
    var stand = 0.2;
    var x = event.acc.x.toFixed(2);
    var y = event.acc.y.toFixed(2);
    var z = event.acc.z.toFixed(2);
    this.speed = Math.abs(x - stand) + Math.abs(y - stand) + Math.abs(z - stand); //搖晃程度

    if (this.speed > 2) //搖晃程度須超過2
      {
        this.shakecount++; //搖晃次數增加1

        if (this.shakecount >= 5 && this.GetPrize == false) //搖晃次數到達5則判定有無中獎
          {
            cc.systemEvent.setAccelerometerEnabled(false); //打開加速儀

            cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
            this.GetPrize = true;
            gameModel.Lottery_Guest();
            this.scheduleOnce(function () {
              gameModel.GameStatusMessage = "end";
            }, 3);
          }
      } else this.shakecount = 0; //若中間有搖晃程度未超過2，則搖晃次數歸0

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMV9yZWRwYWNrXFzpgYrmiLLmqKHloYpcXEd1ZXN0NF9TaGFrZVJlZHBhY2tldC5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJHZXRQcml6ZSIsInNoYWtlY291bnQiLCJzdGFydCIsInN5c3RlbUV2ZW50Iiwic2V0QWNjZWxlcm9tZXRlckVuYWJsZWQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiREVWSUNFTU9USU9OIiwib25EZXZpY2VNb3Rpb25FdmVudCIsImV2ZW50Iiwic3RhbmQiLCJ4IiwiYWNjIiwidG9GaXhlZCIsInkiLCJ6Iiwic3BlZWQiLCJNYXRoIiwiYWJzIiwib2ZmIiwiTG90dGVyeV9HdWVzdCIsInNjaGVkdWxlT25jZSIsIkdhbWVTdGF0dXNNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkIsRUFFQTs7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBUUw7QUFFQUMsRUFBQUEsTUFWSyxvQkFVSztBQUNOLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEIsQ0FETSxDQUNnQjs7QUFDdEIsU0FBS0MsVUFBTCxHQUFrQixDQUFsQixDQUZNLENBRWM7QUFDdkIsR0FiSTtBQWVMQyxFQUFBQSxLQWZLLG1CQWVJO0FBQ0xQLElBQUFBLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlQyx1QkFBZixDQUF1QyxJQUF2QyxFQURLLENBQzBDOztBQUMvQ1QsSUFBQUEsRUFBRSxDQUFDUSxXQUFILENBQWVFLEVBQWYsQ0FBa0JWLEVBQUUsQ0FBQ1csV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxZQUEzQyxFQUF5RCxLQUFLQyxtQkFBOUQsRUFBbUYsSUFBbkY7QUFDSCxHQWxCSTtBQW9CTEEsRUFBQUEsbUJBcEJLLCtCQW9CZ0JDLEtBcEJoQixFQW9CdUI7QUFDcEIsUUFBSUMsS0FBSyxHQUFHLEdBQVo7QUFDQSxRQUFJQyxDQUFDLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixDQUFVRCxDQUFWLENBQVlFLE9BQVosQ0FBb0IsQ0FBcEIsQ0FBUjtBQUNBLFFBQUlDLENBQUMsR0FBR0wsS0FBSyxDQUFDRyxHQUFOLENBQVVFLENBQVYsQ0FBWUQsT0FBWixDQUFvQixDQUFwQixDQUFSO0FBQ0EsUUFBSUUsQ0FBQyxHQUFHTixLQUFLLENBQUNHLEdBQU4sQ0FBVUcsQ0FBVixDQUFZRixPQUFaLENBQW9CLENBQXBCLENBQVI7QUFDQSxTQUFLRyxLQUFMLEdBQWFDLElBQUksQ0FBQ0MsR0FBTCxDQUFTUCxDQUFDLEdBQUNELEtBQVgsSUFBb0JPLElBQUksQ0FBQ0MsR0FBTCxDQUFTSixDQUFDLEdBQUNKLEtBQVgsQ0FBcEIsR0FBd0NPLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxDQUFDLEdBQUNMLEtBQVgsQ0FBckQsQ0FMb0IsQ0FLb0Q7O0FBQ3hFLFFBQUcsS0FBS00sS0FBTCxHQUFhLENBQWhCLEVBQW9CO0FBQ3BCO0FBQ0ksYUFBS2hCLFVBQUwsR0FESixDQUN5Qjs7QUFDckIsWUFBRyxLQUFLQSxVQUFMLElBQW1CLENBQW5CLElBQXlCLEtBQUtELFFBQUwsSUFBaUIsS0FBN0MsRUFBb0Q7QUFDcEQ7QUFDSUwsWUFBQUEsRUFBRSxDQUFDUSxXQUFILENBQWVDLHVCQUFmLENBQXVDLEtBQXZDLEVBREosQ0FDb0Q7O0FBQ2hEVCxZQUFBQSxFQUFFLENBQUNRLFdBQUgsQ0FBZWlCLEdBQWYsQ0FBbUJ6QixFQUFFLENBQUNXLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsWUFBNUMsRUFBMEQsS0FBS0MsbUJBQS9ELEVBQW9GLElBQXBGO0FBQ0EsaUJBQUtULFFBQUwsR0FBZ0IsSUFBaEI7QUFDQVAsWUFBQUEsU0FBUyxDQUFDNEIsYUFBVjtBQUNBLGlCQUFLQyxZQUFMLENBQWtCLFlBQVU7QUFDdkI3QixjQUFBQSxTQUFTLENBQUM4QixpQkFBVixHQUE4QixLQUE5QjtBQUNMLGFBRkEsRUFFQyxDQUZEO0FBR0g7QUFDSixPQWJELE1BY00sS0FBS3RCLFVBQUwsR0FBa0IsQ0FBbEIsQ0FwQmMsQ0FvQk87O0FBQ2xDLEdBekNJLENBMkNMOztBQTNDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG5cclxuLy8v546p5a625Zyo6YGK5oiy5Lit77yM5omT6ZaL6ZmA6J665YSA77yM5pCW57SF5YyF5Yik5a6a5oq9542OanNcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5HZXRQcml6ZSA9IGZhbHNlOy8v5piv5ZCm5ou/5Yiw542O5ZOBXHJcbiAgICAgICAgdGhpcy5zaGFrZWNvdW50ID0gMDsvL+aQlueahOasoeaVuFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQuc2V0QWNjZWxlcm9tZXRlckVuYWJsZWQodHJ1ZSk7ICAvL+aJk+mWi+WKoOmAn+WEgFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5ERVZJQ0VNT1RJT04sIHRoaXMub25EZXZpY2VNb3Rpb25FdmVudCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGV2aWNlTW90aW9uRXZlbnQgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFuZCA9IDAuMjtcclxuICAgICAgICAgICAgdmFyIHggPSBldmVudC5hY2MueC50b0ZpeGVkKDIpOyBcclxuICAgICAgICAgICAgdmFyIHkgPSBldmVudC5hY2MueS50b0ZpeGVkKDIpOyBcclxuICAgICAgICAgICAgdmFyIHogPSBldmVudC5hY2Muei50b0ZpeGVkKDIpOyBcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IE1hdGguYWJzKHgtc3RhbmQpICsgTWF0aC5hYnMoeS1zdGFuZCkgKyBNYXRoLmFicyh6LXN0YW5kKTsgLy/mkJbmmYPnqIvluqZcclxuICAgICAgICAgICAgaWYodGhpcy5zcGVlZCA+IDIgKSAvL+aQluaZg+eoi+W6pumgiOi2hemBjjJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFrZWNvdW50ICsrIDsgLy/mkJbmmYPmrKHmlbjlop7liqAxXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNoYWtlY291bnQgPj0gNSAmJiAgdGhpcy5HZXRQcml6ZSA9PSBmYWxzZSkgLy/mkJbmmYPmrKHmlbjliLDpgZQ15YmH5Yik5a6a5pyJ54Sh5Lit542OXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzdGVtRXZlbnQuc2V0QWNjZWxlcm9tZXRlckVuYWJsZWQoZmFsc2UpOyAgLy/miZPplovliqDpgJ/lhIBcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLkRFVklDRU1PVElPTiwgdGhpcy5vbkRldmljZU1vdGlvbkV2ZW50LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdldFByaXplID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZWwuTG90dGVyeV9HdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPSBcImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICB9LDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgIHRoaXMuc2hha2Vjb3VudCA9IDA7IC8v6Iul5Lit6ZaT5pyJ5pCW5pmD56iL5bqm5pyq6LaF6YGOMu+8jOWJh+aQluaZg+asoeaVuOatuDBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19