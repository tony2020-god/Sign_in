
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/4._Q&A/程式碼/Host1_ShowQuestion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db8feOc69tHCbzSR5QPl9mm', 'Host1_ShowQuestion');
// 4._Q&A/程式碼/Host1_ShowQuestion.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {
    Bar: {
      "default": null,
      type: cc.Sprite
    },
    Question: {
      "default": null,
      type: cc.Node
    },
    ShowQuestionBtn: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {},
  start: function start() {
    gameModel.QuestionCount++;
    this.AlreadyShowQuestion = false; //this.Question.getComponent(cc.Label).string = gameModel.Question[gameModel.QuestionCount]
  },
  ShowQuestion: function ShowQuestion() {
    this.OpacityAni();
    this.schedule(this.ProgressBar, 0.01);
    this.Question.active = true;
  },
  OpacityAni: function OpacityAni() {
    cc.tween(this.ShowQuestionBtn).to(0.2, {
      opacity: 0
    }).start();
  },
  ProgressBar: function ProgressBar() {
    this.Bar.getComponent(cc.Sprite).fillRange -= 0.003;

    if (this.Bar.getComponent(cc.Sprite).fillRange <= 0) {
      this.unschedule(this.ProgressBar); //gameModel.WebSocket_GameStatus_Host("start",0.1)

      cc.director.loadScene("Host2_Game");
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcNC5fUSZBXFznqIvlvI/norxcXEhvc3QxX1Nob3dRdWVzdGlvbi5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJCYXIiLCJ0eXBlIiwiU3ByaXRlIiwiUXVlc3Rpb24iLCJOb2RlIiwiU2hvd1F1ZXN0aW9uQnRuIiwib25Mb2FkIiwic3RhcnQiLCJRdWVzdGlvbkNvdW50IiwiQWxyZWFkeVNob3dRdWVzdGlvbiIsIlNob3dRdWVzdGlvbiIsIk9wYWNpdHlBbmkiLCJzY2hlZHVsZSIsIlByb2dyZXNzQmFyIiwiYWN0aXZlIiwidHdlZW4iLCJ0byIsIm9wYWNpdHkiLCJnZXRDb21wb25lbnQiLCJmaWxsUmFuZ2UiLCJ1bnNjaGVkdWxlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUF2Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLEdBQUcsRUFBQztBQUNGLGlCQUFTLElBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlAsS0FETTtBQU1WQyxJQUFBQSxRQUFRLEVBQUM7QUFDUCxpQkFBUyxJQURGO0FBRVBGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZGLEtBTkM7QUFXVkMsSUFBQUEsZUFBZSxFQUFDO0FBQ2QsaUJBQVMsSUFESztBQUVkSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7QUFGSztBQVhOLEdBSFA7QUFvQkxFLEVBQUFBLE1BcEJLLG9CQW9CSyxDQUNULENBckJJO0FBdUJMQyxFQUFBQSxLQXZCSyxtQkF1Qkk7QUFDUGIsSUFBQUEsU0FBUyxDQUFDYyxhQUFWO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkIsS0FBM0IsQ0FGTyxDQUdQO0FBQ0QsR0EzQkk7QUE2QkpDLEVBQUFBLFlBN0JJLDBCQTZCVTtBQUNYLFNBQUtDLFVBQUw7QUFDQSxTQUFLQyxRQUFMLENBQWMsS0FBS0MsV0FBbkIsRUFBZ0MsSUFBaEM7QUFDQSxTQUFLVixRQUFMLENBQWNXLE1BQWQsR0FBdUIsSUFBdkI7QUFDSCxHQWpDSTtBQW1DTEgsRUFBQUEsVUFuQ0ssd0JBbUNPO0FBQ1ZmLElBQUFBLEVBQUUsQ0FBQ21CLEtBQUgsQ0FBVSxLQUFLVixlQUFmLEVBQ0NXLEVBREQsQ0FDSSxHQURKLEVBQ1M7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQVYsS0FEVCxFQUVDVixLQUZEO0FBR0QsR0F2Q0k7QUF5Q0xNLEVBQUFBLFdBekNLLHlCQXlDUTtBQUNULFNBQUtiLEdBQUwsQ0FBU2tCLFlBQVQsQ0FBc0J0QixFQUFFLENBQUNNLE1BQXpCLEVBQWlDaUIsU0FBakMsSUFBOEMsS0FBOUM7O0FBQ0EsUUFBSSxLQUFLbkIsR0FBTCxDQUFTa0IsWUFBVCxDQUFzQnRCLEVBQUUsQ0FBQ00sTUFBekIsRUFBaUNpQixTQUFqQyxJQUE4QyxDQUFsRCxFQUNBO0FBQ0ksV0FBS0MsVUFBTCxDQUFnQixLQUFLUCxXQUFyQixFQURKLENBRUk7O0FBQ0FqQixNQUFBQSxFQUFFLENBQUN5QixRQUFILENBQVlDLFNBQVosQ0FBc0IsWUFBdEI7QUFDSDtBQUNKLEdBakRJLENBbURMOztBQW5ESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgQmFyOntcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlNwcml0ZVxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgUXVlc3Rpb246e1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgU2hvd1F1ZXN0aW9uQnRuOntcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICBnYW1lTW9kZWwuUXVlc3Rpb25Db3VudCsrXHJcbiAgICAgIHRoaXMuQWxyZWFkeVNob3dRdWVzdGlvbiA9IGZhbHNlXHJcbiAgICAgIC8vdGhpcy5RdWVzdGlvbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdhbWVNb2RlbC5RdWVzdGlvbltnYW1lTW9kZWwuUXVlc3Rpb25Db3VudF1cclxuICAgIH0sXHJcblxyXG4gICAgIFNob3dRdWVzdGlvbigpe1xyXG4gICAgICAgIHRoaXMuT3BhY2l0eUFuaSgpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLlByb2dyZXNzQmFyLCAwLjAxKTtcclxuICAgICAgICB0aGlzLlF1ZXN0aW9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIE9wYWNpdHlBbmkoKXtcclxuICAgICAgY2MudHdlZW4oIHRoaXMuU2hvd1F1ZXN0aW9uQnRuKVxyXG4gICAgICAudG8oMC4yLCB7b3BhY2l0eTogMH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBQcm9ncmVzc0Jhcigpe1xyXG4gICAgICAgIHRoaXMuQmFyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSAtPSAwLjAwMztcclxuICAgICAgICBpZiAodGhpcy5CYXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlIDw9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Qcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgICAgIC8vZ2FtZU1vZGVsLldlYlNvY2tldF9HYW1lU3RhdHVzX0hvc3QoXCJzdGFydFwiLDAuMSlcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiSG9zdDJfR2FtZVwiKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==