
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/4._Q&A/程式碼/Host3_RankRecordItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd675baYGPBGOqmNjozupxfo', 'Host3_RankRecordItem');
// 4._Q&A/程式碼/Host3_RankRecordItem.js

"use strict";

var gameModel = require("Model"); ///即時中獎玩家資訊物件js


cc.Class({
  "extends": cc.Component,
  properties: {
    playerName: {
      "default": null,
      type: cc.Label
    },
    Score: {
      "default": null,
      type: cc.Label
    },
    Time: {
      "default": null,
      type: cc.Label
    },
    playerAvatar: {
      "default": null,
      type: cc.Sprite
    },
    Rank: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  updateInfo: function updateInfo(i) {
    var self = this;
    this.playerName.string = gameModel.winner_name[i];
    this.Score.string = gameModel.winner_score[i];
    this.Time.string = gameModel.winner_Taketime;
    if (i > 3) this.Rank.string = i + 1; //遠端載入: 網址轉圖片

    cc.assetManager.loadRemote(gameModel.winner_picture[i], {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.playerAvatar.spriteFrame = picture;
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcNC5fUSZBXFznqIvlvI/norxcXEhvc3QzX1JhbmtSZWNvcmRJdGVtLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYXllck5hbWUiLCJ0eXBlIiwiTGFiZWwiLCJTY29yZSIsIlRpbWUiLCJwbGF5ZXJBdmF0YXIiLCJTcHJpdGUiLCJSYW5rIiwib25Mb2FkIiwidXBkYXRlSW5mbyIsImkiLCJzZWxmIiwic3RyaW5nIiwid2lubmVyX25hbWUiLCJ3aW5uZXJfc2NvcmUiLCJ3aW5uZXJfVGFrZXRpbWUiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwid2lubmVyX3BpY3R1cmUiLCJleHQiLCJlcnIiLCJ0ZXh0dXJlIiwiY29uc29sZSIsImxvZyIsInBpY3R1cmUiLCJTcHJpdGVGcmFtZSIsInNwcml0ZUZyYW1lIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUF2QixFQUVBOzs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFVBQVUsRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkMsS0FERjtBQUtWQyxJQUFBQSxLQUFLLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKLEtBTEc7QUFTVkUsSUFBQUEsSUFBSSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTCxLQVRJO0FBYVZHLElBQUFBLFlBQVksRUFBRTtBQUNaLGlCQUFTLElBREc7QUFFWkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRkcsS0FiSjtBQWlCVkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKTixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTDtBQWpCSSxHQUhQO0FBMkJMTSxFQUFBQSxNQTNCSyxvQkEyQkssQ0FBRSxDQTNCUDtBQTZCTEMsRUFBQUEsVUE3Qkssc0JBNkJNQyxDQTdCTixFQTZCUTtBQUNULFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS1gsVUFBTCxDQUFnQlksTUFBaEIsR0FBeUJsQixTQUFTLENBQUNtQixXQUFWLENBQXNCSCxDQUF0QixDQUF6QjtBQUNBLFNBQUtQLEtBQUwsQ0FBV1MsTUFBWCxHQUFvQmxCLFNBQVMsQ0FBQ29CLFlBQVYsQ0FBdUJKLENBQXZCLENBQXBCO0FBQ0EsU0FBS04sSUFBTCxDQUFVUSxNQUFWLEdBQW1CbEIsU0FBUyxDQUFDcUIsZUFBN0I7QUFDQSxRQUFHTCxDQUFDLEdBQUcsQ0FBUCxFQUFVLEtBQUtILElBQUwsQ0FBVUssTUFBVixHQUFtQkYsQ0FBQyxHQUFHLENBQXZCLENBTEQsQ0FNVDs7QUFDQ2QsSUFBQUEsRUFBRSxDQUFDb0IsWUFBSCxDQUFnQkMsVUFBaEIsQ0FBMkJ2QixTQUFTLENBQUN3QixjQUFWLENBQXlCUixDQUF6QixDQUEzQixFQUF1RDtBQUFDUyxNQUFBQSxHQUFHLEVBQUUsVUFBUTtBQUFkLEtBQXZELEVBQTZFLFVBQVNDLEdBQVQsRUFBYUMsT0FBYixFQUM3RTtBQUNJLFVBQUdELEdBQUgsRUFBUUUsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFSLEtBRUE7QUFDSSxZQUFJQyxPQUFPLEdBQUcsSUFBSTVCLEVBQUUsQ0FBQzZCLFdBQVAsQ0FBbUJKLE9BQW5CLENBQWQsQ0FESixDQUMrQzs7QUFDM0NWLFFBQUFBLElBQUksQ0FBQ04sWUFBTCxDQUFrQnFCLFdBQWxCLEdBQWdDRixPQUFoQztBQUNIO0FBQ0gsS0FSRjtBQVNKLEdBN0NJO0FBOENMRyxFQUFBQSxLQTlDSyxtQkE4Q0ksQ0FBRSxDQTlDTixDQWdETDs7QUFoREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdhbWVNb2RlbCA9IHJlcXVpcmUoXCJNb2RlbFwiKTtcclxuXHJcbi8vL+WNs+aZguS4reeNjueOqeWutuizh+ioiueJqeS7tmpzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgIHBsYXllck5hbWU6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgIH0sXHJcbiAgICAgIFNjb3JlOiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICB9LFxyXG4gICAgICBUaW1lOiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICB9LFxyXG4gICAgICBwbGF5ZXJBdmF0YXI6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZVxyXG4gICAgICB9LFxyXG4gICAgICBSYW5rOiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFxyXG5cclxuICAgIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICB1cGRhdGVJbmZvKGkpeyBcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLnN0cmluZyA9IGdhbWVNb2RlbC53aW5uZXJfbmFtZVtpXTtcclxuICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9IGdhbWVNb2RlbC53aW5uZXJfc2NvcmVbaV1cclxuICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID0gZ2FtZU1vZGVsLndpbm5lcl9UYWtldGltZVxyXG4gICAgICAgIGlmKGkgPiAzKSB0aGlzLlJhbmsuc3RyaW5nID0gaSArIDFcclxuICAgICAgICAvL+mBoOerr+i8ieWFpTog57ay5Z2A6L2J5ZyW54mHXHJcbiAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGdhbWVNb2RlbC53aW5uZXJfcGljdHVyZVtpXSx7ZXh0IDonLmpwZyd8fCcucG5nJ30sZnVuY3Rpb24oZXJyLHRleHR1cmUpXHJcbiAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICBpZihlcnIpIGNvbnNvbGUubG9nKFwi6Yyv6KqkXCIpXHJcbiAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgdmFyIHBpY3R1cmUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7IC8vdGV4dHVyZSDovYkgU3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgICAgICBzZWxmLnBsYXllckF2YXRhci5zcHJpdGVGcmFtZSA9IHBpY3R1cmU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzdGFydCAoKSB7fSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==