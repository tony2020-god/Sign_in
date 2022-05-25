
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Guest4_GameCountDown_ShowTime.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19103C1C8ROE6IEqrTwBI9B', 'Guest4_GameCountDown_ShowTime');
// 共用模塊/Guest4_GameCountDown_ShowTime.js

"use strict";

var gameModel = require("Model");

var Guest4_GameCountDown = require("Guest4_GameCountDown"); //玩家遊戲倒數(有顯示倒數數字)js


cc.Class({
  "extends": Guest4_GameCountDown,
  properties: {
    countdown: {
      "default": null,
      type: cc.Node
    },
    NoLinitTimeImg: {
      "default": null,
      type: cc.Node
    },
    countdownText: {
      "default": null,
      type: cc.Label
    },
    waitForCount: {
      "default": null,
      type: cc.Node
    }
  },
  start: function start() {
    this.alreadyend = false;

    if (gameModel.XMLTimeLimit == false) {
      this.countdown.active = false;
      this.NoLinitTimeImg.active = true;
    }
  },
  lateUpdate: function lateUpdate(dt) {
    if (gameModel.XMLTimeLimit == true) this.countdownText.string = gameModel.gametimeCountDown;

    if (gameModel.GameStatusMessage == "calculate" && this.alreadyend == false) {
      this.alreadyend = true;
      this.waitForCount.active = true;
    } else if (gameModel.GameStatusMessage == "close" && this.alreadyend == false) {
      this.alreadyend = true;
      gameModel.HostWindow = "close";
      cc.director.loadScene("Guest1_JoinGame" + gameModel.BackGround_Theme);
    } else if (gameModel.GameStatusMessage == "end" && this.alreadyend == true) {
      this.alreadyend = false;
      gameModel.Lottery_Guest();
      this.scheduleOnce(function () {
        cc.director.loadScene("Guest_Prize" + gameModel.BackGround_Theme);
      }, 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxHdWVzdDRfR2FtZUNvdW50RG93bl9TaG93VGltZS5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiR3Vlc3Q0X0dhbWVDb3VudERvd24iLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsImNvdW50ZG93biIsInR5cGUiLCJOb2RlIiwiTm9MaW5pdFRpbWVJbWciLCJjb3VudGRvd25UZXh0IiwiTGFiZWwiLCJ3YWl0Rm9yQ291bnQiLCJzdGFydCIsImFscmVhZHllbmQiLCJYTUxUaW1lTGltaXQiLCJhY3RpdmUiLCJsYXRlVXBkYXRlIiwiZHQiLCJzdHJpbmciLCJnYW1ldGltZUNvdW50RG93biIsIkdhbWVTdGF0dXNNZXNzYWdlIiwiSG9zdFdpbmRvdyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiQmFja0dyb3VuZF9UaGVtZSIsIkxvdHRlcnlfR3Vlc3QiLCJzY2hlZHVsZU9uY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUF2Qjs7QUFDQSxJQUFJQyxvQkFBb0IsR0FBR0QsT0FBTyxDQUFDLHNCQUFELENBQWxDLEVBRUE7OztBQUNBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNGLG9CQURKO0FBR0xHLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUSxJQUREO0FBRVBDLE1BQUFBLElBQUksRUFBQ0osRUFBRSxDQUFDSztBQUZELEtBREg7QUFNUkMsSUFBQUEsY0FBYyxFQUFFO0FBQ1osaUJBQVEsSUFESTtBQUVaRixNQUFBQSxJQUFJLEVBQUNKLEVBQUUsQ0FBQ0s7QUFGSSxLQU5SO0FBV1JFLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFRLElBREc7QUFFWEgsTUFBQUEsSUFBSSxFQUFDSixFQUFFLENBQUNRO0FBRkcsS0FYUDtBQWdCUkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1YsaUJBQVEsSUFERTtBQUVWTCxNQUFBQSxJQUFJLEVBQUNKLEVBQUUsQ0FBQ0s7QUFGRTtBQWhCTixHQUhQO0FBeUJMSyxFQUFBQSxLQXpCSyxtQkF5Qkk7QUFDTCxTQUFLQyxVQUFMLEdBQWtCLEtBQWxCOztBQUNBLFFBQUdkLFNBQVMsQ0FBQ2UsWUFBVixJQUEwQixLQUE3QixFQUNBO0FBQ0ksV0FBS1QsU0FBTCxDQUFlVSxNQUFmLEdBQXdCLEtBQXhCO0FBQ0EsV0FBS1AsY0FBTCxDQUFvQk8sTUFBcEIsR0FBNkIsSUFBN0I7QUFDSDtBQUNKLEdBaENJO0FBa0NMQyxFQUFBQSxVQWxDSyxzQkFrQ09DLEVBbENQLEVBa0NXO0FBQ1osUUFBR2xCLFNBQVMsQ0FBQ2UsWUFBVixJQUEwQixJQUE3QixFQUFtQyxLQUFLTCxhQUFMLENBQW1CUyxNQUFuQixHQUE0Qm5CLFNBQVMsQ0FBQ29CLGlCQUF0Qzs7QUFDbkMsUUFBR3BCLFNBQVMsQ0FBQ3FCLGlCQUFWLElBQStCLFdBQS9CLElBQThDLEtBQUtQLFVBQUwsSUFBbUIsS0FBcEUsRUFDQTtBQUNJLFdBQUtBLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxXQUFLRixZQUFMLENBQWtCSSxNQUFsQixHQUEyQixJQUEzQjtBQUNILEtBSkQsTUFLSyxJQUFJaEIsU0FBUyxDQUFDcUIsaUJBQVYsSUFBK0IsT0FBL0IsSUFBMEMsS0FBS1AsVUFBTCxJQUFtQixLQUFqRSxFQUNMO0FBQ0ksV0FBS0EsVUFBTCxHQUFrQixJQUFsQjtBQUNBZCxNQUFBQSxTQUFTLENBQUNzQixVQUFWLEdBQXVCLE9BQXZCO0FBQ0FuQixNQUFBQSxFQUFFLENBQUNvQixRQUFILENBQVlDLFNBQVosQ0FBc0Isb0JBQW1CeEIsU0FBUyxDQUFDeUIsZ0JBQW5EO0FBQ0gsS0FMSSxNQU1BLElBQUd6QixTQUFTLENBQUNxQixpQkFBVixJQUErQixLQUEvQixJQUF3QyxLQUFLUCxVQUFMLElBQW1CLElBQTlELEVBQ0w7QUFDSSxXQUFLQSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0FkLE1BQUFBLFNBQVMsQ0FBQzBCLGFBQVY7QUFDQSxXQUFLQyxZQUFMLENBQWtCLFlBQVc7QUFDMUJ4QixRQUFBQSxFQUFFLENBQUNvQixRQUFILENBQVlDLFNBQVosQ0FBc0IsZ0JBQWV4QixTQUFTLENBQUN5QixnQkFBL0M7QUFDRixPQUZELEVBRUcsQ0FGSDtBQUdIO0FBQ0o7QUF2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdhbWVNb2RlbCA9IHJlcXVpcmUoXCJNb2RlbFwiKTtcclxudmFyIEd1ZXN0NF9HYW1lQ291bnREb3duID0gcmVxdWlyZShcIkd1ZXN0NF9HYW1lQ291bnREb3duXCIpO1xyXG5cclxuLy/njqnlrrbpgYrmiLLlgJLmlbgo5pyJ6aGv56S65YCS5pW45pW45a2XKWpzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IEd1ZXN0NF9HYW1lQ291bnREb3duLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjb3VudGRvd246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBOb0xpbml0VGltZUltZzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgY291bnRkb3duVGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB3YWl0Rm9yQ291bnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbHJlYWR5ZW5kID0gZmFsc2U7XHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLlhNTFRpbWVMaW1pdCA9PSBmYWxzZSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZG93bi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLk5vTGluaXRUaW1lSW1nLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGxhdGVVcGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLlhNTFRpbWVMaW1pdCA9PSB0cnVlKSB0aGlzLmNvdW50ZG93blRleHQuc3RyaW5nID0gZ2FtZU1vZGVsLmdhbWV0aW1lQ291bnREb3duXHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwiY2FsY3VsYXRlXCIgJiYgdGhpcy5hbHJlYWR5ZW5kID09IGZhbHNlKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxyZWFkeWVuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMud2FpdEZvckNvdW50LmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwiY2xvc2VcIiAmJiB0aGlzLmFscmVhZHllbmQgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmFscmVhZHllbmQgPSB0cnVlXHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5Ib3N0V2luZG93ID0gXCJjbG9zZVwiXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkd1ZXN0MV9Kb2luR2FtZVwiKyBnYW1lTW9kZWwuQmFja0dyb3VuZF9UaGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwiZW5kXCIgJiYgdGhpcy5hbHJlYWR5ZW5kID09IHRydWUpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hbHJlYWR5ZW5kID0gZmFsc2VcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLkxvdHRlcnlfR3Vlc3QoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7IFxyXG4gICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHdWVzdF9Qcml6ZVwiKyBnYW1lTW9kZWwuQmFja0dyb3VuZF9UaGVtZSk7XHJcbiAgICAgICAgICAgIH0sIDIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pXHJcblxyXG4iXX0=