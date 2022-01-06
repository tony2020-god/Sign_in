var gameModel = require("Model");

///中獎玩家資訊js
cc.Class({
    extends: cc.Component,

    properties: {
        MoveObject: {
            default:null,
            type:cc.Node
        },
        playerName: {
            default:null,
            type:cc.Label
        },
        playerAvatar:{
            default:null,
            type:cc.Sprite
        },
    },

    updateInfo(i){ 
        this.playerName.string = gameModel.signner_name[i];
        // this.playerAvatar.spriteFrames = gameModel.signner_picture[i];
        // cc.assetManager.loadRemote(gameModel.signner_picture[i],{ext :'.jpg'||'.png'},function(err,texture)
        // { 
        //     if(err) console.log("錯誤")
        //     else
        //     {
        //         var picture = new cc.SpriteFrame(texture); //texture 轉 SpriteFrame
        //         gameModel.Signner_js.itemlist[i].playerAvatar.spriteFrame = picture;
        //     }
        //  });
        console.log("我的名子"+ this.playerName.string);
        
    },

    onLoad () {
        this.items_parent = cc.find("畫布/已簽到欄/view/content");
        console.log("欄位座標: " + this.items_parent.getPosition())
        this.WhitchBlock = this.items_parent.getChildrenCount() % 3
        console.log("第幾格" + this.WhitchBlock)
        
    },
    
    start () {
        this.Move();
    },

    Move()
    {
        
        if( this.WhitchBlock == 1)        //在每行的第一格
        {
          this.MoveObject.setPosition(-610,1150)
          this.node.getComponent(sp.Skeleton).setAnimation(0,"down",false); 
          cc.tween(this.MoveObject)
          .to(0.23, { position: cc.v2(0,1150)})
          .to(0.3, { scale: 1.2})
          .to(0.3, { scale: 1})
          .to(0.82, { position: cc.v2(0,0)})
          .start()
        }
        else if( this.WhitchBlock == 2)  //在每行的第二格 
        {
            this.MoveObject.setPosition(-610,571)
            this.node.getComponent(sp.Skeleton).setAnimation(0,"middle",false); //setAnimation(trackIndex, "anim_name", loop)
            cc.tween(this.MoveObject)
            .to(0.23, { position: cc.v2(0,571)})
            .to(0.3, { scale: 1.2})
            .to(0.3, { scale: 1})
            .to(0.53, { position: cc.v2(0,0)})
            .start() 
        }
        else if( this.WhitchBlock == 0)  //在每行的第三格 
        {
            this.MoveObject.setPosition(-610,0)
            this.node.getComponent(sp.Skeleton).setAnimation(0,"up",false); 
            cc.tween(this.MoveObject)
            .to(0.23, { position: cc.v2(0,0)})
            .to(0.3, { scale: 1.2})
            .to(0.3, { scale: 1})
            .start()
        }
    },

     update (dt) {
     },
});
