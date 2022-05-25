
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/備份/Host1_QRC.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFzlgpnku71cXEhvc3QxX1FSQy5qcyJdLCJuYW1lcyI6WyJnYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsInFyY29kZSIsIlFSQ29kZSIsIlFSRXJyb3JDb3JyZWN0TGV2ZWwiLCJIIiwiYWRkRGF0YSIsImFjdGl2aXR5X2lkIiwiZ2FtZV9pZCIsIm1ha2UiLCJHcmFwaGljcyIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJ0aWxlVyIsIndpZHRoIiwiZ2V0TW9kdWxlQ291bnQiLCJ0aWxlSCIsImhlaWdodCIsInJvdyIsImNvbCIsImlzRGFyayIsImZpbGxDb2xvciIsIkNvbG9yIiwiQkxBQ0siLCJXSElURSIsInciLCJNYXRoIiwiY2VpbCIsImZsb29yIiwiaCIsInJlY3QiLCJyb3VuZCIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUF2QixFQUVBOzs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUixhQUFTRCxFQUFFLENBQUNFLFNBREo7QUFHUkMsRUFBQUEsVUFBVSxFQUFFLEVBSEo7QUFPUkMsRUFBQUEsS0FQUSxtQkFPQTtBQUNQLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVcsQ0FBQyxDQUFaLEVBQWVDLG1CQUFtQixDQUFDQyxDQUFuQyxDQUFiO0FBQ0FILElBQUFBLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLDJEQUEyRFgsU0FBUyxDQUFDWSxXQUFyRSxHQUFtRixXQUFuRixHQUFpR1osU0FBUyxDQUFDYSxPQUExSCxFQUZPLENBRTZIOztBQUNwSU4sSUFBQUEsTUFBTSxDQUFDTyxJQUFQLEdBSE8sQ0FHUTs7QUFDZixRQUFJQyxRQUFRLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCZixFQUFFLENBQUNhLFFBQTFCLENBQWYsQ0FKTyxDQUtQOztBQUNBLFFBQUlHLEtBQUssR0FBRyxLQUFLRixJQUFMLENBQVVHLEtBQVYsR0FBa0JaLE1BQU0sQ0FBQ2EsY0FBUCxFQUE5QjtBQUNBLFFBQUlDLEtBQUssR0FBRyxLQUFLTCxJQUFMLENBQVVNLE1BQVYsR0FBbUJmLE1BQU0sQ0FBQ2EsY0FBUCxFQUEvQixDQVBPLENBUVA7O0FBQ0EsU0FBSyxJQUFJRyxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHaEIsTUFBTSxDQUFDYSxjQUFQLEVBQXhCLEVBQWlERyxHQUFHLEVBQXBELEVBQXlEO0FBQ3hELFdBQUssSUFBSUMsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR2pCLE1BQU0sQ0FBQ2EsY0FBUCxFQUF4QixFQUFpREksR0FBRyxFQUFwRCxFQUF5RDtBQUN4RCxZQUFJakIsTUFBTSxDQUFDa0IsTUFBUCxDQUFjRixHQUFkLEVBQW1CQyxHQUFuQixDQUFKLEVBQTZCVCxRQUFRLENBQUNXLFNBQVQsR0FBcUJ4QixFQUFFLENBQUN5QixLQUFILENBQVNDLEtBQTlCLENBQTdCLEtBQ0tiLFFBQVEsQ0FBQ1csU0FBVCxHQUFxQnhCLEVBQUUsQ0FBQ3lCLEtBQUgsQ0FBU0UsS0FBOUIsQ0FGbUQsQ0FHeEQ7O0FBQ0EsWUFBSUMsQ0FBQyxHQUFJQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFDUixHQUFHLEdBQUcsQ0FBUCxJQUFZTixLQUF0QixJQUErQmEsSUFBSSxDQUFDRSxLQUFMLENBQVdULEdBQUcsR0FBR04sS0FBakIsQ0FBeEMsQ0FKd0QsQ0FJVTs7QUFDbEUsWUFBSWdCLENBQUMsR0FBSUgsSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBQ1QsR0FBRyxHQUFHLENBQVAsSUFBWUwsS0FBdEIsSUFBK0JhLElBQUksQ0FBQ0UsS0FBTCxDQUFXVixHQUFHLEdBQUdMLEtBQWpCLENBQXhDLENBTHdELENBS1U7QUFDdEQ7O0FBQ1pILFFBQUFBLFFBQVEsQ0FBQ29CLElBQVQsQ0FBY0osSUFBSSxDQUFDSyxLQUFMLENBQVdaLEdBQUcsR0FBR04sS0FBakIsQ0FBZCxFQUF1Q2EsSUFBSSxDQUFDSyxLQUFMLENBQVdiLEdBQUcsR0FBR0YsS0FBakIsQ0FBdkMsRUFBZ0VTLENBQWhFLEVBQW1FSSxDQUFuRTtBQUNBbkIsUUFBQUEsUUFBUSxDQUFDc0IsSUFBVCxHQVJ3RCxDQVF2QztBQUNqQjtBQUNEO0FBQ0QsR0E1Qk8sQ0E4QlI7O0FBOUJRLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcblxyXG4vLy9RUkPnlJ/miJBcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cclxuXHR9LFxyXG5cclxuXHRzdGFydCgpIHtcclxuXHRcdHZhciBxcmNvZGUgPSBuZXcgUVJDb2RlKC0xLCBRUkVycm9yQ29ycmVjdExldmVsLkgpOyBcclxuXHRcdHFyY29kZS5hZGREYXRhKFwiaHR0cHM6Ly9oaWxpdmVzLm5ldC9pbnRlcmFjdC9nYW1lL3JlZHBhY2s/YWN0aXZpdHlfaWQ9XCIgKyBnYW1lTW9kZWwuYWN0aXZpdHlfaWQgKyBcIiZnYW1lX2lkPVwiICsgZ2FtZU1vZGVsLmdhbWVfaWQpOyAvL+mcgOe5quijvVFSQ+eahOe2suWdgFx0XHRcclxuXHRcdHFyY29kZS5tYWtlKCk7IC8v5Ym16YCgUVJDXHJcblx0XHR2YXIgR3JhcGhpY3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuXHRcdC8vIOioiOeul1FSQ+WhiueahOmVt+WSjOmrmO+8jOiqv+aVtFFSQ+avlOS+i1xyXG5cdFx0dmFyIHRpbGVXID0gdGhpcy5ub2RlLndpZHRoIC8gcXJjb2RlLmdldE1vZHVsZUNvdW50KCk7XHJcblx0XHR2YXIgdGlsZUggPSB0aGlzLm5vZGUuaGVpZ2h0IC8gcXJjb2RlLmdldE1vZHVsZUNvdW50KCk7XHJcblx0XHQvLyDnlavlh7pRUkPnorxcclxuXHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHFyY29kZS5nZXRNb2R1bGVDb3VudCgpOyByb3cgKyspIHtcclxuXHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgcXJjb2RlLmdldE1vZHVsZUNvdW50KCk7IGNvbCArKykge1xyXG5cdFx0XHRcdGlmIChxcmNvZGUuaXNEYXJrKHJvdywgY29sKSkgR3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcblx0XHRcdFx0ZWxzZSBHcmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuXHRcdFx0XHQvL+ioiOeul+WvrOmrmCAgICDigLtjZWlsIDog5ZCR5LiK5Y+W5pW05pW4ICBmbG9vciA6IOWQkeS4i+WPluaVtOaVuCAgIHJvdW5kIDog5Zub5o2o5LqU5YWl5Y+W5pW05pW4XHJcblx0XHRcdFx0dmFyIHcgPSAoTWF0aC5jZWlsKChjb2wgKyAxKSAqIHRpbGVXKSAtIE1hdGguZmxvb3IoY29sICogdGlsZVcpKTsgLy/oqIjnrpflr6wgIFxyXG5cdFx0XHRcdHZhciBoID0gKE1hdGguY2VpbCgocm93ICsgMSkgKiB0aWxlVykgLSBNYXRoLmZsb29yKHJvdyAqIHRpbGVXKSk7IC8v6KiI566X6auYXHJcbiAgICAgICAgICAgICAgICAvL+e5quijveeahOWcsOaWuSA6IOefqeW9oih4OiBNYXRoLnJvdW5kKGNvbCAqIHRpbGVXKSwgeTogTWF0aC5yb3VuZChyb3cgKiB0aWxlSCksIOWvrDogdywg6auYOiBoKVxyXG5cdFx0XHRcdEdyYXBoaWNzLnJlY3QoTWF0aC5yb3VuZChjb2wgKiB0aWxlVyksIE1hdGgucm91bmQocm93ICogdGlsZUgpLCB3LCBoKTsgXHJcblx0XHRcdFx0R3JhcGhpY3MuZmlsbCgpOyAvL+Whq+a7v+e5quijveeahOahhuahhlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly8gdXBkYXRlKGR0KSB7fSxcclxufSk7Il19