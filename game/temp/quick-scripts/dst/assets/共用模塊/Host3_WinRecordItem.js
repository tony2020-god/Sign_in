
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Host3_WinRecordItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9bc09ZSX01DaKAtO2ymPTAw', 'Host3_WinRecordItem');
// 共用模塊/Host3_WinRecordItem.js

"use strict";

var gameModel = require("Model"); ///即時中獎玩家資訊物件js


cc.Class({
  "extends": cc.Component,
  properties: {
    playerName: {
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
    this.playerName.string = gameModel.winner_name[i]; //遠端載入: 網址轉圖片

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxIb3N0M19XaW5SZWNvcmRJdGVtLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYXllck5hbWUiLCJ0eXBlIiwiTGFiZWwiLCJwbGF5ZXJBdmF0YXIiLCJTcHJpdGUiLCJ1cGRhdGVJbmZvIiwiaSIsInNlbGYiLCJzdHJpbmciLCJ3aW5uZXJfbmFtZSIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJ3aW5uZXJfcGljdHVyZSIsImV4dCIsImVyciIsInRleHR1cmUiLCJjb25zb2xlIiwibG9nIiwicGljdHVyZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlRnJhbWUiLCJvbkxvYWQiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCLEVBRUE7OztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVEsSUFEQTtBQUVSQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGQSxLQUZKO0FBTVJDLElBQUFBLFlBQVksRUFBQztBQUNULGlCQUFRLElBREM7QUFFVEYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNRO0FBRkM7QUFOTCxHQUhQO0FBZUxDLEVBQUFBLFVBZkssc0JBZU1DLENBZk4sRUFlUTtBQUNULFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS1AsVUFBTCxDQUFnQlEsTUFBaEIsR0FBeUJkLFNBQVMsQ0FBQ2UsV0FBVixDQUFzQkgsQ0FBdEIsQ0FBekIsQ0FGUyxDQUdUOztBQUNDVixJQUFBQSxFQUFFLENBQUNjLFlBQUgsQ0FBZ0JDLFVBQWhCLENBQTJCakIsU0FBUyxDQUFDa0IsY0FBVixDQUF5Qk4sQ0FBekIsQ0FBM0IsRUFBdUQ7QUFBQ08sTUFBQUEsR0FBRyxFQUFFLFVBQVE7QUFBZCxLQUF2RCxFQUE2RSxVQUFTQyxHQUFULEVBQWFDLE9BQWIsRUFDN0U7QUFDSSxVQUFHRCxHQUFILEVBQVFFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBUixLQUVBO0FBQ0ksWUFBSUMsT0FBTyxHQUFHLElBQUl0QixFQUFFLENBQUN1QixXQUFQLENBQW1CSixPQUFuQixDQUFkLENBREosQ0FDK0M7O0FBQzNDUixRQUFBQSxJQUFJLENBQUNKLFlBQUwsQ0FBa0JpQixXQUFsQixHQUFnQ0YsT0FBaEM7QUFDSDtBQUNILEtBUkY7QUFTSixHQTVCSTtBQThCTEcsRUFBQUEsTUE5Qkssb0JBOEJLLENBQUUsQ0E5QlA7QUFnQ0xDLEVBQUFBLEtBaENLLG1CQWdDSSxDQUFFLENBaENOLENBa0NMOztBQWxDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG5cclxuLy8v5Y2z5pmC5Lit542O546p5a626LOH6KiK54mp5Lu2anNcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgcGxheWVyTmFtZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYXllckF2YXRhcjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdXBkYXRlSW5mbyhpKXsgXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucGxheWVyTmFtZS5zdHJpbmcgPSBnYW1lTW9kZWwud2lubmVyX25hbWVbaV07XHJcbiAgICAgICAgLy/pgaDnq6/ovInlhaU6IOe2suWdgOi9ieWclueJh1xyXG4gICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShnYW1lTW9kZWwud2lubmVyX3BpY3R1cmVbaV0se2V4dCA6Jy5qcGcnfHwnLnBuZyd9LGZ1bmN0aW9uKGVycix0ZXh0dXJlKVxyXG4gICAgICAgICB7IFxyXG4gICAgICAgICAgICAgaWYoZXJyKSBjb25zb2xlLmxvZyhcIumMr+iqpFwiKVxyXG4gICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIHZhciBwaWN0dXJlID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpOyAvL3RleHR1cmUg6L2JIFNwcml0ZUZyYW1lXHJcbiAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJBdmF0YXIuc3ByaXRlRnJhbWUgPSBwaWN0dXJlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7fSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==