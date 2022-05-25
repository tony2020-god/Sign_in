
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/RoleConfirm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b008WMP59FvIX0HbAAwdXl', 'RoleConfirm');
// 共用模塊/RoleConfirm.js

"use strict";

var gameModel = require("Model"); ///判斷腳色js


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
  onLoad: function onLoad() {
    gameModel.GameName = cc.director.getScene()._name.substr(12, cc.director.getScene()._name.length); //取得遊戲名稱

    gameModel.local_ID = window.location.host == ("hilives.net" || "www.hilives.net") ? "api.hilives.net" : "apidev.hilives.net";
    gameModel.Domain = "https://" + window.location.host; //取得目前的網域

    this.CheckRole = false;
    gameModel.GameStatusMessage = "open";
    gameModel.Game_Information();
  },
  start: function start() {
    gameModel.RoleComfirm();
  },
  JudgeError: function JudgeError() {
    if (gameModel.CheckRole == true && gameModel.CannotJoinGame == "") this.JudgeRole();else if (gameModel.CheckRole == true && gameModel.CannotJoinGame != "") {
      this.AlertText.string = gameModel.CannotJoinGame;
      this.WrongAlert.active = true;
      gameModel.CheckRole = false;
    }
  },
  //判斷用戶角色並切換至各自角色場景
  JudgeRole: function JudgeRole() {
    gameModel.CheckRole = false;

    if (gameModel.role == "guest" && this.CheckRole == false) {
      this.CheckRole = true;
      gameModel.WebSocket_NumberOfPeople_Guest(1000, false);
      gameModel.WebSocket_GameStatus_Guest();
      if (gameModel.game_type == "turntable") cc.director.loadScene("Guest1_Weel" + gameModel.BackGround_Theme);else if (gameModel.game_type == "jiugongge") cc.director.loadScene("Guest1_Jiugongge" + gameModel.BackGround_Theme);else cc.director.loadScene("Guest1_JoinGame" + gameModel.BackGround_Theme);
    } else if (gameModel.role == "host" && this.CheckRole == false) {
      this.CheckRole = true;
      gameModel.GameStatusWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/status/host?activity_id=" + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName); //開啟遊戲狀態ws

      this.scheduleOnce(function () {
        //每1秒鐘值行一次，重複做1次
        gameModel.WebSocket_NumberOfPeople_Host();

        if (gameModel.game_type == "turntable") {
          gameModel.WebSocket_GameStatus_Host("close", 0.1);
          gameModel.NumberOfLotteryWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/winning/staff?activity_id=" + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName); //開啟更新得獎人的ws

          cc.director.loadScene("Host1_Weel" + gameModel.BackGround_Theme);
        } else if (gameModel.game_type == "jiugongge") {
          gameModel.WebSocket_GameStatus_Host("close", 0.1);
          gameModel.NumberOfLotteryWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/winning/staff?activity_id=" + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName); //開啟更新得獎人的ws

          cc.director.loadScene("Host1_Jiugongge" + gameModel.BackGround_Theme);
        } else {
          gameModel.WebSocket_GameStatus_Host("open", 0.1);
          cc.director.loadScene("Host1_Start" + gameModel.BackGround_Theme);
        }
      }, 1);
    }
  },
  //持續判斷用戶角色
  update: function update(dt) {
    this.JudgeError();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxSb2xlQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJXcm9uZ0FsZXJ0IiwidHlwZSIsIk5vZGUiLCJBbGVydFRleHQiLCJMYWJlbCIsIm9uTG9hZCIsIkdhbWVOYW1lIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsIl9uYW1lIiwic3Vic3RyIiwibGVuZ3RoIiwibG9jYWxfSUQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJEb21haW4iLCJDaGVja1JvbGUiLCJHYW1lU3RhdHVzTWVzc2FnZSIsIkdhbWVfSW5mb3JtYXRpb24iLCJzdGFydCIsIlJvbGVDb21maXJtIiwiSnVkZ2VFcnJvciIsIkNhbm5vdEpvaW5HYW1lIiwiSnVkZ2VSb2xlIiwic3RyaW5nIiwiYWN0aXZlIiwicm9sZSIsIldlYlNvY2tldF9OdW1iZXJPZlBlb3BsZV9HdWVzdCIsIldlYlNvY2tldF9HYW1lU3RhdHVzX0d1ZXN0IiwiZ2FtZV90eXBlIiwibG9hZFNjZW5lIiwiQmFja0dyb3VuZF9UaGVtZSIsIkdhbWVTdGF0dXNXU19Ib3N0IiwiV2ViU29ja2V0IiwiYWN0aXZpdHlfaWQiLCJnYW1lX2lkIiwic2NoZWR1bGVPbmNlIiwiV2ViU29ja2V0X051bWJlck9mUGVvcGxlX0hvc3QiLCJXZWJTb2NrZXRfR2FtZVN0YXR1c19Ib3N0IiwiTnVtYmVyT2ZMb3R0ZXJ5V1NfSG9zdCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkIsRUFFQTs7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUM7QUFDUCxpQkFBUSxJQUREO0FBRVBDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZELEtBREg7QUFLUkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVEsSUFERDtBQUVQRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1E7QUFGRDtBQUxILEdBSFA7QUFjTEMsRUFBQUEsTUFkSyxvQkFjSztBQUNOWCxJQUFBQSxTQUFTLENBQUNZLFFBQVYsR0FBc0JWLEVBQUUsQ0FBQ1csUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxLQUF2QixDQUE2QkMsTUFBN0IsQ0FBb0MsRUFBcEMsRUFBdUNkLEVBQUUsQ0FBQ1csUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxLQUF2QixDQUE2QkUsTUFBcEUsQ0FBdEIsQ0FETSxDQUM0Rjs7QUFDbEdqQixJQUFBQSxTQUFTLENBQUNrQixRQUFWLEdBQXFCQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEtBQXlCLGlCQUFpQixpQkFBMUMsSUFBK0QsaUJBQS9ELEdBQW1GLG9CQUF4RztBQUNBckIsSUFBQUEsU0FBUyxDQUFDc0IsTUFBVixHQUFtQixhQUFhSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhELENBSE0sQ0FHZ0Q7O0FBQ3RELFNBQUtFLFNBQUwsR0FBaUIsS0FBakI7QUFDQXZCLElBQUFBLFNBQVMsQ0FBQ3dCLGlCQUFWLEdBQThCLE1BQTlCO0FBQ0F4QixJQUFBQSxTQUFTLENBQUN5QixnQkFBVjtBQUNILEdBckJJO0FBdUJMQyxFQUFBQSxLQXZCSyxtQkF1Qkc7QUFDSjFCLElBQUFBLFNBQVMsQ0FBQzJCLFdBQVY7QUFDSCxHQXpCSTtBQTJCTEMsRUFBQUEsVUEzQkssd0JBMkJPO0FBQ1IsUUFBSTVCLFNBQVMsQ0FBQ3VCLFNBQVYsSUFBdUIsSUFBdkIsSUFBK0J2QixTQUFTLENBQUM2QixjQUFWLElBQTRCLEVBQS9ELEVBQW1FLEtBQUtDLFNBQUwsR0FBbkUsS0FDSyxJQUFHOUIsU0FBUyxDQUFDdUIsU0FBVixJQUF1QixJQUF2QixJQUErQnZCLFNBQVMsQ0FBQzZCLGNBQVYsSUFBNEIsRUFBOUQsRUFDTDtBQUNJLFdBQUtwQixTQUFMLENBQWVzQixNQUFmLEdBQXdCL0IsU0FBUyxDQUFDNkIsY0FBbEM7QUFDQSxXQUFLdkIsVUFBTCxDQUFnQjBCLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0FoQyxNQUFBQSxTQUFTLENBQUN1QixTQUFWLEdBQXNCLEtBQXRCO0FBQ0g7QUFDSixHQW5DSTtBQXFDTDtBQUNBTyxFQUFBQSxTQXRDSyx1QkFzQ007QUFDUjlCLElBQUFBLFNBQVMsQ0FBQ3VCLFNBQVYsR0FBc0IsS0FBdEI7O0FBQ0EsUUFBR3ZCLFNBQVMsQ0FBQ2lDLElBQVYsSUFBa0IsT0FBbEIsSUFBNkIsS0FBS1YsU0FBTCxJQUFrQixLQUFsRCxFQUNBO0FBQ0csV0FBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNBdkIsTUFBQUEsU0FBUyxDQUFDa0MsOEJBQVYsQ0FBeUMsSUFBekMsRUFBOEMsS0FBOUM7QUFDQWxDLE1BQUFBLFNBQVMsQ0FBQ21DLDBCQUFWO0FBQ0EsVUFBR25DLFNBQVMsQ0FBQ29DLFNBQVYsSUFBdUIsV0FBMUIsRUFBdUNsQyxFQUFFLENBQUNXLFFBQUgsQ0FBWXdCLFNBQVosQ0FBc0IsZ0JBQWVyQyxTQUFTLENBQUNzQyxnQkFBL0MsRUFBdkMsS0FDSyxJQUFJdEMsU0FBUyxDQUFDb0MsU0FBVixJQUF1QixXQUEzQixFQUF3Q2xDLEVBQUUsQ0FBQ1csUUFBSCxDQUFZd0IsU0FBWixDQUFzQixxQkFBb0JyQyxTQUFTLENBQUNzQyxnQkFBcEQsRUFBeEMsS0FDQXBDLEVBQUUsQ0FBQ1csUUFBSCxDQUFZd0IsU0FBWixDQUFzQixvQkFBbUJyQyxTQUFTLENBQUNzQyxnQkFBbkQ7QUFDUCxLQVJELE1BU0ssSUFBR3RDLFNBQVMsQ0FBQ2lDLElBQVYsSUFBa0IsTUFBbEIsSUFBNEIsS0FBS1YsU0FBTCxJQUFrQixLQUFqRCxFQUNMO0FBQ0ssV0FBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNBdkIsTUFBQUEsU0FBUyxDQUFDdUMsaUJBQVYsR0FBOEIsSUFBSUMsU0FBSixDQUFjLFdBQVd4QyxTQUFTLENBQUNrQixRQUFyQixHQUFnQyxzQ0FBaEMsR0FBd0VsQixTQUFTLENBQUN5QyxXQUFsRixHQUErRixXQUEvRixHQUE2R3pDLFNBQVMsQ0FBQzBDLE9BQXZILEdBQWlJLFFBQWpJLEdBQTJJMUMsU0FBUyxDQUFDWSxRQUFuSyxDQUE5QixDQUZMLENBRWlOOztBQUM1TSxXQUFLK0IsWUFBTCxDQUFrQixZQUFXO0FBQUk7QUFDN0IzQyxRQUFBQSxTQUFTLENBQUM0Qyw2QkFBVjs7QUFDQSxZQUFHNUMsU0FBUyxDQUFDb0MsU0FBVixJQUF1QixXQUExQixFQUNBO0FBQ0lwQyxVQUFBQSxTQUFTLENBQUM2Qyx5QkFBVixDQUFvQyxPQUFwQyxFQUE0QyxHQUE1QztBQUNBN0MsVUFBQUEsU0FBUyxDQUFDOEMsc0JBQVYsR0FBbUMsSUFBSU4sU0FBSixDQUFjLFdBQVd4QyxTQUFTLENBQUNrQixRQUFyQixHQUFnQyx3Q0FBaEMsR0FBMEVsQixTQUFTLENBQUN5QyxXQUFwRixHQUFpRyxXQUFqRyxHQUErR3pDLFNBQVMsQ0FBQzBDLE9BQXpILEdBQW1JLFFBQW5JLEdBQTZJMUMsU0FBUyxDQUFDWSxRQUFySyxDQUFuQyxDQUZKLENBRXVOOztBQUNuTlYsVUFBQUEsRUFBRSxDQUFDVyxRQUFILENBQVl3QixTQUFaLENBQXNCLGVBQWNyQyxTQUFTLENBQUNzQyxnQkFBOUM7QUFDSCxTQUxELE1BTUssSUFBSXRDLFNBQVMsQ0FBQ29DLFNBQVYsSUFBdUIsV0FBM0IsRUFDTDtBQUNJcEMsVUFBQUEsU0FBUyxDQUFDNkMseUJBQVYsQ0FBb0MsT0FBcEMsRUFBNEMsR0FBNUM7QUFDQTdDLFVBQUFBLFNBQVMsQ0FBQzhDLHNCQUFWLEdBQW1DLElBQUlOLFNBQUosQ0FBYyxXQUFXeEMsU0FBUyxDQUFDa0IsUUFBckIsR0FBZ0Msd0NBQWhDLEdBQTBFbEIsU0FBUyxDQUFDeUMsV0FBcEYsR0FBaUcsV0FBakcsR0FBK0d6QyxTQUFTLENBQUMwQyxPQUF6SCxHQUFtSSxRQUFuSSxHQUE2STFDLFNBQVMsQ0FBQ1ksUUFBckssQ0FBbkMsQ0FGSixDQUV1Tjs7QUFDbk5WLFVBQUFBLEVBQUUsQ0FBQ1csUUFBSCxDQUFZd0IsU0FBWixDQUFzQixvQkFBbUJyQyxTQUFTLENBQUNzQyxnQkFBbkQ7QUFDSCxTQUxJLE1BT0w7QUFDSXRDLFVBQUFBLFNBQVMsQ0FBQzZDLHlCQUFWLENBQW9DLE1BQXBDLEVBQTJDLEdBQTNDO0FBQ0EzQyxVQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWXdCLFNBQVosQ0FBc0IsZ0JBQWVyQyxTQUFTLENBQUNzQyxnQkFBL0M7QUFDSDtBQUNILE9BbkJGLEVBbUJJLENBbkJKO0FBb0JKO0FBQ0gsR0ExRUk7QUE0RUo7QUFDQVMsRUFBQUEsTUE3RUksa0JBNkVHQyxFQTdFSCxFQTZFTztBQUNQLFNBQUtwQixVQUFMO0FBQ0g7QUEvRUcsQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdhbWVNb2RlbCA9IHJlcXVpcmUoXCJNb2RlbFwiKTtcclxuXHJcbi8vL+WIpOaWt+iFs+iJsmpzXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgV3JvbmdBbGVydDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBBbGVydFRleHQgOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgZ2FtZU1vZGVsLkdhbWVOYW1lID0gIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWUuc3Vic3RyKDEyLGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuX25hbWUubGVuZ3RoKSAvL+WPluW+l+mBiuaIsuWQjeeosVxyXG4gICAgICAgIGdhbWVNb2RlbC5sb2NhbF9JRCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0ID09IChcImhpbGl2ZXMubmV0XCIgfHwgXCJ3d3cuaGlsaXZlcy5uZXRcIikgPyBcImFwaS5oaWxpdmVzLm5ldFwiIDogXCJhcGlkZXYuaGlsaXZlcy5uZXRcIlxyXG4gICAgICAgIGdhbWVNb2RlbC5Eb21haW4gPSBcImh0dHBzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDsgLy/lj5blvpfnm67liY3nmoTntrLln59cclxuICAgICAgICB0aGlzLkNoZWNrUm9sZSA9IGZhbHNlO1xyXG4gICAgICAgIGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9IFwib3BlblwiXHJcbiAgICAgICAgZ2FtZU1vZGVsLkdhbWVfSW5mb3JtYXRpb24oKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgZ2FtZU1vZGVsLlJvbGVDb21maXJtKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIEp1ZGdlRXJyb3IoKXtcclxuICAgICAgICBpZiAoZ2FtZU1vZGVsLkNoZWNrUm9sZSA9PSB0cnVlICYmIGdhbWVNb2RlbC5DYW5ub3RKb2luR2FtZSA9PSBcIlwiKSB0aGlzLkp1ZGdlUm9sZSgpO1xyXG4gICAgICAgIGVsc2UgaWYoZ2FtZU1vZGVsLkNoZWNrUm9sZSA9PSB0cnVlICYmIGdhbWVNb2RlbC5DYW5ub3RKb2luR2FtZSAhPSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5BbGVydFRleHQuc3RyaW5nID0gZ2FtZU1vZGVsLkNhbm5vdEpvaW5HYW1lO1xyXG4gICAgICAgICAgICB0aGlzLldyb25nQWxlcnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLkNoZWNrUm9sZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvL+WIpOaWt+eUqOaItuinkuiJsuS4puWIh+aPm+iHs+WQhOiHquinkuiJsuWgtOaZr1xyXG4gICAgSnVkZ2VSb2xlKCl7XHJcbiAgICAgICBnYW1lTW9kZWwuQ2hlY2tSb2xlID0gZmFsc2VcclxuICAgICAgIGlmKGdhbWVNb2RlbC5yb2xlID09IFwiZ3Vlc3RcIiAmJiB0aGlzLkNoZWNrUm9sZSA9PSBmYWxzZSkgXHJcbiAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLkNoZWNrUm9sZSA9IHRydWU7XHJcbiAgICAgICAgICBnYW1lTW9kZWwuV2ViU29ja2V0X051bWJlck9mUGVvcGxlX0d1ZXN0KDEwMDAsZmFsc2UpXHJcbiAgICAgICAgICBnYW1lTW9kZWwuV2ViU29ja2V0X0dhbWVTdGF0dXNfR3Vlc3QoKTtcclxuICAgICAgICAgIGlmKGdhbWVNb2RlbC5nYW1lX3R5cGUgPT0gXCJ0dXJudGFibGVcIikgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR3Vlc3QxX1dlZWxcIisgZ2FtZU1vZGVsLkJhY2tHcm91bmRfVGhlbWUpO1xyXG4gICAgICAgICAgZWxzZSBpZiAoZ2FtZU1vZGVsLmdhbWVfdHlwZSA9PSBcImppdWdvbmdnZVwiKSBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHdWVzdDFfSml1Z29uZ2dlXCIrIGdhbWVNb2RlbC5CYWNrR3JvdW5kX1RoZW1lKTtcclxuICAgICAgICAgIGVsc2UgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR3Vlc3QxX0pvaW5HYW1lXCIrIGdhbWVNb2RlbC5CYWNrR3JvdW5kX1RoZW1lKTtcclxuICAgICAgIH1cclxuICAgICAgIGVsc2UgaWYoZ2FtZU1vZGVsLnJvbGUgPT0gXCJob3N0XCIgJiYgdGhpcy5DaGVja1JvbGUgPT0gZmFsc2UpIFxyXG4gICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkNoZWNrUm9sZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5HYW1lU3RhdHVzV1NfSG9zdCA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9cIiArIGdhbWVNb2RlbC5sb2NhbF9JRCArIFwiL3dzL3YxL2dhbWUvc3RhdHVzL2hvc3Q/YWN0aXZpdHlfaWQ9XCIrIGdhbWVNb2RlbC5hY3Rpdml0eV9pZCArJyZnYW1lX2lkPScgKyBnYW1lTW9kZWwuZ2FtZV9pZCArICcmZ2FtZT0nKyBnYW1lTW9kZWwuR2FtZU5hbWUpOyAvL+mWi+WVn+mBiuaIsueLgOaFi3dzXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkgeyAgIC8v5q+PMeenkumQmOWAvOihjOS4gOasoe+8jOmHjeikh+WBmjHmrKFcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5XZWJTb2NrZXRfTnVtYmVyT2ZQZW9wbGVfSG9zdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoZ2FtZU1vZGVsLmdhbWVfdHlwZSA9PSBcInR1cm50YWJsZVwiKSAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9HYW1lU3RhdHVzX0hvc3QoXCJjbG9zZVwiLDAuMSlcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZWwuTnVtYmVyT2ZMb3R0ZXJ5V1NfSG9zdCA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9cIiArIGdhbWVNb2RlbC5sb2NhbF9JRCArIFwiL3dzL3YxL2dhbWUvd2lubmluZy9zdGFmZj9hY3Rpdml0eV9pZD1cIisgZ2FtZU1vZGVsLmFjdGl2aXR5X2lkICsnJmdhbWVfaWQ9JyArIGdhbWVNb2RlbC5nYW1lX2lkICsgJyZnYW1lPScrIGdhbWVNb2RlbC5HYW1lTmFtZSk7IC8v6ZaL5ZWf5pu05paw5b6X542O5Lq655qEd3NcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJIb3N0MV9XZWVsXCIrIGdhbWVNb2RlbC5CYWNrR3JvdW5kX1RoZW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGdhbWVNb2RlbC5nYW1lX3R5cGUgPT0gXCJqaXVnb25nZ2VcIikgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9HYW1lU3RhdHVzX0hvc3QoXCJjbG9zZVwiLDAuMSlcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZWwuTnVtYmVyT2ZMb3R0ZXJ5V1NfSG9zdCA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9cIiArIGdhbWVNb2RlbC5sb2NhbF9JRCArIFwiL3dzL3YxL2dhbWUvd2lubmluZy9zdGFmZj9hY3Rpdml0eV9pZD1cIisgZ2FtZU1vZGVsLmFjdGl2aXR5X2lkICsnJmdhbWVfaWQ9JyArIGdhbWVNb2RlbC5nYW1lX2lkICsgJyZnYW1lPScrIGdhbWVNb2RlbC5HYW1lTmFtZSk7IC8v6ZaL5ZWf5pu05paw5b6X542O5Lq655qEd3NcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJIb3N0MV9KaXVnb25nZ2VcIisgZ2FtZU1vZGVsLkJhY2tHcm91bmRfVGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTW9kZWwuV2ViU29ja2V0X0dhbWVTdGF0dXNfSG9zdChcIm9wZW5cIiwwLjEpXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiSG9zdDFfU3RhcnRcIisgZ2FtZU1vZGVsLkJhY2tHcm91bmRfVGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG4gICBcclxuICAgICAvL+aMgee6jOWIpOaWt+eUqOaItuinkuiJslxyXG4gICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgICB0aGlzLkp1ZGdlRXJyb3IoKTtcclxuICAgICB9LFxyXG59KTtcclxuIl19