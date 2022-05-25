
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/3_whack_a_mole/遊戲模塊/Guest_MouseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25315n6hs9I2Zo5QX1kiHB3', 'Guest_MouseManager');
// 3_whack_a_mole/遊戲模塊/Guest_MouseManager.js

"use strict";

var gameModel = require("Model"); //全域變數gameModel 不須加this就能提取


cc.Class({
  "extends": cc.Component,
  properties: {
    isLive: false,
    //代表老鼠是否被擊暈
    tag: null,
    dead: {
      "default": null,
      type: cc.SpriteFrame
    },
    bomb: {
      "default": null,
      type: cc.SpriteFrame
    },
    AddPoint: {
      "default": null,
      type: cc.Node
    },
    MinusPoint: {
      "default": null,
      type: cc.Node
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.HolesParent = cc.find("畫布/場景/地鼠洞");
    this.GameManager = cc.find("畫布").getComponent("Guest4_Whack_a_mole");
    this.GameScore = cc.find("畫布/場景/得分框/分數");
  },
  start: function start() {
    this.node.on("touchstart", this.Hit, this);
    this.StartPosition = this.node.position;
    this.HitAniTarget = null;
    this.delytime = 0;
    this.AddPoint_OriPos = this.AddPoint.position;
    this.MinusPoint_OriPos = this.MinusPoint.position;
  },
  Hit: function Hit() {
    if (this.isLive == true) {
      this.mouseani.stop();
      this.isLive = false;
      this.node.setPosition(-462.525, 414.31, 0);
      this.node.getComponent(cc.Sprite).spriteFrame = this.tag == 2 ? this.bomb : this.dead;

      if (this.tag < 2) //執行老鼠的算分函數刷新當前遊戲分數及打到動畫
        {
          if (this.tag == 0) {
            this.AddPoint.getComponent(cc.Label).string = 1;
            gameModel.Score += 1;
          } else {
            this.AddPoint.getComponent(cc.Label).string = 3;
            gameModel.Score += 3;
          }

          this.AddPoint.active = true;
          this.HitAniTarget = this.AddPoint;
        } else if (this.tag == 2) {
        gameModel.Score -= 1;
        gameModel.Score = gameModel.Score < 0 ? 0 : gameModel.Score; //判斷當前分數是否低於0，如果低於零則重置爲0

        this.MinusPoint.active = true;
        this.HitAniTarget = this.MinusPoint;
      }

      this.HitAnimation();
      this.GameScore.getComponent(cc.Label).string = gameModel.Score;
      this.scheduleOnce(function () {
        this.HitAniTarget.opacity = 255;
        this.AddPoint.active = false;
        this.AddPoint.position = this.AddPoint_OriPos;
        this.MinusPoint.active = false;
        this.MinusPoint.position = this.MinusPoint_OriPos;
        this.ResetHole();
      }, 0.5);
    }
  },
  GetData: function GetData(randomNodeIndex, randomSpriteFrameIndex) {
    this.randomNodeIndex = randomNodeIndex;
    if (randomSpriteFrameIndex == 2) this.delytime = 1;else this.delytime = 0.5;
  },
  //老鼠出現到消失動畫
  MouseAnimation: function MouseAnimation() {
    var _this = this;

    this.mouseani = cc.tween(this.node).by(0.5, {
      position: cc.v2(0, 520)
    }).delay(this.delytime).by(0.5, {
      position: cc.v2(0, -510)
    }).call(function () {
      _this.ResetHole();
    }).start();
  },
  //分數往上飄動畫
  HitAnimation: function HitAnimation() {
    this.hitani = cc.tween(this.HitAniTarget).to(0.5, {
      opacity: 0,
      position: cc.v2(this.HitAniTarget.position.x, 40)
    }).start();
  },
  ResetHole: function ResetHole() {
    this.node.position = this.StartPosition;
    this.GameManager.mouseIndexArr.splice(this.GameManager.mouseIndexArr.indexOf(this.randomNodeIndex, 0), 1); //已產生老鼠的陣列中，刪除目前資料的陣列位置
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcM193aGFja19hX21vbGVcXOmBiuaIsuaooeWhilxcR3Vlc3RfTW91c2VNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlzTGl2ZSIsInRhZyIsImRlYWQiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJib21iIiwiQWRkUG9pbnQiLCJOb2RlIiwiTWludXNQb2ludCIsIm9uTG9hZCIsIkhvbGVzUGFyZW50IiwiZmluZCIsIkdhbWVNYW5hZ2VyIiwiZ2V0Q29tcG9uZW50IiwiR2FtZVNjb3JlIiwic3RhcnQiLCJub2RlIiwib24iLCJIaXQiLCJTdGFydFBvc2l0aW9uIiwicG9zaXRpb24iLCJIaXRBbmlUYXJnZXQiLCJkZWx5dGltZSIsIkFkZFBvaW50X09yaVBvcyIsIk1pbnVzUG9pbnRfT3JpUG9zIiwibW91c2VhbmkiLCJzdG9wIiwic2V0UG9zaXRpb24iLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIkxhYmVsIiwic3RyaW5nIiwiU2NvcmUiLCJhY3RpdmUiLCJIaXRBbmltYXRpb24iLCJzY2hlZHVsZU9uY2UiLCJvcGFjaXR5IiwiUmVzZXRIb2xlIiwiR2V0RGF0YSIsInJhbmRvbU5vZGVJbmRleCIsInJhbmRvbVNwcml0ZUZyYW1lSW5kZXgiLCJNb3VzZUFuaW1hdGlvbiIsInR3ZWVuIiwiYnkiLCJ2MiIsImRlbGF5IiwiY2FsbCIsImhpdGFuaSIsInRvIiwieCIsIm1vdXNlSW5kZXhBcnIiLCJzcGxpY2UiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkIsRUFBa0M7OztBQUVsQ0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFB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LENBQU4sRUFBUyxHQUFUO0FBQVosS0FETyxFQUVmQyxLQUZlLENBRVQsS0FBS3ZCLFFBRkksRUFHZnFCLEVBSGUsQ0FHWixHQUhZLEVBR1A7QUFBRXZCLE1BQUFBLFFBQVEsRUFBRXhCLEVBQUUsQ0FBQ2dELEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBQyxHQUFWO0FBQVosS0FITyxFQUlmRSxJQUplLENBSVYsWUFBTTtBQUFDLE1BQUEsS0FBSSxDQUFDVCxTQUFMO0FBQWtCLEtBSmYsRUFLZnRCLEtBTGUsRUFBaEI7QUFNSCxHQWhHSTtBQWtHTDtBQUNBbUIsRUFBQUEsWUFuR0ssMEJBbUdTO0FBQ1YsU0FBS2EsTUFBTCxHQUFjbkQsRUFBRSxDQUFDOEMsS0FBSCxDQUFTLEtBQUtyQixZQUFkLEVBQ2IyQixFQURhLENBQ1YsR0FEVSxFQUNMO0FBQUNaLE1BQUFBLE9BQU8sRUFBRSxDQUFWO0FBQWFoQixNQUFBQSxRQUFRLEVBQUV4QixFQUFFLENBQUNnRCxFQUFILENBQU0sS0FBS3ZCLFlBQUwsQ0FBa0JELFFBQWxCLENBQTJCNkIsQ0FBakMsRUFBb0MsRUFBcEM7QUFBdkIsS0FESyxFQUVibEMsS0FGYSxFQUFkO0FBR0gsR0F2R0k7QUF5R0xzQixFQUFBQSxTQXpHSyx1QkF5R007QUFDUCxTQUFLckIsSUFBTCxDQUFVSSxRQUFWLEdBQXFCLEtBQUtELGFBQTFCO0FBQ0EsU0FBS1AsV0FBTCxDQUFpQnNDLGFBQWpCLENBQStCQyxNQUEvQixDQUFzQyxLQUFLdkMsV0FBTCxDQUFpQnNDLGFBQWpCLENBQStCRSxPQUEvQixDQUF1QyxLQUFLYixlQUE1QyxFQUE0RCxDQUE1RCxDQUF0QyxFQUFzRyxDQUF0RyxFQUZPLENBRW1HO0FBQzdHLEdBNUdJLENBNkdMOztBQTdHSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpOyAvL+WFqOWfn+iuiuaVuGdhbWVNb2RlbCDkuI3poIjliqB0aGlz5bCx6IO95o+Q5Y+WXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlzTGl2ZTogZmFsc2UsICAvL+S7o+ihqOiAgem8oOaYr+WQpuiiq+aTiuaaiFxyXG4gICAgICAgIHRhZyA6IG51bGwsXHJcbiAgICAgICAgZGVhZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9tYjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQWRkUG9pbnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTWludXNQb2ludDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLkhvbGVzUGFyZW50ID0gY2MuZmluZChcIueVq+W4gy/loLTmma8v5Zyw6byg5rSeXCIpXHJcbiAgICAgICAgdGhpcy5HYW1lTWFuYWdlciA9IGNjLmZpbmQoXCLnlavluINcIikuZ2V0Q29tcG9uZW50KFwiR3Vlc3Q0X1doYWNrX2FfbW9sZVwiKVxyXG4gICAgICAgIHRoaXMuR2FtZVNjb3JlID0gY2MuZmluZChcIueVq+W4gy/loLTmma8v5b6X5YiG5qGGL+WIhuaVuFwiKVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLkhpdCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5TdGFydFBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuSGl0QW5pVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlbHl0aW1lID0gMFxyXG4gICAgICAgIHRoaXMuQWRkUG9pbnRfT3JpUG9zID0gdGhpcy5BZGRQb2ludC5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLk1pbnVzUG9pbnRfT3JpUG9zID0gdGhpcy5NaW51c1BvaW50LnBvc2l0aW9uO1xyXG4gICAgfSxcclxuXHJcbiAgICBIaXQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0xpdmUgPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgdGhpcy5tb3VzZWFuaS5zdG9wKCk7XHJcbiAgICAgICAgICAgdGhpcy5pc0xpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oLTQ2Mi41MjUsIDQxNC4zMSwgMClcclxuICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnRhZyA9PSAyID8gdGhpcy5ib21iIDogdGhpcy5kZWFkICBcclxuICAgICAgICAgICBpZih0aGlzLnRhZyA8IDIpIC8v5Z+36KGM6ICB6byg55qE566X5YiG5Ye95pW45Yi35paw55W25YmN6YGK5oiy5YiG5pW45Y+K5omT5Yiw5YuV55WrXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlmKHRoaXMudGFnID09IDApIFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQWRkUG9pbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAxXHJcbiAgICAgICAgICAgICAgICBnYW1lTW9kZWwuU2NvcmUgKz0gMVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQWRkUG9pbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAzXHJcbiAgICAgICAgICAgICAgICBnYW1lTW9kZWwuU2NvcmUgKz0gM1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLkFkZFBvaW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5IaXRBbmlUYXJnZXQgPSB0aGlzLkFkZFBvaW50O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRhZyA9PSAyKSBcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICBnYW1lTW9kZWwuU2NvcmUgLT0gMVxyXG4gICAgICAgICAgICAgZ2FtZU1vZGVsLlNjb3JlID0gZ2FtZU1vZGVsLlNjb3JlIDwgMCA/IDAgOiBnYW1lTW9kZWwuU2NvcmU7IC8v5Yik5pa355W25YmN5YiG5pW45piv5ZCm5L2O5pa8MO+8jOWmguaenOS9juaWvOmbtuWJh+mHjee9rueIsjBcclxuICAgICAgICAgICAgIHRoaXMuTWludXNQb2ludC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgdGhpcy5IaXRBbmlUYXJnZXQgPSB0aGlzLk1pbnVzUG9pbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHRoaXMuSGl0QW5pbWF0aW9uKClcclxuICAgICAgICAgICB0aGlzLkdhbWVTY29yZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdhbWVNb2RlbC5TY29yZTtcclxuICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgICB0aGlzLkhpdEFuaVRhcmdldC5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgICAgICB0aGlzLkFkZFBvaW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgdGhpcy5BZGRQb2ludC5wb3NpdGlvbiA9IHRoaXMuQWRkUG9pbnRfT3JpUG9zXHJcbiAgICAgICAgICAgICB0aGlzLk1pbnVzUG9pbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICB0aGlzLk1pbnVzUG9pbnQucG9zaXRpb24gPSB0aGlzLk1pbnVzUG9pbnRfT3JpUG9zXHJcbiAgICAgICAgICAgICB0aGlzLlJlc2V0SG9sZSgpO1xyXG4gICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBHZXREYXRhKHJhbmRvbU5vZGVJbmRleCxyYW5kb21TcHJpdGVGcmFtZUluZGV4KXtcclxuICAgICAgICB0aGlzLnJhbmRvbU5vZGVJbmRleCA9IHJhbmRvbU5vZGVJbmRleDtcclxuICAgICAgICBpZihyYW5kb21TcHJpdGVGcmFtZUluZGV4ID09IDIpIHRoaXMuZGVseXRpbWUgPSAxXHJcbiAgICAgICAgZWxzZSB0aGlzLmRlbHl0aW1lID0gMC41XHJcbiAgICB9LFxyXG5cclxuICAgIC8v6ICB6byg5Ye654++5Yiw5raI5aSx5YuV55WrXHJcbiAgICBNb3VzZUFuaW1hdGlvbigpe1xyXG4gICAgICAgIHRoaXMubW91c2VhbmkgPSBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLmJ5KDAuNSwgeyBwb3NpdGlvbjogY2MudjIoMCwgNTIwKX0pXHJcbiAgICAgICAgLmRlbGF5KHRoaXMuZGVseXRpbWUpXHJcbiAgICAgICAgLmJ5KDAuNSwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTUxMCl9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHt0aGlzLlJlc2V0SG9sZSgpO30pXHJcbiAgICAgICAgLnN0YXJ0KClcclxuICAgIH0sXHJcblxyXG4gICAgLy/liIbmlbjlvoDkuIrpo4Tli5XnlatcclxuICAgIEhpdEFuaW1hdGlvbigpe1xyXG4gICAgICAgIHRoaXMuaGl0YW5pID0gY2MudHdlZW4odGhpcy5IaXRBbmlUYXJnZXQpXHJcbiAgICAgICAgLnRvKDAuNSwge29wYWNpdHk6IDAsIHBvc2l0aW9uOiBjYy52Mih0aGlzLkhpdEFuaVRhcmdldC5wb3NpdGlvbi54LCA0MCl9KVxyXG4gICAgICAgIC5zdGFydCgpXHJcbiAgICB9LFxyXG5cclxuICAgIFJlc2V0SG9sZSgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuU3RhcnRQb3NpdGlvblxyXG4gICAgICAgIHRoaXMuR2FtZU1hbmFnZXIubW91c2VJbmRleEFyci5zcGxpY2UodGhpcy5HYW1lTWFuYWdlci5tb3VzZUluZGV4QXJyLmluZGV4T2YodGhpcy5yYW5kb21Ob2RlSW5kZXgsMCksIDEpOyAvL+W3sueUoueUn+iAgem8oOeahOmZo+WIl+S4re+8jOWIqumZpOebruWJjeizh+aWmeeahOmZo+WIl+S9jee9rlxyXG4gICAgfSBcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19