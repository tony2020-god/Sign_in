var gameModel = require("Model");
var Wheel_Prize_information = require("prizeInformation");
var WinnerItem = require("Host1_Congratulations");
var Guest_Prize = require("Guest1_PrizeInformation")

cc.Class({
    extends: cc.Component,

    properties: {
        wheel:{
            default:null,
            type:cc.Node
        },

        wheel_out:{
            default:null,
            type:cc.Node
        },

        Title:{
            default:null,
            type:cc.Node
        },

        TopLight:{
            default:null,
            type:cc.Node
        },

        Nail:{
            default:null,
            type:cc.Node
        },

        wheel_out_Light:{
            default:null,
            type:cc.Node
        },

        Prize:{
            default:null,
            type:cc.Node
        },

        ChanceText:{
            default:null,
            type:cc.Label
        },

        AlretNode:{
            default:null,
            type:cc.Node
        },

        cannnottouch:{
            default:null,
            type:cc.Node
        },

        Prizes_Infor:{
            default:null,
            type:cc.Node
        },
        items:{
            default:null,
            type:cc.Prefab
        },
        items_parent:{
            default:null,
            type:cc.Node
        },
        Steam:{
            default:null,
            type:cc.Node
        },
        wheel_sound: {
            default: [],
            type: cc.AudioClip
        },
        prize_picture:{
            default:null,
            type:cc.Node
        },
    },

    onLoad() {
        gameModel.Game_js = this
        gameModel.Prize_Infromation()
        this.indexcount = 0
        this.index = [];
        this.itemlist = [];
        this.Prize_total = 8
        this.wheelState = 0;     
        this.Prize_ID = 0           
        this.IDAngle = 360 / this.Prize_total;   //每个編號的角度
        this.Prize_Angle = 0;                   //得獎獎品的角度
        this.prizenode = this.Prize.getChildByName("得獎懸浮窗")
        this.Wheel_Prize = cc.find("畫布/輪盤/輪盤_內/獎項")
        this.GamePrizeInfor = cc.find("畫布").getComponent(Guest_Prize)
        this.ThanksJoin = []
    },

    start(){
        if(gameModel.role == "guest") 
        {
            this.ChanceText.string = gameModel.chance
            gameModel.mode = "simultaneous"
        }
        else gameModel.mode = "order"
        this.AlertText = this.AlretNode.getChildByName("警告文字").getComponent(cc.Label)
    },

    SpawnPrize(){
        for(var i = 0; i < gameModel.Prizestack_id.length; i++)
        {   
            if(gameModel.Prizestack_id[i] == "") this.ThanksJoin.push(i);          
            this.Prizes_Infor.children[i].getComponent(cc.Label).string = gameModel.Prizestack_name[i]
            var Prize_Image = this.Prizes_Infor.children[i].getChildByName("獎品照片框").getChildByName("遮罩").getChildByName("獎品照片").getComponent(Wheel_Prize_information);
            Prize_Image.setinformation(i)
        }
    },

    //按下開始遊戲鍵，重置參數
    StartBtn(){
        if(gameModel.CannotJoinGame != "")
        {
            this.AlertText.string = "沒有獎品了，無法抽獎，請主持人新增獎品後重新刷新頁面"
            this.AlretNode.active = true
            return;
        }
        if(this.wheelState !== 0 || (gameModel.mode != "order" && gameModel.role == "host")) return;
        if(gameModel.role == "guest")
        {
           if(gameModel.chance == 0) 
           {
              this.AlertText.string = "沒有抽獎機會了，無法抽獎"
              this.AlretNode.active = true
              return;
           }
           else 
           {
               if(gameModel.AllowRePrize == "close" && gameModel.PrizeStaffs.length > 0)
               {
                 this.AlertText.string = "錯誤 :該場次遊戲不允許重複中獎，您已中獎，無法參加遊戲抽獎"
                 this.AlretNode.active = true
                 return;
               }
               else
               {
                 gameModel.chance --
                 this.ChanceText.string = gameModel.chance
               }
           }
        }
        if(gameModel.role == "host") this.currentsound = cc.audioEngine.play(this.wheel_sound[0], false, 1);
        this.cannnottouch.active = true;
        this.wheelState = 1; 
        this.aniSlow_In();
    },

    //輪盤加速，緩入動作
    aniSlow_In(){
        this.wheel_out_Light.getComponent(sp.Skeleton).setAnimation(0,"Rotate",true);
        this.wheel_out_Light.getComponent(sp.Skeleton).timeScale = 5 ;
        //緩入動畫
        var ani_SlowIn =  cc.tween(this.wheel)
                          .by(2, { angle: 360}, {easing: 'circIn'})
                          .call(() => { this.wheel_out_Light.getComponent(sp.Skeleton).timeScale = 10 })
        //持續旋轉動畫
        var KeepTurn = cc.tween(this.wheel)
                       .by(0.35, { angle: 360})
                       .repeatForever()


        this.ani_wheelState1 = cc.tween(this.wheel)
                               .then(ani_SlowIn)
                               .then(KeepTurn)
                               .start()
    
        if(gameModel.role == "host")
        {
            this.scheduleOnce(function() { 
                this.currentsound = cc.audioEngine.play(this.wheel_sound[1], true, 1);
             }, 2);
        }

        this.scheduleOnce(function() { 
           gameModel.Lottery_Guest();
        }, 5);
    },

    //獎品資訊送達
    lettorey(){
        if(gameModel.role == "host") cc.audioEngine.pauseAllEffects();
        if(gameModel.CannotJoinGame != "")
        {
            this.wheel_out_Light.getComponent(sp.Skeleton).timeScale = 1 ;
            this.wheel_out_Light.getComponent(sp.Skeleton).setAnimation(0,"5",false);
            this.wheel_out.getComponent(sp.Skeleton).setAnimation(0,"Broken",true);
            this.Title.getComponent(sp.Skeleton).setAnimation(0,"Broken",false);
            this.Nail.getComponent(sp.Skeleton).setAnimation(0,"Broken",false); 
            if(cc.director.getScene()._name.includes("Host")) 
            {
                this.Steam.getComponent(sp.Skeleton).setAnimation(0,"Broken_PC",true); 
                this.currentsound = cc.audioEngine.play(this.wheel_sound[9], false, 0.7);
            }
            else this.Steam.getComponent(sp.Skeleton).setAnimation(0,"Broken_M",false);

            this.scheduleOnce(function() { 
                this.AlertText.string = "沒有獎品了，無法抽獎，請主持人新增獎品後重新刷新頁面"
                this.AlretNode.active = true
                this.ani_wheelState1.stop();
                this.wheel.rotation = 0;
            }, 1.2);
            return;
        }
        for(var i = 0; i < gameModel.Prizestack_id.length; i++)
        {
            if(gameModel.prize_ID != "" && gameModel.Prizestack_id[i] == gameModel.prize_ID) this.Prize_ID = i;
            else if(gameModel.prize_ID == "")
            {
                let randomIndex = Math.floor(Math.random() * (this.ThanksJoin.length));  //隨機獎品
                this.Prize_ID = this.ThanksJoin[randomIndex];
            }
        }
        if(gameModel.role == "host") this.currentsound = cc.audioEngine.play(this.wheel_sound[2], false, 1);
        this.Prize_Angle = this.Prize_ID * this.IDAngle; //最終角度 = 360 - 目標編號 * 每個編號的角度
        this.FinalAngle = this.Prize_Angle + Math.floor(Math.random() * (this.IDAngle - (3 + 1)) + 3);  //使指針不會每次都在格子中間
        this.wheelState = 2
        this.aniSlow_Out()
    },

    

    //輪盤減速，緩出動作
    aniSlow_Out(){
         var self = this;
         this.ani_wheelState1.stop();
         var RandomEffect = Math.round(Math.random()) //隨機選擇緩出效果
         var StopEffect = RandomEffect == 1 ? "circOut" : "backOut" //緩出效果
         var NewCircle = Math.ceil(this.wheel.angle / 360) //四捨五入的圈數
         var lerp = NewCircle * 360 - this.wheel.angle //差值 = 四捨五入的圈數 * 360 - 目前角度
         this.wheel_out_Light.getComponent(sp.Skeleton).timeScale = 5 ;
         //緩出動畫
         cc.tween(this.wheel)
        .by(5, { angle: 360 + lerp + self.FinalAngle}, {easing: StopEffect})
        .call(() => {self.StopWeel();})
        .start();
    },

    //輪盤停下，顯示獎品
    StopWeel(){
        this.wheel_out_Light.getComponent(sp.Skeleton).timeScale = 1 ;
        if(gameModel.prize_type == "first")
        {
            this.wheel_out_Light.getComponent(sp.Skeleton).setAnimation(0,"1",false);
            this.wheel_out.getComponent(sp.Skeleton).setAnimation(0,"Roll",false);
            this.Title.getComponent(sp.Skeleton).setAnimation(0,"Roll",false);
            this.Nail.getComponent(sp.Skeleton).setAnimation(0,"Roll",false);
            if(cc.director.getScene()._name.includes("Host")) 
            {
                this.TopLight.getComponent(sp.Skeleton).setAnimation(0,"Roll_PC",false);
                this.currentsound = cc.audioEngine.play(this.wheel_sound[3], false, 0.5);
            }
            else this.TopLight.getComponent(sp.Skeleton).setAnimation(0,"Roll_M",false);
        }
        else if (gameModel.prize_type == "second")
        {
            this.wheel_out_Light.getComponent(sp.Skeleton).setAnimation(0,"2",false);
            if(gameModel.role == "host") this.currentsound = cc.audioEngine.play(this.wheel_sound[4], false, 1);
        } 
        else if (gameModel.prize_type == "third") 
        {
            this.wheel_out_Light.getComponent(sp.Skeleton).setAnimation(0,"3",false);
            if(gameModel.role == "host") this.currentsound = cc.audioEngine.play(this.wheel_sound[5], false, 1);
        }
        else if (gameModel.prize_type == "special") 
        {
            this.wheel_out_Light.getComponent(sp.Skeleton).setAnimation(0,"4",false);
            if(gameModel.role == "host") this.currentsound = cc.audioEngine.play(this.wheel_sound[6], false, 1);
        }
        else if (gameModel.prize_type == "thanks") 
        {
            this.wheel_out_Light.getComponent(sp.Skeleton).setAnimation(0,"5",false);
            if(gameModel.role == "host") this.currentsound = cc.audioEngine.play(this.wheel_sound[7], false, 1);
        }

        cc.tween(this.Wheel_Prize.children[this.Prize_ID].getChildByName("扇形"))
        .to(0.3, { opacity: 255 })
        .start();
        
        if(gameModel.role == "guest" && gameModel.prize_type != "thanks") this.GamePrizeInfor.SpawnPrize()
        
        this.scheduleOnce(function() { 
          this.cannnottouch.active = false;
          this.ShowPrize()
         }, 2.3);
    },

    ClearWheelEffect(){
        this.wheel_out_Light.getComponent(sp.Skeleton).setAnimation(0,"usual",true);
        this.wheel_out.getComponent(sp.Skeleton).clearTracks();
        this.Title.getComponent(sp.Skeleton).setAnimation(0,"Usuall",true);
        this.Nail.getComponent(sp.Skeleton).clearTracks();
        this.TopLight.getComponent(sp.Skeleton).setAnimation(0,"usual",false);
        this.Steam.getComponent(sp.Skeleton).setAnimation(0,"Usuall",false);
    },

    ShowPrize(){
        var self = this;
        cc.assetManager.loadRemote(gameModel.prize_picture,{ext :'.jpg'||'.png'},function(err,texture)
        {  
            if(err) console.log("錯誤")
            else
            {
                var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame
                self.prize_picture.getComponent(cc.Sprite).spriteFrame = picture;
            }
        });
        this.Prize.getChildByName("得獎懸浮窗").getChildByName("獎項").getComponent(cc.Label).string = gameModel.prize_name_guest
        this.Prize.getChildByName("得獎懸浮窗").getChildByName("哭臉").active =  gameModel.prize_type == "thanks" ? true : false;
        this.Prize.getChildByName("得獎懸浮窗").getChildByName("得獎_中央圖標").active = gameModel.prize_type == "thanks" ? false : true;
        this.Prize.active = true
        this.PrizeAni();
        if(gameModel.role == "host" && gameModel.prize_type != "thanks") this.currentsound = cc.audioEngine.play(this.wheel_sound[8], false, 1);
        if(gameModel.mode != "order" || gameModel.role == "guest" ||  gameModel.prize_type == "thanks") return
        this.Congratulations();
    },

    PrizeAni(){
        this.wheelState = 0;
        cc.tween(this.prizenode)
        .to(1, { scale: 1 }, {easing: "elasticOut"})
        .start();
    },

    Congratulations(){
        this.indexcount++;
        this.index.push(this.indexcount);
        var node = cc.instantiate(this.items);
        node.parent = this.items_parent;
        node.setSiblingIndex(0); //讓子物件顯示在最上層
        var obj = node.getComponent(WinnerItem);//抓取WinnerItem
        this.itemlist.push(obj);
        this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
    },

    //關閉特定視窗
    closeFuc(event, customEventData){
       if(customEventData == "prize") 
       {
        this.Prize.active = false
        this.ClearWheelEffect();
        this.Wheel_Prize.children[this.Prize_ID].getChildByName("扇形").opacity = 0
       }
       else if(customEventData == "alret" && gameModel.CannotJoinGame == "") this.AlretNode.active = false
       this.prizenode.scale = (0,0)
    },

    update(dt){
        if (gameModel.GameStatusMessage == "close" && gameModel.role == "guest")
        {
          this.AlertText.string = "請等待主辦方開啟同時參與模式才能進行遊戲";
          this.AlretNode.active = true
        }
    },
});