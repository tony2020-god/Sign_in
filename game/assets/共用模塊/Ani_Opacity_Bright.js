
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
      this.OpacityAni()
    },

    
    OpacityAni(){
        this.node.opacity = 0
        cc.tween(this.node)
        .to(0.5, {opacity: 255})
        .start();
    }
    // update (dt) {},
});
