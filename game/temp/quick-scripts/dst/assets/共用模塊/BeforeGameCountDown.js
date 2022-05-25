
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/BeforeGameCountDown.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '229e69xzhlPnIkUCyDYOGKO', 'BeforeGameCountDown');
// 共用模塊/BeforeGameCountDown.js

"use strict";

var gameModel = require("Model"); //全域變數gameModel 不須加this就能提取
///主持人遊戲開始倒數js


cc.Class({
  //進入Class區域 若想提取裡面的直需要用this
  "extends": cc.Component,
  properties: {
    countdownspritelist: {
      "default": [],
      type: [cc.SpriteFrame]
    },
    countdownSound: {
      "default": null,
      type: cc.AudioClip
    },
    countdownfinishSound: {
      "default": null,
      type: cc.AudioClip
    },
    countdownsprite: cc.Sprite
  },
  onLoad: function onLoad() {
    if (cc.director.getScene()._name.includes("Host2_CountDown")) gameModel.NumberOfLotteryWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/winning/staff?activity_id=" + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName); //開啟更新得獎人的ws
  },
  start: function start() {
    this.count = 0;
    this.schedule(function () {
      //每1秒鐘值行一次，重複做4+1次
      if (cc.director.getScene()._name.includes("Guest3_CountDown")) this.Guset_countdown();else if (cc.director.getScene()._name.includes("Host2_CountDown")) this.Host_countdown();
    }, 1, 4);
  },
  //主持人遊戲開始前倒數
  Host_countdown: function Host_countdown() {
    this.count++;
    this.countdownsprite.spriteFrame = this.countdownspritelist[this.count - 1];
    if (this.count < 4) this.currentsound = cc.audioEngine.play(this.countdownSound, false, 0.5);else if (this.count == 4) {
      gameModel.WebSocket_GameStatus_Host("gaming", 0.1);
      this.currentsound = cc.audioEngine.play(this.countdownfinishSound, false, 0.5);
    } else if (this.count == 5) cc.director.loadScene("Host3_Game" + gameModel.BackGround_Theme);
  },
  //玩家遊戲開始前倒數
  Guset_countdown: function Guset_countdown() {
    this.count++;
    this.countdownsprite.spriteFrame = this.countdownspritelist[this.count - 1];
    if (this.count == 5) cc.director.loadScene("Guest4_Game" + gameModel.BackGround_Theme);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxCZWZvcmVHYW1lQ291bnREb3duLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNvdW50ZG93bnNwcml0ZWxpc3QiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJjb3VudGRvd25Tb3VuZCIsIkF1ZGlvQ2xpcCIsImNvdW50ZG93bmZpbmlzaFNvdW5kIiwiY291bnRkb3duc3ByaXRlIiwiU3ByaXRlIiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsIl9uYW1lIiwiaW5jbHVkZXMiLCJOdW1iZXJPZkxvdHRlcnlXU19Ib3N0IiwiV2ViU29ja2V0IiwibG9jYWxfSUQiLCJhY3Rpdml0eV9pZCIsImdhbWVfaWQiLCJHYW1lTmFtZSIsInN0YXJ0IiwiY291bnQiLCJzY2hlZHVsZSIsIkd1c2V0X2NvdW50ZG93biIsIkhvc3RfY291bnRkb3duIiwic3ByaXRlRnJhbWUiLCJjdXJyZW50c291bmQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJXZWJTb2NrZXRfR2FtZVN0YXR1c19Ib3N0IiwibG9hZFNjZW5lIiwiQmFja0dyb3VuZF9UaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCLEVBQWtDO0FBRWxDOzs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFBRTtBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsbUJBQW1CLEVBQUU7QUFDakIsaUJBQVMsRUFEUTtBQUVqQkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sV0FBSjtBQUZXLEtBRmI7QUFPUkMsSUFBQUEsY0FBYyxFQUFFO0FBQ1osaUJBQVMsSUFERztBQUVaRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7QUFGRyxLQVBSO0FBWVJDLElBQUFBLG9CQUFvQixFQUFFO0FBQ2xCLGlCQUFTLElBRFM7QUFFbEJKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZTLEtBWmQ7QUFpQlJFLElBQUFBLGVBQWUsRUFBQ1YsRUFBRSxDQUFDVztBQWpCWCxHQUhQO0FBdUJMQyxFQUFBQSxNQXZCSyxvQkF1Qks7QUFDTixRQUFHWixFQUFFLENBQUNhLFFBQUgsQ0FBWUMsUUFBWixHQUF1QkMsS0FBdkIsQ0FBNkJDLFFBQTdCLENBQXNDLGlCQUF0QyxDQUFILEVBQTZEbEIsU0FBUyxDQUFDbUIsc0JBQVYsR0FBbUMsSUFBSUMsU0FBSixDQUFjLFdBQVdwQixTQUFTLENBQUNxQixRQUFyQixHQUFnQyx3Q0FBaEMsR0FBMEVyQixTQUFTLENBQUNzQixXQUFwRixHQUFpRyxXQUFqRyxHQUErR3RCLFNBQVMsQ0FBQ3VCLE9BQXpILEdBQW1JLFFBQW5JLEdBQTZJdkIsU0FBUyxDQUFDd0IsUUFBckssQ0FBbkMsQ0FEdkQsQ0FDMFE7QUFDblIsR0F6Qkk7QUEyQkxDLEVBQUFBLEtBM0JLLG1CQTJCSTtBQUNMLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsUUFBTCxDQUFjLFlBQVc7QUFBRTtBQUN2QixVQUFHekIsRUFBRSxDQUFDYSxRQUFILENBQVlDLFFBQVosR0FBdUJDLEtBQXZCLENBQTZCQyxRQUE3QixDQUFzQyxrQkFBdEMsQ0FBSCxFQUE4RCxLQUFLVSxlQUFMLEdBQTlELEtBQ0ssSUFBSTFCLEVBQUUsQ0FBQ2EsUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxLQUF2QixDQUE2QkMsUUFBN0IsQ0FBc0MsaUJBQXRDLENBQUosRUFBOEQsS0FBS1csY0FBTDtBQUN0RSxLQUhELEVBR0csQ0FISCxFQUdLLENBSEw7QUFJSCxHQWpDSTtBQW1DTDtBQUNBQSxFQUFBQSxjQXBDSyw0QkFvQ1c7QUFDWixTQUFLSCxLQUFMO0FBQ0EsU0FBS2QsZUFBTCxDQUFxQmtCLFdBQXJCLEdBQW1DLEtBQUt4QixtQkFBTCxDQUF5QixLQUFLb0IsS0FBTCxHQUFXLENBQXBDLENBQW5DO0FBQ0EsUUFBSSxLQUFLQSxLQUFMLEdBQWEsQ0FBakIsRUFBb0IsS0FBS0ssWUFBTCxHQUFvQjdCLEVBQUUsQ0FBQzhCLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLeEIsY0FBekIsRUFBeUMsS0FBekMsRUFBZ0QsR0FBaEQsQ0FBcEIsQ0FBcEIsS0FDSyxJQUFJLEtBQUtpQixLQUFMLElBQWMsQ0FBbEIsRUFDTDtBQUNJMUIsTUFBQUEsU0FBUyxDQUFDa0MseUJBQVYsQ0FBb0MsUUFBcEMsRUFBNkMsR0FBN0M7QUFDQSxXQUFLSCxZQUFMLEdBQW9CN0IsRUFBRSxDQUFDOEIsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUt0QixvQkFBekIsRUFBK0MsS0FBL0MsRUFBc0QsR0FBdEQsQ0FBcEI7QUFDSCxLQUpJLE1BS0EsSUFBSSxLQUFLZSxLQUFMLElBQWMsQ0FBbEIsRUFBcUJ4QixFQUFFLENBQUNhLFFBQUgsQ0FBWW9CLFNBQVosQ0FBc0IsZUFBZW5DLFNBQVMsQ0FBQ29DLGdCQUEvQztBQUM3QixHQTlDSTtBQWdETDtBQUNBUixFQUFBQSxlQWpESyw2QkFpRFk7QUFDYixTQUFLRixLQUFMO0FBQ0EsU0FBS2QsZUFBTCxDQUFxQmtCLFdBQXJCLEdBQW1DLEtBQUt4QixtQkFBTCxDQUF5QixLQUFLb0IsS0FBTCxHQUFXLENBQXBDLENBQW5DO0FBQ0EsUUFBSSxLQUFLQSxLQUFMLElBQWMsQ0FBbEIsRUFBcUJ4QixFQUFFLENBQUNhLFFBQUgsQ0FBWW9CLFNBQVosQ0FBc0IsZ0JBQWVuQyxTQUFTLENBQUNvQyxnQkFBL0M7QUFDeEIsR0FyREksQ0F1REw7O0FBdkRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7IC8v5YWo5Z+f6K6K5pW4Z2FtZU1vZGVsIOS4jemgiOWKoHRoaXPlsLHog73mj5Dlj5ZcclxuXHJcbi8vL+S4u+aMgeS6uumBiuaIsumWi+Wni+WAkuaVuGpzXHJcbmNjLkNsYXNzKHsgLy/pgLLlhaVDbGFzc+WNgOWfnyDoi6Xmg7Pmj5Dlj5boo6HpnaLnmoTnm7TpnIDopoHnlKh0aGlzXHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBjb3VudGRvd25zcHJpdGVsaXN0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY291bnRkb3duU291bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY291bnRkb3duZmluaXNoU291bmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjb3VudGRvd25zcHJpdGU6Y2MuU3ByaXRlLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGlmKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWUuaW5jbHVkZXMoXCJIb3N0Ml9Db3VudERvd25cIikpIGdhbWVNb2RlbC5OdW1iZXJPZkxvdHRlcnlXU19Ib3N0ID0gbmV3IFdlYlNvY2tldChcIndzczovL1wiICsgZ2FtZU1vZGVsLmxvY2FsX0lEICsgXCIvd3MvdjEvZ2FtZS93aW5uaW5nL3N0YWZmP2FjdGl2aXR5X2lkPVwiKyBnYW1lTW9kZWwuYWN0aXZpdHlfaWQgKycmZ2FtZV9pZD0nICsgZ2FtZU1vZGVsLmdhbWVfaWQgKyAnJmdhbWU9JysgZ2FtZU1vZGVsLkdhbWVOYW1lKTsgLy/plovllZ/mm7TmlrDlvpfnjY7kurrnmoR3c1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHsgLy/mr48x56eS6ZCY5YC86KGM5LiA5qyh77yM6YeN6KSH5YGaNCsx5qyhXHJcbiAgICAgICAgICAgIGlmKGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWUuaW5jbHVkZXMoXCJHdWVzdDNfQ291bnREb3duXCIpKSB0aGlzLkd1c2V0X2NvdW50ZG93bigpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLl9uYW1lLmluY2x1ZGVzKFwiSG9zdDJfQ291bnREb3duXCIpKSB0aGlzLkhvc3RfY291bnRkb3duKCk7XHJcbiAgICAgICAgfSwgMSw0KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/kuLvmjIHkurrpgYrmiLLplovlp4vliY3lgJLmlbhcclxuICAgIEhvc3RfY291bnRkb3duKCl7XHJcbiAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgIHRoaXMuY291bnRkb3duc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5jb3VudGRvd25zcHJpdGVsaXN0W3RoaXMuY291bnQtMV07XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPCA0KSB0aGlzLmN1cnJlbnRzb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5jb3VudGRvd25Tb3VuZCwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb3VudCA9PSA0KSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5XZWJTb2NrZXRfR2FtZVN0YXR1c19Ib3N0KFwiZ2FtaW5nXCIsMC4xKVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRzb3VuZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5jb3VudGRvd25maW5pc2hTb3VuZCwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY291bnQgPT0gNSkgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiSG9zdDNfR2FtZVwiICsgZ2FtZU1vZGVsLkJhY2tHcm91bmRfVGhlbWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+eOqeWutumBiuaIsumWi+Wni+WJjeWAkuaVuFxyXG4gICAgR3VzZXRfY291bnRkb3duKCl7XHJcbiAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgIHRoaXMuY291bnRkb3duc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5jb3VudGRvd25zcHJpdGVsaXN0W3RoaXMuY291bnQtMV07XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPT0gNSkgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR3Vlc3Q0X0dhbWVcIisgZ2FtZU1vZGVsLkJhY2tHcm91bmRfVGhlbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTsiXX0=