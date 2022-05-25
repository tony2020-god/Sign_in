
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Ani_Opacity_Bright.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf56dsRrKZITL++yW6WV/jn', 'Ani_Opacity_Bright');
// 共用模塊/Ani_Opacity_Bright.js

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
    this.OpacityAni();
  },
  OpacityAni: function OpacityAni() {
    this.node.opacity = 0;
    cc.tween(this.node).to(0.5, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxBbmlfT3BhY2l0eV9CcmlnaHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJUYXJnZXQiLCJ0eXBlIiwiTm9kZSIsInN0YXJ0IiwiT3BhY2l0eUFuaSIsIm5vZGUiLCJvcGFjaXR5IiwidHdlZW4iLCJ0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsRUFETDtBQUVKQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxJQUFKO0FBRkY7QUFEQSxHQUhQO0FBVUxDLEVBQUFBLEtBVkssbUJBVUk7QUFDUCxTQUFLQyxVQUFMO0FBQ0QsR0FaSTtBQWVMQSxFQUFBQSxVQWZLLHdCQWVPO0FBQ1IsU0FBS0MsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLENBQXBCO0FBQ0FWLElBQUFBLEVBQUUsQ0FBQ1csS0FBSCxDQUFTLEtBQUtGLElBQWQsRUFDQ0csRUFERCxDQUNJLEdBREosRUFDUztBQUFDRixNQUFBQSxPQUFPLEVBQUU7QUFBVixLQURULEVBRUNILEtBRkQ7QUFHSCxHQXBCSSxDQXFCTDs7QUFyQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vL+mAj+aYjuW6pua8uOWxpOWLleeVq2pzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgVGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuTm9kZV1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgIHRoaXMuT3BhY2l0eUFuaSgpXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgT3BhY2l0eUFuaSgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMFxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAudG8oMC41LCB7b3BhY2l0eTogMjU1fSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19