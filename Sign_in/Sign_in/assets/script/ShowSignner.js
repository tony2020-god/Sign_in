var SignnerItem = require('Signner')
var gameModel = require("Model");

///主持人顯示中獎玩家列表js
cc.Class({
    extends: cc.Component,

    properties: {
        items: {
            default: null,
            type: cc.Prefab
        },
        bar: {
            default: null,
            type: cc.Node
        },
    },

    onLoad () {
        this.itemlist=[];
        this.winlist=[];
        this.index = [];
        this.indexcount = 0;
        gameModel.Signner_js = this;
        this.items_parent = cc.find("畫布/已簽到欄/view/content");
        this.SignBlock = cc.find("畫布/已簽到欄");
    },

    start () {
         this.SpawnWinner();
    },

    //列出得獎人和得到的獎品清單
    SpawnWinner(){
        for(var i = 0; i < gameModel.signner_id.length; i++)
        {
            gameModel.signner_name[i] = gameModel.signner_id[i]
            var node = cc.instantiate(this.items);
            node.parent = this.items_parent;
            if(this.items_parent.getChildrenCount() >= 25)
            {
                this.SignBlock.getComponent(cc.ScrollView).enabled = true ;
                this.bar.active = true; 
            } 
            gameModel.Signer_items[i] = node;
            var obj = node.getComponent(SignnerItem);//抓取預置物的Signner腳本
            this.itemlist.push(obj);
        }
    },

    AddNew()
    {
        gameModel.signner_id.push("葳葳");
        this.SpawnWinner();
    },

    update (dt) {
    },
});