
var gameModel = require("Model");
cc.Class({
    extends: cc.Component,

    properties: {
    
    },


    onLoad () {
        window.addEventListener('orientationchange', function (event) {
            cc.log("：：：：：：：：：：：：：：：" + window.orientation);
            var currentScene = cc.director.getScene().name;              //当前场景
            var changeScene = currentScene.replace('V', '');
            if (cc.sys.isMobile){
                if (cc.view._orientation != cc.macro.ORIENTATION_AUTO) {
                    cc.view.setOrientation(cc.macro.ORIENTATION_AUTO);
                }
                if (window.orientation == 180 || window.orientation == 0)      //竖屏   -  创建旋转提示层
                {
                    cc.log("竖屏, 角度:" + window.orientation);
                    
                    cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
                    //cc.director.loadScene(changeScene + 'V')
                    cc.log("changeScene: " + changeScene + 'V');
                    gameModel.device=1;
                }
                if (window.orientation == 90 || window.orientation == -90)      //横屏   -  移除
                {
                    cc.log("横屏, 角度:" + window.orientation);
                    
                    cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                    //cc.director.loadScene(changeScene)
                    cc.log("changeScene: " + changeScene);
                    gameModel.device=2;
                }
            }
            else{
                cc.director.loadScene(changeScene);
                gameModel.device=2;
            }
        });
    },
});
