var gameModel = require("Model");

cc.Class({
    extends: cc.Component,

    properties: {

    },


    onLoad () {
       this.count = 0
    },

    onCollisionEnter : function (other, self) {
        this.count ++
        if(other.node.group == "加分" && this.count == 1) gameModel.TopTitle = "加分";
        else if(other.node.group == "扣分" && this.count == 1) gameModel.TopTitle = "扣分";
    },

    onCollisionExit: function (other, self) {
        this.count --
        gameModel.TopTitle = "無"
    },
});