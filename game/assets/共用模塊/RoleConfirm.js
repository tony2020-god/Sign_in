var gameModel = require("Model");

///判斷腳色js
cc.Class({
    extends: cc.Component,

    properties: {
        WrongAlert:{
            default:null,
            type:cc.Node
        },
        AlertText :{
            default:null,
            type:cc.Label
        },
    },
    
    onLoad () {
        gameModel.GameName =  cc.director.getScene()._name.substr(12,cc.director.getScene()._name.length) //取得遊戲名稱
        gameModel.local_ID = window.location.host == ("hilives.net" || "www.hilives.net") ? "api.hilives.net" : "apidev.hilives.net"
        gameModel.Domain = "https://" + window.location.host; //取得目前的網域
        this.CheckRole = false;
        gameModel.GameStatusMessage = "open"
        gameModel.Game_Information();
    },

    start() {
        gameModel.RoleComfirm();
    },

    JudgeError(){
        if (gameModel.CheckRole == true && gameModel.CannotJoinGame == "") this.JudgeRole();
        else if(gameModel.CheckRole == true && gameModel.CannotJoinGame != "")
        {
            this.AlertText.string = gameModel.CannotJoinGame;
            this.WrongAlert.active = true;
            gameModel.CheckRole = false
        }
    },

    //判斷用戶角色並切換至各自角色場景
    JudgeRole(){
       gameModel.CheckRole = false
       if(gameModel.role == "guest" && this.CheckRole == false) 
       {
          this.CheckRole = true;
          gameModel.WebSocket_NumberOfPeople_Guest(1000,false)
          gameModel.WebSocket_GameStatus_Guest();
          if(gameModel.game_type == "turntable") cc.director.loadScene("Guest1_Weel"+ gameModel.BackGround_Theme);
          else if (gameModel.game_type == "jiugongge") cc.director.loadScene("Guest1_Jiugongge"+ gameModel.BackGround_Theme);
          else cc.director.loadScene("Guest1_JoinGame"+ gameModel.BackGround_Theme);
       }
       else if(gameModel.role == "host" && this.CheckRole == false) 
       {
            this.CheckRole = true;
            gameModel.GameStatusWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/status/host?activity_id="+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName); //開啟遊戲狀態ws
            this.scheduleOnce(function() {   //每1秒鐘值行一次，重複做1次
                gameModel.WebSocket_NumberOfPeople_Host();
                if(gameModel.game_type == "turntable")  
                {
                    gameModel.WebSocket_GameStatus_Host("close",0.1)
                    gameModel.NumberOfLotteryWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/winning/staff?activity_id="+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName); //開啟更新得獎人的ws
                    cc.director.loadScene("Host1_Weel"+ gameModel.BackGround_Theme);
                }
                else if (gameModel.game_type == "jiugongge") 
                {
                    gameModel.WebSocket_GameStatus_Host("close",0.1)
                    gameModel.NumberOfLotteryWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/winning/staff?activity_id="+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName); //開啟更新得獎人的ws
                    cc.director.loadScene("Host1_Jiugongge"+ gameModel.BackGround_Theme);
                }
                else 
                {
                    gameModel.WebSocket_GameStatus_Host("open",0.1)
                    cc.director.loadScene("Host1_Start"+ gameModel.BackGround_Theme);
                }
             }, 1);
       }
    },
   
     //持續判斷用戶角色
     update(dt) {
         this.JudgeError();
     },
});
