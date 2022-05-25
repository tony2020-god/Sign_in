var MouseManager = require("Guest_MouseManager");

cc.Class({
    extends: MouseManager,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.HolesParent = cc.find("畫布/場景/地鼠洞")
        this.GameManager = cc.find("畫布").getComponent("Host_RandomSpawn")
    },

    start () {
        this.StartPosition = this.node.position;
        this.HitAniTarget = null;
        this.delytime = 0
        this.AddPoint_OriPos = this.AddPoint.position;
        this.MinusPoint_OriPos = this.MinusPoint.position;
    },

    Hit(hammer) {
        if(this.isLive == true)
        {
           this.mouseani.stop();
           this.isLive = false;
           this.node.setPosition(0, -185.826, 0)
           this.node.getComponent(cc.Sprite).spriteFrame = this.tag == 2 ? this.bomb : this.dead  
           hammer.active = true
           this.scheduleOnce(function() {hammer.active = false}, 0.3);
           //執行老鼠的算分函數及打到動畫
           if(this.tag < 2) 
           {
              this.AddPoint.getComponent(cc.Label).string = this.tag == 0 ? 1 : 3
              this.AddPoint.active = true;
              this.HitAniTarget = this.AddPoint;
           }
           else if (this.tag == 2) 
           {
             this.MinusPoint.active = true;
             this.HitAniTarget = this.MinusPoint;
           }
           this.HitAnimation()
           this.scheduleOnce(function() { 
             this.HitAniTarget.opacity = 255
             this.AddPoint.active = false;
             this.AddPoint.position = this.AddPoint_OriPos
             this.MinusPoint.active = false;
             this.MinusPoint.position = this.MinusPoint_OriPos
             this.ResetHole();
           }, 0.5);
        }
    },
    // update (dt) {},
});
