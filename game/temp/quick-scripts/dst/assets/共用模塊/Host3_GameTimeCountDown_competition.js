
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Host3_GameTimeCountDown_competition.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc070tZabBPcZg3fu06JAgR', 'Host3_GameTimeCountDown_competition');
// 共用模塊/Host3_GameTimeCountDown_competition.js

"use strict";

var gameModel = require("Model");

var GametimeCountDown = require("Host3_GameTimeCountDown"); ///主持人遊戲時間倒數js


cc.Class({
  "extends": GametimeCountDown,
  properties: {},
  start: function start() {},
  //遊戲倒數
  countdown: function countdown() {
    if (gameModel.GameStatusMessage == "end" || gameModel.GameStatusMessage == "calculate") return;
    gameModel.gametimeCountDown--;
    gameModel.WebSocket_GameStatus_Host("gaming", 0.1);
    this.countdownText.string = gameModel.gametimeCountDown;
    if (gameModel.gametimeCountDown == 10) this.currentsound = cc.audioEngine.play(this.tensecond, true, 15);

    if (gameModel.gametimeCountDown == 0) {
      cc.audioEngine.stop(this.currentsound);
      gameModel.WebSocket_GameStatus_Host("calculate", 0.1);
      gameModel.GameStatusMessage = "calculate";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxIb3N0M19HYW1lVGltZUNvdW50RG93bl9jb21wZXRpdGlvbi5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiR2FtZXRpbWVDb3VudERvd24iLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInN0YXJ0IiwiY291bnRkb3duIiwiR2FtZVN0YXR1c01lc3NhZ2UiLCJnYW1ldGltZUNvdW50RG93biIsIldlYlNvY2tldF9HYW1lU3RhdHVzX0hvc3QiLCJjb3VudGRvd25UZXh0Iiwic3RyaW5nIiwiY3VycmVudHNvdW5kIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwidGVuc2Vjb25kIiwic3RvcCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsaUJBQWlCLEdBQUdELE9BQU8sQ0FBQyx5QkFBRCxDQUEvQixFQUVBOzs7QUFDQUUsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRixpQkFESjtBQUdMRyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxLQVBLLG1CQU9JLENBQUUsQ0FQTjtBQVNMO0FBQ0FDLEVBQUFBLFNBVkssdUJBVU07QUFDUCxRQUFHUCxTQUFTLENBQUNRLGlCQUFWLElBQStCLEtBQS9CLElBQXdDUixTQUFTLENBQUNRLGlCQUFWLElBQStCLFdBQTFFLEVBQXVGO0FBQ3ZGUixJQUFBQSxTQUFTLENBQUNTLGlCQUFWO0FBQ0FULElBQUFBLFNBQVMsQ0FBQ1UseUJBQVYsQ0FBb0MsUUFBcEMsRUFBNkMsR0FBN0M7QUFDQSxTQUFLQyxhQUFMLENBQW1CQyxNQUFuQixHQUE0QlosU0FBUyxDQUFDUyxpQkFBdEM7QUFDQSxRQUFHVCxTQUFTLENBQUNTLGlCQUFWLElBQStCLEVBQWxDLEVBQXNDLEtBQUtJLFlBQUwsR0FBb0JWLEVBQUUsQ0FBQ1csV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtDLFNBQXpCLEVBQW9DLElBQXBDLEVBQTBDLEVBQTFDLENBQXBCOztBQUN0QyxRQUFHaEIsU0FBUyxDQUFDUyxpQkFBVixJQUErQixDQUFsQyxFQUNBO0FBQ0lOLE1BQUFBLEVBQUUsQ0FBQ1csV0FBSCxDQUFlRyxJQUFmLENBQW9CLEtBQUtKLFlBQXpCO0FBQ0FiLE1BQUFBLFNBQVMsQ0FBQ1UseUJBQVYsQ0FBb0MsV0FBcEMsRUFBZ0QsR0FBaEQ7QUFDQVYsTUFBQUEsU0FBUyxDQUFDUSxpQkFBVixHQUE4QixXQUE5QjtBQUNIO0FBQ0osR0F0Qkk7QUF3QkpVLEVBQUFBLE1BeEJJLGtCQXdCSUMsRUF4QkosRUF3QlEsQ0FBRTtBQXhCVixDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpOyBcclxudmFyIEdhbWV0aW1lQ291bnREb3duID0gcmVxdWlyZShcIkhvc3QzX0dhbWVUaW1lQ291bnREb3duXCIpOyBcclxuXHJcbi8vL+S4u+aMgeS6uumBiuaIsuaZgumWk+WAkuaVuGpzXHJcbmNjLkNsYXNzKHsgXHJcbiAgICBleHRlbmRzOiBHYW1ldGltZUNvdW50RG93bixcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7fSxcclxuICAgIFxyXG4gICAgLy/pgYrmiLLlgJLmlbhcclxuICAgIGNvdW50ZG93bigpe1xyXG4gICAgICAgIGlmKGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9PSBcImVuZFwiIHx8IGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9PSBcImNhbGN1bGF0ZVwiKSByZXR1cm47XHJcbiAgICAgICAgZ2FtZU1vZGVsLmdhbWV0aW1lQ291bnREb3duLS07XHJcbiAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9HYW1lU3RhdHVzX0hvc3QoXCJnYW1pbmdcIiwwLjEpXHJcbiAgICAgICAgdGhpcy5jb3VudGRvd25UZXh0LnN0cmluZyA9IGdhbWVNb2RlbC5nYW1ldGltZUNvdW50RG93bjtcclxuICAgICAgICBpZihnYW1lTW9kZWwuZ2FtZXRpbWVDb3VudERvd24gPT0gMTApIHRoaXMuY3VycmVudHNvdW5kID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnRlbnNlY29uZCwgdHJ1ZSwgMTUpO1xyXG4gICAgICAgIGlmKGdhbWVNb2RlbC5nYW1ldGltZUNvdW50RG93biA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmN1cnJlbnRzb3VuZClcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9HYW1lU3RhdHVzX0hvc3QoXCJjYWxjdWxhdGVcIiwwLjEpXHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9IFwiY2FsY3VsYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgICB1cGRhdGUgKGR0KSB7fSxcclxufSk7Il19