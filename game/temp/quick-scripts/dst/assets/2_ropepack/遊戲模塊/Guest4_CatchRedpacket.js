
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/2_ropepack/遊戲模塊/Guest4_CatchRedpacket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bcb12aXiNtNJqC5IhrlOMRA', 'Guest4_CatchRedpacket');
// 2_ropepack/遊戲模塊/Guest4_CatchRedpacket.js

"use strict";

var gameModel = require("Model"); //全域變數gameModel 不須加this就能提取
///玩家在遊戲中套紅包判定抽獎js


cc.Class({
  "extends": cc.Component,
  properties: {
    aniRedPacket: {
      "default": null,
      type: cc.Node
    },
    aniButton: {
      "default": null,
      type: cc.Node
    },
    aniHand: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;
  },
  start: function start() {
    this.RopeCount = 0;
    this.ButtunClickCheck = 0;
    this.aniButtunStates = "None"; //每1秒鐘檢查是否有持續按按鈕

    this.schedule(this.CheckCountinuePress, 0.5);
  },
  //按下套紅包按鈕
  Rope: function Rope() {
    if (this.aniButtunStates == "None") //第一次點擊時，變更按鈕、紅包動畫和手指動畫的速度
      {
        this.aniButtunStates = "開始套紅包";
        this.aniButton.getComponent(sp.Skeleton).setAnimation(0, "animation3", true);
        this.aniHand.getComponent(sp.Skeleton).timeScale = 2.5;
        this.aniRedPacket.getComponent(sp.Skeleton).setAnimation(0, "catch1-2", false);
        this.aniRedPacket.getComponent(sp.Skeleton).addAnimation(0, "catch1-3", true);
      } else if (this.aniButtunStates == "開始套紅包" && this.RopeCount <= 20) //點擊到指定次數時判斷有無中獎
      {
        this.RopeCount++;

        if (this.RopeCount == 20) {
          this.unschedule(this.CheckCountinuePress); //取消計時器

          gameModel.Lottery_Guest();
          this.scheduleOnce(function () {
            if (gameModel.result == "thanks") this.aniRedPacket.getComponent(sp.Skeleton).setAnimation(0, "catch1-5", false); //沒中獎切換到飛走動畫
            else this.aniRedPacket.getComponent(sp.Skeleton).setAnimation(0, "catch1-4", false); //中獎切換到拉走動畫

            this.scheduleOnce(function () {
              gameModel.GameStatusMessage = "end";
            }, 1.5);
          }, 3);
        }
      }
  },
  //若太久沒按下套紅包按鈕，計數會歸0
  CheckCountinuePress: function CheckCountinuePress() {
    if (this.RopeCount != this.ButtunClickCheck) this.ButtunClickCheck = this.RopeCount;else {
      this.RopeCount = 0;
      this.ButtunClickCheck = 0;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcMl9yb3BlcGFja1xc6YGK5oiy5qih5aGKXFxHdWVzdDRfQ2F0Y2hSZWRwYWNrZXQuanMiXSwibmFtZXMiOlsiZ2FtZU1vZGVsIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYW5pUmVkUGFja2V0IiwidHlwZSIsIk5vZGUiLCJhbmlCdXR0b24iLCJhbmlIYW5kIiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJzdGFydCIsIlJvcGVDb3VudCIsIkJ1dHR1bkNsaWNrQ2hlY2siLCJhbmlCdXR0dW5TdGF0ZXMiLCJzY2hlZHVsZSIsIkNoZWNrQ291bnRpbnVlUHJlc3MiLCJSb3BlIiwiZ2V0Q29tcG9uZW50Iiwic3AiLCJTa2VsZXRvbiIsInNldEFuaW1hdGlvbiIsInRpbWVTY2FsZSIsImFkZEFuaW1hdGlvbiIsInVuc2NoZWR1bGUiLCJMb3R0ZXJ5X0d1ZXN0Iiwic2NoZWR1bGVPbmNlIiwicmVzdWx0IiwiR2FtZVN0YXR1c01lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUF2QixFQUFrQztBQUVsQzs7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxZQUFZLEVBQUM7QUFDWCxpQkFBUyxJQURFO0FBRVhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBREw7QUFNUkMsSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVMsSUFESDtBQUVORixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQU5GO0FBV1JFLElBQUFBLE9BQU8sRUFBQztBQUNKLGlCQUFTLElBREw7QUFFSkgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkw7QUFYQSxHQUhQO0FBcUJMRyxFQUFBQSxNQXJCSyxvQkFxQks7QUFDTlQsSUFBQUEsRUFBRSxDQUFDVSxRQUFILENBQVlDLGlCQUFaLEdBQWdDQyxPQUFoQyxHQUEwQyxJQUExQztBQUNILEdBdkJJO0FBeUJMQyxFQUFBQSxLQXpCSyxtQkF5Qkk7QUFDTCxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsQ0FBeEI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLE1BQXZCLENBSEssQ0FJTDs7QUFDQSxTQUFLQyxRQUFMLENBQWMsS0FBS0MsbUJBQW5CLEVBQXdDLEdBQXhDO0FBQ0gsR0EvQkk7QUFpQ0w7QUFDQUMsRUFBQUEsSUFsQ0ssa0JBa0NDO0FBQ0YsUUFBRyxLQUFLSCxlQUFMLElBQXdCLE1BQTNCLEVBQW1DO0FBQ25DO0FBQ0ksYUFBS0EsZUFBTCxHQUF1QixPQUF2QjtBQUNBLGFBQUtULFNBQUwsQ0FBZWEsWUFBZixDQUE0QkMsRUFBRSxDQUFDQyxRQUEvQixFQUF5Q0MsWUFBekMsQ0FBc0QsQ0FBdEQsRUFBd0QsWUFBeEQsRUFBcUUsSUFBckU7QUFDQSxhQUFLZixPQUFMLENBQWFZLFlBQWIsQ0FBMEJDLEVBQUUsQ0FBQ0MsUUFBN0IsRUFBdUNFLFNBQXZDLEdBQW1ELEdBQW5EO0FBQ0EsYUFBS3BCLFlBQUwsQ0FBa0JnQixZQUFsQixDQUErQkMsRUFBRSxDQUFDQyxRQUFsQyxFQUE0Q0MsWUFBNUMsQ0FBeUQsQ0FBekQsRUFBMkQsVUFBM0QsRUFBc0UsS0FBdEU7QUFDQSxhQUFLbkIsWUFBTCxDQUFrQmdCLFlBQWxCLENBQStCQyxFQUFFLENBQUNDLFFBQWxDLEVBQTRDRyxZQUE1QyxDQUF5RCxDQUF6RCxFQUEyRCxVQUEzRCxFQUFzRSxJQUF0RTtBQUNILE9BUEQsTUFRSyxJQUFHLEtBQUtULGVBQUwsSUFBd0IsT0FBeEIsSUFBbUMsS0FBS0YsU0FBTCxJQUFrQixFQUF4RCxFQUE0RDtBQUNqRTtBQUNJLGFBQUtBLFNBQUw7O0FBQ0EsWUFBRyxLQUFLQSxTQUFMLElBQWtCLEVBQXJCLEVBQ0E7QUFDSSxlQUFLWSxVQUFMLENBQWdCLEtBQUtSLG1CQUFyQixFQURKLENBQytDOztBQUMzQ3BCLFVBQUFBLFNBQVMsQ0FBQzZCLGFBQVY7QUFDQSxlQUFLQyxZQUFMLENBQWtCLFlBQVU7QUFDekIsZ0JBQUc5QixTQUFTLENBQUMrQixNQUFWLElBQW9CLFFBQXZCLEVBQWlDLEtBQUt6QixZQUFMLENBQWtCZ0IsWUFBbEIsQ0FBK0JDLEVBQUUsQ0FBQ0MsUUFBbEMsRUFBNENDLFlBQTVDLENBQXlELENBQXpELEVBQTJELFVBQTNELEVBQXNFLEtBQXRFLEVBQWpDLENBQStHO0FBQS9HLGlCQUNLLEtBQUtuQixZQUFMLENBQWtCZ0IsWUFBbEIsQ0FBK0JDLEVBQUUsQ0FBQ0MsUUFBbEMsRUFBNENDLFlBQTVDLENBQXlELENBQXpELEVBQTJELFVBQTNELEVBQXNFLEtBQXRFLEVBRm9CLENBRTBEOztBQUNuRixpQkFBS0ssWUFBTCxDQUFrQixZQUFVO0FBQzNCOUIsY0FBQUEsU0FBUyxDQUFDZ0MsaUJBQVYsR0FBOEIsS0FBOUI7QUFDQSxhQUZELEVBRUUsR0FGRjtBQUdGLFdBTkQsRUFNRSxDQU5GO0FBT0g7QUFDSjtBQUNKLEdBM0RJO0FBNkRMO0FBQ0FaLEVBQUFBLG1CQTlESyxpQ0E4RGdCO0FBQ2xCLFFBQUcsS0FBS0osU0FBTCxJQUFrQixLQUFLQyxnQkFBMUIsRUFBNEMsS0FBS0EsZ0JBQUwsR0FBd0IsS0FBS0QsU0FBN0IsQ0FBNUMsS0FFQTtBQUNDLFdBQUtBLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxXQUFLQyxnQkFBTCxHQUF3QixDQUF4QjtBQUNBO0FBQ0gsR0FyRUksQ0F1RUw7O0FBdkVLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7IC8v5YWo5Z+f6K6K5pW4Z2FtZU1vZGVsIOS4jemgiOWKoHRoaXPlsLHog73mj5Dlj5ZcclxuXHJcbi8vL+eOqeWutuWcqOmBiuaIsuS4reWll+e0heWMheWIpOWumuaKveeNjmpzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYW5pUmVkUGFja2V0OntcclxuICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYW5pQnV0dG9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFuaUhhbmQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuUm9wZUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLkJ1dHR1bkNsaWNrQ2hlY2sgPSAwO1xyXG4gICAgICAgIHRoaXMuYW5pQnV0dHVuU3RhdGVzID0gXCJOb25lXCI7XHJcbiAgICAgICAgLy/mr48x56eS6ZCY5qqi5p+l5piv5ZCm5pyJ5oyB57qM5oyJ5oyJ6YiVXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLkNoZWNrQ291bnRpbnVlUHJlc3MsIDAuNSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5oyJ5LiL5aWX57SF5YyF5oyJ6YiVXHJcbiAgICBSb3BlKCl7XHJcbiAgICAgICAgaWYodGhpcy5hbmlCdXR0dW5TdGF0ZXMgPT0gXCJOb25lXCIpIC8v56ys5LiA5qyh6bue5pOK5pmC77yM6K6K5pu05oyJ6YiV44CB57SF5YyF5YuV55Wr5ZKM5omL5oyH5YuV55Wr55qE6YCf5bqmXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmFuaUJ1dHR1blN0YXRlcyA9IFwi6ZaL5aeL5aWX57SF5YyFXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pQnV0dG9uLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCJhbmltYXRpb24zXCIsdHJ1ZSk7ICAgXHJcbiAgICAgICAgICAgIHRoaXMuYW5pSGFuZC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnRpbWVTY2FsZSA9IDIuNTtcclxuICAgICAgICAgICAgdGhpcy5hbmlSZWRQYWNrZXQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImNhdGNoMS0yXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaVJlZFBhY2tldC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmFkZEFuaW1hdGlvbigwLFwiY2F0Y2gxLTNcIix0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmFuaUJ1dHR1blN0YXRlcyA9PSBcIumWi+Wni+Wll+e0heWMhVwiICYmIHRoaXMuUm9wZUNvdW50IDw9IDIwKSAvL+m7nuaTiuWIsOaMh+WumuasoeaVuOaZguWIpOaWt+acieeEoeS4reeNjlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Sb3BlQ291bnQgKysgO1xyXG4gICAgICAgICAgICBpZih0aGlzLlJvcGVDb3VudCA9PSAyMCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLkNoZWNrQ291bnRpbnVlUHJlc3MpOyAvL+WPlua2iOioiOaZguWZqFxyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGVsLkxvdHRlcnlfR3Vlc3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICBpZihnYW1lTW9kZWwucmVzdWx0ID09IFwidGhhbmtzXCIpIHRoaXMuYW5pUmVkUGFja2V0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCJjYXRjaDEtNVwiLGZhbHNlKTsgLy/mspLkuK3njY7liIfmj5vliLDpo5votbDli5XnlatcclxuICAgICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5hbmlSZWRQYWNrZXQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImNhdGNoMS00XCIsZmFsc2UpOyAvL+S4reeNjuWIh+aPm+WIsOaLiei1sOWLleeVq1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPSBcImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICB9LDEuNSk7XHJcbiAgICAgICAgICAgICAgICB9LDMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvL+iLpeWkquS5heaykuaMieS4i+Wll+e0heWMheaMiemIle+8jOioiOaVuOacg+atuDBcclxuICAgIENoZWNrQ291bnRpbnVlUHJlc3MoKXtcclxuICAgICAgIGlmKHRoaXMuUm9wZUNvdW50ICE9IHRoaXMuQnV0dHVuQ2xpY2tDaGVjaykgdGhpcy5CdXR0dW5DbGlja0NoZWNrID0gdGhpcy5Sb3BlQ291bnQ7XHJcbiAgICAgICBlbHNlIFxyXG4gICAgICAge1xyXG4gICAgICAgIHRoaXMuUm9wZUNvdW50ID0gMFxyXG4gICAgICAgIHRoaXMuQnV0dHVuQ2xpY2tDaGVjayA9IDBcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==