
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/3_whack_a_mole/遊戲模塊/Host_RandomSpawn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91bc3keIb9BRqI/N2ZbePz0', 'Host_RandomSpawn');
// 3_whack_a_mole/遊戲模塊/Host_RandomSpawn.js

"use strict";

var RandenSpawnMouse = require("Guest4_Whack_a_mole");

cc.Class({
  "extends": RandenSpawnMouse,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {
    this.mouseIndexArr = [];
    this.schedule(function () {
      this.MouseComeOut();
    }, 0.5);

    if (cc.director.getScene()._name.includes("Host3_Game")) {
      this.schedule(function () {
        this.RandomHit();
      }, 0.2);
    }
  },
  //設置地鼠資訊
  updateMouseNodeInfo: function updateMouseNodeInfo(mouse, tag) {
    //設置當前老鼠節點爲存活
    mouse.getComponent("Host_MouseManager").isLive = true; //將老鼠類型序號作爲標籤添加到老鼠節點上

    mouse.getComponent("Host_MouseManager").tag = tag;
  },
  //隨機打地鼠
  RandomHit: function RandomHit() {
    var randomHitIndex = Math.floor(Math.random() * this.mouseHoles.childrenCount); //隨機鼠洞

    if (this.mouseIndexArr.indexOf(randomHitIndex) === 1) {
      var mouse = this.mouseHoles.children[randomHitIndex].getChildByName("遮罩").getChildByName("鼠"); //mouse = 隨機洞的老鼠

      var hammer = this.mouseHoles.children[randomHitIndex].getChildByName("槌子");
      mouse.getComponent("Host_MouseManager").Hit(hammer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcM193aGFja19hX21vbGVcXOmBiuaIsuaooeWhilxcSG9zdF9SYW5kb21TcGF3bi5qcyJdLCJuYW1lcyI6WyJSYW5kZW5TcGF3bk1vdXNlIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwic3RhcnQiLCJtb3VzZUluZGV4QXJyIiwic2NoZWR1bGUiLCJNb3VzZUNvbWVPdXQiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiX25hbWUiLCJpbmNsdWRlcyIsIlJhbmRvbUhpdCIsInVwZGF0ZU1vdXNlTm9kZUluZm8iLCJtb3VzZSIsInRhZyIsImdldENvbXBvbmVudCIsImlzTGl2ZSIsInJhbmRvbUhpdEluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibW91c2VIb2xlcyIsImNoaWxkcmVuQ291bnQiLCJpbmRleE9mIiwiY2hpbGRyZW4iLCJnZXRDaGlsZEJ5TmFtZSIsImhhbW1lciIsIkhpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxnQkFBZ0IsR0FBR0MsT0FBTyxDQUFDLHFCQUFELENBQTlCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILGdCQURKO0FBR0xJLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSyxDQUFFLENBVFA7QUFXTEMsRUFBQUEsS0FYSyxtQkFXSTtBQUNMLFNBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxTQUFLQyxRQUFMLENBQWMsWUFBVztBQUN2QixXQUFLQyxZQUFMO0FBQ0QsS0FGRCxFQUVHLEdBRkg7O0FBR0EsUUFBR1AsRUFBRSxDQUFDUSxRQUFILENBQVlDLFFBQVosR0FBdUJDLEtBQXZCLENBQTZCQyxRQUE3QixDQUFzQyxZQUF0QyxDQUFILEVBQ0E7QUFDSSxXQUFLTCxRQUFMLENBQWMsWUFBVztBQUNyQixhQUFLTSxTQUFMO0FBQ0QsT0FGSCxFQUVLLEdBRkw7QUFHSDtBQUNKLEdBdEJJO0FBd0JMO0FBQ0FDLEVBQUFBLG1CQXpCSywrQkF5QmVDLEtBekJmLEVBeUJzQkMsR0F6QnRCLEVBeUIyQjtBQUM1QjtBQUNBRCxJQUFBQSxLQUFLLENBQUNFLFlBQU4sQ0FBbUIsbUJBQW5CLEVBQXdDQyxNQUF4QyxHQUFpRCxJQUFqRCxDQUY0QixDQUc1Qjs7QUFDQUgsSUFBQUEsS0FBSyxDQUFDRSxZQUFOLENBQW1CLG1CQUFuQixFQUF3Q0QsR0FBeEMsR0FBOENBLEdBQTlDO0FBQ0gsR0E5Qkk7QUFnQ0w7QUFDQUgsRUFBQUEsU0FqQ0ssdUJBaUNNO0FBQ1AsUUFBSU0sY0FBYyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWlCLEtBQUtDLFVBQUwsQ0FBZ0JDLGFBQTVDLENBQXJCLENBRE8sQ0FDNEU7O0FBQ25GLFFBQUksS0FBS2xCLGFBQUwsQ0FBbUJtQixPQUFuQixDQUEyQk4sY0FBM0IsTUFBK0MsQ0FBbkQsRUFDQTtBQUNJLFVBQUlKLEtBQUssR0FBRyxLQUFLUSxVQUFMLENBQWdCRyxRQUFoQixDQUF5QlAsY0FBekIsRUFBeUNRLGNBQXpDLENBQXdELElBQXhELEVBQThEQSxjQUE5RCxDQUE2RSxHQUE3RSxDQUFaLENBREosQ0FDbUc7O0FBQy9GLFVBQUlDLE1BQU0sR0FBRyxLQUFLTCxVQUFMLENBQWdCRyxRQUFoQixDQUF5QlAsY0FBekIsRUFBeUNRLGNBQXpDLENBQXdELElBQXhELENBQWI7QUFDQVosTUFBQUEsS0FBSyxDQUFDRSxZQUFOLENBQW1CLG1CQUFuQixFQUF3Q1ksR0FBeEMsQ0FBNENELE1BQTVDO0FBQ0g7QUFDSixHQXpDSSxDQTBDTDs7QUExQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJhbmRlblNwYXduTW91c2UgPSByZXF1aXJlKFwiR3Vlc3Q0X1doYWNrX2FfbW9sZVwiKTsgXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBSYW5kZW5TcGF3bk1vdXNlLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm1vdXNlSW5kZXhBcnIgPSBbXVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKSB7IFxyXG4gICAgICAgICAgdGhpcy5Nb3VzZUNvbWVPdXQoKVxyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5fbmFtZS5pbmNsdWRlcyhcIkhvc3QzX0dhbWVcIikpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLlJhbmRvbUhpdCgpO1xyXG4gICAgICAgICAgICAgIH0sIDAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvL+ioree9ruWcsOm8oOizh+ioilxyXG4gICAgdXBkYXRlTW91c2VOb2RlSW5mbyhtb3VzZSwgdGFnKSB7XHJcbiAgICAgICAgLy/oqK3nva7nlbbliY3ogIHpvKDnr4Dpu57niLLlrZjmtLtcclxuICAgICAgICBtb3VzZS5nZXRDb21wb25lbnQoXCJIb3N0X01vdXNlTWFuYWdlclwiKS5pc0xpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8v5bCH6ICB6byg6aGe5Z6L5bqP6Jmf5L2c54iy5qiZ57Gk5re75Yqg5Yiw6ICB6byg56+A6bue5LiKXHJcbiAgICAgICAgbW91c2UuZ2V0Q29tcG9uZW50KFwiSG9zdF9Nb3VzZU1hbmFnZXJcIikudGFnID0gdGFnO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+maqOapn+aJk+WcsOm8oFxyXG4gICAgUmFuZG9tSGl0KCl7XHJcbiAgICAgICAgbGV0IHJhbmRvbUhpdEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMubW91c2VIb2xlcy5jaGlsZHJlbkNvdW50KSk7ICAvL+maqOapn+m8oOa0nlxyXG4gICAgICAgIGlmICh0aGlzLm1vdXNlSW5kZXhBcnIuaW5kZXhPZihyYW5kb21IaXRJbmRleCkgPT09IDEpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG1vdXNlID0gdGhpcy5tb3VzZUhvbGVzLmNoaWxkcmVuW3JhbmRvbUhpdEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcIumBrue9qVwiKS5nZXRDaGlsZEJ5TmFtZShcIum8oFwiKTsgLy9tb3VzZSA9IOmaqOapn+a0nueahOiAgem8oFxyXG4gICAgICAgICAgICB2YXIgaGFtbWVyID0gdGhpcy5tb3VzZUhvbGVzLmNoaWxkcmVuW3JhbmRvbUhpdEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcIuanjOWtkFwiKVxyXG4gICAgICAgICAgICBtb3VzZS5nZXRDb21wb25lbnQoXCJIb3N0X01vdXNlTWFuYWdlclwiKS5IaXQoaGFtbWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=