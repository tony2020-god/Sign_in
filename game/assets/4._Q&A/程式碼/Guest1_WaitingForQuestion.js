var gameModel = require("Model");

cc.Class({
    extends: cc.Component,

    properties: {
        Rank:{
            default: null,
            type: cc.Label
        },

        Score:{
            default: null,
            type: cc.Label
        },

        Time:{
            default: null,
            type: cc.Label
        },

    },


    onLoad () {
    },

    start () {
        this.UpdateRankScore();
    },

    update (dt) {
        if(gameModel.GameStatusMessage == "start") cc.director.loadScene("Guest2_Answer")
    },

    UpdateRankScore(){
        this.Rank.string = gameModel.Rank;
        this.Score.string = gameModel.Score;
        this.Time.string = gameModel.gametimelimit;
    },
});
