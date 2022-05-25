var gameModel = require("Model");

///玩家在遊戲中敲敲樂計算分數js
cc.Class({
    extends: cc.Component,

    properties: {
        mouseHoles: {
            default: null,
            type: cc.Node
        },
        mouseTypeImg: {
            default: [],
            type: [cc.SpriteFrame]
        },
        mouseIndexArr :null
    },

    onLoad () {
        this.Hammer = cc.find("槌子")
        gameModel.WebSocket_UpDateScore_Guest();
        gameModel.Score = 0
    },

    start () {
      this.mouseIndexArr = []

      //槌子動畫
      this.node.on("touchstart", function (event) {  
        this.Hammer.setPosition(event.currentTouch._startPoint.x + 100, event.currentTouch._startPoint.y - 90)
        this.Hammer.active = true
        this.scheduleOnce(function() { this.Hammer.active = false}, 0.15);
      }, this);

      this.schedule(function() { 
        this.MouseComeOut()
      }, 0.5);
    },

    updateMouseNodeInfo(mouse, tag) {
        //設置當前老鼠節點爲存活
        mouse.getComponent("Guest_MouseManager").isLive = true;
        //將老鼠類型序號作爲標籤添加到老鼠節點上
        mouse.getComponent("Guest_MouseManager").tag = tag;
    },
    
    MouseComeOut() {
        for (let i = 0; i < 3; i++) 
        {
            let randomNodeIndex = Math.floor(Math.random() * (this.mouseHoles.childrenCount));  //隨機鼠洞
            let randomSpriteFrameIndex = Math.floor(Math.random() * (this.mouseTypeImg.length)) //隨機老鼠圖片
            
            if (this.mouseIndexArr.indexOf(randomNodeIndex) === -1) 
            {
                var mouse = this.mouseHoles.children[randomNodeIndex].getChildByName("遮罩").getChildByName("鼠"); //mouse = 隨機洞的老鼠
                this.updateMouseNodeInfo(mouse, randomSpriteFrameIndex); //執行老鼠節點數據刷新函數
                this.mouseIndexArr.push(randomNodeIndex);
                mouse.getComponent(cc.Sprite).spriteFrame = this.mouseTypeImg[randomSpriteFrameIndex];
                mouse.getComponent("Guest_MouseManager").GetData(randomNodeIndex,randomSpriteFrameIndex);
                mouse.getComponent("Guest_MouseManager").MouseAnimation();
            }
        }
    },
    // update (dt) {},
});
