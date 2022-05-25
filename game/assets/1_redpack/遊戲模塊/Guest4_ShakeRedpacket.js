var gameModel = require("Model");

///玩家在遊戲中，打開陀螺儀，搖紅包判定抽獎js
cc.Class({
    extends: cc.Component,

    properties: {

        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.GetPrize = false;//是否拿到獎品
        this.shakecount = 0;//搖的次數
    },

    start () {
        cc.systemEvent.setAccelerometerEnabled(true);  //打開加速儀
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    },

    onDeviceMotionEvent (event) {
            var stand = 0.2;
            var x = event.acc.x.toFixed(2); 
            var y = event.acc.y.toFixed(2); 
            var z = event.acc.z.toFixed(2); 
            this.speed = Math.abs(x-stand) + Math.abs(y-stand) + Math.abs(z-stand); //搖晃程度
            if(this.speed > 2 ) //搖晃程度須超過2
            {
                this.shakecount ++ ; //搖晃次數增加1
                if(this.shakecount >= 5 &&  this.GetPrize == false) //搖晃次數到達5則判定有無中獎
                {
                    cc.systemEvent.setAccelerometerEnabled(false);  //打開加速儀
                    cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
                    this.GetPrize = true;
                    gameModel.Lottery_Guest();
                    this.scheduleOnce(function(){
                         gameModel.GameStatusMessage = "end"
                   },3);
                }
            }
            else  this.shakecount = 0; //若中間有搖晃程度未超過2，則搖晃次數歸0
    },
    
    // update (dt) {},
});
