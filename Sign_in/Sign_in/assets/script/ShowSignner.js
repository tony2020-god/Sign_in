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
        this.itemlist=[];
        gameModel.Signner_js = this;
    },

    start () {
        //隔一秒刪除vConsole按鈕
        setTimeout(function() {
            if (window.vConsole) 
            {
              window.vConsole.destroy();
              window.vConsole = null;
            }
        }, 1000); 
        gameModel.signner_id.push("花花")
        gameModel.signner_id.push("毛毛")
        gameModel.signner_id.push("泡泡")
        gameModel.signner_id.push("小女警")
        this.SpawnWinner();
    },

    //列出得獎人和得到的獎品清單
    SpawnWinner(){
        for(var i = 0; i < gameModel.signner_id.length; i++)
        {
            if(gameModel.signner_name.includes(gameModel.signner_id[i]) == false)
            {
                gameModel.signner_name[i] = gameModel.signner_id[i]
                var node = cc.instantiate(this.items);
                node.parent = this.items_parent;
                var obj = node.getComponent(SignnerItem);//抓取預置物的Signner腳本
                this.itemlist.push(obj);
                this.itemlist[i].updateInfo(i);
            }
        }
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