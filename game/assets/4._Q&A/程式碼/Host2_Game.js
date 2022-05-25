var gameModel = require("Model");
var TimeCount_js = require("Host3_GameTimeCountDown");

cc.Class({
    extends: cc.Component,

    properties: {
       Result :{
        default: [],
        type: cc.Sprite
      },

      ResultAnswered :{
        default: [],
        type: cc.Node
      },

      PeopleAnswered:{
        default: null,
        type: cc.Label
      },

      NowQuestionCount:{
        default: null,
        type: cc.Label
      },
      
      Options:{
        default: [],
        type: cc.Node
      },

      Question:{
        default: null,
        type: cc.Label
      },

      Rank:{
        default: [],
        type: cc.Node
      },

      ShowAnswerString:{
        default: null,
        type: cc.Label
      },
       
      TimeBar:{
        default: null,
        type: cc.Sprite
      },

      Timelight:{
        default: null,
        type: cc.Sprite
      },

      RedTimeBar:{
        default: null,
        type: cc.SpriteFrame
      },

      RedTimelight:{
        default: null,
        type: cc.SpriteFrame
      },
 
    },

    
    onLoad()
    {
      this.timenode = cc.find("畫布/秒數處理/秒數");
      this.tensecsound = cc.find("畫布").getComponent(TimeCount_js)
      gameModel.XMLTimeLimit = true
      gameModel.gametimelimit = 12
      gameModel.gametimeCountDown = 12
      this.lerp = 1.1 / gameModel.gametimelimit * 0.03;
      this.count = 0
      this.c = 0
      this.Answer = 2
      this.alreadyred = false
      this.schedule(this.TimeBarProgress, 0.03);
    },
    start () {
        gameModel.GameStatusMessage = "open"

        this.ColorString = this.node.getComponent('ColorString')
        //this.Question.string = gameModel.Question[gameModel.QuestionCount]
        //this.WebSocket_NumberOfLottery_Host();
        this.SeeResult = false
        this.PeopleAnswered.string = 10
        gameModel.AnswerResult = [10,15,20,30]
        gameModel.people = 75
        this.NowQuestionCount.string = gameModel.QuestionCount + "/" + gameModel.Question.length
        for(var i = 0; i < 4; i++)
        {
            //this.Options[i].getChildByName("選項文字").getComponent(cc.Label).string = gameModel.Options[i];
            this.OpacityAni_Start(this.Options[i].getChildByName("選項文字"))
            this.OpacityAni_Start(this.Options[i].getChildByName("選項字母"))
        }
        this. SpawnNewWinner();
        console.log(this.ColorString)
        console.log(gameModel)
    },

     //列出得人獎物件
     SpawnNewWinner(){
      for(var i = 0; i < 5; i++)
      {
        var self = this;
        this.Rank[i].getChildByName("玩家名子").getComponent(cc.Label).string = "甜甜"//gameModel.winner_name[i]
        this.Rank[i].getChildByName("玩家分數").getChildByName("分數").getComponent(cc.Label).string = "123"//gameModel.winner_score[i]
        this.Rank[i].getChildByName("玩家耗時").getChildByName("耗時").getComponent(cc.Label).string = "321"//gameModel.winner_time[i]
        //遠端載入: 網址轉圖片
/*         cc.assetManager.loadRemote(gameModel.winner_picture[i],{ext :'.jpg'||'.png'},function(err,texture)
        { 
          if(err) console.log("錯誤")
          else
          {
          var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame
          self.Rank[i].getChildByName("頭相框").getChildByName("遮罩").getChildByName("玩家頭像").getComponent(cc.Sprite).spriteFrame = picture;
          }
        }); */
      }
      this.schedule(this.OpacityAni, 0.2);
    },

    OpacityAni(){
      this.PlayDarkAni(this.Rank[this.c].getChildByName("黑布"))
      this.c ++
      console.log(this.c)
      if (this.c == 5)  this.unschedule(this.OpacityAni);
    },

    AnswerButton(){
        if( this.SeeResult == false)
        {
         //gameModel.WebSocket_GameStatus_Host("end",0.1)
         gameModel.GameStatusMessage = "end"
        }
        else  
        {
            //gameModel.WebSocket_GameStatus_Host("final",0.1)
            if(gameModel.QuestionCount == gameModel.Question.length) cc.director.loadScene("Host3_Last");
            else 
            {
             // gameModel.WebSocket_GameStatus_Host("next",0.1)
                gameModel.QuestionCount ++
                cc.director.loadScene("Host1_Question")
            }
        }
    },

    PrintResult(){
       this.SeeResult = true;
       this.timenode.active = false
       this.ShowAnswerString.string = gameModel.QuestionCount == gameModel.Question.length? "結算" : "下一題"
       this.TimeBar.fillRange = 0
       this.schedule(this.ProgressBar, 0.01);
       for(var i = 0; i < 4; i++)
        {
            this.ResultAnswered[i].active = true
            this.ResultAnswered[i].getComponent(cc.Label).string = gameModel.AnswerResult[i] + "人";
            //this.Result[i].fillRange = -gameModel.AnswerResult[i] / gameModel.people ;
            this.i = 0
            if(i == this.Answer) continue;
            this.Options[i].color = this.Options[i].getChildByName("選項文字").color = this.Options[i].getChildByName("選項字母").color = this.ColorString.colorOfString('#045858')     
        }
        for(var i = 0; i < 5; i++)
        {
            this.PlayBrightAni(this.Rank[i].getChildByName("黑布"))
        }
    },

    PlayBrightAni(node){
       cc.tween(node)
      .to(2, {opacity: 255})
      .start();
    },

    PlayDarkAni(node){
      cc.tween(node)
      .to(2, {opacity: 0})
      .start();
    },

    OpacityAni_Start(node){
      node.opacity = 0
      cc.tween(node)
      .to(0.3, {opacity: 255})
      .start();
    },

    OpacityAni_Time(){
      cc.tween(this.Timelight.node)
      .repeatForever(cc.tween()
      .to(0.2, { opacity: 0})
      .to(0.2, { opacity: 255})
      )
      .start()
    },

    ProgressBar(){
      this.Result[this.i].fillRange -= 0.01;
      if (this.Result[this.i].fillRange <= -gameModel.AnswerResult[this.i] / gameModel.people)
      {
          this.unschedule(this.ProgressBar);
          this.i ++ 
          if(this.i > 3) return;
          this.schedule(this.ProgressBar, 0.01);
      } 
    },

    TimeBarProgress(){
      this.TimeBar.fillRange -= this.lerp;
      this.count ++ 
      if(gameModel.gametimeCountDown == 10 && this.alreadyred == false) 
      {
        this.alreadyred = true
        this.TimeBar.spriteFrame = this.RedTimeBar
        this.Timelight.spriteFrame = this.RedTimelight  
        this.OpacityAni_Time()
      }

      if (this.TimeBar.fillRange < 0)
      {
        this.Timelight.node.active = false
        this.unschedule(this.TimeBarProgress);
      } 
    },

    update (dt) {
        if(gameModel.GameStatusMessage == "end" && this.SeeResult == false) 
        {
          cc.audioEngine.stop(this.tensecsound.currentsound)
          this.PrintResult();
        }
    },
});
