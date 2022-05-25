let GoEasy = require('./goeasy-2.0.12.min.js');
window.Global = {

	goEasy:null,
},
cc.Class({
	extends: cc.Component,
	properties: {
		editbox: cc.EditBox,
		goEasy: null,
		content: "",
	},
	onLoad: function () {
		// 初始化GoEasy并完成订阅channel
		this.initGoEasy();
		this.connectGoEasy();
		this.subscribe();

	},
	start: function () {

	},


	initGoEasy: function () {
		// 初始化GoEasy
		var self = this;
		Global.goEasy = GoEasy.getInstance({
			host: 'singapore.goeasy.io', //应用所在的区域地址: 【hangzhou.goeasy.io |singapore.goeasy.io】
			appkey: "BC-64f4ade695d54cdcbcd9c4413fd94e1f", //替换为您的common appkey
			modules: ["pubsub"] //PUBSUB:对应常规的websocket功能,IM:对应IM聊天功能
		})
		
	},


	connectGoEasy: function () {
		var self = this;
		Global.goEasy.connect({
			onSuccess: function () {
				//连接成功
				var message = {
					content: "连接成功"
					
				};
				console.log("连接成功");
				self.updateContent(message);
			},
			onFailed: function (error) {
				//连接失败
				var message = {
					content: "Failed to connect GoEasy, code:" + error.code + ",error:" + error.content
				};
				// console.log("连接失敗");

				self.updateContent(message);
			},
			onProgress: function (attempts) {
				//连接或自动重连中
				var message = {
					content: "连接中" + attempts
				};
				console.log("连接中");

				self.updateContent(message);
			}
		})
	},

	updateContent(message) {
		// 更新内容到页面
		var time = this.getCurrentTime();
		var messageContent = time + " " + message.content;
		console.log(messageContent);
		// 动态设置item
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
	subscribe: function () {
		// 订阅channel
		var self = this;
		Global.goEasy.pubsub.subscribe({
			channel: "my_channel", //替换为您自己的channel
			onMessage: function (message) {
				self.updateContent(message);
				cc.log("收到消息")
			},
			onSuccess: function () {
				var message = {
					content: "Channel订阅成功。"
				};
				self.updateContent(message);
			},
			onFailed: function (error) {
				var message = {
					content: "errorCode:" + error.code + ",错误信息:" + error.content
				};
				self.updateContent(message);
			}
		});
	},
	publish: function () {
		if (this.content != "") {
			// 发送消息到channel中
			Global.goEasy.pubsub.publish({
				channel: "my_channel", //替换为您自己的channel
				message: this.content, //替换为您想要发送的消息内容
				onSuccess: function () {
					console.log("消息发布成功。");
				},
				onFailed: function (error) {
					console.log("消息发送失败，错误编码：" + error.code + " 错误信息：" + error.content);
				}
			});
		}
		this.editbox.string = "";
	},
	onChanged: function (event, editbox, customEventData) {
		// 监听输入框变化
		this.content = event;
		this.editbox = editbox;
	},
	getCurrentTime() {
		var date = new Date();
		var hours = date.getHours();
		var min = date.getMinutes();
		var time = hours + ":" + min;
		return time;
	},
	update: function (dt) {
		// called every frame
	},
});
