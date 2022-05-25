
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Ani_Rotation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83d5dDiahZKOLzPToLJTyQw', 'Ani_Rotation');
// 共用模塊/Ani_Rotation.js

"use strict";

///動畫控制js
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    cc.tween(this.node).repeatForever(cc.tween().by(15, {
      angle: 360
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxBbmlfUm90YXRpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ0d2VlbiIsIm5vZGUiLCJyZXBlYXRGb3JldmVyIiwiYnkiLCJhbmdsZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUs7QUFDVEosSUFBQUEsRUFBRSxDQUFDSyxLQUFILENBQVMsS0FBS0MsSUFBZCxFQUNBQyxhQURBLENBQ2NQLEVBQUUsQ0FBQ0ssS0FBSCxHQUNkRyxFQURjLENBQ1gsRUFEVyxFQUNQO0FBQUVDLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBRE8sQ0FEZCxFQUlBQyxLQUpBO0FBS0EsR0FaSTtBQWNMQSxFQUFBQSxLQWRLLG1CQWNJLENBRVIsQ0FoQkksQ0FrQkw7O0FBbEJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLy/li5XnlavmjqfliLZqc1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgIC5yZXBlYXRGb3JldmVyKGNjLnR3ZWVuKClcclxuICAgIC5ieSgxNSwgeyBhbmdsZTogMzYwIH0pXHJcbiAgICApXHJcbiAgICAuc3RhcnQoKVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==