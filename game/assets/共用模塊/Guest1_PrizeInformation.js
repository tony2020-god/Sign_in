var gameModel = require("Model");
var RecordItem = require('Guest5_PrizeRecordItem')

///玩家將獎品資訊在加入遊戲場景顯示出來js
cc.Class({
    extends: cc.Component,

    properties: {
        prize_information:{
            default:null,
            type:cc.Node 
           },

        prize_information_Btn:{
            default:null,
            type:cc.Sprite
        },

        prize_Btn_UP:{
            default:null,
            type:cc.SpriteFrame
        },

        prize_Btn_DOWN:{
           default:null,
           type:cc.SpriteFrame
        },

        prize_information_Item:{
           default:null,
           type:cc.Prefab
        },

        items_parent:{
           default:null,
           type:cc.Node 
        },
  },
    
    onload(){
    },

    start(){
      this.OpenPrize_Information = false;
      this.itemlist = [];
      this.indexcount = 0
      this.SpawnPrizeInformation();
    },

    PrizeInformation_Press(){
        if(this.OpenPrize_Information == false)
        {
          this.prize_information_Btn.spriteFrame = this.prize_Btn_DOWN;
          this.OpenPrize_Information = true;
          cc.tween(this.prize_information)
          .to(0.1, { position: cc.v2(0, -158)})
          .start();
        }
        else
        {
          this.prize_information_Btn.spriteFrame = this.prize_Btn_UP;
          cc.tween(this.prize_information)
          .to(0.2, { position: cc.v2(0, -2527)})
          .start();
          this.OpenPrize_Information = false;
        }
     },
    
     SpawnPrizeInformation(){
        for(var i = 0; i < gameModel.prize_name_guest.length; i++){
            var node = cc.instantiate(this.prize_information_Item) //clone已有節點，生成items格式
            node.parent = this.items_parent;
            var obj = node.getComponent(RecordItem) //抓取RecordItem
            if(gameModel.exchangePrize[i] == "yes") node.setSiblingIndex(gameModel.prize_name_guest.length);
            else node.setSiblingIndex(0)
            obj.updateInfo(i);
        }
        this.indexcount = gameModel.prize_name_guest.length - 1;
    },
    
    SpawnPrize(){
        this.indexcount ++
        var node = cc.instantiate(this.prize_information_Item) //clone已有節點，生成items格式
        node.parent = this.items_parent;
        node.setSiblingIndex(0); //讓子物件顯示在最上層
        var obj = node.getComponent(RecordItem) //抓取RecordItem
        obj.updatePrizeBlock(this.indexcount);
     },

     update (dt) {
     },
});
