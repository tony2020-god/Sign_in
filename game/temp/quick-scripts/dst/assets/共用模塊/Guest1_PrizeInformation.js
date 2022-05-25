
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Guest1_PrizeInformation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b83ce5vZENGcp/Bx3GTkY93', 'Guest1_PrizeInformation');
// 共用模塊/Guest1_PrizeInformation.js

"use strict";

var gameModel = require("Model");

var RecordItem = require('Guest5_PrizeRecordItem'); ///玩家將獎品資訊在加入遊戲場景顯示出來js


cc.Class({
  "extends": cc.Component,
  properties: {
    prize_information: {
      "default": null,
      type: cc.Node
    },
    prize_information_Btn: {
      "default": null,
      type: cc.Sprite
    },
    prize_Btn_UP: {
      "default": null,
      type: cc.SpriteFrame
    },
    prize_Btn_DOWN: {
      "default": null,
      type: cc.SpriteFrame
    },
    prize_information_Item: {
      "default": null,
      type: cc.Prefab
    },
    items_parent: {
      "default": null,
      type: cc.Node
    }
  },
  onload: function onload() {},
  start: function start() {
    this.OpenPrize_Information = false;
    this.itemlist = [];
    this.indexcount = 0;
    this.SpawnPrizeInformation();
  },
  PrizeInformation_Press: function PrizeInformation_Press() {
    if (this.OpenPrize_Information == false) {
      this.prize_information_Btn.spriteFrame = this.prize_Btn_DOWN;
      this.OpenPrize_Information = true;
      cc.tween(this.prize_information).to(0.1, {
        position: cc.v2(0, -158)
      }).start();
    } else {
      this.prize_information_Btn.spriteFrame = this.prize_Btn_UP;
      cc.tween(this.prize_information).to(0.2, {
        position: cc.v2(0, -2527)
      }).start();
      this.OpenPrize_Information = false;
    }
  },
  SpawnPrizeInformation: function SpawnPrizeInformation() {
    for (var i = 0; i < gameModel.prize_name_guest.length; i++) {
      var node = cc.instantiate(this.prize_information_Item); //clone已有節點，生成items格式

      node.parent = this.items_parent;
      var obj = node.getComponent(RecordItem); //抓取RecordItem

      if (gameModel.exchangePrize[i] == "yes") node.setSiblingIndex(gameModel.prize_name_guest.length);else node.setSiblingIndex(0);
      obj.updateInfo(i);
    }

    this.indexcount = gameModel.prize_name_guest.length - 1;
  },
  SpawnPrize: function SpawnPrize() {
    this.indexcount++;
    var node = cc.instantiate(this.prize_information_Item); //clone已有節點，生成items格式

    node.parent = this.items_parent;
    node.setSiblingIndex(0); //讓子物件顯示在最上層

    var obj = node.getComponent(RecordItem); //抓取RecordItem

    obj.updatePrizeBlock(this.indexcount);
  },
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxHdWVzdDFfUHJpemVJbmZvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiUmVjb3JkSXRlbSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJpemVfaW5mb3JtYXRpb24iLCJ0eXBlIiwiTm9kZSIsInByaXplX2luZm9ybWF0aW9uX0J0biIsIlNwcml0ZSIsInByaXplX0J0bl9VUCIsIlNwcml0ZUZyYW1lIiwicHJpemVfQnRuX0RPV04iLCJwcml6ZV9pbmZvcm1hdGlvbl9JdGVtIiwiUHJlZmFiIiwiaXRlbXNfcGFyZW50Iiwib25sb2FkIiwic3RhcnQiLCJPcGVuUHJpemVfSW5mb3JtYXRpb24iLCJpdGVtbGlzdCIsImluZGV4Y291bnQiLCJTcGF3blByaXplSW5mb3JtYXRpb24iLCJQcml6ZUluZm9ybWF0aW9uX1ByZXNzIiwic3ByaXRlRnJhbWUiLCJ0d2VlbiIsInRvIiwicG9zaXRpb24iLCJ2MiIsImkiLCJwcml6ZV9uYW1lX2d1ZXN0IiwibGVuZ3RoIiwibm9kZSIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwib2JqIiwiZ2V0Q29tcG9uZW50IiwiZXhjaGFuZ2VQcml6ZSIsInNldFNpYmxpbmdJbmRleCIsInVwZGF0ZUluZm8iLCJTcGF3blByaXplIiwidXBkYXRlUHJpemVCbG9jayIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsd0JBQUQsQ0FBeEIsRUFFQTs7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxpQkFBaUIsRUFBQztBQUNkLGlCQUFRLElBRE07QUFFZEMs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M0IsR0FBb0MsQ0FBdEQ7QUFDSCxHQTFFSTtBQTRFTFMsRUFBQUEsVUE1RUssd0JBNEVPO0FBQ1IsU0FBS25CLFVBQUw7QUFDQSxRQUFJVyxJQUFJLEdBQUc5QixFQUFFLENBQUMrQixXQUFILENBQWUsS0FBS25CLHNCQUFwQixDQUFYLENBRlEsQ0FFK0M7O0FBQ3ZEa0IsSUFBQUEsSUFBSSxDQUFDRSxNQUFMLEdBQWMsS0FBS2xCLFlBQW5CO0FBQ0FnQixJQUFBQSxJQUFJLENBQUNNLGVBQUwsQ0FBcUIsQ0FBckIsRUFKUSxDQUlpQjs7QUFDekIsUUFBSUgsR0FBRyxHQUFHSCxJQUFJLENBQUNJLFlBQUwsQ0FBa0JuQyxVQUFsQixDQUFWLENBTFEsQ0FLZ0M7O0FBQ3hDa0MsSUFBQUEsR0FBRyxDQUFDTSxnQkFBSixDQUFxQixLQUFLcEIsVUFBMUI7QUFDRixHQW5GRztBQXFGSnFCLEVBQUFBLE1BckZJLGtCQXFGSUMsRUFyRkosRUFxRlEsQ0FDWDtBQXRGRyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG52YXIgUmVjb3JkSXRlbSA9IHJlcXVpcmUoJ0d1ZXN0NV9Qcml6ZVJlY29yZEl0ZW0nKVxyXG5cclxuLy8v546p5a625bCH542O5ZOB6LOH6KiK5Zyo5Yqg5YWl6YGK5oiy5aC05pmv6aGv56S65Ye65L6GanNcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcml6ZV9pbmZvcm1hdGlvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlIFxyXG4gICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHByaXplX2luZm9ybWF0aW9uX0J0bjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwcml6ZV9CdG5fVVA6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuU3ByaXRlRnJhbWVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwcml6ZV9CdG5fRE9XTjp7XHJcbiAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgIHR5cGU6Y2MuU3ByaXRlRnJhbWVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwcml6ZV9pbmZvcm1hdGlvbl9JdGVtOntcclxuICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgdHlwZTpjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpdGVtc19wYXJlbnQ6e1xyXG4gICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICB0eXBlOmNjLk5vZGUgXHJcbiAgICAgICAgfSxcclxuICB9LFxyXG4gICAgXHJcbiAgICBvbmxvYWQoKXtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgdGhpcy5PcGVuUHJpemVfSW5mb3JtYXRpb24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5pdGVtbGlzdCA9IFtdO1xyXG4gICAgICB0aGlzLmluZGV4Y291bnQgPSAwXHJcbiAgICAgIHRoaXMuU3Bhd25Qcml6ZUluZm9ybWF0aW9uKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIFByaXplSW5mb3JtYXRpb25fUHJlc3MoKXtcclxuICAgICAgICBpZih0aGlzLk9wZW5Qcml6ZV9JbmZvcm1hdGlvbiA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnByaXplX2luZm9ybWF0aW9uX0J0bi5zcHJpdGVGcmFtZSA9IHRoaXMucHJpemVfQnRuX0RPV047XHJcbiAgICAgICAgICB0aGlzLk9wZW5Qcml6ZV9JbmZvcm1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICBjYy50d2Vlbih0aGlzLnByaXplX2luZm9ybWF0aW9uKVxyXG4gICAgICAgICAgLnRvKDAuMSwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTE1OCl9KVxyXG4gICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnByaXplX2luZm9ybWF0aW9uX0J0bi5zcHJpdGVGcmFtZSA9IHRoaXMucHJpemVfQnRuX1VQO1xyXG4gICAgICAgICAgY2MudHdlZW4odGhpcy5wcml6ZV9pbmZvcm1hdGlvbilcclxuICAgICAgICAgIC50bygwLjIsIHsgcG9zaXRpb246IGNjLnYyKDAsIC0yNTI3KX0pXHJcbiAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgIHRoaXMuT3BlblByaXplX0luZm9ybWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgIH0sXHJcbiAgICBcclxuICAgICBTcGF3blByaXplSW5mb3JtYXRpb24oKXtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZ2FtZU1vZGVsLnByaXplX25hbWVfZ3Vlc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJpemVfaW5mb3JtYXRpb25fSXRlbSkgLy9jbG9uZeW3suacieevgOm7nu+8jOeUn+aIkGl0ZW1z5qC85byPXHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtc19wYXJlbnQ7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBub2RlLmdldENvbXBvbmVudChSZWNvcmRJdGVtKSAvL+aKk+WPllJlY29yZEl0ZW1cclxuICAgICAgICAgICAgaWYoZ2FtZU1vZGVsLmV4Y2hhbmdlUHJpemVbaV0gPT0gXCJ5ZXNcIikgbm9kZS5zZXRTaWJsaW5nSW5kZXgoZ2FtZU1vZGVsLnByaXplX25hbWVfZ3Vlc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgZWxzZSBub2RlLnNldFNpYmxpbmdJbmRleCgwKVxyXG4gICAgICAgICAgICBvYmoudXBkYXRlSW5mbyhpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleGNvdW50ID0gZ2FtZU1vZGVsLnByaXplX25hbWVfZ3Vlc3QubGVuZ3RoIC0gMTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFNwYXduUHJpemUoKXtcclxuICAgICAgICB0aGlzLmluZGV4Y291bnQgKytcclxuICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJpemVfaW5mb3JtYXRpb25fSXRlbSkgLy9jbG9uZeW3suacieevgOm7nu+8jOeUn+aIkGl0ZW1z5qC85byPXHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1zX3BhcmVudDtcclxuICAgICAgICBub2RlLnNldFNpYmxpbmdJbmRleCgwKTsgLy/orpPlrZDnianku7bpoa/npLrlnKjmnIDkuIrlsaRcclxuICAgICAgICB2YXIgb2JqID0gbm9kZS5nZXRDb21wb25lbnQoUmVjb3JkSXRlbSkgLy/mipPlj5ZSZWNvcmRJdGVtXHJcbiAgICAgICAgb2JqLnVwZGF0ZVByaXplQmxvY2sodGhpcy5pbmRleGNvdW50KTtcclxuICAgICB9LFxyXG5cclxuICAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgfSxcclxufSk7XHJcbiJdfQ==