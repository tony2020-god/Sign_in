
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Guest5_Prize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36c4a49rStLe63/oPQEoHYv', 'Guest5_Prize');
// 共用模塊/Guest5_Prize.js

"use strict";

var gameModel = require("Model");

var RecordItem = require('Guest5_PrizeRecordItem'); ///生成玩家中獎列表，判斷有無中獎或收到again訊息js


cc.Class({
  "extends": cc.Component,
  properties: {
    items: {
      "default": null,
      type: cc.Prefab
    },
    ResultWindow: {
      "default": null,
      type: cc.Node
    },
    Note: {
      "default": null,
      type: cc.Node
    },
    CannotNextRound: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  onLoad: function onLoad() {
    this.prize_parents = cc.find("畫布/已獲得的獎品列表/view/內容");
    this.Title = cc.find("畫布/場景/上方框");
    this.BackGround = cc.find("畫布/場景/背景");
  },
  start: function start() {
    this.Title.getComponent(cc.Sprite).spriteFrame = gameModel.TopTitle;
    this.BackGround.getComponent(cc.Sprite).spriteFrame = gameModel.Prize_BackGround;

    if (gameModel.result == 'thanks' && gameModel.AlreadyPlayed == 0 && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") {
      this.ResultWindow.active = true;
      this.ResultWindow.getChildByName("得獎結果動畫").getComponent(sp.Skeleton).setAnimation(0, "lost", true);
    } else if (gameModel.result != 'thanks' && gameModel.AlreadyPlayed == 0 && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") {
      this.ResultWindow.active = true;
      this.ResultWindow.getChildByName("得獎結果動畫").getComponent(sp.Skeleton).setAnimation(0, "win", true);

      if (gameModel.AllowRePrize == "close") {
        gameModel.CannotJoinGame = "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲";
        this.Note.getComponent(cc.Sprite).spriteFrame = this.CannotNextRound;
      }
    } else if (gameModel.CannotJoinGame == "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") this.Note.getComponent(cc.Sprite).spriteFrame = this.CannotNextRound;

    this.setData();
    this.GameStateJudge = true;
  },
  setData: function setData() {
    for (var i = 0; i < gameModel.prize_name_guest.length; i++) {
      var node = cc.instantiate(this.items); //clone已有節點，生成items格式

      node.parent = this.prize_parents;
      if (gameModel.exchangePrize[i] == "yes") node.setSiblingIndex(gameModel.prize_name_guest.length);else node.setSiblingIndex(0);
      var obj = node.getComponent(RecordItem); //抓取RecordItem

      obj.updateInfo(i);
    }
  },
  CloseResult: function CloseResult() {
    this.ResultWindow.active = false;
  },
  update: function update(dt) {
    if (gameModel.GameStatusMessage == "open" && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲" && this.GameStateJudge == true) {
      gameModel.AlreadyPlayed = 0;
      gameModel.result = 'thanks';
      cc.director.loadScene("Guest1_JoinGame" + gameModel.BackGround_Theme);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxHdWVzdDVfUHJpemUuanMiXSwibmFtZXMiOlsiZ2FtZU1vZGVsIiwicmVxdWlyZSIsIlJlY29yZEl0ZW0iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW1zIiwidHlwZSIsIlByZWZhYiIsIlJlc3VsdFdpbmRvdyIsIk5vZGUiLCJOb3RlIiwiQ2Fubm90TmV4dFJvdW5kIiwiU3ByaXRlRnJhbWUiLCJvbkxvYWQiLCJwcml6ZV9wYXJlbnRzIiwiZmluZCIsIlRpdGxlIiwiQmFja0dyb3VuZCIsInN0YXJ0IiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJUb3BUaXRsZSIsIlByaXplX0JhY2tHcm91bmQiLCJyZXN1bHQiLCJBbHJlYWR5UGxheWVkIiwiQ2Fubm90Sm9pbkdhbWUiLCJhY3RpdmUiLCJnZXRDaGlsZEJ5TmFtZSIsInNwIiwiU2tlbGV0b24iLCJzZXRBbmltYXRpb24iLCJBbGxvd1JlUHJpemUiLCJzZXREYXRhIiwiR2FtZVN0YXRlSnVkZ2UiLCJpIiwicHJpemVfbmFtZV9ndWVzdCIsImxlbmd0aCIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsInBhcmVudCIsImV4Y2hhbmdlUHJpemUiLCJzZXRTaWJsaW5nSW5kZXgiLCJvYmoiLCJ1cGRhdGVJbmZvIiwiQ2xvc2VSZXN1bHQiLCJ1cGRhdGUiLCJkdCIsIkdhbWVTdGF0dXNNZXNzYWdlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJCYWNrR3JvdW5kX1RoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsd0JBQUQsQ0FBeEIsRUFFQTs7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVB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InNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcbnZhciBSZWNvcmRJdGVtID0gcmVxdWlyZSgnR3Vlc3Q1X1ByaXplUmVjb3JkSXRlbScpXHJcblxyXG4vLy/nlJ/miJDnjqnlrrbkuK3njY7liJfooajvvIzliKTmlrfmnInnhKHkuK3njY7miJbmlLbliLBhZ2FpbuioiuaBr2pzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgUmVzdWx0V2luZG93OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBOb3RlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBDYW5ub3ROZXh0Um91bmQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuU3ByaXRlRnJhbWVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMucHJpemVfcGFyZW50cyA9IGNjLmZpbmQoXCLnlavluIMv5bey542y5b6X55qE542O5ZOB5YiX6KGoL3ZpZXcv5YWn5a65XCIpXHJcbiAgICAgICAgdGhpcy5UaXRsZSA9IGNjLmZpbmQoXCLnlavluIMv5aC05pmvL+S4iuaWueahhlwiKVxyXG4gICAgICAgIHRoaXMuQmFja0dyb3VuZCA9IGNjLmZpbmQoXCLnlavluIMv5aC05pmvL+iDjOaZr1wiKVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuVGl0bGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBnYW1lTW9kZWwuVG9wVGl0bGU7XHJcbiAgICAgICAgdGhpcy5CYWNrR3JvdW5kLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZ2FtZU1vZGVsLlByaXplX0JhY2tHcm91bmQ7XHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLnJlc3VsdCA9PSAndGhhbmtzJyAmJiBnYW1lTW9kZWwuQWxyZWFkeVBsYXllZCA9PSAwICYmIGdhbWVNb2RlbC5DYW5ub3RKb2luR2FtZSAhPSBcIumMr+iqpDog6Kmy5aC05qyh6YGK5oiy5LiN5YWB6Kix6YeN6KSH5Lit542O77yM5oKo5bey5Lit542O77yM54Sh5rOV5Y+D5Yqg5LiL5LiA6Lyq6YGK5oiyXCIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5SZXN1bHRXaW5kb3cuYWN0aXZlID0gdHJ1ZTsgIFxyXG4gICAgICAgICAgICB0aGlzLlJlc3VsdFdpbmRvdy5nZXRDaGlsZEJ5TmFtZShcIuW+l+eNjue1kOaenOWLleeVq1wiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLFwibG9zdFwiLHRydWUpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZ2FtZU1vZGVsLnJlc3VsdCAhPSAndGhhbmtzJyAmJiBnYW1lTW9kZWwuQWxyZWFkeVBsYXllZCA9PSAwICYmIGdhbWVNb2RlbC5DYW5ub3RKb2luR2FtZSAhPSBcIumMr+iqpDog6Kmy5aC05qyh6YGK5oiy5LiN5YWB6Kix6YeN6KSH5Lit542O77yM5oKo5bey5Lit542O77yM54Sh5rOV5Y+D5Yqg5LiL5LiA6Lyq6YGK5oiyXCIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5SZXN1bHRXaW5kb3cuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5SZXN1bHRXaW5kb3cuZ2V0Q2hpbGRCeU5hbWUoXCLlvpfnjY7ntZDmnpzli5XnlatcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcIndpblwiLHRydWUpO1xyXG4gICAgICAgICAgICBpZihnYW1lTW9kZWwuQWxsb3dSZVByaXplID09IFwiY2xvc2VcIikgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5DYW5ub3RKb2luR2FtZSA9IFwi6Yyv6KqkOiDoqbLloLTmrKHpgYrmiLLkuI3lhYHoqLHph43opIfkuK3njY7vvIzmgqjlt7LkuK3njY7vvIznhKHms5Xlj4PliqDkuIvkuIDovKrpgYrmiLJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuTm90ZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuQ2Fubm90TmV4dFJvdW5kO1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZ2FtZU1vZGVsLkNhbm5vdEpvaW5HYW1lID09IFwi6Yyv6KqkOiDoqbLloLTmrKHpgYrmiLLkuI3lhYHoqLHph43opIfkuK3njY7vvIzmgqjlt7LkuK3njY7vvIznhKHms5Xlj4PliqDkuIvkuIDovKrpgYrmiLJcIikgdGhpcy5Ob3RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5DYW5ub3ROZXh0Um91bmQ7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5HYW1lU3RhdGVKdWRnZSA9IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgc2V0RGF0YSgpe1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBnYW1lTW9kZWwucHJpemVfbmFtZV9ndWVzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtcykvL2Nsb25l5bey5pyJ56+A6bue77yM55Sf5oiQaXRlbXPmoLzlvI9cclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLnByaXplX3BhcmVudHNcclxuICAgICAgICAgICAgaWYoZ2FtZU1vZGVsLmV4Y2hhbmdlUHJpemVbaV0gPT0gXCJ5ZXNcIikgbm9kZS5zZXRTaWJsaW5nSW5kZXgoZ2FtZU1vZGVsLnByaXplX25hbWVfZ3Vlc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgZWxzZSBub2RlLnNldFNpYmxpbmdJbmRleCgwKVxyXG4gICAgICAgICAgICB2YXIgb2JqID0gbm9kZS5nZXRDb21wb25lbnQoUmVjb3JkSXRlbSkvL+aKk+WPllJlY29yZEl0ZW1cclxuICAgICAgICAgICAgb2JqLnVwZGF0ZUluZm8oaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgQ2xvc2VSZXN1bHQoKXtcclxuICAgICAgdGhpcy5SZXN1bHRXaW5kb3cuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZihnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPT0gXCJvcGVuXCIgJiYgZ2FtZU1vZGVsLkNhbm5vdEpvaW5HYW1lICE9IFwi6Yyv6KqkOiDoqbLloLTmrKHpgYrmiLLkuI3lhYHoqLHph43opIfkuK3njY7vvIzmgqjlt7LkuK3njY7vvIznhKHms5Xlj4PliqDkuIvkuIDovKrpgYrmiLJcIiAmJiB0aGlzLkdhbWVTdGF0ZUp1ZGdlID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2FtZU1vZGVsLkFscmVhZHlQbGF5ZWQgPSAwO1xyXG4gICAgICAgICAgZ2FtZU1vZGVsLnJlc3VsdCA9ICd0aGFua3MnO1xyXG4gICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR3Vlc3QxX0pvaW5HYW1lXCIrIGdhbWVNb2RlbC5CYWNrR3JvdW5kX1RoZW1lKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==