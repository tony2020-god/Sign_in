
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/1_redpack/遊戲模塊/Guest4_ShakeRedpacket');
require('./assets/2_ropepack/遊戲模塊/Guest4_CatchRedpacket');
require('./assets/3_whack_a_mole/遊戲模塊/Guest4_Whack_a_mole');
require('./assets/3_whack_a_mole/遊戲模塊/Guest_MouseManager');
require('./assets/3_whack_a_mole/遊戲模塊/Host_MouseManager');
require('./assets/3_whack_a_mole/遊戲模塊/Host_RandomSpawn');
require('./assets/4._Q&A/程式碼/Guest1_WaitingForQuestion');
require('./assets/4._Q&A/程式碼/Guest2_Game');
require('./assets/4._Q&A/程式碼/Host1_ShowQuestion');
require('./assets/4._Q&A/程式碼/Host2_Game');
require('./assets/4._Q&A/程式碼/Host3_RankRecordItem');
require('./assets/4._Q&A/程式碼/Host3_ShowWinner');
require('./assets/5_lottery/程式/Host1_ComboBox');
require('./assets/5_lottery/程式/Host1_Congratulations');
require('./assets/5_lottery/程式/Host1_WeelShowWinner');
require('./assets/5_lottery/程式/Jiugongge');
require('./assets/5_lottery/程式/prizeInformation');
require('./assets/5_lottery/程式/weel');
require('./assets/TEST/NewScript');
require('./assets/TEST/ani');
require('./assets/共用模塊/Ani_Opacity');
require('./assets/共用模塊/Ani_Opacity_Bright');
require('./assets/共用模塊/Ani_Rotation');
require('./assets/共用模塊/Ani_UPandDOWN');
require('./assets/共用模塊/BackGround_Theme');
require('./assets/共用模塊/BeforeGameCountDown');
require('./assets/共用模塊/ColorString');
require('./assets/共用模塊/Guest1_ConfirmDeviceMotionEvent');
require('./assets/共用模塊/Guest1_JoinGame');
require('./assets/共用模塊/Guest1_PrizeInformation');
require('./assets/共用模塊/Guest2_WaitForStart');
require('./assets/共用模塊/Guest4_GameCountDown');
require('./assets/共用模塊/Guest4_GameCountDown_ShowTime');
require('./assets/共用模塊/Guest5_Prize');
require('./assets/共用模塊/Guest5_PrizeRecordItem');
require('./assets/共用模塊/Guest_rwdPlayer');
require('./assets/共用模塊/Host1_Begin');
require('./assets/共用模塊/Host3_GameTimeCountDown');
require('./assets/共用模塊/Host3_GameTimeCountDown_competition');
require('./assets/共用模塊/Host3_ShowNewWinner');
require('./assets/共用模塊/Host3_ShowNewWinner_NewestWinner');
require('./assets/共用模塊/Host3_ShowNewWinner_Score');
require('./assets/共用模塊/Host3_WinRecordItem');
require('./assets/共用模塊/Host3_WinRecordItem_Score');
require('./assets/共用模塊/Host4_ShowWinner');
require('./assets/共用模塊/Host4_WinnerRedpaket');
require('./assets/共用模塊/Model');
require('./assets/共用模塊/RoleConfirm');
require('./assets/共用模塊/Skin');
require('./assets/共用模塊/備份/HelloWorld');
require('./assets/共用模塊/備份/Host1_QRC');
require('./assets/共用模塊/備份/goeasy-2.0.12.min');
require('./assets/共用模塊/備份/qrcode');
require('./assets/共用模塊/備份/rwd');

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