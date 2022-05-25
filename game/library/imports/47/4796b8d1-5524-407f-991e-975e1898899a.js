"use strict";
cc._RF.push(module, '4796bjRVSRAf5kel14YmIma', 'Host1_QRC');
// 共用模塊/備份/Host1_QRC.js

"use strict";

var gameModel = require("Model"); ///QRC生成


cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    var qrcode = new QRCode(-1, QRErrorCorrectLevel.H);
    qrcode.addData("https://hilives.net/interact/game/redpack?activity_id=" + gameModel.activity_id + "&game_id=" + gameModel.game_id); //需繪製QRC的網址		

    qrcode.make(); //創造QRC

    var Graphics = this.node.getComponent(cc.Graphics); // 計算QRC塊的長和高，調整QRC比例

    var tileW = this.node.width / qrcode.getModuleCount();
    var tileH = this.node.height / qrcode.getModuleCount(); // 畫出QRC碼

    for (var row = 0; row < qrcode.getModuleCount(); row++) {
      for (var col = 0; col < qrcode.getModuleCount(); col++) {
        if (qrcode.isDark(row, col)) Graphics.fillColor = cc.Color.BLACK;else Graphics.fillColor = cc.Color.WHITE; //計算寬高    ※ceil : 向上取整數  floor : 向下取整數   round : 四捨五入取整數

        var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW); //計算寬  

        var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW); //計算高
        //繪製的地方 : 矩形(x: Math.round(col * tileW), y: Math.round(row * tileH), 寬: w, 高: h)

        Graphics.rect(Math.round(col * tileW), Math.round(row * tileH), w, h);
        Graphics.fill(); //填滿繪製的框框
      }
    }
  } // update(dt) {},

});

cc._RF.pop();