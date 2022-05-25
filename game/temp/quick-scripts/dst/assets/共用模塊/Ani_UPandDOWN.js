
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Ani_UPandDOWN.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89209mb7B5E7opQmXjzQ00M', 'Ani_UPandDOWN');
// 共用模塊/Ani_UPandDOWN.js

"use strict";

///動畫控制js
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    cc.tween(this.node).repeatForever(cc.tween().by(0.8, {
      position: cc.v2(0, 80)
    }).by(0.8, {
      position: cc.v2(0, -80)
    })).start();
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxBbmlfVVBhbmRET1dOLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwidHdlZW4iLCJub2RlIiwicmVwZWF0Rm9yZXZlciIsImJ5IiwicG9zaXRpb24iLCJ2MiIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUs7QUFDVEosSUFBQUEsRUFBRSxDQUFDSyxLQUFILENBQVMsS0FBS0MsSUFBZCxFQUNBQyxhQURBLENBQ2NQLEVBQUUsQ0FBQ0ssS0FBSCxHQUNkRyxFQURjLENBQ1gsR0FEVyxFQUNOO0FBQUVDLE1BQUFBLFFBQVEsRUFBRVQsRUFBRSxDQUFDVSxFQUFILENBQU0sQ0FBTixFQUFTLEVBQVQ7QUFBWixLQURNLEVBRWRGLEVBRmMsQ0FFWCxHQUZXLEVBRU47QUFBRUMsTUFBQUEsUUFBUSxFQUFFVCxFQUFFLENBQUNVLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBQyxFQUFWO0FBQVosS0FGTSxDQURkLEVBS0FDLEtBTEE7QUFNQSxHQWJJO0FBZUxBLEVBQUFBLEtBZkssbUJBZUksQ0FFUixDQWpCSSxDQW1CTDs7QUFuQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vL+WLleeVq+aOp+WItmpzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgLnJlcGVhdEZvcmV2ZXIoY2MudHdlZW4oKVxyXG4gICAgLmJ5KDAuOCwgeyBwb3NpdGlvbjogY2MudjIoMCwgODApfSlcclxuICAgIC5ieSgwLjgsIHsgcG9zaXRpb246IGNjLnYyKDAsIC04MCl9KVxyXG4gICAgKVxyXG4gICAgLnN0YXJ0KClcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=