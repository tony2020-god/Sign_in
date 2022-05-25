
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Guest4_GameCountDown.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '037baTi8DRKwokRLHQEF/UG', 'Guest4_GameCountDown');
// 共用模塊/Guest4_GameCountDown.js

"use strict";

var gameModel = require("Model"); //玩家遊戲倒數js


cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {
    this.already = false;
  },
  lateUpdate: function lateUpdate(dt) {
    if (gameModel.GameStatusMessage == "end" && this.already == false) {
      this.already = true;
      cc.director.loadScene("Guest_Prize");
    } else if (gameModel.GameStatusMessage == "close" && this.already == false) {
      this.already = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxHdWVzdDRfR2FtZUNvdW50RG93bi5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzdGFydCIsImFscmVhZHkiLCJsYXRlVXBkYXRlIiwiZHQiLCJHYW1lU3RhdHVzTWVzc2FnZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiSG9zdFdpbmRvdyIsIkJhY2tHcm91bmRfVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUF2QixFQUVBOzs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFNTEMsRUFBQUEsTUFOSyxvQkFNSyxDQUNULENBUEk7QUFTTEMsRUFBQUEsS0FUSyxtQkFTSTtBQUNMLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0gsR0FYSTtBQWNMQyxFQUFBQSxVQWRLLHNCQWNPQyxFQWRQLEVBY1c7QUFDWixRQUFHVixTQUFTLENBQUNXLGlCQUFWLElBQStCLEtBQS9CLElBQXdDLEtBQUtILE9BQUwsSUFBZ0IsS0FBM0QsRUFDQTtBQUNJLFdBQUtBLE9BQUwsR0FBZSxJQUFmO0FBQ0FOLE1BQUFBLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZQyxTQUFaLENBQXNCLGFBQXRCO0FBQ0gsS0FKRCxNQUtLLElBQUliLFNBQVMsQ0FBQ1csaUJBQVYsSUFBK0IsT0FBL0IsSUFBMEMsS0FBS0gsT0FBTCxJQUFnQixLQUE5RCxFQUNMO0FBQ0ksV0FBS0EsT0FBTCxHQUFlLElBQWY7QUFDQVIsTUFBQUEsU0FBUyxDQUFDYyxVQUFWLEdBQXVCLE9BQXZCO0FBQ0FaLE1BQUFBLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZQyxTQUFaLENBQXNCLG9CQUFtQmIsU0FBUyxDQUFDZSxnQkFBbkQ7QUFDSDtBQUNKO0FBMUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcblxyXG4vL+eOqeWutumBiuaIsuWAkuaVuGpzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmFscmVhZHkgPSBmYWxzZVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgbGF0ZVVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZihnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPT0gXCJlbmRcIiAmJiB0aGlzLmFscmVhZHkgPT0gZmFsc2UpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hbHJlYWR5ID0gdHJ1ZVxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHdWVzdF9Qcml6ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwiY2xvc2VcIiAmJiB0aGlzLmFscmVhZHkgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmFscmVhZHkgPSB0cnVlXHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5Ib3N0V2luZG93ID0gXCJjbG9zZVwiXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkd1ZXN0MV9Kb2luR2FtZVwiKyBnYW1lTW9kZWwuQmFja0dyb3VuZF9UaGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbn0pXHJcblxyXG4iXX0=