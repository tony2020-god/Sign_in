
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/5_lottery/程式/Host1_Congratulations.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '613f4QghntKYon8kxwB9vBH', 'Host1_Congratulations');
// 5_lottery/程式/Host1_Congratulations.js

"use strict";

var gameModel = require("Model"); ///即時中獎玩家資訊物件js


cc.Class({
  "extends": cc.Component,
  properties: {
    prizeName: {
      "default": null,
      type: cc.Label
    },
    prizeAvatar: {
      "default": null,
      type: cc.Sprite
    }
  },
  updateInfo: function updateInfo(i) {
    var self = this;
    this.prizeName.string = "恭喜獲得 " + gameModel.prize_name_guest; //遠端載入: 網址轉圖片

    cc.assetManager.loadRemote(gameModel.Prizestack_picture[i], {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.prizeAvatar.spriteFrame = picture;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcNV9sb3R0ZXJ5XFznqIvlvI9cXEhvc3QxX0NvbmdyYXR1bGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwcml6ZU5hbWUiLCJ0eXBlIiwiTGFiZWwiLCJwcml6ZUF2YXRhciIsIlNwcml0ZSIsInVwZGF0ZUluZm8iLCJpIiwic2VsZiIsInN0cmluZyIsInByaXplX25hbWVfZ3Vlc3QiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiUHJpemVzdGFja19waWN0dXJlIiwiZXh0IiwiZXJyIiwidGV4dHVyZSIsImNvbnNvbGUiLCJsb2ciLCJwaWN0dXJlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSIsIm9uTG9hZCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkIsRUFFQTs7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUSxJQUREO0FBRVBDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZELEtBRkg7QUFNUkMsSUFBQUEsV0FBVyxFQUFDO0FBQ1IsaUJBQVEsSUFEQTtBQUVSRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1E7QUFGQTtBQU5KLEdBSFA7QUFlTEMsRUFBQUEsVUFmSyxzQkFlTUMsQ0FmTixFQWVRO0FBQ1QsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxTQUFLUCxTQUFMLENBQWVRLE1BQWYsR0FBd0IsVUFBVWQsU0FBUyxDQUFDZSxnQkFBNUMsQ0FGUyxDQUdUOztBQUNDYixJQUFBQSxFQUFFLENBQUNjLFlBQUgsQ0FBZ0JDLFVBQWhCLENBQTJCakIsU0FBUyxDQUFDa0Isa0JBQVYsQ0FBNkJOLENBQTdCLENBQTNCLEVBQTJEO0FBQUNPLE1BQUFBLEdBQUcsRUFBRSxVQUFRO0FBQWQsS0FBM0QsRUFBaUYsVUFBU0MsR0FBVCxFQUFhQyxPQUFiLEVBQ2pGO0FBQ0ksVUFBR0QsR0FBSCxFQUFRRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQVIsS0FFQTtBQUNJLFlBQUlDLE9BQU8sR0FBRyxJQUFJdEIsRUFBRSxDQUFDdUIsV0FBUCxDQUFtQkosT0FBbkIsQ0FBZCxDQURKLENBQytDOztBQUMzQ1IsUUFBQUEsSUFBSSxDQUFDSixXQUFMLENBQWlCaUIsV0FBakIsR0FBK0JGLE9BQS9CO0FBQ0g7QUFDSCxLQVJGO0FBU0osR0E1Qkk7QUE4QkxHLEVBQUFBLE1BOUJLLG9CQThCSyxDQUFFLENBOUJQO0FBZ0NMQyxFQUFBQSxLQWhDSyxtQkFnQ0ksQ0FBRSxDQWhDTixDQWtDTDs7QUFsQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdhbWVNb2RlbCA9IHJlcXVpcmUoXCJNb2RlbFwiKTtcclxuXHJcbi8vL+WNs+aZguS4reeNjueOqeWutuizh+ioiueJqeS7tmpzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgICAgIHByaXplTmFtZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByaXplQXZhdGFyOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlNwcml0ZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB1cGRhdGVJbmZvKGkpeyBcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wcml6ZU5hbWUuc3RyaW5nID0gXCLmga3llpznjbLlvpcgXCIgKyBnYW1lTW9kZWwucHJpemVfbmFtZV9ndWVzdDtcclxuICAgICAgICAvL+mBoOerr+i8ieWFpTog57ay5Z2A6L2J5ZyW54mHXHJcbiAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGdhbWVNb2RlbC5Qcml6ZXN0YWNrX3BpY3R1cmVbaV0se2V4dCA6Jy5qcGcnfHwnLnBuZyd9LGZ1bmN0aW9uKGVycix0ZXh0dXJlKVxyXG4gICAgICAgICB7IFxyXG4gICAgICAgICAgICAgaWYoZXJyKSBjb25zb2xlLmxvZyhcIumMr+iqpFwiKVxyXG4gICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIHZhciBwaWN0dXJlID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpOyAvL3RleHR1cmUg6L2JIFNwcml0ZUZyYW1lXHJcbiAgICAgICAgICAgICAgICAgc2VsZi5wcml6ZUF2YXRhci5zcHJpdGVGcmFtZSA9IHBpY3R1cmU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHt9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19