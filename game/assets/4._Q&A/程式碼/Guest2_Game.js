var gameModel = require("Model");
var Guest1_WaitingForQuestion = require("Guest1_WaitingForQuestion");

cc.Class({
    extends: Guest1_WaitingForQuestion,

    properties: {
        Options :{
            default: [],
            type: cc.Node
        },

        UnChooseOption :{
            default: null,
            type: cc.SpriteFrame
        },

        WrongChoose :{
            default: [],
            type: cc.SpriteFrame
        },

        Question :{
            default: null,
            type: cc.Label
        },
    },


    onLoad () {
        this.ColorString = this.node.getComponent('ColorString')
        this.CurrentChoose = ""
        this.state = 0
        gameModel.Answer = 3
    },

    start () {
       this.LightBlueColor = this.ColorString.colorOfString('#88FCFE') //淺藍色
       this.DarkBlueColor = this.ColorString.colorOfString("#203E3E") //深灰藍色
       this.GrayColor = this.ColorString.colorOfString("#515050") //灰色
       this.WhiteColor = this.ColorString.colorOfString("#FFFFFF") //白色 
       this.RedColor = this.ColorString.colorOfString("#FF1D1D") //紅色 
       this.GreenColor = this.ColorString.colorOfString("#1DFF61") //綠色 
       this.Question.string = gameModel.Question[gameModel.QuestionCount]
       this.UpdateRankScore();
       for(var i = 0; i < 4; i++) //更新選項文字
        {
            this.Options[i].getChildByName("選項文字").getComponent(cc.Label).string = gameModel.Options[i];
            this.OpacityAni(this.Options[i].getChildByName("選項文字"))
            this.OpacityAni(this.Options[i].getChildByName("選項字母"))
        }
    },


    ChooseOptions(event, customEventData){
        if(gameModel.GameStatusMessage == "end" || this.CurrentChoose == customEventData) return;
        for(var i = 0; i < 4; i++) //更新選項圖片
        {
            this.CurrentChoose = customEventData
            this.Options[i].color = i == customEventData ? this.WhiteColor : this.GrayColor;
            if(i == customEventData)
            {
                this.OpacityAni(this.Options[i].getChildByName("外框燈"))
                this.Options[i].getChildByName("外框燈").getComponent(sp.Skeleton).setAnimation(0,"Lightflicker",false); 
                var self = this.Options[i]
                this.scheduleOnce(function() { 
                    self.getChildByName("外框燈").getComponent(sp.Skeleton).timeScale = 1
                    self.getChildByName("外框燈").getComponent(sp.Skeleton).setAnimation(0,"lightning",true); 
                }, 1);
            }
            else this.Options[i].getChildByName("外框燈").opacity = 0
            this.Options[i].getChildByName("選項字母").color = this.Options[i].getChildByName("選項文字").color = i == customEventData ? this.LightBlueColor : this.DarkBlueColor
        }
    },

    ShowAnswer(){
        gameModel.GameStatusMessage = "end"
    },

        
    OpacityAni(node){
        node.opacity = 0
        cc.tween(node)
        .to(0.3, {opacity: 255})
        .start();
    },

    update (dt) {
        if(gameModel.GameStatusMessage == "end" && this.state == 0)
        {
            this.state = 1
            for(var i = 0; i < 4; i++) //更新選項正確還錯誤
            {
              if(i == gameModel.Answer) 
              {
                this.Options[i].color = this.WhiteColor
                this.Options[i].getComponent(sp.Skeleton).setAnimation(0,"right",false); 
                this.Options[i].getChildByName("選項文字").color = this.Options[i].getChildByName("選項字母").color = this.Options[i].getChildByName("外框燈").color = this.GreenColor

                this.OpacityAni(this.Options[i].getChildByName("選項文字"))
                this.OpacityAni(this.Options[i].getChildByName("選項字母"))
              }
              else if((i != gameModel.Answer) && this.CurrentChoose == "")
              {
                this.Options[i].getChildByName("選項文字").color = this.Options[i].getChildByName("選項字母").color = this.DarkBlueColor
                this.Options[i].color = this.GrayColor
              }
            }
            if(this.CurrentChoose != gameModel.Answer && this.CurrentChoose != "") 
            {
                this.Options[this.CurrentChoose].getComponent(sp.Skeleton).setAnimation(0,"Wrong",false); 
                this.Options[this.CurrentChoose].getChildByName("選項文字").color = this.Options[this.CurrentChoose].getChildByName("選項字母").color = this.Options[this.CurrentChoose].getChildByName("外框燈").color =this.RedColor
            }
            else this.Score.string = gameModel.Score + 1;
        } 
        else if(gameModel.GameStatusMessage == "next" && this.state == 1) cc.director.loadScene("WaitingQuestion")
    },

});
