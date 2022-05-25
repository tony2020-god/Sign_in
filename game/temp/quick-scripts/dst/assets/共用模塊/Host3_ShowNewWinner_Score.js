
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Host3_ShowNewWinner_Score.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03276Fbw89CPYjVjkDILSwm', 'Host3_ShowNewWinner_Score');
// 共用模塊/Host3_ShowNewWinner_Score.js

"use strict";

var gameModel = require("Model");

var WinnerItem = require('Host3_WinRecordItem_Score');

var Host3_ShowNewWinner_Original = require("Host3_ShowNewWinner"); ///主持人及時顯示玩家分數js


cc.Class({
  "extends": Host3_ShowNewWinner_Original,
  properties: {
    round: {
      "default": null,
      type: cc.Label
    },
    WaitingRank: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    this.alreadyend = false;
    this.itemlist = [];
    this.winlist = [];
    this.index = [];
    this.indexcount = 0;
    gameModel.WinnerData = this;
    gameModel.SpawnNewestWinner = false;
  },
  start: function start() {
    this.items_parent = cc.find("畫布/中獎列表/view/內容");
    gameModel.WebSocket_NumberOfLottery_Score_Host();
    this.round.string = gameModel.CurrentRound;
  },
  //列出得人獎物件
  SpawnNewWinner: function SpawnNewWinner() {
    if (gameModel.winner_name.length % 2 == 0) {
      this.indexcount++;
      this.index.push(this.indexcount);
      var node = cc.instantiate(this.items);
      node.parent = this.items_parent;
      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
    } else {
      this.indexcount++;
      this.index.push(this.indexcount);
      var node = cc.instantiate(this.items2);
      node.parent = this.items_parent;
      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
    }
  },
  ClearRank: function ClearRank() {
    this.indexcount = 0;
    this.index.length = 0;
    this.itemlist.length = 0;
    this.items_parent.removeAllChildren();
  },
  NextSence: function NextSence() {
    gameModel.WebSocket_GameStatus_Host("end", 0.1);
    gameModel.GameStatusMessage = "end";
    this.scheduleOnce(function () {
      cc.director.loadScene("Host4_Last" + gameModel.BackGround_Theme);
    }, 2);
  },
  CloseGame: function CloseGame() {
    gameModel.WebSocket_GameStatus_Host("calculate", 0.1);
    gameModel.GameStatusMessage = "calculate";
  },
  update: function update(dt) {
    if (gameModel.GameStatusMessage == "calculate" && this.alreadyend == false) {
      this.alreadyend = true;
      this.WaitingRank.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxIb3N0M19TaG93TmV3V2lubmVyX1Njb3JlLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJXaW5uZXJJdGVtIiwiSG9zdDNfU2hvd05ld1dpbm5lcl9PcmlnaW5hbCIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicm91bmQiLCJ0eXBlIiwiTGFiZWwiLCJXYWl0aW5nUmFuayIsIk5vZGUiLCJvbkxvYWQiLCJhbHJlYWR5ZW5kIiwiaXRlbWxpc3QiLCJ3aW5saXN0IiwiaW5kZXgiLCJpbmRleGNvdW50IiwiV2lubmVyRGF0YSIsIlNwYXduTmV3ZXN0V2lubmVyIiwic3RhcnQiLCJpdGVtc19wYXJlbnQiLCJmaW5kIiwiV2ViU29ja2V0X051bWJlck9mTG90dGVyeV9TY29yZV9Ib3N0Iiwic3RyaW5nIiwiQ3VycmVudFJvdW5kIiwiU3Bhd25OZXdXaW5uZXIiLCJ3aW5uZXJfbmFtZSIsImxlbmd0aCIsInB1c2giLCJub2RlIiwiaW5zdGFudGlhdGUiLCJpdGVtcyIsInBhcmVudCIsIm9iaiIsImdldENvbXBvbmVudCIsInVwZGF0ZUluZm8iLCJpdGVtczIiLCJDbGVhclJhbmsiLCJyZW1vdmVBbGxDaGlsZHJlbiIsIk5leHRTZW5jZSIsIldlYlNvY2tldF9HYW1lU3RhdHVzX0hvc3QiLCJHYW1lU3RhdHVzTWVzc2FnZSIsInNjaGVkdWxlT25jZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiQmFja0dyb3VuZF9UaGVtZSIsIkNsb3NlR2FtZSIsInVwZGF0ZSIsImR0IiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsMkJBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsNEJBQTRCLEdBQUdGLE9BQU8sQ0FBQyxxQkFBRCxDQUExQyxFQUVBOzs7QUFD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QUEsU0FBUyxDQUFDMEMsaUJBQVYsR0FBOEIsS0FBOUI7QUFDQSxTQUFLQyxZQUFMLENBQWtCLFlBQVc7QUFDekJ2QyxNQUFBQSxFQUFFLENBQUN3QyxRQUFILENBQVlDLFNBQVosQ0FBc0IsZUFBYzdDLFNBQVMsQ0FBQzhDLGdCQUE5QztBQUNILEtBRkQsRUFFRyxDQUZIO0FBR0gsR0FwRUk7QUFzRUxDLEVBQUFBLFNBdEVLLHVCQXNFTTtBQUNQL0MsSUFBQUEsU0FBUyxDQUFDeUMseUJBQVYsQ0FBb0MsV0FBcEMsRUFBZ0QsR0FBaEQ7QUFDQXpDLElBQUFBLFNBQVMsQ0FBQzBDLGlCQUFWLEdBQThCLFdBQTlCO0FBQ0gsR0F6RUk7QUEyRUxNLEVBQUFBLE1BM0VLLGtCQTJFR0MsRUEzRUgsRUEyRU87QUFDUixRQUFHakQsU0FBUyxDQUFDMEMsaUJBQVYsSUFBK0IsV0FBL0IsSUFBK0MsS0FBSzdCLFVBQUwsSUFBbUIsS0FBckUsRUFDQTtBQUNHLFdBQUtBLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxXQUFLSCxXQUFMLENBQWlCd0MsTUFBakIsR0FBMEIsSUFBMUI7QUFDRjtBQUNKO0FBakZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcbnZhciBXaW5uZXJJdGVtID0gcmVxdWlyZSgnSG9zdDNfV2luUmVjb3JkSXRlbV9TY29yZScpXHJcbnZhciBIb3N0M19TaG93TmV3V2lubmVyX09yaWdpbmFsID0gcmVxdWlyZShcIkhvc3QzX1Nob3dOZXdXaW5uZXJcIilcclxuXHJcbi8vL+S4u+aMgeS6uuWPiuaZgumhr+ekuueOqeWutuWIhuaVuGpzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IEhvc3QzX1Nob3dOZXdXaW5uZXJfT3JpZ2luYWwsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgV2FpdGluZ1Jhbms6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbHJlYWR5ZW5kID0gZmFsc2VcclxuICAgICAgICB0aGlzLml0ZW1saXN0PVtdO1xyXG4gICAgICAgIHRoaXMud2lubGlzdD1bXTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gW107XHJcbiAgICAgICAgdGhpcy5pbmRleGNvdW50ID0gMDtcclxuICAgICAgICBnYW1lTW9kZWwuV2lubmVyRGF0YSA9IHRoaXM7XHJcbiAgICAgICAgZ2FtZU1vZGVsLlNwYXduTmV3ZXN0V2lubmVyID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtc19wYXJlbnQgPSBjYy5maW5kKFwi55Wr5biDL+S4reeNjuWIl+ihqC92aWV3L+WFp+WuuVwiKTtcclxuICAgICAgICBnYW1lTW9kZWwuV2ViU29ja2V0X051bWJlck9mTG90dGVyeV9TY29yZV9Ib3N0KClcclxuICAgICAgICB0aGlzLnJvdW5kLnN0cmluZyA9IGdhbWVNb2RlbC5DdXJyZW50Um91bmQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5YiX5Ye65b6X5Lq6542O54mp5Lu2XHJcbiAgICBTcGF3bk5ld1dpbm5lcigpe1xyXG4gICAgICAgICAgIGlmKGdhbWVNb2RlbC53aW5uZXJfbmFtZS5sZW5ndGggJSAyID09IDApXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICB0aGlzLmluZGV4Y291bnQrKztcclxuICAgICAgICAgICAgICAgdGhpcy5pbmRleC5wdXNoKHRoaXMuaW5kZXhjb3VudCk7XHJcbiAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtcyk7XHJcbiAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtc19wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgIHZhciBvYmogPSBub2RlLmdldENvbXBvbmVudChXaW5uZXJJdGVtKTsvL+aKk+WPlldpbm5lckl0ZW1cclxuICAgICAgICAgICAgICAgdGhpcy5pdGVtbGlzdC5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgIHRoaXMuaXRlbWxpc3RbdGhpcy5pbmRleGNvdW50IC0gMV0udXBkYXRlSW5mbyh0aGlzLmluZGV4Y291bnQgLSAxKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgdGhpcy5pbmRleGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgIHRoaXMuaW5kZXgucHVzaCh0aGlzLmluZGV4Y291bnQpO1xyXG4gICAgICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbXMyKTtcclxuICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1zX3BhcmVudDtcclxuICAgICAgICAgICAgICAgdmFyIG9iaiA9IG5vZGUuZ2V0Q29tcG9uZW50KFdpbm5lckl0ZW0pOy8v5oqT5Y+WV2lubmVySXRlbVxyXG4gICAgICAgICAgICAgICB0aGlzLml0ZW1saXN0LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgdGhpcy5pdGVtbGlzdFt0aGlzLmluZGV4Y291bnQgLSAxXS51cGRhdGVJbmZvKHRoaXMuaW5kZXhjb3VudCAtIDEpO1xyXG4gICAgICAgICAgIH0gICAgXHJcbiAgICB9LFxyXG5cclxuICAgIENsZWFyUmFuaygpe1xyXG4gICAgICAgIHRoaXMuaW5kZXhjb3VudCA9IDBcclxuICAgICAgICB0aGlzLmluZGV4Lmxlbmd0aCA9IDBcclxuICAgICAgICB0aGlzLml0ZW1saXN0Lmxlbmd0aCA9IDBcclxuICAgICAgICB0aGlzLml0ZW1zX3BhcmVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgTmV4dFNlbmNlKCl7XHJcbiAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9HYW1lU3RhdHVzX0hvc3QoXCJlbmRcIiwwLjEpXHJcbiAgICAgICAgZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID0gXCJlbmRcIlxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkgeyAgIFxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJIb3N0NF9MYXN0XCIrIGdhbWVNb2RlbC5CYWNrR3JvdW5kX1RoZW1lKTtcclxuICAgICAgICB9LCAyKTsgXHJcbiAgICB9LFxyXG5cclxuICAgIENsb3NlR2FtZSgpe1xyXG4gICAgICAgIGdhbWVNb2RlbC5XZWJTb2NrZXRfR2FtZVN0YXR1c19Ib3N0KFwiY2FsY3VsYXRlXCIsMC4xKVxyXG4gICAgICAgIGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9IFwiY2FsY3VsYXRlXCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZihnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPT0gXCJjYWxjdWxhdGVcIiAmJiAgdGhpcy5hbHJlYWR5ZW5kID09IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICB0aGlzLmFscmVhZHllbmQgPSB0cnVlXHJcbiAgICAgICAgICAgdGhpcy5XYWl0aW5nUmFuay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiBcclxuICAgIl19