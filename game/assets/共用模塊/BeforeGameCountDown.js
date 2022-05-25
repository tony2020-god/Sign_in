var gameModel = require("Model"); //全域變數gameModel 不須加this就能提取

///主持人遊戲開始倒數js
cc.Class({ //進入Class區域 若想提取裡面的直需要用this
    extends: cc.Component,

    properties: {

        countdownspritelist: {
            default: [],
            type: [cc.SpriteFrame]
        },

        countdownSound: {
            default: null,
            type: cc.AudioClip
        },

        countdownfinishSound: {
            default: null,
            type: cc.AudioClip
        },
        
        countdownsprite:cc.Sprite,
    },

    onLoad () {
        if(cc.director.getScene()._name.includes("Host2_CountDown")) gameModel.NumberOfLotteryWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/winning/staff?activity_id="+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName); //開啟更新得獎人的ws
    },

    start () {
        this.count = 0;
        this.schedule(function() { //每1秒鐘值行一次，重複做4+1次
            if(cc.director.getScene()._name.includes("Guest3_CountDown")) this.Guset_countdown();
            else if (cc.director.getScene()._name.includes("Host2_CountDown")) this.Host_countdown();
        }, 1,4);
    },

    //主持人遊戲開始前倒數
    Host_countdown(){
        this.count++;
        this.countdownsprite.spriteFrame = this.countdownspritelist[this.count-1];
        if (this.count < 4) this.currentsound = cc.audioEngine.play(this.countdownSound, false, 0.5);
        else if (this.count == 4) 
        {
            gameModel.WebSocket_GameStatus_Host("gaming",0.1)
            this.currentsound = cc.audioEngine.play(this.countdownfinishSound, false, 0.5);
        }
        else if (this.count == 5) cc.director.loadScene("Host3_Game" + gameModel.BackGround_Theme);
    },

    //玩家遊戲開始前倒數
    Guset_countdown(){
        this.count++;
        this.countdownsprite.spriteFrame = this.countdownspritelist[this.count-1];
        if (this.count == 5) cc.director.loadScene("Guest4_Game"+ gameModel.BackGround_Theme);
    }

    // update (dt) {},
});