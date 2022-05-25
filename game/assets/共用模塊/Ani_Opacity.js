
///透明度漸層動畫js
cc.Class({
    extends: cc.Component,

    properties: {
        Target: {
            default: [],
            type: [cc.Node]
        },
    },

    start () {
       this.CountTarget();
       this.count = 1; 
    },

    CountTarget(){
        this.schedule(function() {   //每1秒鐘值行一次，重複做1次
            this.judge(this.count - 1);
        }, 0.08,this.Target.length);
    },

    judge(i){
        if(this.count == this.Target.length + 1) this.clear();
        else
        {
            this.count += 1
            this.Target[i].active = true
            this.OpacityAni(this.Target[i])
        }
    },

    clear(){
        this.count = 1;
        this.scheduleOnce(function() {   //每1秒鐘值行一次，重複做1次
            for(var i = 0; i < this.Target.length; i++)
            {
                this.Target[i].active = false
                this.Target[i].opacity = 0;
            }
            this.CountTarget();
         }, 1);
    },

    OpacityAni(node){
        cc.tween(node)
        .to(1, {opacity: 255})
        .start();
    }
    // update (dt) {},
});
