var gameModel = require("Model");
var RecordItem = require('Guest5_PrizeRecordItem')

///生成玩家中獎列表，判斷有無中獎或收到again訊息js
cc.Class({
    extends: cc.Component,

    properties: {
        
        items: {
            default: null,
            type: cc.Prefab
        },

        ResultWindow: {
            default: null,
            type: cc.Node
        },

        Note: {
            default: null,
            type: cc.Node
        },

        CannotNextRound:{
            default:null,
            type:cc.SpriteFrame
        },
    },

    onLoad () {
        this.prize_parents = cc.find("畫布/已獲得的獎品列表/view/內容")
        this.Title = cc.find("畫布/場景/上方框")
        this.BackGround = cc.find("畫布/場景/背景")
    },
    
    start () {
        this.Title.getComponent(cc.Sprite).spriteFrame = gameModel.TopTitle;
        this.BackGround.getComponent(cc.Sprite).spriteFrame = gameModel.Prize_BackGround;
        if(gameModel.result == 'thanks' && gameModel.AlreadyPlayed == 0 && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") 
        {
            this.ResultWindow.active = true;  
            this.ResultWindow.getChildByName("得獎結果動畫").getComponent(sp.Skeleton).setAnimation(0,"lost",true);  
        }
        else if(gameModel.result != 'thanks' && gameModel.AlreadyPlayed == 0 && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") 
        {
            this.ResultWindow.active = true;
            this.ResultWindow.getChildByName("得獎結果動畫").getComponent(sp.Skeleton).setAnimation(0,"win",true);
            if(gameModel.AllowRePrize == "close") 
            {
                gameModel.CannotJoinGame = "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲";
                this.Note.getComponent(cc.Sprite).spriteFrame = this.CannotNextRound;
            }   
        }
        else if(gameModel.CannotJoinGame == "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") this.Note.getComponent(cc.Sprite).spriteFrame = this.CannotNextRound;
        this.setData();
        this.GameStateJudge = true
    },

    setData(){
        for(var i = 0; i < gameModel.prize_name_guest.length; i++){
            var node = cc.instantiate(this.items)//clone已有節點，生成items格式
            node.parent = this.prize_parents
            if(gameModel.exchangePrize[i] == "yes") node.setSiblingIndex(gameModel.prize_name_guest.length);
            else node.setSiblingIndex(0)
            var obj = node.getComponent(RecordItem)//抓取RecordItem
            obj.updateInfo(i);
        }
    },
    
    CloseResult(){
      this.ResultWindow.active = false;
    },

    update (dt) {
        if(gameModel.GameStatusMessage == "open" && gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲" && this.GameStateJudge == true)
        {
          gameModel.AlreadyPlayed = 0;
          gameModel.result = 'thanks';
          cc.director.loadScene("Guest1_JoinGame"+ gameModel.BackGround_Theme);
        } 
    },
});
