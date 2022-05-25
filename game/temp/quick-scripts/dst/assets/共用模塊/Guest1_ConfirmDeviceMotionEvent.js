
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Guest1_ConfirmDeviceMotionEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f065kKO3ZMjZ+0XvZbCxxo', 'Guest1_ConfirmDeviceMotionEvent');
// 共用模塊/Guest1_ConfirmDeviceMotionEvent.js

"use strict";

var gameModel = require("Model"); ///確認玩家是否為陀螺儀和加入遊戲js


cc.Class({
  "extends": cc.Component,
  properties: {
    WrongAlert: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    this.join = false; //是否按下加入遊戲按鈕

    this.AlertText = cc.find("畫布/警告/警告文字");
    gameModel.TopTitle = cc.find("畫布/場景/標題").getComponent(cc.Sprite).spriteFrame;
    gameModel.Prize_BackGround = cc.find("畫布/場景/背景").getComponent(cc.Sprite).spriteFrame;
    gameModel.Guest1_Join_JS = this;
  },
  start: function start() {
    //啟動陀螺儀
    cc.systemEvent.setAccelerometerEnabled(true);
    cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);

    if (gameModel.HostWindow == "close") {
      this.AlertText.getComponent(cc.Label).string = "主辦單位已關閉視窗，遊戲中止";
      this.WrongAlert.active = true;
    }
  },
  onDeviceMotionEvent: function onDeviceMotionEvent(event) {
    var x = event.acc.x.toFixed(2);
    var y = event.acc.y.toFixed(2);
    var z = event.acc.z.toFixed(2);
    var speed = parseFloat(x) + parseFloat(y) + parseFloat(z);

    if (speed == 0.00 && cc.sys.os == "Android" && this.join == true && gameModel.GameStatusMessage != "close" && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") //如果是安卓，且沒陀螺儀功能則跳出 "此設備不支援搖一搖功能!" 的警告
      {
        this.AlertText.getComponent(cc.Label).string = "此設備不支援搖一搖功能";
        this.WrongAlert.active = true;
        cc.systemEvent.setAccelerometerEnabled(false);
      } else if (speed != 0.00 && cc.sys.os == "Android" && this.join == true && gameModel.GameStatusMessage != "close") //如果是安卓，且有陀螺儀功能則啟動WebSocket_NumberOfPeople_Guest傳送玩家cookie給後端，並進入玩家等待遊戲開始畫面
      {
        this.join = false;
        gameModel.WebSocket_NumberOfPeople_Guest(500, true);
      } else if (gameModel.GameStatusMessage == "close" && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲" && this.join == true) {
      this.join = false;
      this.AlertText.getComponent(cc.Label).string = "請等待主辦方連接後再加入遊戲";
      this.WrongAlert.active = true;
    }
  },
  //加入遊戲鍵: 要求Iphone客戶打開陀螺儀，判斷Android客戶是否有陀螺儀
  JoinGame: function JoinGame() {
    var _this = this;

    this.join = true;

    if (cc.sys.os == "iOS" && this.join == true && gameModel.GameStatusMessage != "close") {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then(function (permissionState) {
          if (permissionState === 'granted') {
            gameModel.WebSocket_NumberOfPeople_Guest(500, true);
            _this.join = false;
          } else {//取消
          }
        })["catch"](function (err) {
          console.log(err);
        });
      } else {}
    } else if (gameModel.GameStatusMessage == "close" && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲" && this.join == true) {
      this.join = false;
      this.AlertText.getComponent(cc.Label).string = "請等待主辦方連接後再加入遊戲";
      this.WrongAlert.active = true;
    }
  },
  ConnetSuccess: function ConnetSuccess() {
    if (gameModel.CannotJoinGame == "") cc.director.loadScene("Guest2_Wait" + gameModel.BackGround_Theme);else {
      this.AlertText.getComponent(cc.Label).string = gameModel.CannotJoinGame;
      this.WrongAlert.active = true;
    }
  },
  ConnetFail: function ConnetFail() {
    this.AlertText.getComponent(cc.Label).string = "無法連接伺服器";
    this.WrongAlert.active = true;
  },
  CloseAlert: function CloseAlert() {
    this.WrongAlert.active = false;
    if (gameModel.CannotJoinGame == "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲" && gameModel.HostWindow != "close") cc.director.loadScene("Guest5_Prize" + gameModel.BackGround_Theme);else gameModel.HostWindow = "open";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxHdWVzdDFfQ29uZmlybURldmljZU1vdGlvbkV2ZW50LmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIldyb25nQWxlcnQiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsImpvaW4iLCJBbGVydFRleHQiLCJmaW5kIiwiVG9wVGl0bGUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlByaXplX0JhY2tHcm91bmQiLCJHdWVzdDFfSm9pbl9KUyIsInN0YXJ0Iiwic3lzdGVtRXZlbnQiLCJzZXRBY2NlbGVyb21ldGVyRW5hYmxlZCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJERVZJQ0VNT1RJT04iLCJvbkRldmljZU1vdGlvbkV2ZW50IiwiSG9zdFdpbmRvdyIsIkxhYmVsIiwic3RyaW5nIiwiYWN0aXZlIiwiZXZlbnQiLCJ4IiwiYWNjIiwidG9GaXhlZCIsInkiLCJ6Iiwic3BlZWQiLCJwYXJzZUZsb2F0Iiwic3lzIiwib3MiLCJHYW1lU3RhdHVzTWVzc2FnZSIsIkNhbm5vdEpvaW5HYW1lIiwiV2ViU29ja2V0X051bWJlck9mUGVvcGxlX0d1ZXN0IiwiSm9pbkdhbWUiLCJEZXZpY2VPcmllbnRhdGlvbkV2ZW50IiwicmVxdWVzdFBlcm1pc3Npb24iLCJ0aGVuIiwicGVybWlzc2lvblN0YXRlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIkNvbm5ldFN1Y2Nlc3MiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIkJhY2tHcm91bmRfVGhlbWUiLCJDb25uZXRGYWlsIiwiQ2xvc2VBbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCLEVBRUE7OztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVB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QyxTQUFTLENBQUMyQixVQUFWLElBQXdCLE9BQTVGLEVBQXFHekIsRUFBRSxDQUFDbUQsUUFBSCxDQUFZQyxTQUFaLENBQXNCLGlCQUFnQnRELFNBQVMsQ0FBQ3VELGdCQUFoRCxFQUFyRyxLQUNLdkQsU0FBUyxDQUFDMkIsVUFBVixHQUF1QixNQUF2QjtBQUNOLEdBcEdJLENBcUdMOztBQXJHSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG5cclxuLy8v56K66KqN546p5a625piv5ZCm54K66ZmA6J665YSA5ZKM5Yqg5YWl6YGK5oiyanNcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgIFdyb25nQWxlcnQ6e1xyXG4gICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgdHlwZTpjYy5Ob2RlXHJcbiAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5qb2luID0gZmFsc2U7IC8v5piv5ZCm5oyJ5LiL5Yqg5YWl6YGK5oiy5oyJ6YiVXHJcbiAgICAgICAgdGhpcy5BbGVydFRleHQgPSBjYy5maW5kKFwi55Wr5biDL+itpuWRii/orablkYrmloflrZdcIilcclxuICAgICAgICBnYW1lTW9kZWwuVG9wVGl0bGUgPSBjYy5maW5kKFwi55Wr5biDL+WgtOaZry/mqJnpoYxcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWVcclxuICAgICAgICBnYW1lTW9kZWwuUHJpemVfQmFja0dyb3VuZCA9IGNjLmZpbmQoXCLnlavluIMv5aC05pmvL+iDjOaZr1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZVxyXG4gICAgICAgIGdhbWVNb2RlbC5HdWVzdDFfSm9pbl9KUyA9IHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/llZ/li5XpmYDonrrlhIBcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5zZXRBY2NlbGVyb21ldGVyRW5hYmxlZCh0cnVlKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuREVWSUNFTU9USU9OLCB0aGlzLm9uRGV2aWNlTW90aW9uRXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIGlmKGdhbWVNb2RlbC5Ib3N0V2luZG93ID09IFwiY2xvc2VcIilcclxuICAgICAgIHtcclxuICAgICAgICB0aGlzLkFsZXJ0VGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5Li76L6m5Zau5L2N5bey6Zec6ZaJ6KaW56qX77yM6YGK5oiy5Lit5q2iXCJcclxuICAgICAgICB0aGlzLldyb25nQWxlcnQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgb25EZXZpY2VNb3Rpb25FdmVudCA6ZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICB2YXIgeCA9IGV2ZW50LmFjYy54LnRvRml4ZWQoMik7IFxyXG4gICAgICAgIHZhciB5ID0gZXZlbnQuYWNjLnkudG9GaXhlZCgyKTsgXHJcbiAgICAgICAgdmFyIHogPSBldmVudC5hY2Muei50b0ZpeGVkKDIpOyBcclxuICAgICAgICB2YXIgc3BlZWQgPSBwYXJzZUZsb2F0KHgpK3BhcnNlRmxvYXQoeSkrcGFyc2VGbG9hdCh6KTtcclxuICAgICAgICBpZihzcGVlZCA9PSAwLjAwICYmIGNjLnN5cy5vcyA9PSBcIkFuZHJvaWRcIiAmJiB0aGlzLmpvaW4gPT0gdHJ1ZSAmJiBnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgIT0gXCJjbG9zZVwiICYmIGdhbWVNb2RlbC5DYW5ub3RKb2luR2FtZSAhPSBcIumMr+iqpDog6Kmy5aC05qyh6YGK5oiy5LiN5YWB6Kix6YeN6KSH5Lit542O77yM5oKo5bey5Lit542O77yM54Sh5rOV5Y+D5Yqg5LiL5LiA6Lyq6YGK5oiyXCIpICAgICAgIC8v5aaC5p6c5piv5a6J5Y2T77yM5LiU5rKS6ZmA6J665YSA5Yqf6IO95YmH6Lez5Ye6IFwi5q2k6Kit5YKZ5LiN5pSv5o+05pCW5LiA5pCW5Yqf6IO9IVwiIOeahOitpuWRilxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuQWxlcnRUZXh0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmraToqK3lgpnkuI3mlK/mj7TmkJbkuIDmkJblip/og71cIjtcclxuICAgICAgICAgIHRoaXMuV3JvbmdBbGVydC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5zZXRBY2NlbGVyb21ldGVyRW5hYmxlZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoc3BlZWQgIT0gMC4wMCAmJiBjYy5zeXMub3MgPT0gXCJBbmRyb2lkXCIgJiYgdGhpcy5qb2luID09IHRydWUgJiYgZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlICE9IFwiY2xvc2VcIikgLy/lpoLmnpzmmK/lronljZPvvIzkuJTmnInpmYDonrrlhIDlip/og73liYfllZ/li5VXZWJTb2NrZXRfTnVtYmVyT2ZQZW9wbGVfR3Vlc3TlgrPpgIHnjqnlrrZjb29raWXntablvoznq6/vvIzkuKbpgLLlhaXnjqnlrrbnrYnlvoXpgYrmiLLplovlp4vnlavpnaJcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLmpvaW4gPSBmYWxzZVxyXG4gICAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9OdW1iZXJPZlBlb3BsZV9HdWVzdCg1MDAsdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9PSBcImNsb3NlXCIgJiYgZ2FtZU1vZGVsLkNhbm5vdEpvaW5HYW1lICE9IFwi6Yyv6KqkOiDoqbLloLTmrKHpgYrmiLLkuI3lhYHoqLHph43opIfkuK3njY7vvIzmgqjlt7LkuK3njY7vvIznhKHms5Xlj4PliqDkuIvkuIDovKrpgYrmiLJcIiAmJiB0aGlzLmpvaW4gPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLmpvaW4gPSBmYWxzZVxyXG4gICAgICAgICAgdGhpcy5BbGVydFRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuiri+etieW+heS4u+i+puaWuemAo+aOpeW+jOWGjeWKoOWFpemBiuaIslwiO1xyXG4gICAgICAgICAgdGhpcy5Xcm9uZ0FsZXJ0LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5Yqg5YWl6YGK5oiy6Y21OiDopoHmsYJJcGhvbmXlrqLmiLbmiZPplovpmYDonrrlhIDvvIzliKTmlrdBbmRyb2lk5a6i5oi25piv5ZCm5pyJ6ZmA6J665YSAXHJcbiAgICBKb2luR2FtZSgpe1xyXG4gICAgICB0aGlzLmpvaW4gPSB0cnVlO1xyXG4gICAgICBpZiAoY2Muc3lzLm9zID09IFwiaU9TXCImJiB0aGlzLmpvaW4gPT0gdHJ1ZSAmJiBnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgIT0gXCJjbG9zZVwiKSBcclxuICAgICAge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBEZXZpY2VPcmllbnRhdGlvbkV2ZW50LnJlcXVlc3RQZXJtaXNzaW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIERldmljZU9yaWVudGF0aW9uRXZlbnQucmVxdWVzdFBlcm1pc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocGVybWlzc2lvblN0YXRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb25TdGF0ZSA9PT0gJ2dyYW50ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9OdW1iZXJPZlBlb3BsZV9HdWVzdCg1MDAsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8v5Y+W5raIXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwiY2xvc2VcIiAmJiBnYW1lTW9kZWwuQ2Fubm90Sm9pbkdhbWUgIT0gXCLpjK/oqqQ6IOipsuWgtOasoemBiuaIsuS4jeWFgeiosemHjeikh+S4reeNju+8jOaCqOW3suS4reeNju+8jOeEoeazleWPg+WKoOS4i+S4gOi8qumBiuaIslwiICYmIHRoaXMuam9pbiA9PSB0cnVlKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5qb2luID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BbGVydFRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuiri+etieW+heS4u+i+puaWuemAo+aOpeW+jOWGjeWKoOWFpemBiuaIslwiO1xyXG4gICAgICAgIHRoaXMuV3JvbmdBbGVydC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgQ29ubmV0U3VjY2Vzcygpe1xyXG4gICAgICBpZihnYW1lTW9kZWwuQ2Fubm90Sm9pbkdhbWUgPT0gXCJcIikgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR3Vlc3QyX1dhaXRcIisgZ2FtZU1vZGVsLkJhY2tHcm91bmRfVGhlbWUpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLkFsZXJ0VGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdhbWVNb2RlbC5DYW5ub3RKb2luR2FtZTtcclxuICAgICAgICB0aGlzLldyb25nQWxlcnQuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIENvbm5ldEZhaWwoKXtcclxuICAgICAgdGhpcy5BbGVydFRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIueEoeazlemAo+aOpeS8uuacjeWZqFwiXHJcbiAgICAgIHRoaXMuV3JvbmdBbGVydC5hY3RpdmUgPSB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIENsb3NlQWxlcnQoKXtcclxuICAgICAgdGhpcy5Xcm9uZ0FsZXJ0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICBpZihnYW1lTW9kZWwuQ2Fubm90Sm9pbkdhbWUgPT0gXCLpjK/oqqQ6IOipsuWgtOasoemBiuaIsuS4jeWFgeiosemHjeikh+S4reeNju+8jOaCqOW3suS4reeNju+8jOeEoeazleWPg+WKoOS4i+S4gOi8qumBiuaIslwiICYmIGdhbWVNb2RlbC5Ib3N0V2luZG93ICE9IFwiY2xvc2VcIikgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR3Vlc3Q1X1ByaXplXCIrIGdhbWVNb2RlbC5CYWNrR3JvdW5kX1RoZW1lKTtcclxuICAgICAgZWxzZSBnYW1lTW9kZWwuSG9zdFdpbmRvdyA9IFwib3BlblwiXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==