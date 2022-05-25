var gameModel = require("Model");

cc.Class({
    extends: cc.Component,

    properties: {
        Ingame: {
            default: null,
            type: cc.Node
        },

        Fake:{
            default: null,
            type: cc.SpriteFrame
        },

        Real:{
            default: null,
            type: cc.SpriteFrame
        },

        Score:{
            default: null,
            type: cc.Label
        },

        items: {
            default: null,
            type: cc.Prefab
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.pos = this.Ingame.position
        gameModel.TopTitle = "無"
        cc.director.getCollisionManager().enabled = true;
        this.randomNodeIndex = 1
        this.items_parent = cc.find("畫布")
        gameModel.score = 0
    },

    start () {
        this.node.on('touchmove', this.move, this);
        this.node.on('touchend', this.end, this);
        this.node.on('touchcancel',this.end, this)
        this.pos = this.Ingame.position
        console.log(this.pos)
    },

    move(event){
       var pos = new cc.Vec2(event.getLocationX(),event.getLocationY()) 
       pos = this.node.convertToNodeSpaceAR(pos)
       this.Ingame.position = pos
    },

    end(){
         if(gameModel.TopTitle == "加分") 
         {
            gameModel.score = this.randomNodeIndex > 0 ? gameModel.score + 1 : gameModel.score - 3
            if(gameModel.score < 0) gameModel.score = 0
            this.Score.string = "分數: " + gameModel.score
            this.ADDanii(this.Ingame)
            this.reset();
            console.log("加分")
         }
         else if(gameModel.TopTitle == "扣分") 
         {
            this.Mani(this.Ingame);
            this.reset();
            console.log("扣分")
         }
         else if(gameModel.TopTitle == "無") this.Ingame.position = this.pos
    },

    reset(){
        gameModel.TopTitle = "無"
        this.randomNodeIndex = Math.floor(Math.random() * 5)
        console.log(this.randomNodeIndex)
        var node = cc.instantiate(this.items);
        node.getComponent(cc.Sprite).spriteFrame = this.randomNodeIndex == 0 ? this.Fake : this.Real
        node.parent = this.items_parent;
        this.Ingame = node
        this.Ingame.position = this.pos
    },

    ADDanii(node){
        cc.tween(node)
        .to(0.5,{ position: cc.v2(0, 667.876),scale: 0})
        .call(() => {node.destroy();})
        .start()
    },

    Mani(node){
        cc.tween(node)
        .to(0.1,{ position: cc.v2(0, -1771.968)})
        .call(() => {node.destroy();})
        .start()
    },
    // update (dt) {},
});
