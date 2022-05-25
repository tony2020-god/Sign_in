
///動畫控制js
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
     cc.tween(this.node)
    .repeatForever(cc.tween()
    .by(15, { angle: 360 })
    )
    .start()
    },

    start () {

    },

    // update (dt) {},
});
