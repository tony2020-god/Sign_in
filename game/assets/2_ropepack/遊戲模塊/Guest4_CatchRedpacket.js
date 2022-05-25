var gameModel = require("Model"); //全域變數gameModel 不須加this就能提取

///玩家在遊戲中套紅包判定抽獎js
cc.Class({
    extends: cc.Component,

    properties: {
        aniRedPacket:{
          default: null,
          type: cc.Node
        },

        aniButton:{
            default: null,
            type: cc.Node
        },

        aniHand:{
            default: null,
            type: cc.Node
        },
    },


    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    },

    start () {
        this.RopeCount = 0;
        this.ButtunClickCheck = 0;
        this.aniButtunStates = "None";
        //每1秒鐘檢查是否有持續按按鈕
        this.schedule(this.CheckCountinuePress, 0.5);
    },

    //按下套紅包按鈕
    Rope(){
        if(this.aniButtunStates == "None") //第一次點擊時，變更按鈕、紅包動畫和手指動畫的速度
        {
            this.aniButtunStates = "開始套紅包";
            this.aniButton.getComponent(sp.Skeleton).setAnimation(0,"animation3",true);   
            this.aniHand.getComponent(sp.Skeleton).timeScale = 2.5;
            this.aniRedPacket.getComponent(sp.Skeleton).setAnimation(0,"catch1-2",false);
            this.aniRedPacket.getComponent(sp.Skeleton).addAnimation(0,"catch1-3",true);
        }
        else if(this.aniButtunStates == "開始套紅包" && this.RopeCount <= 20) //點擊到指定次數時判斷有無中獎
        {
            this.RopeCount ++ ;
            if(this.RopeCount == 20) 
            {
                this.unschedule(this.CheckCountinuePress); //取消計時器
                gameModel.Lottery_Guest();
                this.scheduleOnce(function(){
                   if(gameModel.result == "thanks") this.aniRedPacket.getComponent(sp.Skeleton).setAnimation(0,"catch1-5",false); //沒中獎切換到飛走動畫
                   else this.aniRedPacket.getComponent(sp.Skeleton).setAnimation(0,"catch1-4",false); //中獎切換到拉走動畫
                   this.scheduleOnce(function(){
                    gameModel.GameStatusMessage = "end"
                   },1.5);
                },3);
            }
        }
    },

    //若太久沒按下套紅包按鈕，計數會歸0
    CheckCountinuePress(){
       if(this.RopeCount != this.ButtunClickCheck) this.ButtunClickCheck = this.RopeCount;
       else 
       {
        this.RopeCount = 0
        this.ButtunClickCheck = 0
       }
    }

    // update (dt) {},
});
