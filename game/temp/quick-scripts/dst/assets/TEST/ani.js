
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TEST/ani.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58d98+WtihHuKwhuv8/GTaa', 'ani');
// TEST/ani.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.count = 0;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.count++;
    if (other.node.group == "加分" && this.count == 1) gameModel.TopTitle = "加分";else if (other.node.group == "扣分" && this.count == 1) gameModel.TopTitle = "扣分";
  },
  onCollisionExit: function onCollisionExit(other, self) {
    this.count--;
    gameModel.TopTitle = "無";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVEVTVFxcYW5pLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImNvdW50Iiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsIm5vZGUiLCJncm91cCIsIlRvcFRpdGxlIiwib25Db2xsaXNpb25FeGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBUUxDLEVBQUFBLE1BUkssb0JBUUs7QUFDUCxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNGLEdBVkk7QUFZTEMsRUFBQUEsZ0JBQWdCLEVBQUcsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3RDLFNBQUtILEtBQUw7QUFDQSxRQUFHRSxLQUFLLENBQUNFLElBQU4sQ0FBV0MsS0FBWCxJQUFvQixJQUFwQixJQUE0QixLQUFLTCxLQUFMLElBQWMsQ0FBN0MsRUFBZ0RQLFNBQVMsQ0FBQ2EsUUFBVixHQUFxQixJQUFyQixDQUFoRCxLQUNLLElBQUdKLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxLQUFYLElBQW9CLElBQXBCLElBQTRCLEtBQUtMLEtBQUwsSUFBYyxDQUE3QyxFQUFnRFAsU0FBUyxDQUFDYSxRQUFWLEdBQXFCLElBQXJCO0FBQ3hELEdBaEJJO0FBa0JMQyxFQUFBQSxlQUFlLEVBQUUseUJBQVVMLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3BDLFNBQUtILEtBQUw7QUFDQVAsSUFBQUEsU0FBUyxDQUFDYSxRQUFWLEdBQXFCLEdBQXJCO0FBQ0g7QUFyQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdhbWVNb2RlbCA9IHJlcXVpcmUoXCJNb2RlbFwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgIHRoaXMuY291bnQgPSAwXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIgOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICB0aGlzLmNvdW50ICsrXHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIuWKoOWIhlwiICYmIHRoaXMuY291bnQgPT0gMSkgZ2FtZU1vZGVsLlRvcFRpdGxlID0gXCLliqDliIZcIjtcclxuICAgICAgICBlbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCLmiaPliIZcIiAmJiB0aGlzLmNvdW50ID09IDEpIGdhbWVNb2RlbC5Ub3BUaXRsZSA9IFwi5omj5YiGXCI7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRXhpdDogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCAtLVxyXG4gICAgICAgIGdhbWVNb2RlbC5Ub3BUaXRsZSA9IFwi54ShXCJcclxuICAgIH0sXHJcbn0pOyJdfQ==