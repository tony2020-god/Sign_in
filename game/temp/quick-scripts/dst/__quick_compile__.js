
(function () {
var scripts = [{"deps":{"./assets/共用模塊/備份/Host1_QRC":2,"./assets/1_redpack/遊戲模塊/Guest4_ShakeRedpacket":3,"./assets/2_ropepack/遊戲模塊/Guest4_CatchRedpacket":5,"./assets/4._Q&A/程式碼/Host1_ShowQuestion":6,"./assets/共用模塊/Ani_Opacity":8,"./assets/共用模塊/BeforeGameCountDown":9,"./assets/共用模塊/ColorString":10,"./assets/共用模塊/Ani_UPandDOWN":11,"./assets/共用模塊/Ani_Rotation":12,"./assets/共用模塊/Guest1_ConfirmDeviceMotionEvent":13,"./assets/共用模塊/BackGround_Theme":14,"./assets/共用模塊/Guest2_WaitForStart":15,"./assets/共用模塊/Guest1_JoinGame":16,"./assets/共用模塊/Guest4_GameCountDown":18,"./assets/共用模塊/Guest5_Prize":19,"./assets/共用模塊/Guest_rwdPlayer":22,"./assets/共用模塊/Host1_Begin":23,"./assets/共用模塊/Guest5_PrizeRecordItem":24,"./assets/共用模塊/Host3_GameTimeCountDown":25,"./assets/共用模塊/Host3_ShowNewWinner_NewestWinner":26,"./assets/共用模塊/Host3_WinRecordItem":29,"./assets/共用模塊/Host3_WinRecordItem_Score":30,"./assets/共用模塊/Host4_WinnerRedpaket":31,"./assets/共用模塊/RoleConfirm":32,"./assets/共用模塊/Model":33,"./assets/共用模塊/Host4_ShowWinner":34,"./assets/共用模塊/Skin":35,"./assets/3_whack_a_mole/遊戲模塊/Guest_MouseManager":36,"./assets/共用模塊/備份/qrcode":39,"./assets/4._Q&A/程式碼/Host2_Game":40,"./assets/3_whack_a_mole/遊戲模塊/Guest4_Whack_a_mole":41,"./assets/共用模塊/Ani_Opacity_Bright":42,"./assets/共用模塊/備份/rwd":43,"./assets/4._Q&A/程式碼/Host3_ShowWinner":44,"./assets/4._Q&A/程式碼/Guest1_WaitingForQuestion":48,"./assets/4._Q&A/程式碼/Host3_RankRecordItem":49,"./assets/5_lottery/程式/prizeInformation":51,"./assets/TEST/NewScript":52,"./assets/5_lottery/程式/Host1_Congratulations":53,"./assets/5_lottery/程式/weel":54,"./assets/共用模塊/Guest1_PrizeInformation":17,"./assets/共用模塊/Guest4_GameCountDown_ShowTime":20,"./assets/共用模塊/Host3_GameTimeCountDown_competition":21,"./assets/共用模塊/Host3_ShowNewWinner":27,"./assets/共用模塊/Host3_ShowNewWinner_Score":28,"./assets/3_whack_a_mole/遊戲模塊/Host_MouseManager":38,"./assets/5_lottery/程式/Host1_ComboBox":46,"./assets/4._Q&A/程式碼/Guest2_Game":47,"./assets/5_lottery/程式/Jiugongge":50,"./assets/TEST/ani":1,"./assets/3_whack_a_mole/遊戲模塊/Host_RandomSpawn":4,"./assets/5_lottery/程式/Host1_WeelShowWinner":7,"./assets/共用模塊/備份/HelloWorld":37,"./assets/共用模塊/備份/goeasy-2.0.12.min":45},"path":"preview-scripts/__qc_index__.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/TEST/ani.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/備份/Host1_QRC.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/1_redpack/遊戲模塊/Guest4_ShakeRedpacket.js"},{"deps":{"Guest4_Whack_a_mole":41},"path":"preview-scripts/assets/3_whack_a_mole/遊戲模塊/Host_RandomSpawn.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/2_ropepack/遊戲模塊/Guest4_CatchRedpacket.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/4._Q&A/程式碼/Host1_ShowQuestion.js"},{"deps":{"Model":33,"Host4_WinnerRedpaket":31,"Host3_ShowNewWinner":27},"path":"preview-scripts/assets/5_lottery/程式/Host1_WeelShowWinner.js"},{"deps":{},"path":"preview-scripts/assets/共用模塊/Ani_Opacity.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/BeforeGameCountDown.js"},{"deps":{},"path":"preview-scripts/assets/共用模塊/ColorString.js"},{"deps":{},"path":"preview-scripts/assets/共用模塊/Ani_UPandDOWN.js"},{"deps":{},"path":"preview-scripts/assets/共用模塊/Ani_Rotation.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Guest1_ConfirmDeviceMotionEvent.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/BackGround_Theme.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Guest2_WaitForStart.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Guest1_JoinGame.js"},{"deps":{"Model":33,"Guest5_PrizeRecordItem":24},"path":"preview-scripts/assets/共用模塊/Guest1_PrizeInformation.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Guest4_GameCountDown.js"},{"deps":{"Model":33,"Guest5_PrizeRecordItem":24},"path":"preview-scripts/assets/共用模塊/Guest5_Prize.js"},{"deps":{"Model":33,"Guest4_GameCountDown":18},"path":"preview-scripts/assets/共用模塊/Guest4_GameCountDown_ShowTime.js"},{"deps":{"Model":33,"Host3_GameTimeCountDown":25},"path":"preview-scripts/assets/共用模塊/Host3_GameTimeCountDown_competition.js"},{"deps":{},"path":"preview-scripts/assets/共用模塊/Guest_rwdPlayer.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Host1_Begin.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Guest5_PrizeRecordItem.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Host3_GameTimeCountDown.js"},{"deps":{"Model":33,"Host3_ShowNewWinner":27},"path":"preview-scripts/assets/共用模塊/Host3_ShowNewWinner_NewestWinner.js"},{"deps":{"Model":33,"Host3_WinRecordItem":29},"path":"preview-scripts/assets/共用模塊/Host3_ShowNewWinner.js"},{"deps":{"Model":33,"Host3_ShowNewWinner":27,"Host3_WinRecordItem_Score":30},"path":"preview-scripts/assets/共用模塊/Host3_ShowNewWinner_Score.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Host3_WinRecordItem.js"},{"deps":{"Model":33,"Host3_WinRecordItem":29},"path":"preview-scripts/assets/共用模塊/Host3_WinRecordItem_Score.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Host4_WinnerRedpaket.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/RoleConfirm.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Model.js"},{"deps":{"Host4_WinnerRedpaket":31,"Model":33},"path":"preview-scripts/assets/共用模塊/Host4_ShowWinner.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/Skin.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/3_whack_a_mole/遊戲模塊/Guest_MouseManager.js"},{"deps":{"./goeasy-2.0.12.min.js":45},"path":"preview-scripts/assets/共用模塊/備份/HelloWorld.js"},{"deps":{"Guest_MouseManager":36},"path":"preview-scripts/assets/3_whack_a_mole/遊戲模塊/Host_MouseManager.js"},{"deps":{},"path":"preview-scripts/assets/共用模塊/備份/qrcode.js"},{"deps":{"Model":33,"Host3_GameTimeCountDown":25},"path":"preview-scripts/assets/4._Q&A/程式碼/Host2_Game.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/3_whack_a_mole/遊戲模塊/Guest4_Whack_a_mole.js"},{"deps":{},"path":"preview-scripts/assets/共用模塊/Ani_Opacity_Bright.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/共用模塊/備份/rwd.js"},{"deps":{"Model":33,"Host3_WinRecordItem":29},"path":"preview-scripts/assets/4._Q&A/程式碼/Host3_ShowWinner.js"},{"deps":{"buffer":55},"path":"preview-scripts/assets/共用模塊/備份/goeasy-2.0.12.min.js"},{"deps":{"Model":33,"weel":54,"Jiugongge":50},"path":"preview-scripts/assets/5_lottery/程式/Host1_ComboBox.js"},{"deps":{"Model":33,"Guest1_WaitingForQuestion":48},"path":"preview-scripts/assets/4._Q&A/程式碼/Guest2_Game.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/4._Q&A/程式碼/Guest1_WaitingForQuestion.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/4._Q&A/程式碼/Host3_RankRecordItem.js"},{"deps":{"Model":33,"Host1_Congratulations":53,"prizeInformation":51,"Guest1_PrizeInformation":17},"path":"preview-scripts/assets/5_lottery/程式/Jiugongge.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/5_lottery/程式/prizeInformation.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/TEST/NewScript.js"},{"deps":{"Model":33},"path":"preview-scripts/assets/5_lottery/程式/Host1_Congratulations.js"},{"deps":{"Model":33,"prizeInformation":51,"Host1_Congratulations":53,"Guest1_PrizeInformation":17},"path":"preview-scripts/assets/5_lottery/程式/weel.js"},{"deps":{"base64-js":56,"ieee754":57,"isarray":58},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    