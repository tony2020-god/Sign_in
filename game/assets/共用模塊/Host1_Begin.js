var gameModel = require("Model");

///主持人開始場景js
cc.Class({
    extends: cc.Component,

    properties: {
        round:{
            default:null,
            type:cc.Label
        },

        NowPeople:{
            default:null,
            type:cc.Label
        },

        aud:{
            default:null,
            type:cc.AudioSource
        },

        Session:{
            default:null,
            type:cc.Label
        },
        
        WrongAlert:{
            default:null,
            type:cc.Node
        },
    },
    
    onLoad () {
        gameModel.connet_ws = false
        this.Session.string = "當前場次 : " + gameModel.Session; 
        this.AlertText = cc.find("畫布/警告/警告文字")   
    },


    start () {
        cc.director.preloadScene("Host3_Game")
    },


    touchBegin (){
        if(gameModel.people == 0) 
        {
            this.AlertText.getComponent(cc.Label).string = "尚未有玩家加入遊戲";
            this.WrongAlert.active = true;
        }
        else 
        {
            if(gameModel.XMLTimeLimit == true) gameModel.gametimeCountDown = gameModel.gametimelimit;
            gameModel.CurrentRound = gameModel.round;
            gameModel.WebSocket_GameStatus_Host("start",0.1)
            this.scheduleOnce(function() { 
                if(gameModel.connet_ws == true)
                {
                  gameModel.GameStatusMessage = "start"
                  cc.director.loadScene("Host2_CountDown"+ gameModel.BackGround_Theme);
                  gameModel.connet_ws = false
                }
                else
                {
                    this.AlertText.getComponent(cc.Label).string = "尚未與伺服器連接";
                    this.WrongAlert.active = true;
                }
            }, 0.7);
        }
    },

    CloseAlert(){
        this.WrongAlert.active = false;
    },
   
    update (dt) {
        this.round.string = gameModel.round;
        this.NowPeople.string = gameModel.people;
    },
});
