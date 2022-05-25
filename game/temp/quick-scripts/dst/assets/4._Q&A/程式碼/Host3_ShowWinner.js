
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/4._Q&A/程式碼/Host3_ShowWinner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b4a1Hsh89NeIGf55SCL1EQ', 'Host3_ShowWinner');
// 4._Q&A/程式碼/Host3_ShowWinner.js

"use strict";

var gameModel = require("Model");

var WinnerItem = require("Host3_WinRecordItem");

cc.Class({
  "extends": cc.Component,
  properties: {
    Rank: {
      "default": [],
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    this.itemlist = [];
    this.winlist = [];
    this.index = [];
    this.indexcount = 0;
    this.items_parent = cc.find("畫布/中獎列表/view/內容");
  },
  start: function start() {
    this.SpawnWinner();
  },
  //列出得獎人和得到的獎品清單
  SpawnWinner: function SpawnWinner() {
    //列出前三名得獎人
    for (var i = 0; i < 3; i++) {
      if (gameModel.winner_picture[i] == null) return;
      var ranked = this.Rank[i];
      var playerAvatar = ranked.getChildByName("頭相框").getChildByName("遮罩").getChildByName("玩家頭像").getComponent(cc.Sprite).spriteFrame;
      ranked.getChildByName("玩家名稱").getComponent(cc.Label).string = gameModel.winner_name[i];
      ranked.getChildByName("玩家分數").getChildByName("分數").getComponent(cc.Label).string = gameModel.winner_Score[i];
      ranked.getChildByName("玩家耗時").getChildByName("耗時").getComponent(cc.Label).string = gameModel.winner_Taketime[i]; //遠端載入: 網址轉圖片

      cc.assetManager.loadRemote(gameModel.winner_picture[i], {
        ext: '.jpg' || '.png'
      }, function (err, texture) {
        if (err) console.log("錯誤");else {
          var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame

          playerAvatar.spriteFrame = picture;
        }
      });
    } //列出剩下得獎人


    for (var i = 3; i < gameModel.winner_name.length; i++) {
      var node = cc.instantiate(this.items);
      node.parent = this.items_parent;
      var obj = node.getComponent(WinnerItem); //抓取WinnerItem

      this.itemlist.push(obj);
      this.itemlist[i].updateInfo(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcNC5fUSZBXFznqIvlvI/norxcXEhvc3QzX1Nob3dXaW5uZXIuanMiXSwibmFtZXMiOlsiZ2FtZU1vZGVsIiwicmVxdWlyZSIsIldpbm5lckl0ZW0iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlJhbmsiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsIml0ZW1saXN0Iiwid2lubGlzdCIsImluZGV4IiwiaW5kZXhjb3VudCIsIml0ZW1zX3BhcmVudCIsImZpbmQiLCJzdGFydCIsIlNwYXduV2lubmVyIiwiaSIsIndpbm5lcl9waWN0dXJlIiwicmFua2VkIiwicGxheWVyQXZhdGFyIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIkxhYmVsIiwic3RyaW5nIiwid2lubmVyX25hbWUiLCJ3aW5uZXJfU2NvcmUiLCJ3aW5uZXJfVGFrZXRpbWUiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiZXh0IiwiZXJyIiwidGV4dHVyZSIsImNvbnNvbGUiLCJsb2ciLCJwaWN0dXJlIiwiU3ByaXRlRnJhbWUiLCJsZW5ndGgiLCJub2RlIiwiaW5zdGFudGlhdGUiLCJpdGVtcyIsInBhcmVudCIsIm9iaiIsInB1c2giLCJ1cGRhdGVJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLE9BQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FBeEI7O0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUM7QUFDRCxpQkFBUyxFQURSO0FBRURDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZSO0FBREcsR0FIUDtBQVlMQyxFQUFBQSxNQVpLLG9C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RUFBaUI2QixVQUFqQixDQUE0QjdCLENBQTVCO0FBQ0g7QUFDSixHQXpESSxDQTRETDs7QUE1REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdhbWVNb2RlbCA9IHJlcXVpcmUoXCJNb2RlbFwiKTtcclxudmFyIFdpbm5lckl0ZW0gPSByZXF1aXJlKFwiSG9zdDNfV2luUmVjb3JkSXRlbVwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgUmFuazp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgICB9LFxyXG4gICAgXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbWxpc3Q9W107XHJcbiAgICAgICAgdGhpcy53aW5saXN0PVtdO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBbXTtcclxuICAgICAgICB0aGlzLmluZGV4Y291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbXNfcGFyZW50ID0gY2MuZmluZChcIueVq+W4gy/kuK3njY7liJfooagvdmlldy/lhaflrrlcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLlNwYXduV2lubmVyKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5YiX5Ye65b6X542O5Lq65ZKM5b6X5Yiw55qE542O5ZOB5riF5ZauXHJcbiAgICBTcGF3bldpbm5lcigpe1xyXG4gICAgICAgIC8v5YiX5Ye65YmN5LiJ5ZCN5b6X542O5Lq6XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDM7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGdhbWVNb2RlbC53aW5uZXJfcGljdHVyZVtpXSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciByYW5rZWQgPSB0aGlzLlJhbmtbaV1cclxuICAgICAgICAgICAgdmFyIHBsYXllckF2YXRhciA9IHJhbmtlZC5nZXRDaGlsZEJ5TmFtZShcIumgreebuOahhlwiKS5nZXRDaGlsZEJ5TmFtZShcIumBrue9qVwiKS5nZXRDaGlsZEJ5TmFtZShcIueOqeWutumgreWDj1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZVxyXG4gICAgICAgICAgICByYW5rZWQuZ2V0Q2hpbGRCeU5hbWUoXCLnjqnlrrblkI3nqLFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBnYW1lTW9kZWwud2lubmVyX25hbWVbaV1cclxuICAgICAgICAgICAgcmFua2VkLmdldENoaWxkQnlOYW1lKFwi546p5a625YiG5pW4XCIpLmdldENoaWxkQnlOYW1lKFwi5YiG5pW4XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2FtZU1vZGVsLndpbm5lcl9TY29yZVtpXVxyXG4gICAgICAgICAgICByYW5rZWQuZ2V0Q2hpbGRCeU5hbWUoXCLnjqnlrrbogJfmmYJcIikuZ2V0Q2hpbGRCeU5hbWUoXCLogJfmmYJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBnYW1lTW9kZWwud2lubmVyX1Rha2V0aW1lW2ldXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8v6YGg56uv6LyJ5YWlOiDntrLlnYDovYnlnJbniYdcclxuICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShnYW1lTW9kZWwud2lubmVyX3BpY3R1cmVbaV0se2V4dCA6Jy5qcGcnfHwnLnBuZyd9LGZ1bmN0aW9uKGVycix0ZXh0dXJlKVxyXG4gICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICBpZihlcnIpIGNvbnNvbGUubG9nKFwi6Yyv6KqkXCIpXHJcbiAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgdmFyIHBpY3R1cmUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7IC8vdGV4dHVyZSDovYkgU3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgICAgICBwbGF5ZXJBdmF0YXIuc3ByaXRlRnJhbWUgPSBwaWN0dXJlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/liJflh7rliankuIvlvpfnjY7kurpcclxuICAgICAgICBmb3IodmFyIGkgPSAzOyBpIDwgZ2FtZU1vZGVsLndpbm5lcl9uYW1lLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1zKTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1zX3BhcmVudDtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IG5vZGUuZ2V0Q29tcG9uZW50KFdpbm5lckl0ZW0pOy8v5oqT5Y+WV2lubmVySXRlbVxyXG4gICAgICAgICAgICB0aGlzLml0ZW1saXN0LnB1c2gob2JqKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtbGlzdFtpXS51cGRhdGVJbmZvKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19