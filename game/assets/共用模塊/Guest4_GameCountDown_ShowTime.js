var gameModel = require("Model");
var Guest4_GameCountDown = require("Guest4_GameCountDown");

//玩家遊戲倒數(有顯示倒數數字)js
cc.Class({
    extends: Guest4_GameCountDown,

    properties: {
        countdown: {
            default:null,
            type:cc.Node
        },

        NoLinitTimeImg: {
            default:null,
            type:cc.Node
        },
        
        countdownText: {
            default:null,
            type:cc.Label
        },

        waitForCount: {
            default:null,
            type:cc.Node
        },
    },

    start () {
        this.alreadyend = false;
        if(gameModel.XMLTimeLimit == false) 
        {
            this.countdown.active = false
            this.NoLinitTimeImg.active = true
        }
    },

    lateUpdate (dt) {
        if(gameModel.XMLTimeLimit == true) this.countdownText.string = gameModel.gametimeCountDown
        if(gameModel.GameStatusMessage == "calculate" && this.alreadyend == false) 
        {
            this.alreadyend = true;
            this.waitForCount.active = true
        }
        else if (gameModel.GameStatusMessage == "close" && this.alreadyend == false)
        {
            this.alreadyend = true
            gameModel.HostWindow = "close"
            cc.director.loadScene("Guest1_JoinGame"+ gameModel.BackGround_Theme);
        }
        else if(gameModel.GameStatusMessage == "end" && this.alreadyend == true) 
        {
            this.alreadyend = false
            gameModel.Lottery_Guest();
            this.scheduleOnce(function() { 
               cc.director.loadScene("Guest_Prize"+ gameModel.BackGround_Theme);
            }, 2);
        }
    },
})

