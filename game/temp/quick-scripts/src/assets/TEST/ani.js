"use strict";
cc._RF.push(module, '58d98+WtihHuKwhuv8/GTaa', 'ani');
// TEST/ani.js

"use strict";

var gameModel = require("Model");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.count = 0;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.count++;
    if (other.node.group == "加分" && this.count == 1) gameModel.TopTitle = "加分";else if (other.node.group == "扣分" && this.count == 1) gameModel.TopTitle = "扣分";
  },
  onCollisionExit: function onCollisionExit(other, self) {
    this.count--;
    gameModel.TopTitle = "無";
  }
});

cc._RF.pop();