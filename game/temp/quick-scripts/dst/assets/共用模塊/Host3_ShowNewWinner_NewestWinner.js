
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Host3_ShowNewWinner_NewestWinner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01c0cvG7rtNEKfeKqtPa8Hn', 'Host3_ShowNewWinner_NewestWinner');
// 共用模塊/Host3_ShowNewWinner_NewestWinner.js

"use strict";

var gameModel = require("Model");

var Host3_ShowNewWinner_Original = require("Host3_ShowNewWinner"); ///主持人及時顯示中獎玩家並更新最新兩位中獎玩家js


cc.Class({
  "extends": Host3_ShowNewWinner_Original,
  properties: {
    items3_Text: {
      "default": null,
      type: cc.Label
    },
    items4_Text: {
      "default": null,
      type: cc.Label
    },
    items3_Picture: {
      "default": null,
      type: cc.Sprite
    },
    items4_Picture: {
      "default": null,
      type: cc.Sprite
    }
  },
  onLoad: function onLoad() {
    this.itemlist = [];
    this.winlist = [];
    this.index = [];
    this.indexcount = 0;
    this.alreadyend = false;
    this.items3_Text.string = "";
    this.items3_Picture.spriteFrame = null;
    gameModel.WinnerData = this;
    gameModel.SpawnNewestWinner = true;
  },
  //傳送最新2位最新得獎人資料
  NewestWinner: function NewestWinner() {
    var self = this;
    this.items3_Picture.spriteFrame = null;
    this.items3_Text.string = gameModel.winner_name[gameModel.winner_name.length - 1]; //遠端載入: 網址轉圖片

    cc.assetManager.loadRemote(gameModel.winner_picture[gameModel.winner_name.length - 1], {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.items3_Picture.spriteFrame = picture;
      }
    }); //取得第二新得獎人資料

    if (gameModel.winner_name.length >= 2) {
      self.items4_Picture.spriteFrame = null;
      this.items4_Text.string = gameModel.winner_name[gameModel.winner_name.length - 2]; //遠端載入: 網址轉圖片

      cc.assetManager.loadRemote(gameModel.winner_picture[gameModel.winner_name.length - 2], {
        ext: '.jpg' || '.png'
      }, function (err, texture) {
        if (err) console.log("錯誤");else {
          var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

          self.items4_Picture.spriteFrame = picture;
        }
      });
    } else {
      this.items4_Text.string = "";
      this.items4_Picture.spriteFrame = null;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxIb3N0M19TaG93TmV3V2lubmVyX05ld2VzdFdpbm5lci5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiSG9zdDNfU2hvd05ld1dpbm5lcl9PcmlnaW5hbCIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiaXRlbXMzX1RleHQiLCJ0eXBlIiwiTGFiZWwiLCJpdGVtczRfVGV4dCIsIml0ZW1zM19QaWN0dXJlIiwiU3ByaXRlIiwiaXRlbXM0X1BpY3R1cmUiLCJvbkxvYWQiLCJpdGVtbGlzdCIsIndpbmxpc3QiLCJpbmRleCIsImluZGV4Y291bnQiLCJhbHJlYWR5ZW5kIiwic3RyaW5nIiwic3ByaXRlRnJhbWUiLCJXaW5uZXJEYXRhIiwiU3Bhd25OZXdlc3RXaW5uZXIiLCJOZXdlc3RXaW5uZXIiLCJzZWxmIiwid2lubmVyX25hbWUiLCJsZW5ndGgiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwid2lubmVyX3BpY3R1cmUiLCJleHQiLCJlcnIiLCJ0ZXh0dXJlIiwiY29uc29sZSIsImxvZyIsInBpY3R1cmUiLCJTcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCOztBQUNBLElBQUlDLDRCQUE0QixHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBMUMsRUFFQTs7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0YsNEJBREo7QUFHTEcsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFSixFQUFFLENBQUNLO0FBRkEsS0FETDtBQUtSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRGLE1BQUFBLElBQUksRUFBRUosRUFBRSxDQUFDSztBQUZBLEtBTEw7QUFTUkUsSUFBQUEs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LENBQWlCVSxNQUFqQixHQUEwQixFQUExQjtBQUNBLFdBQUtQLGNBQUwsQ0FBb0JRLFdBQXBCLEdBQWtDLElBQWxDO0FBQ0E7QUFDSjtBQXRFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG52YXIgSG9zdDNfU2hvd05ld1dpbm5lcl9PcmlnaW5hbCA9IHJlcXVpcmUoXCJIb3N0M19TaG93TmV3V2lubmVyXCIpXHJcblxyXG4vLy/kuLvmjIHkurrlj4rmmYLpoa/npLrkuK3njY7njqnlrrbkuKbmm7TmlrDmnIDmlrDlhankvY3kuK3njY7njqnlrrZqc1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBIb3N0M19TaG93TmV3V2lubmVyX09yaWdpbmFsLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpdGVtczNfVGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbXM0X1RleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1zM19QaWN0dXJlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbXM0X1BpY3R1cmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLml0ZW1saXN0PVtdO1xyXG4gICAgICAgIHRoaXMud2lubGlzdD1bXTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gW107XHJcbiAgICAgICAgdGhpcy5pbmRleGNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmFscmVhZHllbmQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaXRlbXMzX1RleHQuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLml0ZW1zM19QaWN0dXJlLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICBnYW1lTW9kZWwuV2lubmVyRGF0YSA9IHRoaXM7XHJcbiAgICAgICAgZ2FtZU1vZGVsLlNwYXduTmV3ZXN0V2lubmVyID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/lgrPpgIHmnIDmlrAy5L2N5pyA5paw5b6X542O5Lq66LOH5paZXHJcbiAgICBOZXdlc3RXaW5uZXIoKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICB0aGlzLml0ZW1zM19QaWN0dXJlLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLml0ZW1zM19UZXh0LnN0cmluZyA9IGdhbWVNb2RlbC53aW5uZXJfbmFtZVtnYW1lTW9kZWwud2lubmVyX25hbWUubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgLy/pgaDnq6/ovInlhaU6IOe2suWdgOi9ieWclueJh1xyXG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGdhbWVNb2RlbC53aW5uZXJfcGljdHVyZVtnYW1lTW9kZWwud2lubmVyX25hbWUubGVuZ3RoIC0gMV0se2V4dCA6Jy5qcGcnfHwnLnBuZyd9LGZ1bmN0aW9uKGVycix0ZXh0dXJlKVxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBpZiAoZXJyKSBjb25zb2xlLmxvZyhcIumMr+iqpFwiKVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcGljdHVyZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTsgLy90ZXh0dXJlIOi9iSBTcHJpdGVGcmFtZVxyXG4gICAgICAgICAgICBzZWxmLml0ZW1zM19QaWN0dXJlLnNwcml0ZUZyYW1lID0gcGljdHVyZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL+WPluW+l+esrOS6jOaWsOW+l+eNjuS6uuizh+aWmVxyXG4gICAgICAgIGlmKGdhbWVNb2RlbC53aW5uZXJfbmFtZS5sZW5ndGggPj0gMikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZWxmLml0ZW1zNF9QaWN0dXJlLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICAgICB0aGlzLml0ZW1zNF9UZXh0LnN0cmluZyA9IGdhbWVNb2RlbC53aW5uZXJfbmFtZVtnYW1lTW9kZWwud2lubmVyX25hbWUubGVuZ3RoIC0gMl07XHJcbiAgICAgICAgICAgLy/pgaDnq6/ovInlhaU6IOe2suWdgOi9ieWclueJh1xyXG4gICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGdhbWVNb2RlbC53aW5uZXJfcGljdHVyZVtnYW1lTW9kZWwud2lubmVyX25hbWUubGVuZ3RoIC0gMl0se2V4dCA6Jy5qcGcnfHwnLnBuZyd9LGZ1bmN0aW9uKGVycix0ZXh0dXJlKSBcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGlmIChlcnIpY29uc29sZS5sb2coXCLpjK/oqqRcIilcclxuICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICB2YXIgcGljdHVyZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTsgLy90ZXh0dXJlIOi9iSBTcHJpdGVGcmFtZVxyXG4gICAgICAgICAgICAgICAgICAgc2VsZi5pdGVtczRfUGljdHVyZS5zcHJpdGVGcmFtZSA9IHBpY3R1cmU7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgdGhpcy5pdGVtczRfVGV4dC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICB0aGlzLml0ZW1zNF9QaWN0dXJlLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIFxyXG4gICAiXX0=