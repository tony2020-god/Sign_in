var gameModel = require("Model"); 
var GametimeCountDown = require("Host3_GameTimeCountDown"); 

///主持人遊戲時間倒數js
cc.Class({ 
    extends: GametimeCountDown,

    properties: {
    },


    start () {},
    
    //遊戲倒數
    countdown(){
        if(gameModel.GameStatusMessage == "end" || gameModel.GameStatusMessage == "calculate") return;
        gameModel.gametimeCountDown--;
        gameModel.WebSocket_GameStatus_Host("gaming",0.1)
        this.countdownText.string = gameModel.gametimeCountDown;
        if(gameModel.gametimeCountDown == 10) this.currentsound = cc.audioEngine.play(this.tensecond, true, 15);
        if(gameModel.gametimeCountDown == 0)
        {
            cc.audioEngine.stop(this.currentsound)
            gameModel.WebSocket_GameStatus_Host("calculate",0.1)
            gameModel.GameStatusMessage = "calculate"
        }
    },

     update (dt) {},
});