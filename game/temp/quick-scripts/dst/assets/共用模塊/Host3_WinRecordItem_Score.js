
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Host3_WinRecordItem_Score.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7c76p0jrlDFbC91FqfD5fX', 'Host3_WinRecordItem_Score');
// 共用模塊/Host3_WinRecordItem_Score.js

"use strict";

var gameModel = require("Model");

var Host3_WinRecordItem = require("Host3_WinRecordItem"); ///即時中獎玩家資訊物件js


cc.Class({
  "extends": Host3_WinRecordItem,
  properties: {
    Score: {
      "default": null,
      type: cc.Label
    }
  },
  updateInfo: function updateInfo(i) {
    var self = this;
    this.playerName.string = gameModel.winner_name[i];
    this.Score.string = gameModel.winner_score[i]; //遠端載入: 網址轉圖片

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxIb3N0M19XaW5SZWNvcmRJdGVtX1Njb3JlLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJIb3N0M19XaW5SZWNvcmRJdGVtIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJTY29yZSIsInR5cGUiLCJMYWJlbCIsInVwZGF0ZUluZm8iLCJpIiwic2VsZiIsInBsYXllck5hbWUiLCJzdHJpbmciLCJ3aW5uZXJfbmFtZSIsIndpbm5lcl9zY29yZSIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJ3aW5uZXJfcGljdHVyZSIsImV4dCIsImVyciIsInRleHR1cmUiLCJjb25zb2xlIiwibG9nIiwicGljdHVyZSIsIlNwcml0ZUZyYW1lIiwicGxheWVyQXZhdGFyIiwic3ByaXRlRnJhbWUiLCJvbkxvYWQiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCOztBQUNBLElBQUlDLG1CQUFtQixHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBakMsRUFFQTs7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0YsbUJBREo7QUFHTEcsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBQztBQUNGLGlCQUFTLElBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFSixFQUFFLENBQUNLO0FBRlA7QUFERSxHQUhQO0FBVUxDLEVBQUFBLFVBVkssc0JBVU1DLENBVk4sRUFVUTtBQUNULFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS0MsVUFBTCxDQUFnQkMsTUFBaEIsR0FBeUJiLFNBQVMsQ0FBQ2MsV0FBVixDQUFzQkosQ0FBdEIsQ0FBekI7QUFDQSxTQUFLSixLQUFMLENBQVdPLE1BQVgsR0FBb0JiLFNBQVMsQ0FBQ2UsWUFBVixDQUF1QkwsQ0FBdkIsQ0FBcEIsQ0FIUyxDQUlUOztBQUNDUCxJQUFBQSxFQUFFLENBQUNhLFlBQUgsQ0FBZ0JDLFVBQWhCLENBQTJCakIsU0FBUyxDQUFDa0IsY0FBVixDQUF5QlIsQ0FBekIsQ0FBM0IsRUFBdUQ7QUFBQ1MsTUFBQUEsR0FBRyxFQUFFLFVBQVE7QUFBZCxLQUF2RCxFQUE2RSxVQUFTQyxHQUFULEVBQWFDLE9BQWIsRUFDN0U7QUFDSSxVQUFHRCxHQUFILEVBQVFFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBUixLQUVBO0FBQ0ksWUFBSUMsT0FBTyxHQUFHLElBQUlyQixFQUFFLENBQUNzQixXQUFQLENBQW1CSixPQUFuQixDQUFkLENBREosQ0FDK0M7O0FBQzNDVixRQUFBQSxJQUFJLENBQUNlLFlBQUwsQ0FBa0JDLFdBQWxCLEdBQWdDSCxPQUFoQztBQUNIO0FBQ0gsS0FSRjtBQVNKLEdBeEJJO0FBMEJMSSxFQUFBQSxNQTFCSyxvQkEwQkssQ0FBRSxDQTFCUDtBQTRCTEMsRUFBQUEsS0E1QkssbUJBNEJJLENBQUUsQ0E1Qk4sQ0E4Qkw7O0FBOUJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcbnZhciBIb3N0M19XaW5SZWNvcmRJdGVtID0gcmVxdWlyZShcIkhvc3QzX1dpblJlY29yZEl0ZW1cIilcclxuXHJcbi8vL+WNs+aZguS4reeNjueOqeWutuizh+ioiueJqeS7tmpzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IEhvc3QzX1dpblJlY29yZEl0ZW0sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFNjb3JlOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdXBkYXRlSW5mbyhpKXsgXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucGxheWVyTmFtZS5zdHJpbmcgPSBnYW1lTW9kZWwud2lubmVyX25hbWVbaV07XHJcbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBnYW1lTW9kZWwud2lubmVyX3Njb3JlW2ldXHJcbiAgICAgICAgLy/pgaDnq6/ovInlhaU6IOe2suWdgOi9ieWclueJh1xyXG4gICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShnYW1lTW9kZWwud2lubmVyX3BpY3R1cmVbaV0se2V4dCA6Jy5qcGcnfHwnLnBuZyd9LGZ1bmN0aW9uKGVycix0ZXh0dXJlKVxyXG4gICAgICAgICB7IFxyXG4gICAgICAgICAgICAgaWYoZXJyKSBjb25zb2xlLmxvZyhcIumMr+iqpFwiKVxyXG4gICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIHZhciBwaWN0dXJlID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpOyAvL3RleHR1cmUg6L2JIFNwcml0ZUZyYW1lXHJcbiAgICAgICAgICAgICAgICAgc2VsZi5wbGF5ZXJBdmF0YXIuc3ByaXRlRnJhbWUgPSBwaWN0dXJlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7fSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==