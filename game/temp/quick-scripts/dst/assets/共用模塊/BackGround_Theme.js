
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/BackGround_Theme.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f50cGW9sJAaIe0BHTkMxzZ', 'BackGround_Theme');
// 共用模塊/BackGround_Theme.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.boo = "炸彈";
  },
  start: function start() {
    var self = this;
    cc.resources.load("winter/" + this.boo, cc.SpriteFrame, function (err, spriteFrame) {
      self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxCYWNrR3JvdW5kX1RoZW1lLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImJvbyIsInN0YXJ0Iiwic2VsZiIsInJlc291cmNlcyIsImxvYWQiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MO0FBRUFDLEVBQUFBLE1BUkssb0JBUUs7QUFDTixTQUFLQyxHQUFMLEdBQVcsSUFBWDtBQUNILEdBVkk7QUFZTEMsRUFBQUEsS0FaSyxtQkFZSTtBQUNMLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQ1EsU0FBSCxDQUFhQyxJQUFiLENBQWtCLFlBQVksS0FBS0osR0FBbkMsRUFBd0NMLEVBQUUsQ0FBQ1UsV0FBM0MsRUFBd0QsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO0FBQ2hGTCxNQUFBQSxJQUFJLENBQUNNLElBQUwsQ0FBVUMsWUFBVixDQUF1QmQsRUFBRSxDQUFDZSxNQUExQixFQUFrQ0gsV0FBbEMsR0FBZ0RBLFdBQWhEO0FBQ0gsS0FGRDtBQUlILEdBbEJJLENBb0JMOztBQXBCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmJvbyA9IFwi54K45b2IXCJcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcIndpbnRlci9cIiArIHRoaXMuYm9vLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19