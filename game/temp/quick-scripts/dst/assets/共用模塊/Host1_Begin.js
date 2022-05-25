
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Host1_Begin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17b47HkTOJLkaG/+zNZSvjZ', 'Host1_Begin');
// 共用模塊/Host1_Begin.js

"use strict";

var gameModel = require("Model"); ///主持人開始場景js


cc.Class({
  "extends": cc.Component,
  properties: {
    round: {
      "default": null,
      type: cc.Label
    },
    NowPeople: {
      "default": null,
      type: cc.Label
    },
    aud: {
      "default": null,
      type: cc.AudioSource
    },
    Session: {
      "default": null,
      type: cc.Label
    },
    WrongAlert: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    gameModel.connet_ws = false;
    this.Session.string = "當前場次 : " + gameModel.Session;
    this.AlertText = cc.find("畫布/警告/警告文字");
  },
  start: function start() {
    cc.director.preloadScene("Host3_Game");
  },
  touchBegin: function touchBegin() {
    if (gameModel.people == 0) {
      this.AlertText.getComponent(cc.Label).string = "尚未有玩家加入遊戲";
      this.WrongAlert.active = true;
    } else {
      if (gameModel.XMLTimeLimit == true) gameModel.gametimeCountDown = gameModel.gametimelimit;
      gameModel.CurrentRound = gameModel.round;
      gameModel.WebSocket_GameStatus_Host("start", 0.1);
      this.scheduleOnce(function () {
        if (gameModel.connet_ws == true) {
          gameModel.GameStatusMessage = "start";
          cc.director.loadScene("Host2_CountDown" + gameModel.BackGround_Theme);
          gameModel.connet_ws = false;
        } else {
          this.AlertText.getComponent(cc.Label).string = "尚未與伺服器連接";
          this.WrongAlert.active = true;
        }
      }, 0.7);
    }
  },
  CloseAlert: function CloseAlert() {
    this.WrongAlert.active = false;
  },
  update: function update(dt) {
    this.round.string = gameModel.round;
    this.NowPeople.string = gameModel.people;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxIb3N0MV9CZWdpbi5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyb3VuZCIsInR5cGUiLCJMYWJlbCIsIk5vd1Blb3BsZSIsImF1ZCIsIkF1ZGlvU291cmNlIiwiU2Vzc2lvbiIsIldyb25nQWxlcnQiLCJOb2RlIiwib25Mb2FkIiwiY29ubmV0X3dzIiwic3RyaW5nIiwiQWxlcnRUZXh0IiwiZmluZCIsInN0YXJ0IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJ0b3VjaEJlZ2luIiwicGVvcGxlIiwiZ2V0Q29tcG9uZW50IiwiYWN0aXZlIiwiWE1MVGltZUxpbWl0IiwiZ2FtZXRpbWVDb3VudERvd24iLCJnYW1ldGltZWxpbWl0IiwiQ3VycmVudFJvdW5kIiwiV2ViU29ja2V0X0dhbWVTdGF0dXNfSG9zdCIsInNjaGVkdWxlT25jZSIsIkdhbWVTdGF0dXNNZXNzYWdlIiwibG9hZFNjZW5lIiwiQmFja0dyb3VuZF9UaGVtZSIsIkNsb3NlQWxlcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCLEVBRUE7OztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFDO0FBQ0YsaUJBQVEsSUFETjtBQUVGQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGTixLQURFO0FBTVJDLElBQUFBLFNBQVMsRUFBQztBQUNOLGlCQUFRLElBREY7QUFFTkYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkYsS0FORjtBQVdSRSxJQUFBQSxHQUFHLEVBQUM7QUFDQSxpQkFBUSxJQURSO0FBRUFILE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDUztBQUZSLEtBWEk7QUFnQlJDLElBQUFBLE9BQU8sRUFBQztBQUNKLGlCQUFRLElBREo7QUFFSkwsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkosS0FoQkE7QUFxQlJLLElBQUFBLFVBQVUsRUFBQztBQUNQLGlCQUFRLElBREQ7QUFFUE4sTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNZO0FBRkQ7QUFyQkgsR0FIUDtBQThCTEMsRUFBQUEsTUE5Qkssb0JBOEJLO0FBQ05mLElBQUFBLFNBQVMsQ0FBQ2dCLFNBQVYsR0FBc0IsS0FBdEI7QUFDQSxTQUFLSixPQUFMLENBQWFLLE1BQWIsR0FBc0IsWUFBWWpCLFNBQVMsQ0FBQ1ksT0FBNUM7QUFDQSxTQUFLTSxTQUFMLEdBQWlCaEIsRUFBRSxDQUFDaUIsSUFBSCxDQUFRLFlBQVIsQ0FBakI7QUFDSCxHQWxDSTtBQXFDTEMsRUFBQUEsS0FyQ0ssbUJBcUNJO0FBQ0xsQixJQUFBQSxFQUFFLENBQUNtQixRQUFILENBQVlDLFlBQVosQ0FBeUIsWUFBekI7QUFDSCxHQXZDSTtBQTBDTEMsRUFBQUEsVUExQ0ssd0JBMENRO0FBQ1QsUUFBR3ZCLFNBQVMsQ0FBQ3dCLE1BQVYsSUFBb0IsQ0FBdkIsRUFDQTtBQUNJLFdBQUtOLFNBQUwsQ0FBZU8sWUFBZixDQUE0QnZCLEVBQUUsQ0FBQ00sS0FBL0IsRUFBc0NTLE1BQXRDLEdBQStDLFdBQS9DO0FBQ0EsV0FBS0osVUFBTCxDQUFnQmEsTUFBaEIsR0FBeUIsSUFBekI7QUFDSCxLQUpELE1BTUE7QUFDSSxVQUFHMUIsU0FBUyxDQUFDMkIsWUFBVixJQUEwQixJQUE3QixFQUFtQzNCLFNBQVMsQ0FBQzRCLGlCQUFWLEdBQThCNUIsU0FBUyxDQUFDNkIsYUFBeEM7QUFDbkM3QixNQUFBQSxTQUFTLENBQUM4QixZQUFWLEdBQXlCOUIsU0FBUyxDQUFDTSxLQUFuQztBQUNBTixNQUFBQSxTQUFTLENBQUMrQix5QkFBVixDQUFvQyxPQUFwQyxFQUE0QyxHQUE1QztBQUNBLFdBQUtDLFlBQUwsQ0FBa0IsWUFBVztBQUN6QixZQUFHaEMsU0FBUyxDQUFDZ0IsU0FBVixJQUF1QixJQUExQixFQUNBO0FBQ0VoQixVQUFBQSxTQUFTLENBQUNpQyxpQkFBVixHQUE4QixPQUE5QjtBQUNBL0IsVUFBQUEsRUFBRSxDQUFDbUIsUUFBSCxDQUFZYSxTQUFaLENBQXNCLG9CQUFtQmxDLFNBQVMsQ0FBQ21DLGdCQUFuRDtBQUNBbkMsVUFBQUEsU0FBUyxDQUFDZ0IsU0FBVixHQUFzQixLQUF0QjtBQUNELFNBTEQsTUFPQTtBQUNJLGVBQUtFLFNBQUwsQ0FBZU8sWUFBZixDQUE0QnZCLEVBQUUsQ0FBQ00sS0FBL0IsRUFBc0NTLE1BQXRDLEdBQStDLFVBQS9DO0FBQ0EsZUFBS0osVUFBTCxDQUFnQmEsTUFBaEIsR0FBeUIsSUFBekI7QUFDSDtBQUNKLE9BWkQsRUFZRyxHQVpIO0FBYUg7QUFDSixHQW5FSTtBQXFFTFUsRUFBQUEsVUFyRUssd0JBcUVPO0FBQ1IsU0FBS3ZCLFVBQUwsQ0FBZ0JhLE1BQWhCLEdBQXlCLEtBQXpCO0FBQ0gsR0F2RUk7QUF5RUxXLEVBQUFBLE1BekVLLGtCQXlFR0MsRUF6RUgsRUF5RU87QUFDUixTQUFLaEMsS0FBTCxDQUFXVyxNQUFYLEdBQW9CakIsU0FBUyxDQUFDTSxLQUE5QjtBQUNBLFNBQUtHLFNBQUwsQ0FBZVEsTUFBZixHQUF3QmpCLFNBQVMsQ0FBQ3dCLE1BQWxDO0FBQ0g7QUE1RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdhbWVNb2RlbCA9IHJlcXVpcmUoXCJNb2RlbFwiKTtcclxuXHJcbi8vL+S4u+aMgeS6uumWi+Wni+WgtOaZr2pzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcm91bmQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBOb3dQZW9wbGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhdWQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQXVkaW9Tb3VyY2VcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBTZXNzaW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBXcm9uZ0FsZXJ0OntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBnYW1lTW9kZWwuY29ubmV0X3dzID0gZmFsc2VcclxuICAgICAgICB0aGlzLlNlc3Npb24uc3RyaW5nID0gXCLnlbbliY3loLTmrKEgOiBcIiArIGdhbWVNb2RlbC5TZXNzaW9uOyBcclxuICAgICAgICB0aGlzLkFsZXJ0VGV4dCA9IGNjLmZpbmQoXCLnlavluIMv6K2m5ZGKL+itpuWRiuaWh+Wtl1wiKSAgIFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIkhvc3QzX0dhbWVcIilcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHRvdWNoQmVnaW4gKCl7XHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLnBlb3BsZSA9PSAwKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuQWxlcnRUZXh0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLlsJrmnKrmnInnjqnlrrbliqDlhaXpgYrmiLJcIjtcclxuICAgICAgICAgICAgdGhpcy5Xcm9uZ0FsZXJ0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihnYW1lTW9kZWwuWE1MVGltZUxpbWl0ID09IHRydWUpIGdhbWVNb2RlbC5nYW1ldGltZUNvdW50RG93biA9IGdhbWVNb2RlbC5nYW1ldGltZWxpbWl0O1xyXG4gICAgICAgICAgICBnYW1lTW9kZWwuQ3VycmVudFJvdW5kID0gZ2FtZU1vZGVsLnJvdW5kO1xyXG4gICAgICAgICAgICBnYW1lTW9kZWwuV2ViU29ja2V0X0dhbWVTdGF0dXNfSG9zdChcInN0YXJ0XCIsMC4xKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgICAgICBpZihnYW1lTW9kZWwuY29ubmV0X3dzID09IHRydWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9IFwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJIb3N0Ml9Db3VudERvd25cIisgZ2FtZU1vZGVsLkJhY2tHcm91bmRfVGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICBnYW1lTW9kZWwuY29ubmV0X3dzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkFsZXJ0VGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5bCa5pyq6IiH5Ly65pyN5Zmo6YCj5o6lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Xcm9uZ0FsZXJ0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBDbG9zZUFsZXJ0KCl7XHJcbiAgICAgICAgdGhpcy5Xcm9uZ0FsZXJ0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5yb3VuZC5zdHJpbmcgPSBnYW1lTW9kZWwucm91bmQ7XHJcbiAgICAgICAgdGhpcy5Ob3dQZW9wbGUuc3RyaW5nID0gZ2FtZU1vZGVsLnBlb3BsZTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=