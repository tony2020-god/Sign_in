
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/3_whack_a_mole/遊戲模塊/Host_MouseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e23b3EXmPNLnrwxcZ/ZKoiT', 'Host_MouseManager');
// 3_whack_a_mole/遊戲模塊/Host_MouseManager.js

"use strict";

var MouseManager = require("Guest_MouseManager");

cc.Class({
  "extends": MouseManager,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.HolesParent = cc.find("畫布/場景/地鼠洞");
    this.GameManager = cc.find("畫布").getComponent("Host_RandomSpawn");
  },
  start: function start() {
    this.StartPosition = this.node.position;
    this.HitAniTarget = null;
    this.delytime = 0;
    this.AddPoint_OriPos = this.AddPoint.position;
    this.MinusPoint_OriPos = this.MinusPoint.position;
  },
  Hit: function Hit(hammer) {
    if (this.isLive == true) {
      this.mouseani.stop();
      this.isLive = false;
      this.node.setPosition(0, -185.826, 0);
      this.node.getComponent(cc.Sprite).spriteFrame = this.tag == 2 ? this.bomb : this.dead;
      hammer.active = true;
      this.scheduleOnce(function () {
        hammer.active = false;
      }, 0.3); //執行老鼠的算分函數及打到動畫

      if (this.tag < 2) {
        this.AddPoint.getComponent(cc.Label).string = this.tag == 0 ? 1 : 3;
        this.AddPoint.active = true;
        this.HitAniTarget = this.AddPoint;
      } else if (this.tag == 2) {
        this.MinusPoint.active = true;
        this.HitAniTarget = this.MinusPoint;
      }

      this.HitAnimation();
      this.scheduleOnce(function () {
        this.HitAniTarget.opacity = 255;
        this.AddPoint.active = false;
        this.AddPoint.position = this.AddPoint_OriPos;
        this.MinusPoint.active = false;
        this.MinusPoint.position = this.MinusPoint_OriPos;
        this.ResetHole();
      }, 0.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcM193aGFja19hX21vbGVcXOmBiuaIsuaooeWhilxcSG9zdF9Nb3VzZU1hbmFnZXIuanMiXSwibmFtZXMiOlsiTW91c2VNYW5hZ2VyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiSG9sZXNQYXJlbnQiLCJmaW5kIiwiR2FtZU1hbmFnZXIiLCJnZXRDb21wb25lbnQiLCJzdGFydCIsIlN0YXJ0UG9zaXRpb24iLCJub2RlIiwicG9zaXRpb24iLCJIaXRBbmlUYXJnZXQiLCJkZWx5dGltZSIsIkFkZFBvaW50X09yaVBvcyIsIkFkZFBvaW50IiwiTWludXNQb2ludF9PcmlQb3MiLCJNaW51c1BvaW50IiwiSGl0IiwiaGFtbWVyIiwiaXNMaXZlIiwibW91c2VhbmkiLCJzdG9wIiwic2V0UG9zaXRpb24iLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsInRhZyIsImJvbWIiLCJkZWFkIiwiYWN0aXZlIiwic2NoZWR1bGVPbmNlIiwiTGFiZWwiLCJzdHJpbmciLCJIaXRBbmltYXRpb24iLCJvcGFjaXR5IiwiUmVzZXRIb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFlBQVksR0FBR0MsT0FBTyxDQUFDLG9CQUFELENBQTFCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILFlBREo7QUFHTEksRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0MsV0FBTCxHQUFtQkosRUFBRSxDQUFDSyxJQUFILENBQVEsV0FBUixDQUFuQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJOLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLElBQVIsRUFBY0UsWUFBZCxDQUEyQixrQkFBM0IsQ0FBbkI7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLEtBZEssbUJBY0k7QUFDTCxTQUFLQyxhQUFMLEdBQXFCLEtBQUtDLElBQUwsQ0FBVUMsUUFBL0I7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsS0FBS0MsUUFBTCxDQUFjSixRQUFyQztBQUNBLFNBQUtLLGlCQUFMLEdBQXlCLEtBQUtDLFVBQUwsQ0FBZ0JOLFFBQXpDO0FBQ0gsR0FwQkk7QUFzQkxPLEVBQUFBLEdBdEJLLGVBc0JEQyxNQXRCQyxFQXNCTztBQUNSLFFBQUcsS0FBS0MsTUFBTCxJQUFlLElBQWxCLEVBQ0E7QUFDRyxXQUFLQyxRQUFMLENBQWNDLElBQWQ7QUFDQSxXQUFLRixNQUFMLEdBQWMsS0FBZDtBQUNBLFdBQUtWLElBQUwsQ0FBVWEsV0FBVixDQUFzQixDQUF0QixFQUF5QixDQUFDLE9BQTFCLEVBQW1DLENBQW5DO0FBQ0EsV0FBS2IsSUFBTCxDQUFVSCxZQUFWLENBQXVCUCxFQUFFLENBQUN3QixNQUExQixFQUFrQ0MsV0FBbEMsR0FBZ0QsS0FBS0MsR0FBTCxJQUFZLENBQVosR0FBZ0IsS0FBS0MsSUFBckIsR0FBNEIsS0FBS0MsSUFBakY7QUFDQVQsTUFBQUEsTUFBTSxDQUFDVSxNQUFQLEdBQWdCLElBQWhCO0FBQ0EsV0FBS0MsWUFBTCxDQUFrQixZQUFXO0FBQUNYLFFBQUFBLE1BQU0sQ0FBQ1UsTUFBUCxHQUFnQixLQUFoQjtBQUFzQixPQUFwRCxFQUFzRCxHQUF0RCxFQU5ILENBT0c7O0FBQ0EsVUFBRyxLQUFLSCxHQUFMLEdBQVcsQ0FBZCxFQUNBO0FBQ0csYUFBS1gsUUFBTCxDQUFjUixZQUFkLENBQTJCUCxFQUFFLENBQUMrQixLQUE5QixFQUFxQ0MsTUFBckMsR0FBOEMsS0FBS04sR0FBTCxJQUFZLENBQVosR0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBbEU7QUFDQSxhQUFLWCxRQUFMLENBQWNjLE1BQWQsR0FBdUIsSUFBdkI7QUFDQSxhQUFLakIsWUFBTCxHQUFvQixLQUFLRyxRQUF6QjtBQUNGLE9BTEQsTUFNSyxJQUFJLEtBQUtXLEdBQUwsSUFBWSxDQUFoQixFQUNMO0FBQ0UsYUFBS1QsVUFBTCxDQUFnQlksTUFBaEIsR0FBeUIsSUFBekI7QUFDQSxhQUFLakIsWUFBTCxHQUFvQixLQUFLSyxVQUF6QjtBQUNEOztBQUNELFdBQUtnQixZQUFMO0FBQ0EsV0FBS0gsWUFBTCxDQUFrQixZQUFXO0FBQzNCLGFBQUtsQixZQUFMLENBQWtCc0IsT0FBbEIsR0FBNEIsR0FBNUI7QUFDQSxhQUFLbkIsUUFBTCxDQUFjYyxNQUFkLEdBQXVCLEtBQXZCO0FBQ0EsYUFBS2QsUUFBTCxDQUFjSixRQUFkLEdBQXlCLEtBQUtHLGVBQTlCO0FBQ0EsYUFBS0csVUFBTCxDQUFnQlksTUFBaEIsR0FBeUIsS0FBekI7QUFDQSxhQUFLWixVQUFMLENBQWdCTixRQUFoQixHQUEyQixLQUFLSyxpQkFBaEM7QUFDQSxhQUFLbUIsU0FBTDtBQUNELE9BUEQsRUFPRyxHQVBIO0FBUUY7QUFDSixHQXJESSxDQXNETDs7QUF0REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1vdXNlTWFuYWdlciA9IHJlcXVpcmUoXCJHdWVzdF9Nb3VzZU1hbmFnZXJcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBNb3VzZU1hbmFnZXIsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuSG9sZXNQYXJlbnQgPSBjYy5maW5kKFwi55Wr5biDL+WgtOaZry/lnLDpvKDmtJ5cIilcclxuICAgICAgICB0aGlzLkdhbWVNYW5hZ2VyID0gY2MuZmluZChcIueVq+W4g1wiKS5nZXRDb21wb25lbnQoXCJIb3N0X1JhbmRvbVNwYXduXCIpXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLlN0YXJ0UG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5IaXRBbmlUYXJnZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVseXRpbWUgPSAwXHJcbiAgICAgICAgdGhpcy5BZGRQb2ludF9PcmlQb3MgPSB0aGlzLkFkZFBvaW50LnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuTWludXNQb2ludF9PcmlQb3MgPSB0aGlzLk1pbnVzUG9pbnQucG9zaXRpb247XHJcbiAgICB9LFxyXG5cclxuICAgIEhpdChoYW1tZXIpIHtcclxuICAgICAgICBpZih0aGlzLmlzTGl2ZSA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICB0aGlzLm1vdXNlYW5pLnN0b3AoKTtcclxuICAgICAgICAgICB0aGlzLmlzTGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLCAtMTg1LjgyNiwgMClcclxuICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnRhZyA9PSAyID8gdGhpcy5ib21iIDogdGhpcy5kZWFkICBcclxuICAgICAgICAgICBoYW1tZXIuYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge2hhbW1lci5hY3RpdmUgPSBmYWxzZX0sIDAuMyk7XHJcbiAgICAgICAgICAgLy/ln7fooYzogIHpvKDnmoTnrpfliIblh73mlbjlj4rmiZPliLDli5XnlatcclxuICAgICAgICAgICBpZih0aGlzLnRhZyA8IDIpIFxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aGlzLkFkZFBvaW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy50YWcgPT0gMCA/IDEgOiAzXHJcbiAgICAgICAgICAgICAgdGhpcy5BZGRQb2ludC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuSGl0QW5pVGFyZ2V0ID0gdGhpcy5BZGRQb2ludDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgZWxzZSBpZiAodGhpcy50YWcgPT0gMikgXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy5NaW51c1BvaW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICB0aGlzLkhpdEFuaVRhcmdldCA9IHRoaXMuTWludXNQb2ludDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgdGhpcy5IaXRBbmltYXRpb24oKVxyXG4gICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICAgICAgIHRoaXMuSGl0QW5pVGFyZ2V0Lm9wYWNpdHkgPSAyNTVcclxuICAgICAgICAgICAgIHRoaXMuQWRkUG9pbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICB0aGlzLkFkZFBvaW50LnBvc2l0aW9uID0gdGhpcy5BZGRQb2ludF9PcmlQb3NcclxuICAgICAgICAgICAgIHRoaXMuTWludXNQb2ludC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgIHRoaXMuTWludXNQb2ludC5wb3NpdGlvbiA9IHRoaXMuTWludXNQb2ludF9PcmlQb3NcclxuICAgICAgICAgICAgIHRoaXMuUmVzZXRIb2xlKCk7XHJcbiAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=