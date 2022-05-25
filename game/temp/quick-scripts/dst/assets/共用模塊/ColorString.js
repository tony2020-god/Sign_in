
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/ColorString.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad2c1/DCDFPRYkAq8aXpcf/', 'ColorString');
// 共用模塊/ColorString.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  //調色盤
  colorOfString: function colorOfString(value) {
    if (value == null || value.length != 7) {
      return null;
    }

    var color = value.toLowerCase();

    if (color.charAt(0) != "#") {
      return;
    }

    color = color.slice(1);
    var r = parseInt(color[0] + color[1], 16);
    var g = parseInt(color[2] + color[3], 16);
    var b = parseInt(color[4] + color[5], 16);
    return new cc.Color(r, g, b, 255);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxDb2xvclN0cmluZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiY29sb3JPZlN0cmluZyIsInZhbHVlIiwibGVuZ3RoIiwiY29sb3IiLCJ0b0xvd2VyQ2FzZSIsImNoYXJBdCIsInNsaWNlIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBO0FBRUFDLEVBQUFBLEtBWEssbUJBV0ksQ0FFUixDQWJJO0FBZUw7QUFDQUMsRUFBQUEsYUFoQksseUJBZ0JTQyxLQWhCVCxFQWdCZTtBQUNmLFFBQUlBLEtBQUssSUFBSSxJQUFULElBQWlCQSxLQUFLLENBQUNDLE1BQU4sSUFBZ0IsQ0FBckMsRUFBd0M7QUFDdEMsYUFBTyxJQUFQO0FBQ0Y7O0FBQ0QsUUFBSUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLFdBQU4sRUFBWjs7QUFDQSxRQUFJRCxLQUFLLENBQUNFLE1BQU4sQ0FBYSxDQUFiLEtBQW1CLEdBQXZCLEVBQTRCO0FBQ3pCO0FBQ0Y7O0FBQ0RGLElBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDRyxLQUFOLENBQVksQ0FBWixDQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNMLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBV0EsS0FBSyxDQUFDLENBQUQsQ0FBakIsRUFBc0IsRUFBdEIsQ0FBaEI7QUFDQSxRQUFJTSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0wsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFqQixFQUFzQixFQUF0QixDQUFoQjtBQUNBLFFBQUlPLENBQUMsR0FBR0YsUUFBUSxDQUFDTCxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVdBLEtBQUssQ0FBQyxDQUFELENBQWpCLEVBQXNCLEVBQXRCLENBQWhCO0FBQ0EsV0FBTyxJQUFJUixFQUFFLENBQUNnQixLQUFQLENBQWFKLENBQWIsRUFBZ0JFLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQixHQUF0QixDQUFQO0FBQ0gsR0E3QkksQ0E4Qkw7O0FBOUJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8v6Kq/6Imy55ukXHJcbiAgICBjb2xvck9mU3RyaW5nKHZhbHVlKXtcclxuICAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUubGVuZ3RoICE9IDcpIHtcclxuICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoY29sb3IuY2hhckF0KDApICE9IFwiI1wiKSB7XHJcbiAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIGNvbG9yID0gY29sb3Iuc2xpY2UoMSk7XHJcbiAgICAgICAgdmFyIHIgPSBwYXJzZUludChjb2xvclswXSArIGNvbG9yWzFdLCAxNik7XHJcbiAgICAgICAgdmFyIGcgPSBwYXJzZUludChjb2xvclsyXSArIGNvbG9yWzNdLCAxNik7XHJcbiAgICAgICAgdmFyIGIgPSBwYXJzZUludChjb2xvcls0XSArIGNvbG9yWzVdLCAxNik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5Db2xvcihyLCBnLCBiLCAyNTUpO1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19