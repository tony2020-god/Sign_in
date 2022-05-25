
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Guest5_PrizeRecordItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34a39kGdyJLpY+shmDebf2c', 'Guest5_PrizeRecordItem');
// 共用模塊/Guest5_PrizeRecordItem.js

"use strict";

var gameModel = require("Model"); ///玩家將獎品資訊顯示出來js


cc.Class({
  "extends": cc.Component,
  properties: {
    timelabel: {
      "default": null,
      type: cc.Label
    },
    roundlabel: {
      "default": null,
      type: cc.Label
    },
    prize_namelabel: {
      "default": null,
      type: cc.Label
    },
    PrizeMethod: {
      "default": null,
      type: cc.Label
    },
    Prize_img: {
      "default": null,
      type: cc.Sprite
    },
    AlreadyExchange: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    this.prize_method_chinese = null;
  },
  //取得當前獎品資料
  updateInfo: function updateInfo(i) {
    var self = this;
    cc.assetManager.loadRemote(gameModel.Domain + gameModel.prize_picture[i], {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.Prize_img.getComponent(cc.Sprite).spriteFrame = picture;
      }
    });
    this.timelabel.string = gameModel.Win_Time[i]; //顯示得獎時間

    this.roundlabel.string = "第" + gameModel.getprize_round[i] + "輪"; //顯示得獎輪次

    this.prize_namelabel.string = gameModel.prize_name_guest[i]; //顯示獎品名稱

    this.prize_method_chinese = gameModel.prize_method[gameModel.WhitchPrize_index] == "site" ? "現場兌換" : "郵件兌換"; //將兌獎方式翻成中文

    this.PrizeMethod.string = this.prize_method_chinese; //顯示兌獎方式

    if (gameModel.exchangePrize[i] == "yes") this.AlreadyExchange.active = true; //若已兌換，兌換按鍵功能停止，並將圖片轉為已兌換
  },
  //取得當前獎品資料
  updatePrizeBlock: function updatePrizeBlock(i) {
    var self = this;
    cc.assetManager.loadRemote(gameModel.Domain + gameModel.PrizeStaffs[i].picture, {
      ext: '.jpg' || '.png'
    }, function (err, texture) {
      if (err) console.log("錯誤");else {
        var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

        self.Prize_img.getComponent(cc.Sprite).spriteFrame = picture;
      }
    });
    this.timelabel.string = gameModel.PrizeStaffs[i].win_time; //顯示得獎時間

    this.roundlabel.string = "第" + gameModel.PrizeStaffs[i].round + "輪"; //顯示得獎輪次

    this.prize_namelabel.string = gameModel.PrizeStaffs[i].prize_name; //顯示獎品名稱

    this.prize_method_chinese = gameModel.PrizeStaffs[i].method == "site" ? "現場兌換" : "郵件兌換"; //將兌獎方式翻成中文

    this.PrizeMethod.string = this.prize_method_chinese; //顯示兌獎方式

    if (gameModel.PrizeStaffs[i].status == "yes") this.AlreadyExchange.active = true; //若已兌換，兌換按鍵功能停止，並將圖片轉為已兌換
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxHdWVzdDVfUHJpemVSZWNvcmRJdGVtLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpbWVsYWJlbCIsInR5cGUiLCJMYWJlbCIsInJvdW5kbGFiZWwiLCJwcml6ZV9uYW1lbGFiZWwiLCJQcml6ZU1ldGhvZCIsIlByaXplX2ltZyIsIlNwcml0ZSIsIkFscmVhZHlFeGNoYW5nZSIsIk5vZGUiLCJvbkxvYWQiLCJwcml6ZV9tZXRob2RfY2hpbmVzZSIsInVwZGF0ZUluZm8iLCJpIiwic2VsZiIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJEb21haW4iLCJwcml6ZV9waWN0dXJlIiwiZXh0IiwiZXJyIiwidGV4dHVyZSIsImNvbnNvbGUiLCJsb2ciLCJwaWN0dXJlIiwiU3ByaXRlRnJhbWUiLCJnZXRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsInN0cmluZyIsIldpbl9UaW1lIiwiZ2V0cHJpemVfcm91bmQiLCJwcml6ZV9uYW1lX2d1ZXN0IiwicHJpemVfbWV0aG9kIiwiV2hpdGNoUHJpemVfaW5kZXgiLCJleGNoYW5nZVByaXplIiwiYWN0aXZlIiwidXBkYXRlUHJpemVCbG9jayIsIlByaXplU3RhZmZzIiwid2luX3RpbWUiLCJyb3VuZCIsInByaXplX25hbWUiLCJtZXRob2QiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUF2QixFQUVBOzs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRTtBQUNQLGlCQUFTLElBREY7QUFFUEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkYsS0FESDtB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QUNwRixHQTVFSSxDQThFTDs7QUE5RUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdhbWVNb2RlbCA9IHJlcXVpcmUoXCJNb2RlbFwiKTtcclxuXHJcbi8vL+eOqeWutuWwh+eNjuWTgeizh+ioiumhr+ekuuWHuuS+hmpzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGltZWxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3VuZGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcHJpemVfbmFtZWxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBQcml6ZU1ldGhvZDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBQcml6ZV9pbWc6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEFscmVhZHlFeGNoYW5nZTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMucHJpemVfbWV0aG9kX2NoaW5lc2UgPSBudWxsXHJcbiAgICB9LFxyXG5cclxuICAgIC8v5Y+W5b6X55W25YmN542O5ZOB6LOH5paZXHJcbiAgICB1cGRhdGVJbmZvKGkpeyBcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShnYW1lTW9kZWwuRG9tYWluICsgZ2FtZU1vZGVsLnByaXplX3BpY3R1cmVbaV0se2V4dCA6Jy5qcGcnfHwnLnBuZyd9LGZ1bmN0aW9uKGVycix0ZXh0dXJlKVxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGlmKGVycikgY29uc29sZS5sb2coXCLpjK/oqqRcIilcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGljdHVyZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTsgLy90ZXh0dXJlIOi9iSBTcHJpdGVGcmFtZVxyXG4gICAgICAgICAgICAgICAgc2VsZi5Qcml6ZV9pbWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBwaWN0dXJlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudGltZWxhYmVsLnN0cmluZyA9IGdhbWVNb2RlbC5XaW5fVGltZVtpXTsgIC8v6aGv56S65b6X542O5pmC6ZaTXHJcbiAgICAgICAgdGhpcy5yb3VuZGxhYmVsLnN0cmluZyA9IFwi56ysXCIgKyBnYW1lTW9kZWwuZ2V0cHJpemVfcm91bmRbaV0gKyBcIui8qlwiOyAvL+mhr+ekuuW+l+eNjui8quasoVxyXG4gICAgICAgIHRoaXMucHJpemVfbmFtZWxhYmVsLnN0cmluZyA9IGdhbWVNb2RlbC5wcml6ZV9uYW1lX2d1ZXN0W2ldOyAvL+mhr+ekuueNjuWTgeWQjeeosVxyXG4gICAgICAgIHRoaXMucHJpemVfbWV0aG9kX2NoaW5lc2UgPSBnYW1lTW9kZWwucHJpemVfbWV0aG9kW2dhbWVNb2RlbC5XaGl0Y2hQcml6ZV9pbmRleF0gPT0gXCJzaXRlXCIgPyBcIuePvuWgtOWFjOaPm1wiIDogXCLpg7Xku7blhYzmj5tcIiAvL+Wwh+WFjOeNjuaWueW8j+e/u+aIkOS4reaWh1xyXG4gICAgICAgIHRoaXMuUHJpemVNZXRob2Quc3RyaW5nID0gdGhpcy5wcml6ZV9tZXRob2RfY2hpbmVzZTsgLy/poa/npLrlhYznjY7mlrnlvI9cclxuICAgICAgICBpZihnYW1lTW9kZWwuZXhjaGFuZ2VQcml6ZVtpXSA9PSBcInllc1wiKSB0aGlzLkFscmVhZHlFeGNoYW5nZS5hY3RpdmUgPSB0cnVlOyAvL+iLpeW3suWFjOaPm++8jOWFjOaPm+aMiemNteWKn+iDveWBnOatou+8jOS4puWwh+WclueJh+i9ieeCuuW3suWFjOaPm1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+WPluW+l+eVtuWJjeeNjuWTgeizh+aWmVxyXG4gICAgdXBkYXRlUHJpemVCbG9jayhpKXsgXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZ2FtZU1vZGVsLkRvbWFpbiArIGdhbWVNb2RlbC5Qcml6ZVN0YWZmc1tpXS5waWN0dXJlLHtleHQgOicuanBnJ3x8Jy5wbmcnfSxmdW5jdGlvbihlcnIsdGV4dHVyZSlcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBpZihlcnIpIGNvbnNvbGUubG9nKFwi6Yyv6KqkXCIpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBpY3R1cmUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7IC8vdGV4dHVyZSDovYkgU3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgICAgIHNlbGYuUHJpemVfaW1nLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcGljdHVyZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudGltZWxhYmVsLnN0cmluZyA9IGdhbWVNb2RlbC5Qcml6ZVN0YWZmc1tpXS53aW5fdGltZTsgIC8v6aGv56S65b6X542O5pmC6ZaTXHJcbiAgICAgICAgdGhpcy5yb3VuZGxhYmVsLnN0cmluZyA9IFwi56ysXCIgKyBnYW1lTW9kZWwuUHJpemVTdGFmZnNbaV0ucm91bmQgKyBcIui8qlwiOyAvL+mhr+ekuuW+l+eNjui8quasoVxyXG4gICAgICAgIHRoaXMucHJpemVfbmFtZWxhYmVsLnN0cmluZyA9IGdhbWVNb2RlbC5Qcml6ZVN0YWZmc1tpXS5wcml6ZV9uYW1lOyAvL+mhr+ekuueNjuWTgeWQjeeosVxyXG4gICAgICAgIHRoaXMucHJpemVfbWV0aG9kX2NoaW5lc2UgPSBnYW1lTW9kZWwuUHJpemVTdGFmZnNbaV0ubWV0aG9kID09IFwic2l0ZVwiID8gXCLnj77loLTlhYzmj5tcIiA6IFwi6YO15Lu25YWM5o+bXCIgLy/lsIflhYznjY7mlrnlvI/nv7vmiJDkuK3mlodcclxuICAgICAgICB0aGlzLlByaXplTWV0aG9kLnN0cmluZyA9IHRoaXMucHJpemVfbWV0aG9kX2NoaW5lc2U7IC8v6aGv56S65YWM542O5pa55byPXHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLlByaXplU3RhZmZzW2ldLnN0YXR1cyA9PSBcInllc1wiKSB0aGlzLkFscmVhZHlFeGNoYW5nZS5hY3RpdmUgPSB0cnVlOyAvL+iLpeW3suWFjOaPm++8jOWFjOaPm+aMiemNteWKn+iDveWBnOatou+8jOS4puWwh+WclueJh+i9ieeCuuW3suWFjOaPm1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==