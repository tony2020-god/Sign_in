
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/3_whack_a_mole/遊戲模塊/Guest4_Whack_a_mole.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83d95EkbptGn5JBBdtEmj8P', 'Guest4_Whack_a_mole');
// 3_whack_a_mole/遊戲模塊/Guest4_Whack_a_mole.js

"use strict";

var gameModel = require("Model"); ///玩家在遊戲中敲敲樂計算分數js


cc.Class({
  "extends": cc.Component,
  properties: {
    mouseHoles: {
      "default": null,
      type: cc.Node
    },
    mouseTypeImg: {
      "default": [],
      type: [cc.SpriteFrame]
    },
    mouseIndexArr: null
  },
  onLoad: function onLoad() {
    this.Hammer = cc.find("槌子");
    gameModel.WebSocket_UpDateScore_Guest();
    gameModel.Score = 0;
  },
  start: function start() {
    this.mouseIndexArr = []; //槌子動畫

    this.node.on("touchstart", function (event) {
      this.Hammer.setPosition(event.currentTouch._startPoint.x + 100, event.currentTouch._startPoint.y - 90);
      this.Hammer.active = true;
      this.scheduleOnce(function () {
        this.Hammer.active = false;
      }, 0.15);
    }, this);
    this.schedule(function () {
      this.MouseComeOut();
    }, 0.5);
  },
  updateMouseNodeInfo: function updateMouseNodeInfo(mouse, tag) {
    //設置當前老鼠節點爲存活
    mouse.getComponent("Guest_MouseManager").isLive = true; //將老鼠類型序號作爲標籤添加到老鼠節點上

    mouse.getComponent("Guest_MouseManager").tag = tag;
  },
  MouseComeOut: function MouseComeOut() {
    for (var i = 0; i < 3; i++) {
      var randomNodeIndex = Math.floor(Math.random() * this.mouseHoles.childrenCount); //隨機鼠洞

      var randomSpriteFrameIndex = Math.floor(Math.random() * this.mouseTypeImg.length); //隨機老鼠圖片

      if (this.mouseIndexArr.indexOf(randomNodeIndex) === -1) {
        var mouse = this.mouseHoles.children[randomNodeIndex].getChildByName("遮罩").getChildByName("鼠"); //mouse = 隨機洞的老鼠

        this.updateMouseNodeInfo(mouse, randomSpriteFrameIndex); //執行老鼠節點數據刷新函數

        this.mouseIndexArr.push(randomNodeIndex);
        mouse.getComponent(cc.Sprite).spriteFrame = this.mouseTypeImg[randomSpriteFrameIndex];
        mouse.getComponent("Guest_MouseManager").GetData(randomNodeIndex, randomSpriteFrameIndex);
        mouse.getComponent("Guest_MouseManager").MouseAnimation();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcM193aGFja19hX21vbGVcXOmBiuaIsuaooeWhilxcR3Vlc3Q0X1doYWNrX2FfbW9sZS5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtb3VzZUhvbGVzIiwidHlwZSIsIk5vZGUiLCJtb3VzZVR5cGVJbWciLCJTcHJpdGVGcmFtZSIsIm1vdXNlSW5kZXhBcnIiLCJvbkxvYWQiLCJIYW1tZXIiLCJmaW5kIiwiV2ViU29ja2V0X1VwRGF0ZVNjb3JlX0d1ZXN0IiwiU2NvcmUiLCJzdGFydCIsIm5vZGUiLCJvbiIsImV2ZW50Iiwic2V0UG9zaXRpb24iLCJjdXJyZW50VG91Y2giLCJfc3RhcnRQb2ludCIsIngiLCJ5IiwiYWN0aXZlIiwic2NoZWR1bGVPbmNlIiwic2NoZWR1bGUiLCJNb3VzZUNvbWVPdXQiLCJ1cGRhdGVNb3VzZU5vZGVJbmZvIiwibW91c2UiLCJ0YWciLCJnZXRDb21wb25lbnQiLCJpc0xpdmUiLCJpIiwicmFuZG9tTm9kZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hpbGRyZW5Db3VudCIsInJhbmRvbVNwcml0ZUZyYW1lSW5kZXgiLCJsZW5ndGgiLCJpbmRleE9mIiwiY2hpbGRyZW4iLCJnZXRDaGlsZEJ5TmFtZSIsInB1c2giLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIkdldERhdGEiLCJNb3VzZUFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXZCLEVBRUE7OztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007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RGIsZUFBakQsRUFBaUVLLHNCQUFqRTtBQUNBVixRQUFBQSxLQUFLLENBQUNFLFlBQU4sQ0FBbUIsb0JBQW5CLEVBQXlDaUIsY0FBekM7QUFDSDtBQUNKO0FBQ0osR0EzREksQ0E0REw7O0FBNURLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcblxyXG4vLy/njqnlrrblnKjpgYrmiLLkuK3mlbLmlbLmqILoqIjnrpfliIbmlbhqc1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG1vdXNlSG9sZXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91c2VUeXBlSW1nOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZUluZGV4QXJyIDpudWxsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5IYW1tZXIgPSBjYy5maW5kKFwi5qeM5a2QXCIpXHJcbiAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9VcERhdGVTY29yZV9HdWVzdCgpO1xyXG4gICAgICAgIGdhbWVNb2RlbC5TY29yZSA9IDBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICB0aGlzLm1vdXNlSW5kZXhBcnIgPSBbXVxyXG5cclxuICAgICAgLy/mp4zlrZDli5XnlatcclxuICAgICAgdGhpcy5ub2RlLm9uKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHsgIFxyXG4gICAgICAgIHRoaXMuSGFtbWVyLnNldFBvc2l0aW9uKGV2ZW50LmN1cnJlbnRUb3VjaC5fc3RhcnRQb2ludC54ICsgMTAwLCBldmVudC5jdXJyZW50VG91Y2guX3N0YXJ0UG9pbnQueSAtIDkwKVxyXG4gICAgICAgIHRoaXMuSGFtbWVyLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHsgdGhpcy5IYW1tZXIuYWN0aXZlID0gZmFsc2V9LCAwLjE1KTtcclxuICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICB0aGlzLk1vdXNlQ29tZU91dCgpXHJcbiAgICAgIH0sIDAuNSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZU1vdXNlTm9kZUluZm8obW91c2UsIHRhZykge1xyXG4gICAgICAgIC8v6Kit572u55W25YmN6ICB6byg56+A6bue54iy5a2Y5rS7XHJcbiAgICAgICAgbW91c2UuZ2V0Q29tcG9uZW50KFwiR3Vlc3RfTW91c2VNYW5hZ2VyXCIpLmlzTGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy/lsIfogIHpvKDpoZ7lnovluo/omZ/kvZzniLLmqJnnsaTmt7vliqDliLDogIHpvKDnr4Dpu57kuIpcclxuICAgICAgICBtb3VzZS5nZXRDb21wb25lbnQoXCJHdWVzdF9Nb3VzZU1hbmFnZXJcIikudGFnID0gdGFnO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgTW91c2VDb21lT3V0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21Ob2RlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5tb3VzZUhvbGVzLmNoaWxkcmVuQ291bnQpKTsgIC8v6Zqo5qmf6byg5rSeXHJcbiAgICAgICAgICAgIGxldCByYW5kb21TcHJpdGVGcmFtZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMubW91c2VUeXBlSW1nLmxlbmd0aCkpIC8v6Zqo5qmf6ICB6byg5ZyW54mHXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZUluZGV4QXJyLmluZGV4T2YocmFuZG9tTm9kZUluZGV4KSA9PT0gLTEpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW91c2UgPSB0aGlzLm1vdXNlSG9sZXMuY2hpbGRyZW5bcmFuZG9tTm9kZUluZGV4XS5nZXRDaGlsZEJ5TmFtZShcIumBrue9qVwiKS5nZXRDaGlsZEJ5TmFtZShcIum8oFwiKTsgLy9tb3VzZSA9IOmaqOapn+a0nueahOiAgem8oFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb3VzZU5vZGVJbmZvKG1vdXNlLCByYW5kb21TcHJpdGVGcmFtZUluZGV4KTsgLy/ln7fooYzogIHpvKDnr4Dpu57mlbjmk5rliLfmlrDlh73mlbhcclxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VJbmRleEFyci5wdXNoKHJhbmRvbU5vZGVJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBtb3VzZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubW91c2VUeXBlSW1nW3JhbmRvbVNwcml0ZUZyYW1lSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbW91c2UuZ2V0Q29tcG9uZW50KFwiR3Vlc3RfTW91c2VNYW5hZ2VyXCIpLkdldERhdGEocmFuZG9tTm9kZUluZGV4LHJhbmRvbVNwcml0ZUZyYW1lSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgbW91c2UuZ2V0Q29tcG9uZW50KFwiR3Vlc3RfTW91c2VNYW5hZ2VyXCIpLk1vdXNlQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=