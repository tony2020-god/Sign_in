
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Guest1_JoinGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb6f1qnP6hJZbNXL4cYNlkr', 'Guest1_JoinGame');
// 共用模塊/Guest1_JoinGame.js

"use strict";

var gameModel = require("Model"); //玩家加入遊戲js


cc.Class({
  "extends": cc.Component,
  properties: {
    WrongAlert: {
      "default": null,
      type: cc.Node
    },
    AlertText: {
      "default": null,
      type: cc.Label
    }
  },
  start: function start() {
    gameModel.Guest1_Join_JS = this;
    gameModel.TopTitle = cc.find("畫布/場景/標題").getComponent(cc.Sprite).spriteFrame;
    gameModel.Prize_BackGround = cc.find("畫布/場景/背景").getComponent(cc.Sprite).spriteFrame;

    if (gameModel.HostWindow == "close") {
      this.AlertText.string = "主辦單位已關閉視窗，遊戲中止";
      this.WrongAlert.active = true;
    }
  },
  JoinGame: function JoinGame() {
    if (gameModel.GameStatusMessage == "close" && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") {
      this.AlertText.string = "請等待主辦方連接後再加入遊戲";
      this.WrongAlert.active = true;
    } else gameModel.WebSocket_NumberOfPeople_Guest(500, true);
  },
  ConnetSuccess: function ConnetSuccess() {
    if (gameModel.CannotJoinGame == "") cc.director.loadScene("Guest2_Wait" + gameModel.BackGround_Theme);else {
      this.AlertText.string = gameModel.CannotJoinGame;
      this.WrongAlert.active = true;
    }
  },
  ConnetFail: function ConnetFail() {
    this.AlertText.string = "無法連接伺服器";
    this.WrongAlert.active = true;
  },
  CloseAlert: function CloseAlert() {
    this.WrongAlert.active = false;
    if (gameModel.CannotJoinGame == "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲" && gameModel.HostWindow != "close") cc.director.loadScene("Guest5_Prize" + gameModel.BackGround_Theme);else gameModel.HostWindow = "open";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxHdWVzdDFfSm9pbkdhbWUuanMiXSwibmFtZXMiOlsiZ2FtZU1vZGVsIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiV3JvbmdBbGVydCIsInR5cGUiLCJOb2RlIiwiQWxlcnRUZXh0IiwiTGFiZWwiLCJzdGFydCIsIkd1ZXN0MV9Kb2luX0pTIiwiVG9wVGl0bGUiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJQcml6ZV9CYWNrR3JvdW5kIiwiSG9zdFdpbmRvdyIsInN0cmluZyIsImFjdGl2ZSIsIkpvaW5HYW1lIiwiR2FtZVN0YXR1c01lc3NhZ2UiLCJDYW5ub3RKb2luR2FtZSIsIldlYlNvY2tldF9OdW1iZXJPZlBlb3BsZV9HdWVzdCIsIkNvbm5ldFN1Y2Nlc3MiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIkJhY2tHcm91bmRfVGhlbWUiLCJDb25uZXRGYWlsIiwiQ2xvc2VBbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCLEVBRUE7OztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFDO0FBQ1AsaUJBQVEsSUFERDtBQUVQQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGRCxLQURIO0FBTVJDLElBQUFBLFNBQVMsRUFBQztBQUNOLGlCQUFRLElBREY7QUFFTkYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNRO0FBRkY7QUFORixHQUhQO0FBZUxDLEVBQUFBLEtBZkssbUJBZUk7QUFDTlgsSUFBQUEsU0FBUyxDQUFDWSxjQUFWLEdBQTJCLElBQTNCO0FBQ0FaLElBQUFBLFNBQVMsQ0FBQ2EsUUFBVixHQUFxQlgsRUFBRSxDQUFDWSxJQUFILENBQVEsVUFBUixFQUFvQkMsWUFBcEIsQ0FBaUNiLEVBQUUsQ0FBQ2MsTUFBcEMsRUFBNENDLFdBQWpFO0FBQ0FqQixJQUFBQSxTQUFTLENBQUNrQixnQkFBVixHQUE2QmhCLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLFVBQVIsRUFBb0JDLFlBQXBCLENBQWlDYixFQUFFLENBQUNjLE1BQXBDLEVBQTRDQyxXQUF6RTs7QUFDQSxRQUFHakIsU0FBUyxDQUFDbUIsVUFBVixJQUF3QixPQUEzQixFQUNBO0FBQ0MsV0FBS1YsU0FBTCxDQUFlVyxNQUFmLEdBQXdCLGdCQUF4QjtBQUNBLFdBQUtkLFVBQUwsQ0FBZ0JlLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0E7QUFDSCxHQXhCSTtBQTBCTEMsRUFBQUEsUUExQkssc0JBMEJLO0FBQ04sUUFBSXRCLFNBQVMsQ0FBQ3VCLGlCQUFWLElBQStCLE9BQS9CLElBQTBDdkIsU0FBUyxDQUFDd0IsY0FBVixJQUE0QixpQ0FBMUUsRUFDQTtBQUNFLFdBQUtmLFNBQUwsQ0FBZVcsTUFBZixHQUF3QixnQkFBeEI7QUFDQSxXQUFLZCxVQUFMLENBQWdCZSxNQUFoQixHQUF5QixJQUF6QjtBQUNELEtBSkQsTUFLS3JCLFNBQVMsQ0FBQ3lCLDhCQUFWLENBQXlDLEdBQXpDLEVBQTZDLElBQTdDO0FBQ1IsR0FqQ0k7QUFtQ0xDLEVBQUFBLGFBbkNLLDJCQW1DVTtBQUNiLFFBQUcxQixTQUFTLENBQUN3QixjQUFWLElBQTRCLEVBQS9CLEVBQW1DdEIsRUFBRSxDQUFDeUIsUUFBSCxDQUFZQyxTQUFaLENBQXNCLGdCQUFlNUIsU0FBUyxDQUFDNkIsZ0JBQS9DLEVBQW5DLEtBRUE7QUFDRSxXQUFLcEIsU0FBTCxDQUFlVyxNQUFmLEdBQXdCcEIsU0FBUyxDQUFDd0IsY0FBbEM7QUFDQSxXQUFLbEIsVUFBTCxDQUFnQmUsTUFBaEIsR0FBeUIsSUFBekI7QUFDRDtBQUNGLEdBMUNJO0FBNENMUyxFQUFBQSxVQTVDSyx3QkE0Q087QUFDVixTQUFLckIsU0FBTCxDQUFlVyxNQUFmLEdBQXdCLFNBQXhCO0FBQ0EsU0FBS2QsVUFBTCxDQUFnQmUsTUFBaEIsR0FBeUIsSUFBekI7QUFDRCxHQS9DSTtBQWlETFUsRUFBQUEsVUFqREssd0JBaURPO0FBQ1YsU0FBS3pCLFVBQUwsQ0FBZ0JlLE1BQWhCLEdBQXlCLEtBQXpCO0FBQ0EsUUFBR3JCLFNBQVMsQ0FBQ3dCLGNBQVYsSUFBNEIsaUNBQTVCLElBQWlFeEIsU0FBUyxDQUFDbUIsVUFBVixJQUF3QixPQUE1RixFQUFxR2pCLEVBQUUsQ0FBQ3lCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixpQkFBZ0I1QixTQUFTLENBQUM2QixnQkFBaEQsRUFBckcsS0FDSzdCLFNBQVMsQ0FBQ21CLFVBQVYsR0FBdUIsTUFBdkI7QUFDTjtBQXJESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG5cclxuLy/njqnlrrbliqDlhaXpgYrmiLJqc1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFdyb25nQWxlcnQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgQWxlcnRUZXh0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgZ2FtZU1vZGVsLkd1ZXN0MV9Kb2luX0pTID0gdGhpcztcclxuICAgICAgIGdhbWVNb2RlbC5Ub3BUaXRsZSA9IGNjLmZpbmQoXCLnlavluIMv5aC05pmvL+aomemhjFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZVxyXG4gICAgICAgZ2FtZU1vZGVsLlByaXplX0JhY2tHcm91bmQgPSBjYy5maW5kKFwi55Wr5biDL+WgtOaZry/og4zmma9cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWVcclxuICAgICAgIGlmKGdhbWVNb2RlbC5Ib3N0V2luZG93ID09IFwiY2xvc2VcIilcclxuICAgICAgIHtcclxuICAgICAgICB0aGlzLkFsZXJ0VGV4dC5zdHJpbmcgPSBcIuS4u+i+puWWruS9jeW3sumXnOmWieimlueql++8jOmBiuaIsuS4reatolwiXHJcbiAgICAgICAgdGhpcy5Xcm9uZ0FsZXJ0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIEpvaW5HYW1lKCl7XHJcbiAgICAgICAgaWYgKGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9PSBcImNsb3NlXCIgJiYgZ2FtZU1vZGVsLkNhbm5vdEpvaW5HYW1lICE9IFwi6Yyv6KqkOiDoqbLloLTmrKHpgYrmiLLkuI3lhYHoqLHph43opIfkuK3njY7vvIzmgqjlt7LkuK3njY7vvIznhKHms5Xlj4PliqDkuIvkuIDovKrpgYrmiLJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLkFsZXJ0VGV4dC5zdHJpbmcgPSBcIuiri+etieW+heS4u+i+puaWuemAo+aOpeW+jOWGjeWKoOWFpemBiuaIslwiO1xyXG4gICAgICAgICAgdGhpcy5Xcm9uZ0FsZXJ0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBnYW1lTW9kZWwuV2ViU29ja2V0X051bWJlck9mUGVvcGxlX0d1ZXN0KDUwMCx0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgQ29ubmV0U3VjY2Vzcygpe1xyXG4gICAgICBpZihnYW1lTW9kZWwuQ2Fubm90Sm9pbkdhbWUgPT0gXCJcIikgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR3Vlc3QyX1dhaXRcIisgZ2FtZU1vZGVsLkJhY2tHcm91bmRfVGhlbWUpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLkFsZXJ0VGV4dC5zdHJpbmcgPSBnYW1lTW9kZWwuQ2Fubm90Sm9pbkdhbWU7XHJcbiAgICAgICAgdGhpcy5Xcm9uZ0FsZXJ0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBDb25uZXRGYWlsKCl7XHJcbiAgICAgIHRoaXMuQWxlcnRUZXh0LnN0cmluZyA9IFwi54Sh5rOV6YCj5o6l5Ly65pyN5ZmoXCJcclxuICAgICAgdGhpcy5Xcm9uZ0FsZXJ0LmFjdGl2ZSA9IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgQ2xvc2VBbGVydCgpe1xyXG4gICAgICB0aGlzLldyb25nQWxlcnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIGlmKGdhbWVNb2RlbC5DYW5ub3RKb2luR2FtZSA9PSBcIumMr+iqpDog6Kmy5aC05qyh6YGK5oiy5LiN5YWB6Kix6YeN6KSH5Lit542O77yM5oKo5bey5Lit542O77yM54Sh5rOV5Y+D5Yqg5LiL5LiA6Lyq6YGK5oiyXCIgJiYgZ2FtZU1vZGVsLkhvc3RXaW5kb3cgIT0gXCJjbG9zZVwiKSBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHdWVzdDVfUHJpemVcIisgZ2FtZU1vZGVsLkJhY2tHcm91bmRfVGhlbWUpO1xyXG4gICAgICBlbHNlIGdhbWVNb2RlbC5Ib3N0V2luZG93ID0gXCJvcGVuXCJcclxuICAgIH1cclxufSk7XHJcbiJdfQ==