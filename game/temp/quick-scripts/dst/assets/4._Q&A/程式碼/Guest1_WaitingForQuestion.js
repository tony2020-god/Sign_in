
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/4._Q&A/程式碼/Guest1_WaitingForQuestion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2bd3wUqZlDsIwM6v+H0Fa5', 'Guest1_WaitingForQuestion');
// 4._Q&A/程式碼/Guest1_WaitingForQuestion.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {
    Rank: {
      "default": null,
      type: cc.Label
    },
    Score: {
      "default": null,
      type: cc.Label
    },
    Time: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {},
  start: function start() {
    this.UpdateRankScore();
  },
  update: function update(dt) {
    if (gameModel.GameStatusMessage == "start") cc.director.loadScene("Guest2_Answer");
  },
  UpdateRankScore: function UpdateRankScore() {
    this.Rank.string = gameModel.Rank;
    this.Score.string = gameModel.Score;
    this.Time.string = gameModel.gametimelimit;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcNC5fUSZBXFznqIvlvI/norxcXEd1ZXN0MV9XYWl0aW5nRm9yUXVlc3Rpb24uanMiXSwibmFtZXMiOlsiZ2FtZU1vZGVsIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUmFuayIsInR5cGUiLCJMYWJlbCIsIlNjb3JlIiwiVGltZSIsIm9uTG9hZCIsInN0YXJ0IiwiVXBkYXRlUmFua1Njb3JlIiwidXBkYXRlIiwiZHQiLCJHYW1lU3RhdHVzTWVzc2FnZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic3RyaW5nIiwiZ2FtZXRpbWVsaW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFDO0FBQ0QsaUJBQVMsSUFEUjtBQUVEQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGUixLQURHO0FBTVJDLElBQUFBLEtBQUssRUFBQztBQUNGLGlCQUFTLElBRFA7QUFFRkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlAsS0FORTtBQVdSRSxJQUFBQSxJQUFJLEVBQUM7QUFDRCxpQkFBUyxJQURSO0FBRURILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZSO0FBWEcsR0FIUDtBQXNCTEcsRUFBQUEsTUF0Qkssb0JBc0JLLENBQ1QsQ0F2Qkk7QUF5QkxDLEVBQUFBLEtBekJLLG1CQXlCSTtBQUNMLFNBQUtDLGVBQUw7QUFDSCxHQTNCSTtBQTZCTEMsRUFBQUEsTUE3Qkssa0JBNkJHQyxFQTdCSCxFQTZCTztBQUNSLFFBQUdmLFNBQVMsQ0FBQ2dCLGlCQUFWLElBQStCLE9BQWxDLEVBQTJDZCxFQUFFLENBQUNlLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixlQUF0QjtBQUM5QyxHQS9CSTtBQWlDTEwsRUFBQUEsZUFqQ0ssNkJBaUNZO0FBQ2IsU0FBS1AsSUFBTCxDQUFVYSxNQUFWLEdBQW1CbkIsU0FBUyxDQUFDTSxJQUE3QjtBQUNBLFNBQUtHLEtBQUwsQ0FBV1UsTUFBWCxHQUFvQm5CLFNBQVMsQ0FBQ1MsS0FBOUI7QUFDQSxTQUFLQyxJQUFMLENBQVVTLE1BQVYsR0FBbUJuQixTQUFTLENBQUNvQixhQUE3QjtBQUNIO0FBckNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFJhbms6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFNjb3JlOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBUaW1lOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLlVwZGF0ZVJhbmtTY29yZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwic3RhcnRcIikgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR3Vlc3QyX0Fuc3dlclwiKVxyXG4gICAgfSxcclxuXHJcbiAgICBVcGRhdGVSYW5rU2NvcmUoKXtcclxuICAgICAgICB0aGlzLlJhbmsuc3RyaW5nID0gZ2FtZU1vZGVsLlJhbms7XHJcbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBnYW1lTW9kZWwuU2NvcmU7XHJcbiAgICAgICAgdGhpcy5UaW1lLnN0cmluZyA9IGdhbWVNb2RlbC5nYW1ldGltZWxpbWl0O1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==