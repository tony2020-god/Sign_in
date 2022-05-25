var gameModel = require("Model");

//玩家遊戲倒數js
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
    },

    start () {
        this.already = false
    },


    lateUpdate (dt) {
        if(gameModel.GameStatusMessage == "end" && this.already == false) 
        {
            this.already = true
            cc.director.loadScene("Guest_Prize");
        }
        else if (gameModel.GameStatusMessage == "close" && this.already == false)
        {
            this.already = true
            gameModel.HostWindow = "close"
            cc.director.loadScene("Guest1_JoinGame"+ gameModel.BackGround_Theme);
        }
    },

})

