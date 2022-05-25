var RandenSpawnMouse = require("Guest4_Whack_a_mole"); 

cc.Class({
    extends: RandenSpawnMouse,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {
        this.mouseIndexArr = []
        this.schedule(function() { 
          this.MouseComeOut()
        }, 0.5);
        if(cc.director.getScene()._name.includes("Host3_Game")) 
        {
            this.schedule(function() { 
                this.RandomHit();
              }, 0.2);
        }
    },

    //設置地鼠資訊
    updateMouseNodeInfo(mouse, tag) {
        //設置當前老鼠節點爲存活
        mouse.getComponent("Host_MouseManager").isLive = true;
        //將老鼠類型序號作爲標籤添加到老鼠節點上
        mouse.getComponent("Host_MouseManager").tag = tag;
    },

    //隨機打地鼠
    RandomHit(){
        let randomHitIndex = Math.floor(Math.random() * (this.mouseHoles.childrenCount));  //隨機鼠洞
        if (this.mouseIndexArr.indexOf(randomHitIndex) === 1) 
        {
            var mouse = this.mouseHoles.children[randomHitIndex].getChildByName("遮罩").getChildByName("鼠"); //mouse = 隨機洞的老鼠
            var hammer = this.mouseHoles.children[randomHitIndex].getChildByName("槌子")
            mouse.getComponent("Host_MouseManager").Hit(hammer);
        }
    },
    // update (dt) {},
});
