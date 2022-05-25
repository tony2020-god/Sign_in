
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Host4_ShowWinner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '950f2YBL+VE0pB4ISoh9tdi', 'Host4_ShowWinner');
// 共用模塊/Host4_ShowWinner.js

"use strict";

var WinnerItem = require('Host4_WinnerRedpaket');

var gameModel = require("Model"); ///主持人結算場景顯示中獎玩家列表js


cc.Class({
  "extends": cc.Component,
  properties: {
    items: {
      "default": null,
      type: cc.Prefab
    },
    round: {
      "default": null,
      type: cc.Label
    },
    WrongAlert: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    this.itemlist = [];
    this.winlist = [];
    this.index = [];
    this.indexcount = 0;
    this.items_parent = cc.find("畫布/中獎列表/view/內容");
    this.AlertText = cc.find("畫布/警告/警告文字");
  },
  start: function start() {
    this.SpawnWinner();
    this.round.string = gameModel.CurrentRound;
  },
  //按下再來一輪鍵
  NextRound: function NextRound() {
    if (gameModel.prize_total == 0) {
      this.AlertText.getComponent(cc.Label).string = "沒有獎品了，無法開啟下一輪";
      this.WrongAlert.active = true;
    } else {
      gameModel.WebSocket_GameStatus_Host("open", 0.1);
      this.scheduleOnce(function () {
        if (gameModel.connet_ws == true) {
          gameModel.GameStatusMessage = "open";
          gameModel.winner_name = [];
          gameModel.prize_name_host = [];
          gameModel.winner_picture = [];
          gameModel.prize_name_host = [];
          gameModel.winner_score = [];
          cc.director.loadScene("Host1_Start" + gameModel.BackGround_Theme);
          gameModel.connet_ws = false;
        } else {
          this.AlertText.getComponent(cc.Label).string = "尚未與伺服器連接";
          this.WrongAlert.active = true;
        }
      }, 0.6);
    }
  },
  CloseAlert: function CloseAlert() {
    this.WrongAlert.active = false;
  },
  //列出得獎人和得到的獎品清單
  SpawnWinner: function SpawnWinner() {
    for (var i = 0; i < gameModel.winner_name.length; i++) {
      var node = cc.instantiate(this.items);
      node.parent = this.items_parent;
      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[i].updateInfo(i);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxIb3N0NF9TaG93V2lubmVyLmpzIl0sIm5hbWVzIjpbIldpbm5lckl0ZW0iLCJyZXF1aXJlIiwiZ2FtZU1vZGVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtcyIsInR5cGUiLCJQcmVmYWIiLCJyb3VuZCIsIkxhYmVsIiwiV3JvbmdBbGVydCIsIk5vZGUiLCJvbkxvYWQiLCJpdGVtbGlzdCIsIndpbmxpc3QiLCJpbmRleCIsImluZGV4Y291bnQiLCJpdGVtc19wYXJlbnQiLCJmaW5kIiwiQWxlcnRUZXh0Iiwic3RhcnQiLCJTcGF3bldpbm5lciIsInN0cmluZyIsIkN1cnJlbnRSb3VuZCIsIk5leHRSb3VuZCIsInByaXplX3RvdGFsIiwiZ2V0Q29tcG9uZW50IiwiYWN0aXZlIiwiV2ViU29ja2V0X0dhbWVTdGF0dXNfSG9zdCIsInNjaGVkdWxlT25jZSIsImNvbm5ldF93cyIsIkdhbWVTdGF0dXNNZXNzYWdlIiwid2lubmVyX25hbWUiLCJwcml6ZV9uYW1lX2hvc3QiLCJ3aW5uZXJfcGljdHVyZSIsIndpbm5lcl9zY29yZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiQmFja0dyb3VuZF9UaGVtZSIsIkNsb3NlQWxlcnQiLCJpIiwibGVuZ3RoIiwibm9kZSIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwib2JqIiwicHVzaCIsInVwZGF0ZUluZm8iLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxzQkFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxPQUFELENBQXZCLEVBRUE7OztBQUNBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJB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QSxVQUFJNEIsR0FBRyxHQUFHSCxJQUFJLENBQUNoQixZQUFMLENBQWtCNUIsVUFBbEIsQ0FBVixDQUhKLENBRzRDOztBQUN4QyxXQUFLZSxRQUFMLENBQWNpQyxJQUFkLENBQW1CRCxHQUFuQjtBQUNBLFdBQUtoQyxRQUFMLENBQWMyQixDQUFkLEVBQWlCTyxVQUFqQixDQUE0QlAsQ0FBNUI7QUFDSDtBQUNKLEdBNUVJO0FBOEVMUSxFQUFBQSxNQTlFSyxrQkE4RUdDLEVBOUVILEVBOEVPLENBQUU7QUE5RVQsQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFdpbm5lckl0ZW0gPSByZXF1aXJlKCdIb3N0NF9XaW5uZXJSZWRwYWtldCcpXHJcbnZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcblxyXG4vLy/kuLvmjIHkurrntZDnrpfloLTmma/poa/npLrkuK3njY7njqnlrrbliJfooahqc1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm91bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFdyb25nQWxlcnQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtbGlzdD1bXTtcclxuICAgICAgICB0aGlzLndpbmxpc3Q9W107XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5kZXhjb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5pdGVtc19wYXJlbnQgPSBjYy5maW5kKFwi55Wr5biDL+S4reeNjuWIl+ihqC92aWV3L+WFp+WuuVwiKTtcclxuICAgICAgICB0aGlzLkFsZXJ0VGV4dCA9IGNjLmZpbmQoXCLnlavluIMv6K2m5ZGKL+itpuWRiuaWh+Wtl1wiKSBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuU3Bhd25XaW5uZXIoKTtcclxuICAgICAgICB0aGlzLnJvdW5kLnN0cmluZyA9IGdhbWVNb2RlbC5DdXJyZW50Um91bmQ7IFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy/mjInkuIvlho3kvobkuIDovKrpjbVcclxuICAgIE5leHRSb3VuZCgpe1xyXG4gICAgICBpZihnYW1lTW9kZWwucHJpemVfdG90YWwgPT0gMCkgXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLkFsZXJ0VGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5rKS5pyJ542O5ZOB5LqG77yM54Sh5rOV6ZaL5ZWf5LiL5LiA6LyqXCI7XHJcbiAgICAgICAgdGhpcy5Xcm9uZ0FsZXJ0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9HYW1lU3RhdHVzX0hvc3QoXCJvcGVuXCIsMC4xKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICAgICAgaWYoZ2FtZU1vZGVsLmNvbm5ldF93cyA9PSB0cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPSBcIm9wZW5cIlxyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGVsLndpbm5lcl9uYW1lID0gW107XHJcbiAgICAgICAgICAgICAgICBnYW1lTW9kZWwucHJpemVfbmFtZV9ob3N0ID0gW107XHJcbiAgICAgICAgICAgICAgICBnYW1lTW9kZWwud2lubmVyX3BpY3R1cmUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5wcml6ZV9uYW1lX2hvc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlbC53aW5uZXJfc2NvcmUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkhvc3QxX1N0YXJ0XCIrIGdhbWVNb2RlbC5CYWNrR3JvdW5kX1RoZW1lKTtcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5jb25uZXRfd3MgPSBmYWxzZVxyXG4gICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFsZXJ0VGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5bCa5pyq6IiH5Ly65pyN5Zmo6YCj5o6lXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLldyb25nQWxlcnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuNik7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgQ2xvc2VBbGVydCgpe1xyXG4gICAgICAgIHRoaXMuV3JvbmdBbGVydC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/liJflh7rlvpfnjY7kurrlkozlvpfliLDnmoTnjY7lk4HmuIXllq5cclxuICAgIFNwYXduV2lubmVyKCl7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGdhbWVNb2RlbC53aW5uZXJfbmFtZS5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtcyk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtc19wYXJlbnQ7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBub2RlLmdldENvbXBvbmVudChXaW5uZXJJdGVtKTsvL+aKk+WPlldpbm5lckl0ZW1cclxuICAgICAgICAgICAgdGhpcy5pdGVtbGlzdC5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbWxpc3RbaV0udXBkYXRlSW5mbyhpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTsiXX0=