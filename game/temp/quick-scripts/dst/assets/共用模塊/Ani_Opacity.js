
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Ani_Opacity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8f4bSmc/FBfIaAx6V4dlj8', 'Ani_Opacity');
// 共用模塊/Ani_Opacity.js

"use strict";

///透明度漸層動畫js
cc.Class({
  "extends": cc.Component,
  properties: {
    Target: {
      "default": [],
      type: [cc.Node]
    }
  },
  start: function start() {
    this.CountTarget();
    this.count = 1;
  },
  CountTarget: function CountTarget() {
    this.schedule(function () {
      //每1秒鐘值行一次，重複做1次
      this.judge(this.count - 1);
    }, 0.08, this.Target.length);
  },
  judge: function judge(i) {
    if (this.count == this.Target.length + 1) this.clear();else {
      this.count += 1;
      this.Target[i].active = true;
      this.OpacityAni(this.Target[i]);
    }
  },
  clear: function clear() {
    this.count = 1;
    this.scheduleOnce(function () {
      //每1秒鐘值行一次，重複做1次
      for (var i = 0; i < this.Target.length; i++) {
        this.Target[i].active = false;
        this.Target[i].opacity = 0;
      }

      this.CountTarget();
    }, 1);
  },
  OpacityAni: function OpacityAni(node) {
    cc.tween(node).to(1, {
      opacity: 255
    }).start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxBbmlfT3BhY2l0eS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlRhcmdldCIsInR5cGUiLCJOb2RlIiwic3RhcnQiLCJDb3VudFRhcmdldCIsImNvdW50Iiwic2NoZWR1bGUiLCJqdWRnZSIsImxlbmd0aCIsImkiLCJjbGVhciIsImFjdGl2ZSIsIk9wYWNpdHlBbmkiLCJzY2hlZHVsZU9uY2UiLCJvcGFjaXR5Iiwibm9kZSIsInR3ZWVuIiwidG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLEVBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sSUFBSjtBQUZGO0FBREEsR0FIUDtBQVVMQyxFQUFBQSxLQVZLLG1CQVVJO0FBQ04sU0FBS0MsV0FBTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0YsR0FiSTtBQWVMRCxFQUFBQSxXQWZLLHlCQWVRO0FBQ1QsU0FBS0UsUUFBTCxDQUFjLFlBQVc7QUFBSTtBQUN6QixXQUFLQyxLQUFMLENBQVcsS0FBS0YsS0FBTCxHQUFhLENBQXhCO0FBQ0gsS0FGRCxFQUVHLElBRkgsRUFFUSxLQUFLTCxNQUFMLENBQVlRLE1BRnBCO0FBR0gsR0FuQkk7QUFxQkxELEVBQUFBLEtBckJLLGlCQXFCQ0UsQ0FyQkQsRUFxQkc7QUFDSixRQUFHLEtBQUtKLEtBQUwsSUFBYyxLQUFLTCxNQUFMLENBQVlRLE1BQVosR0FBcUIsQ0FBdEMsRUFBeUMsS0FBS0UsS0FBTCxHQUF6QyxLQUVBO0FBQ0ksV0FBS0wsS0FBTCxJQUFjLENBQWQ7QUFDQSxXQUFLTCxNQUFMLENBQVlTLENBQVosRUFBZUUsTUFBZixHQUF3QixJQUF4QjtBQUNBLFdBQUtDLFVBQUwsQ0FBZ0IsS0FBS1osTUFBTCxDQUFZUyxDQUFaLENBQWhCO0FBQ0g7QUFDSixHQTdCSTtBQStCTEMsRUFBQUEsS0EvQkssbUJBK0JFO0FBQ0gsU0FBS0wsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLUSxZQUFMLENBQWtCLFlBQVc7QUFBSTtBQUM3QixXQUFJLElBQUlKLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLVCxNQUFMLENBQVlRLE1BQS9CLEVBQXVDQyxDQUFDLEVBQXhDLEVBQ0E7QUFDSSxhQUFLVCxNQUFMLENBQVlTLENBQVosRUFBZUUsTUFBZixHQUF3QixLQUF4QjtBQUNBLGFBQUtYLE1BQUwsQ0FBWVMsQ0FBWixFQUFlSyxPQUFmLEdBQXlCLENBQXpCO0FBQ0g7O0FBQ0QsV0FBS1YsV0FBTDtBQUNGLEtBUEYsRUFPSSxDQVBKO0FBUUgsR0F6Q0k7QUEyQ0xRLEVBQUFBLFVBM0NLLHNCQTJDTUcsSUEzQ04sRUEyQ1c7QUFDWm5CLElBQUFBLEVBQUUsQ0FBQ29CLEtBQUgsQ0FBU0QsSUFBVCxFQUNDRSxFQURELENBQ0ksQ0FESixFQUNPO0FBQUNILE1BQUFBLE9BQU8sRUFBRTtBQUFWLEtBRFAsRUFFQ1gsS0FGRDtBQUdILEdBL0NJLENBZ0RMOztBQWhESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8v6YCP5piO5bqm5ry45bGk5YuV55WranNcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBUYXJnZXQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5Ob2RlXVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgIHRoaXMuQ291bnRUYXJnZXQoKTtcclxuICAgICAgIHRoaXMuY291bnQgPSAxOyBcclxuICAgIH0sXHJcblxyXG4gICAgQ291bnRUYXJnZXQoKXtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkgeyAgIC8v5q+PMeenkumQmOWAvOihjOS4gOasoe+8jOmHjeikh+WBmjHmrKFcclxuICAgICAgICAgICAgdGhpcy5qdWRnZSh0aGlzLmNvdW50IC0gMSk7XHJcbiAgICAgICAgfSwgMC4wOCx0aGlzLlRhcmdldC5sZW5ndGgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBqdWRnZShpKXtcclxuICAgICAgICBpZih0aGlzLmNvdW50ID09IHRoaXMuVGFyZ2V0Lmxlbmd0aCArIDEpIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ICs9IDFcclxuICAgICAgICAgICAgdGhpcy5UYXJnZXRbaV0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLk9wYWNpdHlBbmkodGhpcy5UYXJnZXRbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjbGVhcigpe1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAxO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkgeyAgIC8v5q+PMeenkumQmOWAvOihjOS4gOasoe+8jOmHjeikh+WBmjHmrKFcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuVGFyZ2V0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRhcmdldFtpXS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRbaV0ub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5Db3VudFRhcmdldCgpO1xyXG4gICAgICAgICB9LCAxKTtcclxuICAgIH0sXHJcblxyXG4gICAgT3BhY2l0eUFuaShub2RlKXtcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgIC50bygxLCB7b3BhY2l0eTogMjU1fSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19