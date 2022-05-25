
///動畫控制js
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
     cc.tween(this.node)
    .repeatForever(cc.tween()
    .by(0.8, { position: cc.v2(0, 80)})
    .by(0.8, { position: cc.v2(0, -80)})
    )
    .start()
    },

    start () {

    },

    // update (dt) {},
});
