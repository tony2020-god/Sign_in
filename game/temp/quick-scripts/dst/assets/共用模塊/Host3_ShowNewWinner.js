
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Host3_ShowNewWinner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '061559Bg5ZGurxX7ddMHO9N', 'Host3_ShowNewWinner');
// 共用模塊/Host3_ShowNewWinner.js

"use strict";

var gameModel = require("Model");

var WinnerItem = require('Host3_WinRecordItem'); ///主持人及時顯示中獎玩家js


cc.Class({
  "extends": cc.Component,
  properties: {
    items: {
      "default": null,
      type: cc.Prefab
    },
    items2: {
      "default": null,
      type: cc.Prefab
    },
    prize_total: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    this.itemlist = [];
    this.winlist = [];
    this.index = [];
    this.indexcount = 0;
    this.alreadyend = false;
    cc.director.getPhysicsManager().enabled = true;
    gameModel.WinnerData = this;
    gameModel.SpawnNewestWinner = false;
  },
  start: function start() {
    this.items_parent = cc.find("畫布/中獎列表/view/內容");
    gameModel.WebSocket_NumberOfLottery_Host();
    this.prize_total.string = gameModel.prize_total;
  },
  //列出得人獎物件
  SpawnNewWinner: function SpawnNewWinner() {
    if (gameModel.winner_name.length % 2 == 0) {
      this.indexcount++;
      this.index.push(this.indexcount);
      var node = cc.instantiate(this.items);
      node.parent = this.items_parent;
      node.setSiblingIndex(0); //讓子物件顯示在最上層

      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
    } else {
      this.indexcount++;
      this.index.push(this.indexcount);
      var node = cc.instantiate(this.items2);
      node.parent = this.items_parent;
      node.setSiblingIndex(0); //讓子物件顯示在最上層

      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
    }

    this.prize_total.string = gameModel.prize_total;
  },
  //按下關閉遊戲鍵
  CloseGame: function CloseGame() {
    gameModel.WebSocket_GameStatus_Host("end", 0.1);
    gameModel.GameStatusMessage = "end";
  },
  update: function update(dt) {
    if (gameModel.GameStatusMessage == "end" && this.alreadyend == false) {
      this.alreadyend = true;
      gameModel.NumberOfLotteryWS_Host.close();
      cc.director.loadScene("Host4_Last" + gameModel.BackGround_Theme);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxIb3N0M19TaG93TmV3V2lubmVyLmpzIl0sIm5hbWVzIjpbImdhbWVNb2RlbCIsInJlcXVpcmUiLCJXaW5uZXJJdGVtIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtcyIsInR5cGUiLCJQcmVmYWIiLCJpdGVtczIiLCJwcml6ZV90b3RhbCIsIkxhYmVsIiwib25Mb2FkIiwiaXRlbWxpc3QiLCJ3aW5saXN0IiwiaW5kZXgiLCJpbmRleGNvdW50IiwiYWxyZWFkeWVuZCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiV2lubmVyRGF0YSIsIlNwYXduTmV3ZXN0V2lubmVyIiwic3RhcnQiLCJpdGVtc19wYXJlbnQiLCJmaW5kIiwiV2ViU29ja2V0X051bWJlck9mTG90dGVyeV9Ib3N0Iiwic3RyaW5nIiwiU3Bhd25OZXdXaW5uZXIiLCJ3aW5uZXJfbmFtZSIsImxlbmd0aCIsInB1c2giLCJub2RlIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJzZXRTaWJsaW5nSW5kZXgiLCJvYmoiLCJnZXRDb21wb25lbnQiLCJ1cGRhdGVJbmZvIiwiQ2xvc2VHYW1lIiwiV2ViU29ja2V0X0dhbWVTdGF0dXNfSG9zdCIsIkdhbWVTdGF0dXNNZXNzYWdlIiwidXBkYXRlIiwiZHQiLCJOdW1iZXJPZkxvdHRlcnlXU19Ib3N0IiwiY2xvc2UiLCJsb2FkU2NlbmUiLCJCYWNrR3JvdW5kX1RoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBeEIsRUFFQTs7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZOLEtBREM7QUFLUkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTCxLQUxBO0FBU1JFLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNTO0FBRkE7QUFUTCxHQUhQO0FBa0JMQyxFQUFBQSxNQWxCSyxvQkFrQks7QUFDTixTQUFLQyxRQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLE9BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBZixJQUFBQSxFQUFFLENBQUNnQixRQUFILENBQVlDLGlCQUFaLEdBQWdDQyxPQUFoQyxHQUEwQyxJQUExQztBQUNBckIsSUFBQUEsU0FBUyxDQUFDc0IsVUFBVixHQUF1QixJQUF2QjtBQUNBdEIsSUFBQUEsU0FBUyxDQUFDdUIsaUJBQVYsR0FBOEIsS0FBOUI7QUFDSCxHQTNCSTtBQTZCTEMsRUFBQUEsS0E3QkssbUJBNkJJO0FBQ0wsU0FBS0MsWUFBTCxHQUFvQnRCLEVBQUUsQ0FBQ3VCLElBQUgsQ0FBUSxpQkFBUixDQUFwQjtBQUNBMUIsSUFBQUEsU0FBUyxDQUFDMkIsOEJBQVY7QUFDQSxTQUFLaEIsV0FBTCxDQUFpQmlCLE1BQWpCLEdBQTBCNUIsU0FBUyxDQUFDVyxXQUFwQztBQUNILEdBakNJO0FBbUNMO0FBQ0FrQixFQUFBQSxjQXBDSyw0QkFvQ1c7QUFDVCxRQUFHN0IsU0FBUyxDQUFDOEIsV0FBVixDQUFzQkMsTUFBdEIsR0FBK0IsQ0FBL0IsSUFBb0MsQ0FBdkMsRUFDQTtBQUNJLFdBQUtkLFVBQUw7QUFDQSxXQUFLRCxLQUFMLENBQVdnQixJQUFYLENBQWdCLEtBQUtmLFVBQXJCO0FBQ0EsVUFBSWdCLElBQUksR0FBRzlCLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZSxLQUFLM0IsS0FBcEIsQ0FBWDtBQUNBMEIsTUFBQUEsSUFBSSxDQUFDRSxNQUFMLEdBQWMsS0FBS1YsWUFBbkI7QUFDQVEsTUFBQUEsSUFBSSxDQUFDRyxlQUFMLENBQXFCLENBQXJCLEVBTEosQ0FLNkI7O0FBQ3pCLFVBQUlDLEdBQUcsR0FBR0osSUFBSSxDQUFDSyxZQUFMLENBQWtCcEMsVUFBbEIsQ0FBVixDQU5KLENBTTRDOztBQUN4QyxXQUFLWSxRQUFMLENBQWNrQixJQUFkLENBQW1CSyxHQUFuQjtBQUNBLFdBQUt2QixRQUFMLENBQWMsS0FBS0csVUFBTCxHQUFrQixDQUFoQyxFQUFtQ3NCLFVBQW5DLENBQThDLEtBQUt0QixVQUFMLEdBQWtCLENBQWhFO0FBQ0gsS0FWRCxNQVlBO0FBQ0ksV0FBS0EsVUFBTDtBQUNBLFdBQUtELEtBQUwsQ0FBV2dCLElBQVgsQ0FBZ0IsS0FBS2YsVUFBckI7QUFDQSxVQUFJZ0IsSUFBSSxHQUFHOUIsRUFBRSxDQUFDK0IsV0FBSCxDQUFlLEtBQUt4QixNQUFwQixDQUFYO0FBQ0F1QixNQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBYyxLQUFLVixZQUFuQjtBQUNBUSxNQUFBQSxJQUFJLENBQUNHLGVBQUwsQ0FBcUIsQ0FBckIsRUFMSixDQUs2Qjs7QUFDekIsVUFBSUMsR0FBRyxHQUFHSixJQUFJLENBQUNLLFlBQUwsQ0FBa0JwQyxVQUFsQixDQUFWLENBTkosQ0FNNEM7O0FBQ3hDLFdBQUtZLFFBQUwsQ0FBY2tCLElBQWQsQ0FBbUJLLEdBQW5CO0FBQ0EsV0FBS3ZCLFFBQUwsQ0FBYyxLQUFLRyxVQUFMLEdBQWtCLENBQWhDLEVBQW1Dc0IsVUFBbkMsQ0FBOEMsS0FBS3RCLFVBQUwsR0FBa0IsQ0FBaEU7QUFDSDs7QUFDRCxTQUFLTixXQUFMLENBQWlCaUIsTUFBakIsR0FBMEI1QixTQUFTLENBQUNXLFdBQXBDO0FBQ04sR0E1REk7QUE4REw7QUFDQTZCLEVBQUFBLFNBL0RLLHVCQStETTtBQUNQeEMsSUFBQUEsU0FBUyxDQUFDeUMseUJBQVYsQ0FBb0MsS0FBcEMsRUFBMEMsR0FBMUM7QUFDQXpDLElBQUFBLFNBQVMsQ0FBQzBDLGlCQUFWLEdBQThCLEtBQTlCO0FBQ0gsR0FsRUk7QUFvRUxDLEVBQUFBLE1BcEVLLGtCQW9FR0MsRUFwRUgsRUFvRU87QUFDVCxRQUFHNUMsU0FBUyxDQUFDMEMsaUJBQVYsSUFBK0IsS0FBL0IsSUFBd0MsS0FBS3hCLFVBQUwsSUFBbUIsS0FBOUQsRUFDQTtBQUNHLFdBQUtBLFVBQUwsR0FBa0IsSUFBbEI7QUFDQWxCLE1BQUFBLFNBQVMsQ0FBQzZDLHNCQUFWLENBQWlDQyxLQUFqQztBQUNBM0MsTUFBQUEsRUFBRSxDQUFDZ0IsUUFBSCxDQUFZNEIsU0FBWixDQUFzQixlQUFjL0MsU0FBUyxDQUFDZ0QsZ0JBQTlDO0FBQ0Y7QUFDSDtBQTNFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG52YXIgV2lubmVySXRlbSA9IHJlcXVpcmUoJ0hvc3QzX1dpblJlY29yZEl0ZW0nKVxyXG5cclxuLy8v5Li75oyB5Lq65Y+K5pmC6aGv56S65Lit542O546p5a62anNcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpdGVtczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1zMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByaXplX3RvdGFsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLml0ZW1saXN0PSBbXTtcclxuICAgICAgICB0aGlzLndpbmxpc3Q9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBbXTtcclxuICAgICAgICB0aGlzLmluZGV4Y291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuYWxyZWFkeWVuZCA9IGZhbHNlXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBnYW1lTW9kZWwuV2lubmVyRGF0YSA9IHRoaXM7XHJcbiAgICAgICAgZ2FtZU1vZGVsLlNwYXduTmV3ZXN0V2lubmVyID0gZmFsc2U7ICAgIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbXNfcGFyZW50ID0gY2MuZmluZChcIueVq+W4gy/kuK3njY7liJfooagvdmlldy/lhaflrrlcIik7XHJcbiAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9OdW1iZXJPZkxvdHRlcnlfSG9zdCgpO1xyXG4gICAgICAgIHRoaXMucHJpemVfdG90YWwuc3RyaW5nID0gZ2FtZU1vZGVsLnByaXplX3RvdGFsO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+WIl+WHuuW+l+S6uueNjueJqeS7tlxyXG4gICAgU3Bhd25OZXdXaW5uZXIoKXtcclxuICAgICAgICAgICBpZihnYW1lTW9kZWwud2lubmVyX25hbWUubGVuZ3RoICUgMiA9PSAwKVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgdGhpcy5pbmRleGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgIHRoaXMuaW5kZXgucHVzaCh0aGlzLmluZGV4Y291bnQpO1xyXG4gICAgICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbXNfcGFyZW50O1xyXG4gICAgICAgICAgICAgICBub2RlLnNldFNpYmxpbmdJbmRleCgwKTsgLy/orpPlrZDnianku7bpoa/npLrlnKjmnIDkuIrlsaRcclxuICAgICAgICAgICAgICAgdmFyIG9iaiA9IG5vZGUuZ2V0Q29tcG9uZW50KFdpbm5lckl0ZW0pOy8v5oqT5Y+WV2lubmVySXRlbVxyXG4gICAgICAgICAgICAgICB0aGlzLml0ZW1saXN0LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgdGhpcy5pdGVtbGlzdFt0aGlzLmluZGV4Y291bnQgLSAxXS51cGRhdGVJbmZvKHRoaXMuaW5kZXhjb3VudCAtIDEpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICB0aGlzLmluZGV4Y291bnQrKztcclxuICAgICAgICAgICAgICAgdGhpcy5pbmRleC5wdXNoKHRoaXMuaW5kZXhjb3VudCk7XHJcbiAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtczIpO1xyXG4gICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbXNfcGFyZW50O1xyXG4gICAgICAgICAgICAgICBub2RlLnNldFNpYmxpbmdJbmRleCgwKTsgLy/orpPlrZDnianku7bpoa/npLrlnKjmnIDkuIrlsaRcclxuICAgICAgICAgICAgICAgdmFyIG9iaiA9IG5vZGUuZ2V0Q29tcG9uZW50KFdpbm5lckl0ZW0pOy8v5oqT5Y+WV2lubmVySXRlbVxyXG4gICAgICAgICAgICAgICB0aGlzLml0ZW1saXN0LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgdGhpcy5pdGVtbGlzdFt0aGlzLmluZGV4Y291bnQgLSAxXS51cGRhdGVJbmZvKHRoaXMuaW5kZXhjb3VudCAtIDEpO1xyXG4gICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgdGhpcy5wcml6ZV90b3RhbC5zdHJpbmcgPSBnYW1lTW9kZWwucHJpemVfdG90YWw7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5oyJ5LiL6Zec6ZaJ6YGK5oiy6Y21XHJcbiAgICBDbG9zZUdhbWUoKXtcclxuICAgICAgICBnYW1lTW9kZWwuV2ViU29ja2V0X0dhbWVTdGF0dXNfSG9zdChcImVuZFwiLDAuMSlcclxuICAgICAgICBnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPSBcImVuZFwiXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgIGlmKGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9PSBcImVuZFwiICYmIHRoaXMuYWxyZWFkeWVuZCA9PSBmYWxzZSlcclxuICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuYWxyZWFkeWVuZCA9IHRydWU7XHJcbiAgICAgICAgICBnYW1lTW9kZWwuTnVtYmVyT2ZMb3R0ZXJ5V1NfSG9zdC5jbG9zZSgpO1xyXG4gICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiSG9zdDRfTGFzdFwiKyBnYW1lTW9kZWwuQmFja0dyb3VuZF9UaGVtZSk7XHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gXHJcbiAgICJdfQ==