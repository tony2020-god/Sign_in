
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/備份/HelloWorld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1eb9e6WzEpPLpaae3N7ZWEa', 'HelloWorld');
// 共用模塊/備份/HelloWorld.js

"use strict";

var GoEasy = require('./goeasy-2.0.12.min.js');

window.Global = {
  goEasy: null
}, cc.Class({
  "extends": cc.Component,
  properties: {
    editbox: cc.EditBox,
    goEasy: null,
    content: ""
  },
  onLoad: function onLoad() {
    // 初始化GoEasy并完成订阅channel
    this.initGoEasy();
    this.connectGoEasy();
    this.subscribe();
  },
  start: function start() {},
  initGoEasy: function initGoEasy() {
    // 初始化GoEasy
    var self = this;
    Global.goEasy = GoEasy.getInstance({
      host: 'singapore.goeasy.io',
      //应用所在的区域地址: 【hangzhou.goeasy.io |singapore.goeasy.io】
      appkey: "BC-64f4ade695d54cdcbcd9c4413fd94e1f",
      //替换为您的common appkey
      modules: ["pubsub"] //PUBSUB:对应常规的websocket功能,IM:对应IM聊天功能

    });
  },
  connectGoEasy: function connectGoEasy() {
    var self = this;
    Global.goEasy.connect({
      onSuccess: function onSuccess() {
        //连接成功
        var message = {
          content: "连接成功"
        };
        console.log("连接成功");
        self.updateContent(message);
      },
      onFailed: function onFailed(error) {
        //连接失败
        var message = {
          content: "Failed to connect GoEasy, code:" + error.code + ",error:" + error.content
        }; // console.log("连接失敗");

        self.updateContent(message);
      },
      onProgress: function onProgress(attempts) {
        //连接或自动重连中
        var message = {
          content: "连接中" + attempts
        };
        console.log("连接中");
        self.updateContent(message);
      }
    });
  },
  updateContent: function updateContent(message) {
    // 更新内容到页面
    var time = this.getCurrentTime();
    var messageContent = time + " " + message.content;
    console.log(messageContent); // 动态设置item
    // var scrollViewNode = this.node.getChildByName("scrollContent");
    // var contentNode = scrollViewNode.getComponent(cc.ScrollView);
    // var newNode = new cc.Node();
    // newNode.name = "item";
    // // 添加Label节点
    // let labelNode = newNode.addComponent(cc.Label);
    // // 设置颜色
    // labelNode.node.color = new cc.color(51, 51, 51);
    // labelNode.node.width = 210;
    // labelNode.name = "label";
    // labelNode.string = messageContent;
    // labelNode.fontSize = 16;
    // labelNode.lineHeight = 16;
    // // 宽度不够自动换行显示
    // labelNode.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
    // let item = cc.instantiate(newNode);
    // item.parent = contentNode.content;
  },
  subscribe: function subscribe() {
    // 订阅channel
    var self = this;
    Global.goEasy.pubsub.subscribe({
      channel: "my_channel",
      //替换为您自己的channel
      onMessage: function onMessage(message) {
        self.updateContent(message);
        cc.log("收到消息");
      },
      onSuccess: function onSuccess() {
        var message = {
          content: "Channel订阅成功。"
        };
        self.updateContent(message);
      },
      onFailed: function onFailed(error) {
        var message = {
          content: "errorCode:" + error.code + ",错误信息:" + error.content
        };
        self.updateContent(message);
      }
    });
  },
  publish: function publish() {
    if (this.content != "") {
      // 发送消息到channel中
      Global.goEasy.pubsub.publish({
        channel: "my_channel",
        //替换为您自己的channel
        message: this.content,
        //替换为您想要发送的消息内容
        onSuccess: function onSuccess() {
          console.log("消息发布成功。");
        },
        onFailed: function onFailed(error) {
          console.log("消息发送失败，错误编码：" + error.code + " 错误信息：" + error.content);
        }
      });
    }

    this.editbox.string = "";
  },
  onChanged: function onChanged(event, editbox, customEventData) {
    // 监听输入框变化
    this.content = event;
    this.editbox = editbox;
  },
  getCurrentTime: function getCurrentTime() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var time = hours + ":" + min;
    return time;
  },
  update: function update(dt) {// called every frame
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFzlgpnku71cXEhlbGxvV29ybGQuanMiXSwibmFtZXMiOlsiR29FYXN5IiwicmVxdWlyZSIsIndpbmRvdyIsIkdsb2JhbCIsImdvRWFzeSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZWRpdGJveCIsIkVkaXRCb3giLCJjb250ZW50Iiwib25Mb2FkIiwiaW5pdEdvRWFzeSIsImNvbm5lY3RHb0Vhc3kiLCJzdWJzY3JpYmUiLCJzdGFydCIsInNlbGYiLCJnZXRJbnN0YW5jZSIsImhvc3QiLCJhcHBrZXkiLCJtb2R1bGVzIiwiY29ubmVjdCIsIm9uU3VjY2VzcyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlQ29udGVudCIsIm9uRmFpbGVkIiwiZXJyb3IiLCJjb2RlIiwib25Qcm9ncmVzcyIsImF0dGVtcHRzIiwidGltZSIsImdldEN1cnJlbnRUaW1lIiwibWVzc2FnZUNvbnRlbnQiLCJwdWJzdWIiLCJjaGFubmVsIiwib25NZXNzYWdlIiwicHVibGlzaCIsInN0cmluZyIsIm9uQ2hhbmdlZCIsImV2ZW50IiwiY3VzdG9tRXZlbnREYXRhIiwiZGF0ZSIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwibWluIiwiZ2V0TWludXRlcyIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sR0FBR0MsT0FBTyxDQUFDLHdCQUFELENBQXBCOztBQUNBQyxNQUFNLENBQUNDLE1BQVAsR0FBZ0I7QUFFZkMsRUFBQUEsTUFBTSxFQUFDO0FBRlEsQ0FBaEIsRUFJQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUixhQUFTRCxFQUFFLENBQUNFLFNBREo7QUFFUkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1hDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxPQUREO0FBRVhOLElBQUFBLE1BQU0sRUFBRSxJQUZHO0FBR1hPLElBQUFBLE9B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QUFDQSxHQW5JTztBQW9JUnlCLEVBQUFBLGNBcElRLDRCQW9JUztBQUNoQixRQUFJVSxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLFFBQUwsRUFBWjtBQUNBLFFBQUlDLEdBQUcsR0FBR0osSUFBSSxDQUFDSyxVQUFMLEVBQVY7QUFDQSxRQUFJaEIsSUFBSSxHQUFHYSxLQUFLLEdBQUcsR0FBUixHQUFjRSxHQUF6QjtBQUNBLFdBQU9mLElBQVA7QUFDQSxHQTFJTztBQTJJUmlCLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjLENBQ3JCO0FBQ0E7QUE3SU8sQ0FBVCxDQUpBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgR29FYXN5ID0gcmVxdWlyZSgnLi9nb2Vhc3ktMi4wLjEyLm1pbi5qcycpO1xyXG53aW5kb3cuR2xvYmFsID0ge1xyXG5cclxuXHRnb0Vhc3k6bnVsbCxcclxufSxcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRlZGl0Ym94OiBjYy5FZGl0Qm94LFxyXG5cdFx0Z29FYXN5OiBudWxsLFxyXG5cdFx0Y29udGVudDogXCJcIixcclxuXHR9LFxyXG5cdG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly8g5Yid5aeL5YyWR29FYXN55bm25a6M5oiQ6K6i6ZiFY2hhbm5lbFxyXG5cdFx0dGhpcy5pbml0R29FYXN5KCk7XHJcblx0XHR0aGlzLmNvbm5lY3RHb0Vhc3koKTtcclxuXHRcdHRoaXMuc3Vic2NyaWJlKCk7XHJcblxyXG5cdH0sXHJcblx0c3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0fSxcclxuXHJcblxyXG5cdGluaXRHb0Vhc3k6IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIOWIneWni+WMlkdvRWFzeVxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0R2xvYmFsLmdvRWFzeSA9IEdvRWFzeS5nZXRJbnN0YW5jZSh7XHJcblx0XHRcdGhvc3Q6ICdzaW5nYXBvcmUuZ29lYXN5LmlvJywgLy/lupTnlKjmiYDlnKjnmoTljLrln5/lnLDlnYA6IOOAkGhhbmd6aG91LmdvZWFzeS5pbyB8c2luZ2Fwb3JlLmdvZWFzeS5pb+OAkVxyXG5cdFx0XHRhcHBrZXk6IFwiQkMtNjRmNGFkZTY5NWQ1NGNkY2JjZDljNDQxM2ZkOTRlMWZcIiwgLy/mm7/mjaLkuLrmgqjnmoRjb21tb24gYXBwa2V5XHJcblx0XHRcdG1vZHVsZXM6IFtcInB1YnN1YlwiXSAvL1BVQlNVQjrlr7nlupTluLjop4TnmoR3ZWJzb2NrZXTlip/og70sSU065a+55bqUSU3ogYrlpKnlip/og71cclxuXHRcdH0pXHJcblx0XHRcclxuXHR9LFxyXG5cclxuXHJcblx0Y29ubmVjdEdvRWFzeTogZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0R2xvYmFsLmdvRWFzeS5jb25uZWN0KHtcclxuXHRcdFx0b25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Ly/ov57mjqXmiJDlip9cclxuXHRcdFx0XHR2YXIgbWVzc2FnZSA9IHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi6L+e5o6l5oiQ5YqfXCJcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLov57mjqXmiJDlip9cIik7XHJcblx0XHRcdFx0c2VsZi51cGRhdGVDb250ZW50KG1lc3NhZ2UpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkZhaWxlZDogZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0XHRcdFx0Ly/ov57mjqXlpLHotKVcclxuXHRcdFx0XHR2YXIgbWVzc2FnZSA9IHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiRmFpbGVkIHRvIGNvbm5lY3QgR29FYXN5LCBjb2RlOlwiICsgZXJyb3IuY29kZSArIFwiLGVycm9yOlwiICsgZXJyb3IuY29udGVudFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLov57mjqXlpLHmlZdcIik7XHJcblxyXG5cdFx0XHRcdHNlbGYudXBkYXRlQ29udGVudChtZXNzYWdlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25Qcm9ncmVzczogZnVuY3Rpb24gKGF0dGVtcHRzKSB7XHJcblx0XHRcdFx0Ly/ov57mjqXmiJboh6rliqjph43ov57kuK1cclxuXHRcdFx0XHR2YXIgbWVzc2FnZSA9IHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi6L+e5o6l5LitXCIgKyBhdHRlbXB0c1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLov57mjqXkuK1cIik7XHJcblxyXG5cdFx0XHRcdHNlbGYudXBkYXRlQ29udGVudChtZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHR1cGRhdGVDb250ZW50KG1lc3NhZ2UpIHtcclxuXHRcdC8vIOabtOaWsOWGheWuueWIsOmhtemdolxyXG5cdFx0dmFyIHRpbWUgPSB0aGlzLmdldEN1cnJlbnRUaW1lKCk7XHJcblx0XHR2YXIgbWVzc2FnZUNvbnRlbnQgPSB0aW1lICsgXCIgXCIgKyBtZXNzYWdlLmNvbnRlbnQ7XHJcblx0XHRjb25zb2xlLmxvZyhtZXNzYWdlQ29udGVudCk7XHJcblx0XHQvLyDliqjmgIHorr7nva5pdGVtXHJcblx0XHQvLyB2YXIgc2Nyb2xsVmlld05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxDb250ZW50XCIpO1xyXG5cdFx0Ly8gdmFyIGNvbnRlbnROb2RlID0gc2Nyb2xsVmlld05vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xyXG5cdFx0Ly8gdmFyIG5ld05vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG5cdFx0Ly8gbmV3Tm9kZS5uYW1lID0gXCJpdGVtXCI7XHJcblx0XHQvLyAvLyDmt7vliqBMYWJlbOiKgueCuVxyXG5cdFx0Ly8gbGV0IGxhYmVsTm9kZSA9IG5ld05vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHRcdC8vIC8vIOiuvue9ruminOiJslxyXG5cdFx0Ly8gbGFiZWxOb2RlLm5vZGUuY29sb3IgPSBuZXcgY2MuY29sb3IoNTEsIDUxLCA1MSk7XHJcblx0XHQvLyBsYWJlbE5vZGUubm9kZS53aWR0aCA9IDIxMDtcclxuXHRcdC8vIGxhYmVsTm9kZS5uYW1lID0gXCJsYWJlbFwiO1xyXG5cdFx0Ly8gbGFiZWxOb2RlLnN0cmluZyA9IG1lc3NhZ2VDb250ZW50O1xyXG5cdFx0Ly8gbGFiZWxOb2RlLmZvbnRTaXplID0gMTY7XHJcblx0XHQvLyBsYWJlbE5vZGUubGluZUhlaWdodCA9IDE2O1xyXG5cdFx0Ly8gLy8g5a695bqm5LiN5aSf6Ieq5Yqo5o2i6KGM5pi+56S6XHJcblx0XHQvLyBsYWJlbE5vZGUub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5SRVNJWkVfSEVJR0hUO1xyXG5cdFx0Ly8gbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZShuZXdOb2RlKTtcclxuXHRcdC8vIGl0ZW0ucGFyZW50ID0gY29udGVudE5vZGUuY29udGVudDtcclxuXHR9LFxyXG5cdHN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly8g6K6i6ZiFY2hhbm5lbFxyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0R2xvYmFsLmdvRWFzeS5wdWJzdWIuc3Vic2NyaWJlKHtcclxuXHRcdFx0Y2hhbm5lbDogXCJteV9jaGFubmVsXCIsIC8v5pu/5o2i5Li65oKo6Ieq5bex55qEY2hhbm5lbFxyXG5cdFx0XHRvbk1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcblx0XHRcdFx0c2VsZi51cGRhdGVDb250ZW50KG1lc3NhZ2UpO1xyXG5cdFx0XHRcdGNjLmxvZyhcIuaUtuWIsOa2iOaBr1wiKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR2YXIgbWVzc2FnZSA9IHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiQ2hhbm5lbOiuoumYheaIkOWKn+OAglwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRzZWxmLnVwZGF0ZUNvbnRlbnQobWVzc2FnZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uRmFpbGVkOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdFx0XHR2YXIgbWVzc2FnZSA9IHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiZXJyb3JDb2RlOlwiICsgZXJyb3IuY29kZSArIFwiLOmUmeivr+S/oeaBrzpcIiArIGVycm9yLmNvbnRlbnRcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHNlbGYudXBkYXRlQ29udGVudChtZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRwdWJsaXNoOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcy5jb250ZW50ICE9IFwiXCIpIHtcclxuXHRcdFx0Ly8g5Y+R6YCB5raI5oGv5YiwY2hhbm5lbOS4rVxyXG5cdFx0XHRHbG9iYWwuZ29FYXN5LnB1YnN1Yi5wdWJsaXNoKHtcclxuXHRcdFx0XHRjaGFubmVsOiBcIm15X2NoYW5uZWxcIiwgLy/mm7/mjaLkuLrmgqjoh6rlt7HnmoRjaGFubmVsXHJcblx0XHRcdFx0bWVzc2FnZTogdGhpcy5jb250ZW50LCAvL+abv+aNouS4uuaCqOaDs+imgeWPkemAgeeahOa2iOaBr+WGheWuuVxyXG5cdFx0XHRcdG9uU3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLmtojmga/lj5HluIPmiJDlip/jgIJcIik7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRvbkZhaWxlZDogZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIua2iOaBr+WPkemAgeWksei0pe+8jOmUmeivr+e8luegge+8mlwiICsgZXJyb3IuY29kZSArIFwiIOmUmeivr+S/oeaBr++8mlwiICsgZXJyb3IuY29udGVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZWRpdGJveC5zdHJpbmcgPSBcIlwiO1xyXG5cdH0sXHJcblx0b25DaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGVkaXRib3gsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG5cdFx0Ly8g55uR5ZCs6L6T5YWl5qGG5Y+Y5YyWXHJcblx0XHR0aGlzLmNvbnRlbnQgPSBldmVudDtcclxuXHRcdHRoaXMuZWRpdGJveCA9IGVkaXRib3g7XHJcblx0fSxcclxuXHRnZXRDdXJyZW50VGltZSgpIHtcclxuXHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuXHRcdHZhciBtaW4gPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRcdHZhciB0aW1lID0gaG91cnMgKyBcIjpcIiArIG1pbjtcclxuXHRcdHJldHVybiB0aW1lO1xyXG5cdH0sXHJcblx0dXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHRcdC8vIGNhbGxlZCBldmVyeSBmcmFtZVxyXG5cdH0sXHJcbn0pO1xyXG4iXX0=