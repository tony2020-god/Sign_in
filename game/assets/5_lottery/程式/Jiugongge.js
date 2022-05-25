var gameModel = require("Model");
var WinnerItem = require("Host1_Congratulations");
var Jiugongge_Prize_information = require("prizeInformation");
var Guest_Prize = require("Guest1_PrizeInformation")

cc.Class({
    extends: cc.Component,

    properties:{

        CannotTouch:{
        	default:null,
        	type: cc.Node
        },
		Prize:{
        	default:null,
        	type: cc.Node
        },
		items:{
            default:null,
            type:cc.Prefab
        },
        items_parent:{
            default:null,
            type:cc.Node
        },
		AlretNode:{
            default:null,
            type:cc.Node
        },
		Jiugongge_sound: {
            default: [],
            type: cc.AudioClip
        },
		Jiugongge_Ani:{
            default:null,
            type:cc.Node
        },
		Prizes_Infor:{
            default:null,
            type:cc.Node
        },
		GObuttun:{
            default:null,
            type:cc.Node
        },
		Steam:{
            default:null,
            type:cc.Node
        },
		Title:{
            default:null,
            type:cc.Node
        },
		Lightning:{
            default:null,
            type:cc.Node
        },
		prize_picture:{
            default:null,
            type:cc.Node
        },
		ChanceText:{
            default:null,
            type:cc.Label
        },
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
		gameModel.Prize_Infromation()
		gameModel.Game_js = this
     	this.speed = 0.06
		this.cycle = 0
		this.lotterymessage = false
        this.Prize_ID = 0
        this.count = 0
		this.playing = false
        this.index = 0
		this.indexprize = []
		this.itemlist = []
		this.indexcount = 0
		this.prizenode = this.Prize.getChildByName("得獎懸浮窗")
		this.GamePrizeInfor = cc.find("畫布").getComponent(Guest_Prize)
		this.ThanksJoin = []
		this.alreadyLottery = false
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
	
	//開始時更新獎品資訊
	SpawnPrize(){
        for(var i = 0; i < gameModel.Prizestack_id.length; i++)
        {   
            if(gameModel.Prizestack_id[i] == "") this.ThanksJoin.push(i);          
            this.Prizes_Infor.children[i].getChildByName("獎品名稱").getComponent(cc.Label).string = gameModel.Prizestack_name[i]
            var Prize_Image = this.Prizes_Infor.children[i].getChildByName("獎品照片框").getChildByName("遮罩").getChildByName("獎品照片").getComponent(Jiugongge_Prize_information);
            Prize_Image.setinformation(i)
        }
    },

	//按下開始鍵
	startAction(){
		if(gameModel.CannotJoinGame != "")
        {
            this.AlertText.string = "沒有獎品了，無法抽獎，請主持人新增獎品後重新刷新頁面"
            this.AlretNode.active = true
            return;
        }
        if(this.playing == true || (gameModel.mode != "order" && gameModel.role == "host")) return;
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
		this.CannotTouch.active = true
		this.playing = true
		this.Jiugongge_Ani.getComponent(sp.Skeleton).setAnimation(0,"Rotate",true);

		this.GoAni = function(){
			if((this.count == this.cycle * 8 + this.Prize_ID) && this.lotterymessage) //到了指定禮物，取消轉動
			{
				this.unschedule(this.GoAni);
				this.ControlAni();
				this.count =  this.Prize_ID
				this.index = this.Prize_ID
				this.Jiugongge_Ani.getComponent(sp.Skeleton).timeScale = 1
				this.alreadyLottery = false
				this.scheduleOnce(function() { 
					this.JudgePrize_type();
				}, 0.5);
				
			}
			else if( ((this.count >= this.cycle * 8 && this.count < this.cycle * 8 + this.Prize_ID) && this.lotterymessage) || (this.count < 5) ) //最後一圈和起步 速度/8
			{ 
				this.Jiugongge_Ani.getComponent(sp.Skeleton).timeScale = 3
				this.ControlAni();
				this.unschedule(this.GoAni);
				this.schedule(this.GoAni,this.speed * 8);
			}
			else if((this.count >= 5 && this.count <= 12))                                        //起步後第一階段加速 速度/3
			{		
				this.Jiugongge_Ani.getComponent(sp.Skeleton).timeScale = 4
				this.ControlAni();
				this.unschedule(this.GoAni);
				this.schedule(this.GoAni,this.speed * 3);
			}
			else if(this.count > 12 && this.count < 20)                                           //起步後第二階段加速 速度
			{
				this.Jiugongge_Ani.getComponent(sp.Skeleton).timeScale = 10
				this.ControlAni();
				this.unschedule(this.GoAni);
				this.schedule(this.GoAni,this.speed);
			}
			else if(this.count >= (this.cycle - 2) * 8 && this.count < (this.cycle - 1) * 8)      //倒數第3圈 速度/2
			{
				this.Jiugongge_Ani.getComponent(sp.Skeleton).timeScale = 7
				this.ControlAni();
				this.unschedule(this.GoAni);
				this.schedule(this.GoAni,this.speed * 2);
			}
			else if( (this.count >= (this.cycle - 1) * 8) && (this.count < this.cycle * 8))      //倒數第2圈 速度/5
			{ 
				this.Jiugongge_Ani.getComponent(sp.Skeleton).timeScale = 5
				this.ControlAni();
				this.unschedule(this.GoAni);
				this.schedule(this.GoAni,this.speed * 5);
			}
			else                                                                                 //加速完成，最高轉速 速度*2
			{
				this.Jiugongge_Ani.getComponent(sp.Skeleton).timeScale = 15
				this.ControlAni();
                if(this.alreadyLottery == true) return;
				this.alreadyLottery = true
				this.scheduleOnce(function() { 
					gameModel.Lottery_Guest();
				 }, 3);
			}
		}
		this.schedule(this.GoAni,this.speed);
	},

    //中獎
    lettorey(){
		if(gameModel.CannotJoinGame != "")
        {
			this.unschedule(this.GoAni);
			this.Jiugongge_Ani.getComponent(sp.Skeleton).timeScale = 1
			this.Jiugongge_Ani.getComponent(sp.Skeleton).setAnimation(0,"Broken",false);
			this.Title.getComponent(sp.Skeleton).setAnimation(0,"Broken",false);
            if(cc.director.getScene()._name.includes("Host")) 
            {	
				this.Lightning.getComponent(sp.Skeleton).setAnimation(0,"PC",true); 
                this.Steam.getComponent(sp.Skeleton).setAnimation(0,"Broken_PC",true); 
                this.currentsound = cc.audioEngine.play(this.Jiugongge_sound[7], false, 0.7);
            }
            else 
			{
				this.Lightning.getComponent(sp.Skeleton).setAnimation(0,"Phone",true); 
				this.Steam.getComponent(sp.Skeleton).setAnimation(0,"Broken_M",true);
			}

            this.scheduleOnce(function() { 
                this.AlertText.string = "沒有獎品了，無法抽獎，請主持人新增獎品後重新刷新頁面"
                this.AlretNode.active = true
            }, 1.2);
            return;
        }
        this.cycle = Math.ceil(this.count / 8) + 4;
        for(var i = 0; i < gameModel.Prizestack_id.length; i++)
        {
            if(gameModel.prize_ID != "" && gameModel.Prizestack_id[i] == gameModel.prize_ID) this.Prize_ID = i;
            else if(gameModel.prize_ID == "")
            {
                let randomIndex = Math.floor(Math.random() * (this.ThanksJoin.length));  //隨機獎品
                this.Prize_ID = this.ThanksJoin[randomIndex];
            }
        } 
	    this.lotterymessage = true
	},

	//判斷獎品等級
	JudgePrize_type(){
		if(gameModel.prize_type == "first")
		{
			this.Title.getComponent(sp.Skeleton).setAnimation(0,"A1",false);
			if(cc.director.getScene()._name.includes("Host")) 
			{
				this.Jiugongge_Ani.getComponent(sp.Skeleton).setAnimation(0,"1_PC",false);
				this.currentsound = cc.audioEngine.play(this.Jiugongge_sound[1], false, 0.5);
			}
			else this.Jiugongge_Ani.getComponent(sp.Skeleton).setAnimation(0,"1_Phone",false);
			this.GObuttun.getComponent(sp.Skeleton).setAnimation(0,"Roll_Open",false)
		}
		else if (gameModel.prize_type == "second")
		{
			this.Jiugongge_Ani.getComponent(sp.Skeleton).setAnimation(0,"A2",false);
			this.GObuttun.getComponent(sp.Skeleton).setAnimation(0,"Open",false)
			if(gameModel.role == "host") this.currentsound = cc.audioEngine.play(this.Jiugongge_sound[2], false, 1);
		} 
		else if (gameModel.prize_type == "third") 
		{
			this.Jiugongge_Ani.getComponent(sp.Skeleton).setAnimation(0,"A3",false);
			this.GObuttun.getComponent(sp.Skeleton).setAnimation(0,"Open",false)
			if(gameModel.role == "host") this.currentsound = cc.audioEngine.play(this.Jiugongge_sound[3], false, 1);
		}
		else if (gameModel.prize_type == "special") 
		{
			this.Jiugongge_Ani.getComponent(sp.Skeleton).setAnimation(0,"A4",false);
			this.GObuttun.getComponent(sp.Skeleton).setAnimation(0,"Open",false)
			if(gameModel.role == "host") this.currentsound = cc.audioEngine.play(this.Jiugongge_sound[4], false, 1);
		}
		else if (gameModel.prize_type == "thanks") 
		{
			this.Jiugongge_Ani.getComponent(sp.Skeleton).setAnimation(0,"A5",false);
			this.GObuttun.getComponent(sp.Skeleton).setAnimation(0,"Open",false)
			if(gameModel.role == "host") this.currentsound = cc.audioEngine.play(this.Jiugongge_sound[5], false, 1);
		}
		if(gameModel.role == "guest" && gameModel.prize_type != "thanks") this.GamePrizeInfor.SpawnPrize()
		this.scheduleOnce(function() { 
			this.ShowPrize();
		}, 2);
	},

	//跳出獎品視窗
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
		this.lotterymessage = false
		this.playing = false
		this.cycle = 0
		this.CannotTouch.active = false
        if(gameModel.role == "host" && gameModel.prize_type != "thanks") this.currentsound = cc.audioEngine.play(this.Jiugongge_sound[6], false, 1);
        if(gameModel.mode != "order" || gameModel.role == "guest" ||  gameModel.prize_type == "thanks") return
        this.Congratulations();
    },

	//獎品動畫
    PrizeAni(){
		this.lotterymessage = false
		this.playing = false
        cc.tween(this.prizenode)
        .to(1, { scale: 1 }, {easing: "elasticOut"})
        .start();
    },

	//依序參與時新增中獎獎項
	Congratulations(){
        this.indexcount++;
        this.indexprize.push(this.indexcount);
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
		  this.ClearJiugonggeEffect();
		}
		else if(customEventData == "alret" && gameModel.CannotJoinGame == "") this.AlretNode.active = false
		this.prizenode.scale = (0,0)
	},

	//清除九宮格特效
	ClearJiugonggeEffect(){
        this.Jiugongge_Ani.getComponent(sp.Skeleton).setAnimation(0,"usual",true);
		this.GObuttun.getComponent(sp.Skeleton).setAnimation(0,"Usual",false);
		this.Lightning.getComponent(sp.Skeleton).setAnimation(0,"usual",true);
		if(gameModel.role == "guest") this.Title.getComponent(sp.Skeleton).setAnimation(0,"usual_Phone",true);
		else this.Title.getComponent(sp.Skeleton).setAnimation(0,"usual_PC",true);
    },

	//九宮格格子動畫
	ControlAni(){
		if(gameModel.role == "host" && gameModel.mode == "order") this.currentsound = cc.audioEngine.play(this.Jiugongge_sound[0], false, 0.2);
		this.Prizes_Infor.children[(this.index + 8 - 1) % 8].getChildByName("沒選上遮罩").active = true;
		this.index = this.index % 8;
		this.Prizes_Infor.children[this.index].getChildByName("沒選上遮罩").active = false;
		this.index ++;
		this.count ++;
	},

	//同時參與主持人動畫
	TogetherAni(){
		this.GoTogetherAni = function(){
			this.Jiugongge_Ani.getComponent(sp.Skeleton).timeScale = 1
			this.ControlAni();
		}
		this.schedule(this.GoTogetherAni,this.speed * 8);
    },

	//清除格子狀態
	ClearStatus(){
		this.count = 0
		this.index = 0
	 	this.unscheduleAllCallbacks()
		for(var i = 0; i < 8; i++)
		{
			this.Prizes_Infor.children[i].getChildByName("沒選上遮罩").active = true;
		} 
	},

	update(dt){
        if (gameModel.GameStatusMessage == "close" && gameModel.role == "guest")
        {
          this.AlertText.string = "請等待主辦方開啟同時參與模式才能進行遊戲";
          this.AlretNode.active = true
        }
    },
});
