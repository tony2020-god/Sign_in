System.register("chunks:///_virtual/main",["./type_dialogue.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/type_dialogue.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,n,s,o,r,h,c,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,s=t.assertThisInitialized},function(t){o=t.cclegacy,r=t._decorator,h=t.Node,c=t.Label,l=t.Component}],execute:function(){var a,_,u,d,p,y,g,L,f;o._RF.push({},"f4eccUmM1tPqq0uexi4xbdH","type_dialogue",void 0);var x=r.ccclass,C=r.property;t("type_dialogue",(a=x("type_dialogue"),_=C({tooltip:"播放速度"}),u=C({type:h,tooltip:"選項"}),d=C({type:h,tooltip:"重新開始"}),a((g=e((y=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o))||this,n(e,"playSpeed",g,s(e)),n(e,"Chooses",L,s(e)),n(e,"Replay",f,s(e)),e._storyLV=void 0,e._speed=void 0,e._dialogLabel=null,e._contentStr="",e._currentTextIndex=0,e._currentDialogIndex=0,e._currentStoryIndex=0,e._isPlaying=!1,e._isChoose=!1,e.fail=!1,e._currentcontentList=null,e._currentChooseList=null,e._contentList=[[]],e._chooseList=[[]],e._endEvent=null,e}i(e,t);var o=e.prototype;return o.onLoad=function(){this._dialogLabel=this.node.getComponent(c),this.node.on(h.EventType.TOUCH_END,this._onClickBox,this)},o._onClickBox=function(){if(this._isPlaying)this._dialogLabel.string=this._contentStr,this._reset(),null==this._currentcontentList[this._currentDialogIndex+1]&&1==this.fail&&(this.Replay.active=!0);else if(this._currentDialogIndex++,null==this._currentcontentList[this._currentDialogIndex]){if(1==this.fail)return;this._isChoose=!0,this._currentDialogIndex=0;for(var t=0;t<this._currentChooseList.length;t++)this._dialogLabel.string="",this.Chooses.children[t].getChildByName("Label").getComponent(c).string=this._currentChooseList[t],this.Chooses.children[t].active=!0}else this.playDialog(this._currentcontentList[this._currentDialogIndex])},o.start=function(){this._storyLV="0",this._speed=this.playSpeed,this.TextData(),this._currentChooseList=this._chooseList[0],this._currentcontentList=this._contentList[0],this.playDialog(this._currentcontentList[this._currentDialogIndex])},o.update=function(t){if(this._isPlaying&&0==this._isChoose){if(this._speed-=t,!(this._speed<=0))return;this._speed=this.playSpeed,null==this._contentStr[this._currentTextIndex]?this._reset():(this._addText(this._contentStr[this._currentTextIndex]),this._currentTextIndex++)}},o.playDialog=function(t,e){this._isPlaying=!0,this._contentStr=t,this._clearContent(),e&&(this._endEvent=e)},o.setSpeed=function(t){this.playSpeed=t},o._reset=function(){this._isPlaying=!1,this._contentStr="",this._currentTextIndex=0,this._speed=this.playSpeed},o._clearContent=function(){this._dialogLabel.string=""},o._addText=function(t){this._dialogLabel.string+=t},o.TextData=function(){this._contentList[0]=["蓋倫: 你今天要做甚麼","亞瑟: 我要去打組隊任務","蓋倫: 可以幫我順便幫我消滅一隻怪獸嗎"],this._chooseList[0]=["哥布林","龍王","白幽狼","無頭騎士"]},o.ReplayFuc=function(){this.Replay.active=!1,this._reset(),this._currentDialogIndex=0,this._currentStoryIndex=0,this._storyLV="0",this.fail=!1,this._currentChooseList=this._chooseList[0],this._currentcontentList=this._contentList[0],this.playDialog(this._currentcontentList[this._currentDialogIndex])},o.ChooseBtn=function(t,e){for(var i=t.target.getChildByName("Label").getComponent(c).string,n=0;n<this._currentChooseList.length;n++)this.Chooses.children[n].active=!1;this.Story(i),this._currentStoryIndex++,this._currentChooseList=this._chooseList[this._currentStoryIndex],this._currentcontentList=this._contentList[this._currentStoryIndex],this._isChoose=!1,this.playDialog(this._currentcontentList[this._currentDialogIndex])},o.Story=function(t){"哥布林"==t&&"0"==this._storyLV?(this._storyLV="1",this._contentList[1]=["當你走著走著突然有個人影閃過","一看發現是哥布林","他發出低吼警示你不要再靠近","但是你只是輕輕地揮動你那生鏽的劍","哥布林便已經人頭落地","而你提著哥布林的頭回去找蓋倫","蓋倫便給你300金幣當作獎賞，並賦予你一把沒有生鏽的大劍","你提著劍就出發了","在路上不經意發現有兩條路口"],this._chooseList[1]=["左邊","右邊"]):"哥布林"!=t&&"0"==this._storyLV&&(this.fail=!0,"龍王"==t?this._contentList[1]=["你看到龍王後大驚失色，從沒見過魔力這麼強大的敵人","但是還是鼓起勇氣想與之一戰","當你揮著生鏽的劍向龍王砍去","龍王使用了'龍炎彈'直接將你燒成灰燼..."]:"白幽狼"==t?this._contentList[1]=["你看到白幽狼後打起了歪腦筋","因為白幽狼的毛皮相當稀有肯定能賣個好價錢","當你揮著生鏽的劍向白幽狼興奮地砍去","對方卻使用影分身，召喚上千隻白幽狼將你埋沒..."]:"無頭騎士"==t&&(this._contentList[1]=["當你正在尋找有甚什麼魔物的時候","一個高250公分穿著黑色鎧甲的大漢朝你襲來","仔細一看他似乎沒有頭","當你還在震驚之中對方已經首起刀落","你的視線也逐漸變得模糊，最後已感覺不到任何東西..."]))},e}(l)).prototype,"playSpeed",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),L=e(y.prototype,"Chooses",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=e(y.prototype,"Replay",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=y))||p));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});