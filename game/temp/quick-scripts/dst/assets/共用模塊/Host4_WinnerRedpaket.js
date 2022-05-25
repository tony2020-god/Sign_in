
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Host4_WinnerRedpaket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e162/m1CBNZLvJg8kV82EK', 'Host4_WinnerRedpaket');
// 共用模塊/Host4_WinnerRedpaket.js

"use strict";

var gameModel = require("Model"); ///主持人結算場景中獎玩家資訊物件js


cc.Class({
  "extends": cc.Component,
  properties: {
    playerName: {
      "default": null,
      type: cc.Label
    },
    prize_name: {
      "default": null,
      type: cc.Label
    },
    playerAvatar: {
      "default": null,
      type: cc.Sprite
    }
  },
  updateInfo: function updateInfo(i) {
    var self = this;
    this.playerName.string = gameModel.winner_name[i];
    this.playerAvatar.spriteFrames = gameModel.winner_picture[i];
    this.prize_name.string = gameModel.prize_name_host[i];
    cc.assetManager.loadRemote(gameModel.winner_picture[i], {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.playerAvatar.spriteFrame = picture;
      }
    });
  },
  onLoad: function onLoad() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxIb3N0NF9XaW5uZXJSZWRwYWtldC5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwbGF5ZXJOYW1lIiwidHlwZSIsIkxhYmVsIiwicHJpemVfbmFtZSIsInBsYXllckF2YXRhciIsIlNwcml0ZSIsInVwZGF0ZUluZm8iLCJpIiwic2VsZiIsInN0cmluZyIsIndpbm5lcl9uYW1lIiwic3ByaXRlRnJhbWVzIiwid2lubmVyX3BpY3R1cmUiLCJwcml6ZV9uYW1lX2hvc3QiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiZXh0IiwiZXJyIiwidGV4dHVyZSIsImNvbnNvbGUiLCJsb2ciLCJwaWN0dXJlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSIsIm9uTG9hZCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkIsRUFFQTs7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUSxJQURBO0FBRVJDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZBLEtBREo7QUFLUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVEsSUFEQTtBQUVSRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGQSxLQUxKO0FBU1JFLElBQUFBLFlBQVksRUFBQztBQUNULGlCQUFRLElBREM7QUFFVEgsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNTO0FBRkM7QUFUTCxHQUhQO0FBa0JMQyxFQUFBQSxVQWxCSyxzQkFrQk1DLENBbEJOLEVBa0JRO0FBQ1QsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxTQUFLUixVQUFMLENBQWdCUyxNQUFoQixHQUF5QmYsU0FBUyxDQUFDZ0IsV0FBVixDQUFzQkgsQ0FBdEIsQ0FBekI7QUFDQSxTQUFLSCxZQUFMLENBQWtCTyxZQUFsQixHQUFpQ2pCLFNBQVMsQ0FBQ2tCLGNBQVYsQ0FBeUJMLENBQXpCLENBQWpDO0FBQ0EsU0FBS0osVUFBTCxDQUFnQk0sTUFBaEIsR0FBeUJmLFNBQVMsQ0FBQ21CLGVBQVYsQ0FBMEJOLENBQTFCLENBQXpCO0FBQ0FYLElBQUFBLEVBQUUsQ0FBQ2tCLFlBQUgsQ0FBZ0JDLFVBQWhCLENBQTJCckIsU0FBUyxDQUFDa0IsY0FBVixDQUF5QkwsQ0FBekIsQ0FBM0IsRUFBdUQ7QUFBQ1MsTUFBQUEsR0FBRyxFQUFFLFVBQVE7QUFBZCxLQUF2RCxFQUE2RSxVQUFTQyxHQUFULEVBQWFDLE9BQWIsRUFDN0U7QUFDSSxVQUFHRCxHQUFILEVBQVFFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBUixLQUVBO0FBQ0ksWUFBSUMsT0FBTyxHQUFHLElBQUl6QixFQUFFLENBQUMwQixXQUFQLENBQW1CSixPQUFuQixDQUFkLENBREosQ0FDK0M7O0FBQzNDVixRQUFBQSxJQUFJLENBQUNKLFlBQUwsQ0FBa0JtQixXQUFsQixHQUFnQ0YsT0FBaEM7QUFDSDtBQUNILEtBUkY7QUFTSCxHQWhDSTtBQWtDTEcsRUFBQUEsTUFsQ0ssb0JBa0NLLENBQUUsQ0FsQ1A7QUFvQ0xDLEVBQUFBLEtBcENLLG1CQW9DSSxDQUFFLENBcENOLENBc0NMOztBQXRDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG5cclxuLy8v5Li75oyB5Lq657WQ566X5aC05pmv5Lit542O546p5a626LOH6KiK54mp5Lu2anNcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwbGF5ZXJOYW1lOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJpemVfbmFtZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYXllckF2YXRhcjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVJbmZvKGkpeyBcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLnN0cmluZyA9IGdhbWVNb2RlbC53aW5uZXJfbmFtZVtpXTtcclxuICAgICAgICB0aGlzLnBsYXllckF2YXRhci5zcHJpdGVGcmFtZXMgPSBnYW1lTW9kZWwud2lubmVyX3BpY3R1cmVbaV07XHJcbiAgICAgICAgdGhpcy5wcml6ZV9uYW1lLnN0cmluZyA9IGdhbWVNb2RlbC5wcml6ZV9uYW1lX2hvc3RbaV07XHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZ2FtZU1vZGVsLndpbm5lcl9waWN0dXJlW2ldLHtleHQgOicuanBnJ3x8Jy5wbmcnfSxmdW5jdGlvbihlcnIsdGV4dHVyZSlcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBpZihlcnIpIGNvbnNvbGUubG9nKFwi6Yyv6KqkXCIpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBpY3R1cmUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7IC8vdGV4dHVyZSDovYkgU3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgICAgIHNlbGYucGxheWVyQXZhdGFyLnNwcml0ZUZyYW1lID0gcGljdHVyZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHt9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19