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
        items_parent: {
            default: null,
            type: cc.Node
        },
    },

    onLoad () {
        gameModel.Signner_js = this;
        gameModel.WebSocket_NumberOfSign_Host();
        this.itemlist=[];
        this.indexcount = 0;  
    },

    start () {
        //隔一秒刪除vConsole按鈕
        setTimeout(function() {
            if (window.vConsole) 
            {
              window.vConsole.destroy();
              window.vConsole = null;
            }
        }, 500); 
    },

    //列出得獎人和得到的獎品清單
    SpawnWinner(){
        this.indexcount++;
        var node = cc.instantiate(this.items);
        node.parent = this.items_parent;
        var obj = node.getComponent(SignnerItem);//抓取SignnerItem
        this.itemlist.push(obj);
        this.itemlist[this.indexcount - 1].updateInfo(this.indexcount - 1);
    },

    AddNew()
    {
        var name = Math.floor(Math.random() * (20 - 1+1)) + 1
        console.log(name)
        if(gameModel.signner_id.includes(name) == false) gameModel.signner_id.push(name);
        this.SpawnWinner();
    },

    update (dt) {
    },
});