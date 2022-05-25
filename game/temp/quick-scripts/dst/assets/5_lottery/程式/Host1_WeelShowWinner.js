
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/5_lottery/程式/Host1_WeelShowWinner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eeb698HErRIJKOhBXrHgdOq', 'Host1_WeelShowWinner');
// 5_lottery/程式/Host1_WeelShowWinner.js

"use strict";

var gameModel = require("Model");

var Host3_ShowNewWinner_Original = require("Host3_ShowNewWinner");

var WinnerItem2 = require("Host4_WinnerRedpaket");

cc.Class({
  "extends": Host3_ShowNewWinner_Original,
  properties: {
    Session: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.items_parent = cc.find("畫布/中獎列表/view/內容");
    gameModel.WebSocket_NumberOfLottery_Host();
    this.Session.string = "當前場次 : " + gameModel.Session;
  },
  SpawnNewWinner: function SpawnNewWinner() {
    this.indexcount++;
    this.index.push(this.indexcount);
    var node = cc.instantiate(this.items);
    node.parent = this.items_parent;
    node.setSiblingIndex(0); //讓子物件顯示在最上層

    var obj = node.getComponent(WinnerItem2); //抓取WinnerItem

    this.itemlist.push(obj);
    this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcNV9sb3R0ZXJ5XFznqIvlvI9cXEhvc3QxX1dlZWxTaG93V2lubmVyLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJIb3N0M19TaG93TmV3V2lubmVyX09yaWdpbmFsIiwiV2lubmVySXRlbTIiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsIlNlc3Npb24iLCJ0eXBlIiwiTGFiZWwiLCJzdGFydCIsIml0ZW1zX3BhcmVudCIsImZpbmQiLCJXZWJTb2NrZXRfTnVtYmVyT2ZMb3R0ZXJ5X0hvc3QiLCJzdHJpbmciLCJTcGF3bk5ld1dpbm5lciIsImluZGV4Y291bnQiLCJpbmRleCIsInB1c2giLCJub2RlIiwiaW5zdGFudGlhdGUiLCJpdGVtcyIsInBhcmVudCIsInNldFNpYmxpbmdJbmRleCIsIm9iaiIsImdldENvbXBvbmVudCIsIml0ZW1saXN0IiwidXBkYXRlSW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCOztBQUNBLElBQUlDLDRCQUE0QixHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBMUM7O0FBQ0EsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsc0JBQUQsQ0FBekI7O0FBRUFHLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsNEJBREo7QUFHTEksRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBQztBQUNKLGlCQUFRLElBREo7QUFFSkMsTUFBQUEsSUFBSSxFQUFDSixFQUFFLENBQUNLO0FBRko7QUFEQSxHQUhQO0FBVUw7QUFFQTtBQUVBQyxFQUFBQSxLQWRLLG1CQWNJO0FBQ0wsU0FBS0MsWUFBTCxHQUFvQlAsRUFBRSxDQUFDUSxJQUFILENBQVEsaUJBQVIsQ0FBcEI7QUFDQVosSUFBQUEsU0FBUyxDQUFDYSw4QkFBVjtBQUNBLFNBQUtOLE9BQUwsQ0FBYU8sTUFBYixHQUFzQixZQUFZZCxTQUFTLENBQUNPLE9BQTVDO0FBQ0gsR0FsQkk7QUFvQkxRLEVBQUFBLGNBcEJLLDRCQW9CVztBQUNaLFNBQUtDLFVBQUw7QUFDQSxTQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsS0FBS0YsVUFBckI7QUFDQSxRQUFJRyxJQUFJLEdBQUdmLEVBQUUsQ0FBQ2dCLFdBQUgsQ0FBZSxLQUFLQyxLQUFwQixDQUFYO0FBQ0FGLElBQUFBLElBQUksQ0FBQ0csTUFBTCxHQUFjLEtBQUtYLFlBQW5CO0FBQ0FRLElBQUFBLElBQUksQ0FBQ0ksZUFBTCxDQUFxQixDQUFyQixFQUxZLENBS2E7O0FBQ3pCLFFBQUlDLEdBQUcsR0FBR0wsSUFBSSxDQUFDTSxZQUFMLENBQWtCdEIsV0FBbEIsQ0FBVixDQU5ZLENBTTZCOztBQUN6QyxTQUFLdUIsUUFBTCxDQUFjUixJQUFkLENBQW1CTSxHQUFuQjtBQUNBLFNBQUtFLFFBQUwsQ0FBYyxLQUFLVixVQUFMLEdBQWtCLENBQWhDLEVBQW1DVyxVQUFuQyxDQUE4QyxLQUFLWCxVQUFMLEdBQWtCLENBQWhFO0FBQ0gsR0E3QkksQ0ErQkw7O0FBL0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcbnZhciBIb3N0M19TaG93TmV3V2lubmVyX09yaWdpbmFsID0gcmVxdWlyZShcIkhvc3QzX1Nob3dOZXdXaW5uZXJcIilcclxudmFyIFdpbm5lckl0ZW0yID0gcmVxdWlyZShcIkhvc3Q0X1dpbm5lclJlZHBha2V0XCIpXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBIb3N0M19TaG93TmV3V2lubmVyX09yaWdpbmFsLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBTZXNzaW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLml0ZW1zX3BhcmVudCA9IGNjLmZpbmQoXCLnlavluIMv5Lit542O5YiX6KGoL3ZpZXcv5YWn5a65XCIpO1xyXG4gICAgICAgIGdhbWVNb2RlbC5XZWJTb2NrZXRfTnVtYmVyT2ZMb3R0ZXJ5X0hvc3QoKTtcclxuICAgICAgICB0aGlzLlNlc3Npb24uc3RyaW5nID0gXCLnlbbliY3loLTmrKEgOiBcIiArIGdhbWVNb2RlbC5TZXNzaW9uOyBcclxuICAgIH0sXHJcblxyXG4gICAgU3Bhd25OZXdXaW5uZXIoKXtcclxuICAgICAgICB0aGlzLmluZGV4Y291bnQrKztcclxuICAgICAgICB0aGlzLmluZGV4LnB1c2godGhpcy5pbmRleGNvdW50KTtcclxuICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbXMpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtc19wYXJlbnQ7XHJcbiAgICAgICAgbm9kZS5zZXRTaWJsaW5nSW5kZXgoMCk7IC8v6K6T5a2Q54mp5Lu26aGv56S65Zyo5pyA5LiK5bGkXHJcbiAgICAgICAgdmFyIG9iaiA9IG5vZGUuZ2V0Q29tcG9uZW50KFdpbm5lckl0ZW0yKTsvL+aKk+WPlldpbm5lckl0ZW1cclxuICAgICAgICB0aGlzLml0ZW1saXN0LnB1c2gob2JqKTtcclxuICAgICAgICB0aGlzLml0ZW1saXN0W3RoaXMuaW5kZXhjb3VudCAtIDFdLnVwZGF0ZUluZm8odGhpcy5pbmRleGNvdW50IC0gMSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19