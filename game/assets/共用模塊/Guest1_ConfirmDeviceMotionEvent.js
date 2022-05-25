var gameModel = require("Model");

///確認玩家是否為陀螺儀和加入遊戲js
cc.Class({
    extends: cc.Component,

    properties: {
       WrongAlert:{
          default:null,
          type:cc.Node
       },
    },

      onLoad () {
        this.join = false; //是否按下加入遊戲按鈕
        this.AlertText = cc.find("畫布/警告/警告文字")
        gameModel.TopTitle = cc.find("畫布/場景/標題").getComponent(cc.Sprite).spriteFrame
        gameModel.Prize_BackGround = cc.find("畫布/場景/背景").getComponent(cc.Sprite).spriteFrame
        gameModel.Guest1_Join_JS = this;
      },
      
      start () {
        //啟動陀螺儀
        cc.systemEvent.setAccelerometerEnabled(true);
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
        if(gameModel.HostWindow == "close")
       {
        this.AlertText.getComponent(cc.Label).string = "主辦單位已關閉視窗，遊戲中止"
        this.WrongAlert.active = true
       }
      },

      onDeviceMotionEvent :function (event){
        var x = event.acc.x.toFixed(2); 
        var y = event.acc.y.toFixed(2); 
        var z = event.acc.z.toFixed(2); 
        var speed = parseFloat(x)+parseFloat(y)+parseFloat(z);
        if(speed == 0.00 && cc.sys.os == "Android" && this.join == true && gameModel.GameStatusMessage != "close" && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲")       //如果是安卓，且沒陀螺儀功能則跳出 "此設備不支援搖一搖功能!" 的警告
        {
          this.AlertText.getComponent(cc.Label).string = "此設備不支援搖一搖功能";
          this.WrongAlert.active = true
          cc.systemEvent.setAccelerometerEnabled(false);
        }
        else if(speed != 0.00 && cc.sys.os == "Android" && this.join == true && gameModel.GameStatusMessage != "close") //如果是安卓，且有陀螺儀功能則啟動WebSocket_NumberOfPeople_Guest傳送玩家cookie給後端，並進入玩家等待遊戲開始畫面
        {
          this.join = false
          gameModel.WebSocket_NumberOfPeople_Guest(500,true);
        }
        else if (gameModel.GameStatusMessage == "close" && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲" && this.join == true)
        {
          this.join = false
          this.AlertText.getComponent(cc.Label).string = "請等待主辦方連接後再加入遊戲";
          this.WrongAlert.active = true
        }
    },

    //加入遊戲鍵: 要求Iphone客戶打開陀螺儀，判斷Android客戶是否有陀螺儀
    JoinGame(){
      this.join = true;
      if (cc.sys.os == "iOS"&& this.join == true && gameModel.GameStatusMessage != "close") 
      {
          if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                  if (permissionState === 'granted') {
                    gameModel.WebSocket_NumberOfPeople_Guest(500,true);
                    this.join = false;
                  } else {
                     //取消
                  }
                })
                .catch((err) => {
                    console.log(err)
                });
            } else {
            }
      }
      else if (gameModel.GameStatusMessage == "close" && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲" && this.join == true)
      {
        this.join = false;
        this.AlertText.getComponent(cc.Label).string = "請等待主辦方連接後再加入遊戲";
        this.WrongAlert.active = true
      }
    },

    ConnetSuccess(){
      if(gameModel.CannotJoinGame == "") cc.director.loadScene("Guest2_Wait"+ gameModel.BackGround_Theme);
      else
      {
        this.AlertText.getComponent(cc.Label).string = gameModel.CannotJoinGame;
        this.WrongAlert.active = true
      }
    },

    ConnetFail(){
      this.AlertText.getComponent(cc.Label).string = "無法連接伺服器"
      this.WrongAlert.active = true
    },

    CloseAlert(){
      this.WrongAlert.active = false;
      if(gameModel.CannotJoinGame == "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲" && gameModel.HostWindow != "close") cc.director.loadScene("Guest5_Prize"+ gameModel.BackGround_Theme);
      else gameModel.HostWindow = "open"
    }
    // update (dt) {},
});
