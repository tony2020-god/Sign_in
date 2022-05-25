
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/Model.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7bd7G7ruVO1L6VM6c+ndqb', 'Model');
// 共用模塊/Model.js

"use strict";

///共用模塊js
var TopTitle = null;
var Prize_BackGround = null;
var WhitchPrize_index = 0;
var XMLTimeLimit = false;
var gametimelimit = 5;
var gametimeCountDown = 0;
var round = 1;
var Domain = null;
var GameStatusMessage = "close";
var result = "thanks";
var prize_total = 0;
var role = null;
var winner_name = [];
var winner_id = [];
var winner_picture = [];
var winner_score = [];
var winner_TakeTime = 0;
var WinnerData = null;
var AlreadyPlayed = 0;
var people = 0;
var activity_id = null;
var game_id = null;
var liffstate = null;
var User_id = null;
var User_Name = null;
var User_Picture = null;
var prize_ID = [];
var Win_Time = [];
var prize_name_guest = [];
var prize_name_host = [];
var prize_method = [];
var getprize_round = [];
var password = [];
var prize_picture = [];
var prize_type = "";
var exchangePrize = [];
var GameStatusWS_Host = null;
var NumberOfLotteryWS_Host = null;
var NumberOfPeople_Guest = null;
var Session = null;
var CannotJoinGame = "";
var AllowRePrize = "";
var CheckRole = false;
var connet_ws = false;
var Guest1_Join_JS = "";
var GameName = "";
var SpawnNewestWinner = false;
var session_id = "";
var CurrentRound = 0;
var HostWindow = "open";
var Score = 0;
var Skin = "";
var Local_ID = "";
var BackGround_Theme = "";
var AnswerResult = [];
var Question = [];
var QuestionCount = 0;
var Options = [];
var QuestionPicture = [];
var Answer = 0;
var Rank = 0;
var mode = "";
var chance = 0;
var Prizestack_id = [];
var Prizestack_name = [];
var Prizestack_picture = [];
var Game_js = "";
var game_type = "";
var PrizeStaffs = ""; //要在自己的腳本導出變量才能讓別人繼承  

module.exports = {
  TopTitle: TopTitle,
  //遊戲的上方框
  Prize_BackGround: Prize_BackGround,
  //玩家查看獎品場景的背景
  WhitchPrize_index: WhitchPrize_index,
  //兌換畫面當前選的獎品編號
  XMLTimeLimit: XMLTimeLimit,
  //遊戲是否限時
  gametimelimit: gametimelimit,
  //遊戲限制的時間
  gametimeCountDown: gametimeCountDown,
  //遊戲倒數計時
  round: round,
  //輪次
  Domain: Domain,
  //當前網域
  GameStatusMessage: GameStatusMessage,
  //遊戲狀態 : open、start、end
  result: result,
  //中獎結果 thanks代表沒中獎，其他代表中獎
  prize_total: prize_total,
  //獎品數量
  role: role,
  //用戶角色(主持人OR玩家)
  Game_Information: Game_Information,
  //取得遊戲設置資訊XML
  RoleComfirm: RoleComfirm,
  //接收角色判斷和輪次XML
  Lottery_Guest: Lottery_Guest,
  //玩家中獎判斷XML
  winner_name: winner_name,
  //主持人紀錄得獎玩家名子
  winner_picture: winner_picture,
  //主持人紀錄得獎玩家頭像
  winner_id: winner_id,
  //主持人紀錄得獎玩家辨識碼
  winner_score: winner_score,
  //主持人紀錄得獎玩家分數
  WinnerData: WinnerData,
  //主持人 Host3_ShowNewWinner js腳本
  WebSocket_NumberOfPeople_Guest: WebSocket_NumberOfPeople_Guest,
  //新增人員(玩家用)
  WebSocket_NumberOfPeople_Host: WebSocket_NumberOfPeople_Host,
  //新增人員(主持人用)
  WebSocket_GameStatus_Guest: WebSocket_GameStatus_Guest,
  //遊戲狀態的訊息傳送(玩家用)
  WebSocket_GameStatus_Host: WebSocket_GameStatus_Host,
  //遊戲狀態的訊息傳送(主持人用)
  WebSocket_UpDateScore_Guest: WebSocket_UpDateScore_Guest,
  //玩家每秒將分數傳給後端(玩家用)
  WebSocket_NumberOfLottery_Host: WebSocket_NumberOfLottery_Host,
  //主持人收到搖紅包到一定次數的玩家訊息(主持人用)
  WebSocket_NumberOfLottery_Score_Host: WebSocket_NumberOfLottery_Score_Host,
  //主持人收到玩家分數(主持人用)
  AlreadyPlayed: AlreadyPlayed,
  //該輪是否玩過
  people: people,
  //人數
  activity_id: activity_id,
  //活動辨識碼
  game_id: game_id,
  //遊戲辨識碼
  liffstate: liffstate,
  User_id: User_id,
  //用戶辨識碼(回傳後端用)
  User_Name: User_Name,
  //用戶名稱(回傳後端用)
  User_Picture: User_Picture,
  //用戶頭像(回傳後端用)
  prize_ID: prize_ID,
  //獎品辨識碼
  Win_Time: Win_Time,
  //得獎時間
  prize_name_guest: prize_name_guest,
  //獎品名稱(玩家兌獎畫面顯示)
  prize_name_host: prize_name_host,
  //獎品名稱(主持人結算場景顯示)
  prize_method: prize_method,
  //獎品兌換方式
  password: password,
  //獎品密碼
  prize_picture: prize_picture,
  //獎品圖片
  getprize_round: getprize_round,
  //取得得獎的輪次
  exchangePrize: exchangePrize,
  //獎品是否兌換過
  GameStatusWS_Host: GameStatusWS_Host,
  //開啟主持人遊戲狀態的ws
  NumberOfLotteryWS_Host: NumberOfLotteryWS_Host,
  //開啟主持人接收中獎人的ws 
  NumberOfPeople_Guest: NumberOfPeople_Guest,
  //開啟玩家加入遊戲執行的ws
  Session: Session,
  //場次
  CannotJoinGame: CannotJoinGame,
  //不能參加遊戲的錯誤訊息
  AllowRePrize: AllowRePrize,
  //可以重複中獎
  CheckRole: CheckRole,
  //是否檢查完角色
  connet_ws: connet_ws,
  //是否有連接到websocket
  Guest1_Join_JS: Guest1_Join_JS,
  //玩家 Guest1_Join js腳本
  GameName: GameName,
  //遊戲名稱
  SpawnNewestWinner: SpawnNewestWinner,
  //是否有顯示最新兩位得獎人
  session_id: session_id,
  //用戶cookie值
  CurrentRound: CurrentRound,
  //當前輪次(用於主持人結算頁面使用，因為開始遊戲會清空人數，輪次 + 1)
  HostWindow: HostWindow,
  //主持人在遊戲中是否關閉視窗
  Score: Score,
  //玩家分數
  Skin: Skin,
  //用戶選擇的角色皮膚
  Local_ID: Local_ID,
  BackGround_Theme: BackGround_Theme,
  //用戶選擇的主題背景
  ///--------------------------------------------------------------問答遊戲參數
  //=====主持人=====
  AnswerResult: AnswerResult,
  // 問答遊戲 每個選項的人數
  Question: Question,
  //問答遊戲 存放問題陣列
  QuestionCount: QuestionCount,
  //問答遊戲 計數目前是哪個問題
  Options: Options,
  //問答遊戲 問題選項文字陣列
  QuestionPicture: QuestionPicture,
  //問答遊戲 主持人遊戲時用得問題圖片陣列
  Answer: Answer,
  //問答遊戲 本輪問題的答案
  //=====玩家=====
  Rank: Rank,
  //問答問題 玩家排名
  winner_TakeTime: winner_TakeTime,
  //問答遊戲 玩家耗時
  ///--------------------------------------------------------------幸運輪盤參數
  mode: mode,
  //目前模式
  chance: chance,
  //目前抽獎次數
  Prize_Infromation: Prize_Infromation,
  prize_type: prize_type,
  Prizestack_id: Prizestack_id,
  Prizestack_name: Prizestack_name,
  Prizestack_picture: Prizestack_picture,
  Game_js: Game_js,
  game_type: game_type,
  PrizeStaffs: PrizeStaffs
}; //取得遊戲設置資訊

function Game_Information() {
  var url = 'https://' + gameModel.local_ID + '/v1/interact/game/' + gameModel.GameName + '?game_id=' + gameModel.game_id;
  var redpack = new XMLHttpRequest();
  redpack.open("GET", url, true);

  redpack.onreadystatechange = function () {
    if (redpack.readyState == 4 && redpack.status >= 200 && redpack.status <= 207) {
      //是否連接成功
      var text = redpack.responseText;
      var XMLobject = JSON.parse(redpack.responseText);
      gameModel.Session = XMLobject.data.title;
      gameModel.AllowRePrize = XMLobject.data.allow;
      gameModel.game_type = XMLobject.data.game_type; //是否有限制遊戲時間

      if (XMLobject.data.limit_time == "open") {
        gameModel.XMLTimeLimit = true;
        gameModel.gametimelimit = XMLobject.data.second;
      } else gameModel.XMLTimeLimit = false;
    }
  };

  redpack.send();
} //接收角色判斷和輪次XML


function RoleComfirm() {
  var url = 'https://' + gameModel.local_ID + '/v1/user?activity_id=' + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName + '&session_id=' + gameModel.session_id;
  var Role = new XMLHttpRequest();
  Role.open("GET", url, true); //GET取得、POST傳送、PUT更改

  Role.onreadystatechange = function () {
    if (Role.readyState == 4 && Role.status >= 200 && Role.status <= 207) {
      //是否連接成功
      var XMLobject = JSON.parse(Role.responseText); //開始接收訊息

      gameModel.role = XMLobject.data.User.role;
      gameModel.User_id = XMLobject.data.User.user_id;
      gameModel.User_Name = XMLobject.data.User.name;
      gameModel.User_Picture = XMLobject.data.User.avatar;
      gameModel.round = XMLobject.data.Game.round;
      gameModel.prize_total = XMLobject.data.Game.amount;
      gameModel.chance = XMLobject.data.Times;
      gameModel.PrizeStaffs = XMLobject.data.PrizeStaffs;

      for (var i = 0; i < XMLobject.data.PrizeStaffs.length; i++) //取得獎品資訊
      {
        gameModel.prize_ID[i] = XMLobject.data.PrizeStaffs[i].id; //獎品編號

        gameModel.prize_name_guest[i] = XMLobject.data.PrizeStaffs[i].prize_name; //獎品名稱

        gameModel.prize_method[i] = XMLobject.data.PrizeStaffs[i].method; //獎品兌換方式

        gameModel.password[i] = XMLobject.data.PrizeStaffs[i].password; //兌獎密碼

        gameModel.Win_Time[i] = XMLobject.data.PrizeStaffs[i].win_time; //抽到獎品的時間

        gameModel.getprize_round[i] = XMLobject.data.PrizeStaffs[i].round; //抽到獎品的輪次

        gameModel.prize_picture[i] = XMLobject.data.PrizeStaffs[i].picture; //獎品照片

        gameModel.exchangePrize[i] = XMLobject.data.PrizeStaffs[i].status; //是否兌換
      }

      gameModel.CheckRole = true;
    } else if (Role.readyState == 4 && Role.status >= 400) {
      var XMLobject = JSON.parse(Role.responseText);
      gameModel.CheckRole = true;
      gameModel.CannotJoinGame = XMLobject.message;
    }
  };

  Role.send();
} //查詢所有獎品XML


function Prize_Infromation() {
  var url = 'https://' + gameModel.local_ID + '/v1/interact/game/' + gameModel.GameName + '/prize?game_id=' + gameModel.game_id;
  var Prize = new XMLHttpRequest();
  Prize.open("GET", url, true); //GET取得、POST傳送、PUT更改

  Prize.onreadystatechange = function () {
    if (Prize.readyState == 4 && Prize.status >= 200 && Prize.status <= 207) {
      //是否連接成功
      var XMLobject = JSON.parse(Prize.responseText); //開始接收訊息

      for (var i = 0; i < XMLobject.data.length; i++) {
        gameModel.Prizestack_id[i] = XMLobject.data[i].prize_id; //獎品編號

        gameModel.Prizestack_name[i] = XMLobject.data[i].name; //獎品名稱

        gameModel.Prizestack_picture[i] = XMLobject.data[i].picture; //獎品照片
      }

      gameModel.Game_js.SpawnPrize();
    } else if (Prize.readyState == 4 && Prize.status >= 400) {
      var XMLobject = JSON.parse(Prize.responseText);
      gameModel.CannotJoinGame = XMLobject.message;
    }
  };

  Prize.send();
} //玩家中獎判斷XML


function Lottery_Guest() {
  var url = 'https://' + gameModel.local_ID + '/v1/game/lucky?activity_id=' + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName + '&session_id=' + gameModel.session_id + '&mode=' + gameModel.mode;
  var Lottery = new XMLHttpRequest();
  Lottery.open("GET", url, true); //GET取得、POST傳送、PUT更改

  Lottery.onreadystatechange = function () {
    if (Lottery.readyState == 4 && Lottery.status >= 200 && Lottery.status <= 207) {
      //是否連接成功
      var XMLobject = JSON.parse(Lottery.responseText); //開始接收訊息

      gameModel.result = XMLobject.data.PrizeStaff.method; //抽獎結果 不等於thanks代表中獎，thanks帶表未中獎

      if (gameModel.GameName == "lottery") {
        gameModel.prize_ID = XMLobject.data.PrizeStaff.prize_id; //獎品編號

        gameModel.prize_name_guest = XMLobject.data.PrizeStaff.prize_name; //獎品名稱

        gameModel.prize_picture = XMLobject.data.PrizeStaff.picture; //獎品照片

        gameModel.prize_type = XMLobject.data.PrizeStaff.prize_type;
        gameModel.PrizeStaffs = XMLobject.data.PrizeStaffs;
        gameModel.Game_js.lettorey();
      } else {
        for (var i = 0; i < XMLobject.data.PrizeStaffs.length; i++) {
          gameModel.prize_ID[i] = XMLobject.data.PrizeStaffs[i].id; //獎品編號

          gameModel.prize_name_guest[i] = XMLobject.data.PrizeStaffs[i].prize_name; //獎品名稱

          gameModel.prize_method[i] = XMLobject.data.PrizeStaffs[i].method; //獎品兌換方式

          gameModel.password[i] = XMLobject.data.PrizeStaffs[i].password; //兌獎密碼

          gameModel.Win_Time[i] = XMLobject.data.PrizeStaffs[i].win_time; //抽到獎品的時間

          gameModel.getprize_round[i] = XMLobject.data.PrizeStaffs[i].round; //抽到獎品的輪次

          gameModel.prize_picture[i] = XMLobject.data.PrizeStaffs[i].picture; //獎品照片

          gameModel.exchangePrize[i] = XMLobject.data.PrizeStaffs[i].status; //是否兌換
        }
      }
    } else if (Lottery.readyState == 4 && Lottery.status >= 400) {
      var XMLobject = JSON.parse(Lottery.responseText);
      gameModel.CannotJoinGame = XMLobject.message;
      if (gameModel.GameName == "lottery") gameModel.Game_js.lettorey();
    }
  };

  Lottery.send();
} //將玩家人數新增到Websocket、接收玩家中獎紀錄


function WebSocket_NumberOfPeople_Guest(time, sendmessage) {
  if (sendmessage == false) {
    gameModel.NumberOfPeople_Guest = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/staff?activity_id=" + gameModel.activity_id + "&game_id=" + gameModel.game_id + "&game=" + gameModel.GameName); //連線開啟時觸發 

    gameModel.NumberOfPeople_Guest.onopen = function (event) {}; //連線錯誤時


    gameModel.NumberOfPeople_Guest.onerror = function (event) {}; //連線關閉時觸發  


    gameModel.NumberOfPeople_Guest.onclose = function (event) {
      if (gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") {
        gameModel.WebSocket_NumberOfPeople_Guest(1000, false);
      }
    };
  } else {
    //等待1秒，等通道打開再執行推送資料給Websocket
    setTimeout(function () {
      if (gameModel.NumberOfPeople_Guest.readyState === WebSocket.OPEN) {
        gameModel.NumberOfPeople_Guest.send(JSON.stringify({
          User: {
            user_id: gameModel.User_id,
            name: gameModel.User_Name,
            avatar: gameModel.User_Picture
          },
          Game: {
            round: gameModel.GameStatusMessage == "start" || gameModel.GameStatusMessage == "gaming" ? gameModel.round - 1 : gameModel.round
          }
        }));
      } else {
        if (gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") gameModel.Guest1_Join_JS.ConnetFail();else gameModel.Guest1_Join_JS.ConnetSuccess();
      }
    }, time);
  } //接收到訊息時觸發  


  gameModel.NumberOfPeople_Guest.onmessage = function (event) {
    var gameModel = require("Model");

    var object = JSON.parse(event.data); //將後端資料放入object

    gameModel.CannotJoinGame = object.error;
    gameModel.AlreadyPlayed = object.PrizeStaff.id; //是否有搖過 0代表還沒玩過 不等於0代表玩過了

    for (var i = 0; i < object.PrizeStaffs.length; i++) {
      gameModel.prize_ID[i] = object.PrizeStaffs[i].id; //獎品編號

      gameModel.prize_name_guest[i] = object.PrizeStaffs[i].prize_name; //獎品名稱

      gameModel.prize_method[i] = object.PrizeStaffs[i].method; //獎品兌換方式

      gameModel.password[i] = object.PrizeStaffs[i].password; //兌獎密碼

      gameModel.Win_Time[i] = object.PrizeStaffs[i].win_time; //抽到獎品的時間

      gameModel.getprize_round[i] = object.PrizeStaffs[i].round; //抽到獎品的輪次

      gameModel.prize_picture[i] = object.PrizeStaffs[i].picture; //獎品照片

      gameModel.exchangePrize[i] = object.PrizeStaffs[i].status; //是否兌換
    }

    gameModel.Guest1_Join_JS.ConnetSuccess();
  };
} //主持人從Websocket取得現在人數


function WebSocket_NumberOfPeople_Host() {
  //取得Websocket通訊網址
  var ws = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/people?activity_id=" + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName); //連線開啟時觸發 

  ws.onopen = function (event) {}; //接收到訊息時觸發  


  ws.onmessage = function (event) {
    var gameModel = require("Model");

    var object = JSON.parse(event.data); //將後端資料放入object

    gameModel.people = object.Game.people;
    gameModel.round = object.Game.round;
  }; //連線錯誤時


  ws.onerror = function (event) {}; //連線關閉時觸發  


  ws.onclose = function (event) {
    gameModel.WebSocket_NumberOfPeople_Host();
  };
} //玩家從Websocket取得開始、再來一輪、關閉的訊息 (start、again、close)


function WebSocket_GameStatus_Guest() {
  //取得Websocket通訊網址
  var ws = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/status/guest?activity_id=" + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName); //連線開啟時觸發 

  ws.onopen = function (event) {}; //接收到訊息時觸發  


  ws.onmessage = function (event) {
    var gameModel = require("Model");

    var object = JSON.parse(event.data);
    gameModel.GameStatusMessage = object.Game.status;
    gameModel.round = object.Game.round;
    gameModel.gametimeCountDown = object.Game.second;
  }; //連線錯誤時


  ws.onerror = function (event) {}; //連線關閉時觸發  


  ws.onclose = function (event) {
    gameModel.WebSocket_GameStatus_Guest();
  };
} //主持人將開始、再一輪、關閉的訊息傳到Websocket (start、again、close)


function WebSocket_GameStatus_Host(status, time) {
  //連線開啟時觸發 
  gameModel.GameStatusWS_Host.onopen = function (event) {}; //接收到訊息時觸發  


  gameModel.GameStatusWS_Host.onmessage = function (event) {
    var gameModel = require("Model");

    var object = JSON.parse(event.data);
    gameModel.GameStatusMessage = object.Game.status;
    gameModel.connet_ws = true;
  }; //連線錯誤時


  gameModel.GameStatusWS_Host.onerror = function (event) {}; //連線關閉時觸發  


  gameModel.GameStatusWS_Host.onclose = function (event) {
    gameModel.connet_ws = false;
    gameModel.GameStatusWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/status/host?activity_id=" + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName); //開啟遊戲狀態ws;

    gameModel.WebSocket_GameStatus_Host(status, 1000);
  }; //等待1秒，等通道打開再執行推送資料給Websocket


  setTimeout(function () {
    if (gameModel.GameStatusWS_Host.readyState === WebSocket.OPEN) {
      if (status == "gaming" && gameModel.XMLTimeLimit == true) {
        gameModel.GameStatusWS_Host.send(JSON.stringify({
          Game: {
            status: status,
            round: gameModel.round,
            second: gameModel.gametimeCountDown
          }
        }));
      } else {
        gameModel.GameStatusWS_Host.send(JSON.stringify({
          Game: {
            status: status,
            round: status == "end" ? gameModel.round - 1 : gameModel.round
          }
        }));
      }
    } else {
      gameModel.connet_ws = false;
    }
  }, time);
} //玩家端每秒傳送分數給後端


function WebSocket_UpDateScore_Guest() {
  var ws = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/score?activity_id=" + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName); //連線開啟時觸發 

  ws.onopen = function (event) {}; //接收到訊息時觸發  


  ws.onmessage = function (event) {
    var gameModel = require("Model");

    var object = JSON.parse(event.data);
  }; //連線錯誤時


  ws.onerror = function (event) {}; //連線關閉時觸發  


  ws.onclose = function (event) {
    if (gameModel.GameStatusMessage == "gaming") gameModel.WebSocket_UpDateScore_Guest();else clearInterval(Interval);
  };

  var Interval = setInterval(function () {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        Game: {
          status: gameModel.GameStatusMessage,
          round: gameModel.round - 1,
          score: gameModel.Score
        },
        User: {
          user_id: gameModel.User_id
        }
      }));
    }
  }, 500);
} //主持人從Websocket取得玩家中獎資料


function WebSocket_NumberOfLottery_Host() {
  //連線開啟時觸發 zx
  gameModel.NumberOfLotteryWS_Host.onopen = function (event) {}; //接收到訊息時觸發  


  gameModel.NumberOfLotteryWS_Host.onmessage = function (event) {
    var gameModel = require("Model");

    var object = JSON.parse(event.data);
    gameModel.prize_total = object.Game.amount; //獎品總數量

    for (var i = 0; i < object.PrizeStaffs.length; i++) {
      if (gameModel.winner_id.includes(object.PrizeStaffs[i].id) == false) {
        gameModel.winner_id[i] = object.PrizeStaffs[i].id; //得獎者id

        gameModel.winner_name[i] = object.PrizeStaffs[i].name; //得獎人名稱

        gameModel.winner_picture[i] = object.PrizeStaffs[i].avatar; //得獎人照片

        gameModel.prize_name_host[i] = object.PrizeStaffs[i].prize_name; //獎品名稱

        gameModel.WinnerData.SpawnNewWinner();
      }
    }

    if (gameModel.GameStatusMessage != "end" && gameModel.winner_name.length > 0 && gameModel.SpawnNewestWinner == true) gameModel.WinnerData.NewestWinner();else if (gameModel.GameStatusMessage == "end") gameModel.NumberOfLotteryWS_Host.close();
  }; //連線錯誤時


  gameModel.NumberOfLotteryWS_Host.onerror = function (event) {}; //連線關閉時觸發  


  gameModel.NumberOfLotteryWS_Host.onclose = function (event) {
    if (gameModel.GameStatusMessage == "start") {
      gameModel.NumberOfLotteryWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/winning/staff?activity_id=" + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName); //開啟更新得獎人的ws

      gameModel.WebSocket_NumberOfLottery_Host();
    }
  };
} //主持人從Websocket取得玩家中獎資料


function WebSocket_NumberOfLottery_Score_Host() {
  //連線開啟時觸發 
  gameModel.NumberOfLotteryWS_Host.onopen = function (event) {}; //接收到訊息時觸發  


  gameModel.NumberOfLotteryWS_Host.onmessage = function (event) {
    var gameModel = require("Model");

    var object = JSON.parse(event.data);
    gameModel.prize_total = object.Game.amount; //獎品總數量

    gameModel.WinnerData.ClearRank();

    for (var i = 0; i < object.PrizeStaffs.length; i++) {
      gameModel.winner_id[i] = object.PrizeStaffs[i].id; //得獎者id

      gameModel.winner_name[i] = object.PrizeStaffs[i].name; //得獎人名稱

      gameModel.winner_picture[i] = object.PrizeStaffs[i].avatar; //得獎人照片

      gameModel.prize_name_host[i] = object.PrizeStaffs[i].prize_name; //獎品名稱

      gameModel.winner_score[i] = object.PrizeStaffs[i].score; //得獎人分數

      gameModel.WinnerData.SpawnNewWinner();
    }

    if (gameModel.GameStatusMessage == "calculate") {
      gameModel.WinnerData.NextSence();
      gameModel.NumberOfLotteryWS_Host.close();
    }
  }; //連線錯誤時


  gameModel.NumberOfLotteryWS_Host.onerror = function (event) {}; //連線關閉時觸發  


  gameModel.NumberOfLotteryWS_Host.onclose = function (event) {
    if (gameModel.GameStatusMessage == "gaming") {
      gameModel.NumberOfLotteryWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/winning/staff?activity_id=" + gameModel.activity_id + '&game_id=' + gameModel.game_id + '&game=' + gameModel.GameName); //開啟更新得獎人的ws

      gameModel.WinnerData.WebSocket_NumberOfLottery_Host();
    }
  };
} //取得動態參數


function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) return pair[1];
  }

  return "";
} //處理leLiffState取得activity_id和game_id


function HandleLiffState() {
  if (gameModel.activity_id == "" || gameModel.game_id == "") {
    if (gameModel.liffstate.length > 13) gameModel.liffstate = gameModel.liffstate.substr(17, gameModel.liffstate.length);
  }

  if (gameModel.liffstate.includes("%26game_id%3D")) //%3f是?  %26是&  %3d是=
    {
      var params = gameModel.liffstate.split("%26game_id%3D");
      gameModel.activity_id = params[0];

      if (params.length == 2) {
        params = params[1].split("#mst_challenge");
        gameModel.game_id = params[0];
      }
    }
} //取得Cookie資料


function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';'); //取得cookie並用;區分開來儲存在ca

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

var gameModel = require("Model");

gameModel.activity_id = getQueryVariable("activity_id");
gameModel.game_id = getQueryVariable("game_id");
gameModel.liffstate = getQueryVariable("liff.state");
gameModel.session_id = readCookie('chatroom_session');
HandleLiffState();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFxNb2RlbC5qcyJdLCJuYW1lcyI6WyJUb3BUaXRsZSIsIlByaXplX0JhY2tHcm91bmQiLCJXaGl0Y2hQcml6ZV9pbmRleCIsIlhNTFRpbWVMaW1pdCIsImdhbWV0aW1lbGltaXQiLCJnYW1ldGltZUNvdW50RG93biIsInJvdW5kIiwiRG9tYWluIiwiR2FtZVN0YXR1c01lc3NhZ2UiLCJyZXN1bHQiLCJwcml6ZV90b3RhbCIsInJvbGUiLCJ3aW5uZXJfbmFtZSIsIndpbm5lcl9pZCIsIndpbm5lcl9waWN0dXJlIiwid2lubmVyX3Njb3JlIiwid2lubmVyX1Rha2VUaW1lIiwiV2lubmVyRGF0YSIsIkFscmVhZHlQbGF5ZWQiLCJwZW9wbGUiLCJhY3Rpdml0eV9pZCIsImdhbWVfaWQiLCJsaWZmc3RhdGUiLCJVc2VyX2lkIiwiVXNlcl9OYW1lIiwiVXNlcl9QaWN0dXJlIiwicHJpemVfSUQiLCJXaW5fVGltZSIsInByaXplX25hbWVfZ3Vlc3QiLCJwcml6ZV9uYW1lX2hvc3QiLCJwcml6ZV9tZXRob2QiLCJnZXRwcml6ZV9yb3VuZCIsInBhc3N3b3JkIiwicHJpemVfcGljdHVyZSIsInByaXplX3R5cGUiLCJleGNoYW5nZVByaXplIiwiR2FtZVN0YXR1c1dTX0hvc3QiLCJOdW1iZXJPZkxvdHRlcnlXU19Ib3N0IiwiTnVtYmVyT2ZQZW9wbGVfR3Vlc3QiLCJTZXNzaW9uIiwiQ2Fubm90Sm9pbkdhbWUiLCJBbGxvd1JlUHJpemUiLCJDaGVja1JvbGUiLCJjb25uZXRfd3MiLCJHdWVzdDFfSm9pbl9KUyIsIkdhbWVOYW1lIiwiU3Bhd25OZXdlc3RXaW5uZXIiLCJzZXNzaW9uX2lkIiwiQ3VycmVudFJvdW5kIiwiSG9zdFdpbmRvdyIsIlNjb3JlIiwiU2tpbiIsIkxvY2FsX0lEIiwiQmFja0dyb3VuZF9UaGVtZSIsIkFuc3dlclJlc3VsdCIsIlF1ZXN0aW9uIiwiUXVlc3Rpb25Db3VudCIsIk9wdGlvbnMiLCJRdWVzdGlvblBpY3R1cmUiLCJBbnN3ZXIiLCJSYW5rIiwibW9kZSIsImNoYW5jZSIsIlByaXplc3RhY2tfaWQiLCJQcml6ZXN0YWNrX25hbWUiLCJQcml6ZXN0YWNrX3BpY3R1cmUiLCJHYW1lX2pzIiwiZ2FtZV90eXBlIiwiUHJpemVTdGFmZnMiLCJtb2R1bGUiLCJleHBvcnRzIiwiR2FtZV9JbmZvcm1hdGlvbiIsIlJvbGVDb21maXJtIiwiTG90dGVyeV9HdWVzdCIsIldlYlNvY2tldF9OdW1iZXJPZlBlb3BsZV9HdWVzdCIsIldlYlNvY2tldF9OdW1iZXJPZlBlb3BsZV9Ib3N0IiwiV2ViU29ja2V0X0dhbWVTdGF0dXNfR3Vlc3QiLCJXZWJTb2NrZXRfR2FtZVN0YXR1c19Ib3N0IiwiV2ViU29ja2V0X1VwRGF0ZVNjb3JlX0d1ZXN0IiwiV2ViU29ja2V0X051bWJlck9mTG90dGVyeV9Ib3N0IiwiV2ViU29ja2V0X051bWJlck9mTG90dGVyeV9TY29yZV9Ib3N0IiwiUHJpemVfSW5mcm9tYXRpb24iLCJ1cmwiLCJnYW1lTW9kZWwiLCJsb2NhbF9JRCIsInJlZHBhY2siLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsIlhNTG9iamVjdCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJ0aXRsZSIsImFsbG93IiwibGltaXRfdGltZSIsInNlY29uZCIsInNlbmQiLCJSb2xlIiwiVXNlciIsInVzZXJfaWQiLCJuYW1lIiwiYXZhdGFyIiwiR2FtZSIsImFtb3VudCIsIlRpbWVzIiwiaSIsImxlbmd0aCIsImlkIiwicHJpemVfbmFtZSIsIm1ldGhvZCIsIndpbl90aW1lIiwicGljdHVyZSIsIm1lc3NhZ2UiLCJQcml6ZSIsInByaXplX2lkIiwiU3Bhd25Qcml6ZSIsIkxvdHRlcnkiLCJQcml6ZVN0YWZmIiwibGV0dG9yZXkiLCJ0aW1lIiwic2VuZG1lc3NhZ2UiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJldmVudCIsIm9uZXJyb3IiLCJvbmNsb3NlIiwic2V0VGltZW91dCIsIk9QRU4iLCJzdHJpbmdpZnkiLCJDb25uZXRGYWlsIiwiQ29ubmV0U3VjY2VzcyIsIm9ubWVzc2FnZSIsInJlcXVpcmUiLCJvYmplY3QiLCJlcnJvciIsIndzIiwiY2xlYXJJbnRlcnZhbCIsIkludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzY29yZSIsImluY2x1ZGVzIiwiU3Bhd25OZXdXaW5uZXIiLCJOZXdlc3RXaW5uZXIiLCJjbG9zZSIsIkNsZWFyUmFuayIsIk5leHRTZW5jZSIsImdldFF1ZXJ5VmFyaWFibGUiLCJ2YXJpYWJsZSIsInF1ZXJ5Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzdWJzdHJpbmciLCJ2YXJzIiwic3BsaXQiLCJwYWlyIiwiSGFuZGxlTGlmZlN0YXRlIiwic3Vic3RyIiwicGFyYW1zIiwicmVhZENvb2tpZSIsIm5hbWVFUSIsImNhIiwiZG9jdW1lbnQiLCJjb29raWUiLCJjIiwiY2hhckF0IiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQUlBLFFBQVEsR0FBRyxJQUFmO0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7QUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxDQUF4QjtBQUNBLElBQUlDLFlBQVksR0FBRyxLQUFuQjtBQUNBLElBQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLENBQXhCO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxJQUFJQyxNQUFNLEdBQUcsSUFBYjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLE9BQXhCO0FBQ0EsSUFBSUMsTUFBTSxHQUFHLFFBQWI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsQ0FBbEI7QUFDQSxJQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLElBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLElBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBLElBQUlDLGNBQWMsR0FBRyxFQUFyQjtB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Q0FBQyxHQUFHd0QsRUFBRSxDQUFDdkQsTUFBckIsRUFBNEJELENBQUMsRUFBN0IsRUFBaUM7QUFDN0IsUUFBSTJELENBQUMsR0FBR0gsRUFBRSxDQUFDeEQsQ0FBRCxDQUFWOztBQUNBLFdBQU8yRCxDQUFDLENBQUNDLE1BQUYsQ0FBUyxDQUFULEtBQWMsR0FBckI7QUFBMEJELE1BQUFBLENBQUMsR0FBR0EsQ0FBQyxDQUFDWixTQUFGLENBQVksQ0FBWixFQUFjWSxDQUFDLENBQUMxRCxNQUFoQixDQUFKO0FBQTFCOztBQUNBLFFBQUkwRCxDQUFDLENBQUNFLE9BQUYsQ0FBVU4sTUFBVixLQUFxQixDQUF6QixFQUE0QixPQUFPSSxDQUFDLENBQUNaLFNBQUYsQ0FBWVEsTUFBTSxDQUFDdEQsTUFBbkIsRUFBMEIwRCxDQUFDLENBQUMxRCxNQUE1QixDQUFQO0FBQy9COztBQUNELFNBQU8sSUFBUDtBQUNIOztBQUVELElBQUk1QixTQUFTLEdBQUdzRCxPQUFPLENBQUMsT0FBRCxDQUF2Qjs7QUFDQXRELFNBQVMsQ0FBQy9ELFdBQVYsR0FBeUJtSSxnQkFBZ0IsQ0FBQyxhQUFELENBQXpDO0FBQ0FwRSxTQUFTLENBQUM5RCxPQUFWLEdBQXFCa0ksZ0JBQWdCLENBQUMsU0FBRCxDQUFyQztBQUNBcEUsU0FBUyxDQUFDN0QsU0FBVixHQUFzQmlJLGdCQUFnQixDQUFDLFlBQUQsQ0FBdEM7QUFDQXBFLFNBQVMsQ0FBQ3BDLFVBQVYsR0FBdUJxSCxVQUFVLENBQUMsa0JBQUQsQ0FBakM7QUFDQUgsZUFBZSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8v5YWx55So5qih5aGKanNcclxudmFyIFRvcFRpdGxlID0gbnVsbFxyXG52YXIgUHJpemVfQmFja0dyb3VuZCA9IG51bGxcclxudmFyIFdoaXRjaFByaXplX2luZGV4ID0gMDtcclxudmFyIFhNTFRpbWVMaW1pdCA9IGZhbHNlO1xyXG52YXIgZ2FtZXRpbWVsaW1pdCA9IDU7XHJcbnZhciBnYW1ldGltZUNvdW50RG93biA9IDBcclxudmFyIHJvdW5kID0gMTtcclxudmFyIERvbWFpbiA9IG51bGw7XHJcbnZhciBHYW1lU3RhdHVzTWVzc2FnZSA9IFwiY2xvc2VcIjtcclxudmFyIHJlc3VsdCA9IFwidGhhbmtzXCI7IFxyXG52YXIgcHJpemVfdG90YWwgPSAwO1xyXG52YXIgcm9sZSA9IG51bGw7XHJcbnZhciB3aW5uZXJfbmFtZSA9IFtdO1xyXG52YXIgd2lubmVyX2lkID0gW107XHJcbnZhciB3aW5uZXJfcGljdHVyZSA9IFtdO1xyXG52YXIgd2lubmVyX3Njb3JlID1bXTtcclxudmFyIHdpbm5lcl9UYWtlVGltZSA9IDBcclxudmFyIFdpbm5lckRhdGEgPSBudWxsO1xyXG52YXIgQWxyZWFkeVBsYXllZCA9IDA7IFxyXG52YXIgcGVvcGxlID0gMDtcclxudmFyIGFjdGl2aXR5X2lkID0gbnVsbDtcclxudmFyIGdhbWVfaWQgPSBudWxsO1xyXG52YXIgbGlmZnN0YXRlID0gbnVsbDtcclxudmFyIFVzZXJfaWQgPSBudWxsO1xyXG52YXIgVXNlcl9OYW1lID0gbnVsbDtcclxudmFyIFVzZXJfUGljdHVyZSA9IG51bGw7XHJcbnZhciBwcml6ZV9JRCA9IFtdO1xyXG52YXIgV2luX1RpbWUgPSBbXTtcclxudmFyIHByaXplX25hbWVfZ3Vlc3QgPSBbXTsgXHJcbnZhciBwcml6ZV9uYW1lX2hvc3QgPSBbXTtcclxudmFyIHByaXplX21ldGhvZCA9IFtdO1xyXG52YXIgZ2V0cHJpemVfcm91bmQgPSBbXVxyXG52YXIgcGFzc3dvcmQgPSBbXTtcclxudmFyIHByaXplX3BpY3R1cmUgPSBbXTtcclxudmFyIHByaXplX3R5cGUgPSBcIlwiO1xyXG52YXIgZXhjaGFuZ2VQcml6ZSA9W107XHJcbnZhciBHYW1lU3RhdHVzV1NfSG9zdCA9IG51bGxcclxudmFyIE51bWJlck9mTG90dGVyeVdTX0hvc3QgPSBudWxsXHJcbnZhciBOdW1iZXJPZlBlb3BsZV9HdWVzdCA9IG51bGw7XHJcbnZhciBTZXNzaW9uID0gbnVsbDsgXHJcbnZhciBDYW5ub3RKb2luR2FtZSA9IFwiXCI7XHJcbnZhciBBbGxvd1JlUHJpemUgPVwiXCI7XHJcbnZhciBDaGVja1JvbGUgPSBmYWxzZTtcclxudmFyIGNvbm5ldF93cyA9IGZhbHNlO1xyXG52YXIgR3Vlc3QxX0pvaW5fSlMgPVwiXCI7XHJcbnZhciBHYW1lTmFtZSA9IFwiXCJcclxudmFyIFNwYXduTmV3ZXN0V2lubmVyID0gZmFsc2U7XHJcbnZhciBzZXNzaW9uX2lkID0gXCJcIlxyXG52YXIgQ3VycmVudFJvdW5kID0gMDtcclxudmFyIEhvc3RXaW5kb3cgPSBcIm9wZW5cIjtcclxudmFyIFNjb3JlID0gMDtcclxudmFyIFNraW4gPSBcIlwiO1xyXG52YXIgTG9jYWxfSUQgPSBcIlwiO1xyXG52YXIgQmFja0dyb3VuZF9UaGVtZSA9XCJcIjtcclxudmFyIEFuc3dlclJlc3VsdCA9IFtdO1xyXG52YXIgUXVlc3Rpb24gPSBbXTtcclxudmFyIFF1ZXN0aW9uQ291bnQgPSAwO1xyXG52YXIgT3B0aW9ucyA9IFtdO1xyXG52YXIgUXVlc3Rpb25QaWN0dXJlID0gW107XHJcbnZhciBBbnN3ZXIgPSAwXHJcbnZhciBSYW5rID0gMDtcclxudmFyIG1vZGUgPSBcIlwiO1xyXG52YXIgY2hhbmNlID0gMDtcclxudmFyIFByaXplc3RhY2tfaWQgPSBbXTtcclxudmFyIFByaXplc3RhY2tfbmFtZSA9IFtdO1xyXG52YXIgUHJpemVzdGFja19waWN0dXJlID0gW107IFxyXG52YXIgR2FtZV9qcyA9IFwiXCI7XHJcbnZhciBnYW1lX3R5cGUgPSBcIlwiO1xyXG52YXIgUHJpemVTdGFmZnMgPSBcIlwiO1xyXG5cclxuXHJcbi8v6KaB5Zyo6Ieq5bex55qE6IWz5pys5bCO5Ye66K6K6YeP5omN6IO96K6T5Yil5Lq657m85om/ICBcclxubW9kdWxlLmV4cG9ydHMgPSB7ICAgIFxyXG4gICAgVG9wVGl0bGUsIC8v6YGK5oiy55qE5LiK5pa55qGGXHJcbiAgICBQcml6ZV9CYWNrR3JvdW5kLCAvL+eOqeWutuafpeeci+eNjuWTgeWgtOaZr+eahOiDjOaZr1xyXG4gICAgV2hpdGNoUHJpemVfaW5kZXgsIC8v5YWM5o+b55Wr6Z2i55W25YmN6YG455qE542O5ZOB57eo6JmfXHJcbiAgICBYTUxUaW1lTGltaXQsIC8v6YGK5oiy5piv5ZCm6ZmQ5pmCXHJcbiAgICBnYW1ldGltZWxpbWl0LCAvL+mBiuaIsumZkOWItueahOaZgumWk1xyXG4gICAgZ2FtZXRpbWVDb3VudERvd24sIC8v6YGK5oiy5YCS5pW46KiI5pmCXHJcbiAgICByb3VuZCwgLy/ovKrmrKFcclxuICAgIERvbWFpbiwgLy/nlbbliY3ntrLln59cclxuICAgIEdhbWVTdGF0dXNNZXNzYWdlLCAvL+mBiuaIsueLgOaFiyA6IG9wZW7jgIFzdGFydOOAgWVuZFxyXG4gICAgcmVzdWx0LCAvL+S4reeNjue1kOaenCB0aGFua3Pku6PooajmspLkuK3njY7vvIzlhbbku5bku6PooajkuK3njY5cclxuICAgIHByaXplX3RvdGFsLCAvL+eNjuWTgeaVuOmHj1xyXG4gICAgcm9sZSwgLy/nlKjmiLbop5LoibIo5Li75oyB5Lq6T1LnjqnlrrYpXHJcbiAgICBHYW1lX0luZm9ybWF0aW9uLCAvL+WPluW+l+mBiuaIsuioree9ruizh+ioilhNTFxyXG4gICAgUm9sZUNvbWZpcm0sIC8v5o6l5pS26KeS6Imy5Yik5pa35ZKM6Lyq5qyhWE1MXHJcbiAgICBMb3R0ZXJ5X0d1ZXN0LCAvL+eOqeWutuS4reeNjuWIpOaWt1hNTFxyXG4gICAgd2lubmVyX25hbWUsIC8v5Li75oyB5Lq657SA6YyE5b6X542O546p5a625ZCN5a2QXHJcbiAgICB3aW5uZXJfcGljdHVyZSwgLy/kuLvmjIHkurrntIDpjITlvpfnjY7njqnlrrbpoK3lg49cclxuICAgIHdpbm5lcl9pZCwgLy/kuLvmjIHkurrntIDpjITlvpfnjY7njqnlrrbovqjorZjnorxcclxuICAgIHdpbm5lcl9zY29yZSwgLy/kuLvmjIHkurrntIDpjITlvpfnjY7njqnlrrbliIbmlbhcclxuICAgIFdpbm5lckRhdGEsIC8v5Li75oyB5Lq6IEhvc3QzX1Nob3dOZXdXaW5uZXIganPohbPmnKxcclxuICAgIFdlYlNvY2tldF9OdW1iZXJPZlBlb3BsZV9HdWVzdCwvL+aWsOWinuS6uuWToSjnjqnlrrbnlKgpXHJcbiAgICBXZWJTb2NrZXRfTnVtYmVyT2ZQZW9wbGVfSG9zdCwvL+aWsOWinuS6uuWToSjkuLvmjIHkurrnlKgpXHJcbiAgICBXZWJTb2NrZXRfR2FtZVN0YXR1c19HdWVzdCwvL+mBiuaIsueLgOaFi+eahOioiuaBr+WCs+mAgSjnjqnlrrbnlKgpXHJcbiAgICBXZWJTb2NrZXRfR2FtZVN0YXR1c19Ib3N0LC8v6YGK5oiy54uA5oWL55qE6KiK5oGv5YKz6YCBKOS4u+aMgeS6uueUqClcclxuICAgIFdlYlNvY2tldF9VcERhdGVTY29yZV9HdWVzdCwvL+eOqeWutuavj+enkuWwh+WIhuaVuOWCs+e1puW+jOerryjnjqnlrrbnlKgpXHJcbiAgICBXZWJTb2NrZXRfTnVtYmVyT2ZMb3R0ZXJ5X0hvc3QsLy/kuLvmjIHkurrmlLbliLDmkJbntIXljIXliLDkuIDlrprmrKHmlbjnmoTnjqnlrrboqIrmga8o5Li75oyB5Lq655SoKVxyXG4gICAgV2ViU29ja2V0X051bWJlck9mTG90dGVyeV9TY29yZV9Ib3N0LCAvL+S4u+aMgeS6uuaUtuWIsOeOqeWutuWIhuaVuCjkuLvmjIHkurrnlKgpXHJcbiAgICBBbHJlYWR5UGxheWVkLCAvL+ipsui8quaYr+WQpueOqemBjlxyXG4gICAgcGVvcGxlLCAvL+S6uuaVuFxyXG4gICAgYWN0aXZpdHlfaWQsIC8v5rS75YuV6L6o6K2Y56K8XHJcbiAgICBnYW1lX2lkLCAvL+mBiuaIsui+qOitmOeivFxyXG4gICAgbGlmZnN0YXRlLFxyXG4gICAgVXNlcl9pZCwgLy/nlKjmiLbovqjorZjnorwo5Zue5YKz5b6M56uv55SoKVxyXG4gICAgVXNlcl9OYW1lLCAvL+eUqOaItuWQjeeosSjlm57lgrPlvoznq6/nlKgpXHJcbiAgICBVc2VyX1BpY3R1cmUsIC8v55So5oi26aCt5YOPKOWbnuWCs+W+jOerr+eUqClcclxuICAgIHByaXplX0lELCAvL+eNjuWTgei+qOitmOeivFxyXG4gICAgV2luX1RpbWUsIC8v5b6X542O5pmC6ZaTXHJcbiAgICBwcml6ZV9uYW1lX2d1ZXN0LCAvL+eNjuWTgeWQjeeosSjnjqnlrrblhYznjY7nlavpnaLpoa/npLopXHJcbiAgICBwcml6ZV9uYW1lX2hvc3QsIC8v542O5ZOB5ZCN56ixKOS4u+aMgeS6uue1kOeul+WgtOaZr+mhr+ekuilcclxuICAgIHByaXplX21ldGhvZCwgLy/njY7lk4HlhYzmj5vmlrnlvI9cclxuICAgIHBhc3N3b3JkLCAvL+eNjuWTgeWvhueivFxyXG4gICAgcHJpemVfcGljdHVyZSwgLy/njY7lk4HlnJbniYdcclxuICAgIGdldHByaXplX3JvdW5kLCAvL+WPluW+l+W+l+eNjueahOi8quasoVxyXG4gICAgZXhjaGFuZ2VQcml6ZSwgLy/njY7lk4HmmK/lkKblhYzmj5vpgY5cclxuICAgIEdhbWVTdGF0dXNXU19Ib3N0LCAvL+mWi+WVn+S4u+aMgeS6uumBiuaIsueLgOaFi+eahHdzXHJcbiAgICBOdW1iZXJPZkxvdHRlcnlXU19Ib3N0LCAvL+mWi+WVn+S4u+aMgeS6uuaOpeaUtuS4reeNjuS6uueahHdzIFxyXG4gICAgTnVtYmVyT2ZQZW9wbGVfR3Vlc3QsIC8v6ZaL5ZWf546p5a625Yqg5YWl6YGK5oiy5Z+36KGM55qEd3NcclxuICAgIFNlc3Npb24sIC8v5aC05qyhXHJcbiAgICBDYW5ub3RKb2luR2FtZSwgLy/kuI3og73lj4PliqDpgYrmiLLnmoTpjK/oqqToqIrmga9cclxuICAgIEFsbG93UmVQcml6ZSwgLy/lj6/ku6Xph43opIfkuK3njY5cclxuICAgIENoZWNrUm9sZSwgLy/mmK/lkKbmqqLmn6Xlrozop5LoibJcclxuICAgIGNvbm5ldF93cywgLy/mmK/lkKbmnInpgKPmjqXliLB3ZWJzb2NrZXRcclxuICAgIEd1ZXN0MV9Kb2luX0pTLCAvL+eOqeWutiBHdWVzdDFfSm9pbiBqc+iFs+acrFxyXG4gICAgR2FtZU5hbWUsIC8v6YGK5oiy5ZCN56ixXHJcbiAgICBTcGF3bk5ld2VzdFdpbm5lciwgLy/mmK/lkKbmnInpoa/npLrmnIDmlrDlhankvY3lvpfnjY7kurpcclxuICAgIHNlc3Npb25faWQsIC8v55So5oi2Y29va2ll5YC8XHJcbiAgICBDdXJyZW50Um91bmQsIC8v55W25YmN6Lyq5qyhKOeUqOaWvOS4u+aMgeS6uue1kOeul+mggemdouS9v+eUqO+8jOWboOeCuumWi+Wni+mBiuaIsuacg+a4heepuuS6uuaVuO+8jOi8quasoSArIDEpXHJcbiAgICBIb3N0V2luZG93LCAvL+S4u+aMgeS6uuWcqOmBiuaIsuS4reaYr+WQpumXnOmWieimlueql1xyXG4gICAgU2NvcmUsIC8v546p5a625YiG5pW4XHJcbiAgICBTa2luLCAvL+eUqOaItumBuOaTh+eahOinkuiJsuearuiGmlxyXG4gICAgTG9jYWxfSUQsXHJcbiAgICBCYWNrR3JvdW5kX1RoZW1lLCAvL+eUqOaItumBuOaTh+eahOS4u+mhjOiDjOaZr1xyXG4gICAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3llY/nrZTpgYrmiLLlj4PmlbhcclxuICAgIC8vPT09PT3kuLvmjIHkuro9PT09PVxyXG4gICAgQW5zd2VyUmVzdWx0LCAvLyDllY/nrZTpgYrmiLIg5q+P5YCL6YG46aCF55qE5Lq65pW4XHJcbiAgICBRdWVzdGlvbiwgLy/llY/nrZTpgYrmiLIg5a2Y5pS+5ZWP6aGM6Zmj5YiXXHJcbiAgICBRdWVzdGlvbkNvdW50LCAvL+WVj+etlOmBiuaIsiDoqIjmlbjnm67liY3mmK/lk6rlgIvllY/poYxcclxuICAgIE9wdGlvbnMsIC8v5ZWP562U6YGK5oiyIOWVj+mhjOmBuOmgheaWh+Wtl+mZo+WIl1xyXG4gICAgUXVlc3Rpb25QaWN0dXJlLCAvL+WVj+etlOmBiuaIsiDkuLvmjIHkurrpgYrmiLLmmYLnlKjlvpfllY/poYzlnJbniYfpmaPliJdcclxuICAgIEFuc3dlciwgLy/llY/nrZTpgYrmiLIg5pys6Lyq5ZWP6aGM55qE562U5qGIXHJcbiAgICAvLz09PT09546p5a62PT09PT1cclxuICAgIFJhbmssIC8v5ZWP562U5ZWP6aGMIOeOqeWutuaOkuWQjVxyXG4gICAgd2lubmVyX1Rha2VUaW1lLCAvL+WVj+etlOmBiuaIsiDnjqnlrrbogJfmmYJcclxuICAgIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5bm46YGL6Lyq55uk5Y+D5pW4XHJcbiAgICBtb2RlLCAgLy/nm67liY3mqKHlvI9cclxuICAgIGNoYW5jZSwgLy/nm67liY3mir3njY7mrKHmlbhcclxuICAgIFByaXplX0luZnJvbWF0aW9uLFxyXG4gICAgcHJpemVfdHlwZSxcclxuICAgIFByaXplc3RhY2tfaWQsXHJcbiAgICBQcml6ZXN0YWNrX25hbWUsXHJcbiAgICBQcml6ZXN0YWNrX3BpY3R1cmUsXHJcbiAgICBHYW1lX2pzLFxyXG4gICAgZ2FtZV90eXBlLFxyXG4gICAgUHJpemVTdGFmZnMsXHJcbn07XHJcblxyXG4vL+WPluW+l+mBiuaIsuioree9ruizh+ioilxyXG5mdW5jdGlvbiBHYW1lX0luZm9ybWF0aW9uKCl7IFxyXG4gICAgdmFyIHVybCA9ICdodHRwczovLycrIGdhbWVNb2RlbC5sb2NhbF9JRCArJy92MS9pbnRlcmFjdC9nYW1lLycgKyBnYW1lTW9kZWwuR2FtZU5hbWUgKyAnP2dhbWVfaWQ9JyArIGdhbWVNb2RlbC5nYW1lX2lkO1xyXG4gICAgdmFyIHJlZHBhY2sgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgXHJcbiAgICByZWRwYWNrLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICAgIHJlZHBhY2sub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChyZWRwYWNrLnJlYWR5U3RhdGUgPT0gNCAmJiAocmVkcGFjay5zdGF0dXMgPj0gMjAwICYmIHJlZHBhY2suc3RhdHVzIDw9IDIwNykpIHsgLy/mmK/lkKbpgKPmjqXmiJDlip9cclxuICAgICAgICAgICAgdmFyIHRleHQgPSByZWRwYWNrLnJlc3BvbnNlVGV4dFxyXG4gICAgICAgICAgICB2YXIgWE1Mb2JqZWN0ID0gSlNPTi5wYXJzZShyZWRwYWNrLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5TZXNzaW9uID0gWE1Mb2JqZWN0LmRhdGEudGl0bGU7XHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5BbGxvd1JlUHJpemUgPSBYTUxvYmplY3QuZGF0YS5hbGxvdztcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLmdhbWVfdHlwZSA9IFhNTG9iamVjdC5kYXRhLmdhbWVfdHlwZVxyXG4gICAgICAgICAgICAvL+aYr+WQpuaciemZkOWItumBiuaIsuaZgumWk1xyXG4gICAgICAgICAgICBpZihYTUxvYmplY3QuZGF0YS5saW1pdF90aW1lID09IFwib3BlblwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTW9kZWwuWE1MVGltZUxpbWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5nYW1ldGltZWxpbWl0ID0gWE1Mb2JqZWN0LmRhdGEuc2Vjb25kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgZ2FtZU1vZGVsLlhNTFRpbWVMaW1pdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gXHJcbiAgICB9O1xyXG4gICAgcmVkcGFjay5zZW5kKCk7XHJcbn1cclxuXHJcbi8v5o6l5pS26KeS6Imy5Yik5pa35ZKM6Lyq5qyhWE1MXHJcbmZ1bmN0aW9uIFJvbGVDb21maXJtKCl7XHJcbiAgICB2YXIgdXJsID0gJ2h0dHBzOi8vJysgZ2FtZU1vZGVsLmxvY2FsX0lEICsnL3YxL3VzZXI/YWN0aXZpdHlfaWQ9JyArIGdhbWVNb2RlbC5hY3Rpdml0eV9pZCArICcmZ2FtZV9pZD0nKyBnYW1lTW9kZWwuZ2FtZV9pZCArICcmZ2FtZT0nKyBnYW1lTW9kZWwuR2FtZU5hbWUgKyAnJnNlc3Npb25faWQ9JysgZ2FtZU1vZGVsLnNlc3Npb25faWQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgdmFyIFJvbGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIFJvbGUub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpOyAvL0dFVOWPluW+l+OAgVBPU1TlgrPpgIHjgIFQVVTmm7TmlLlcclxuICAgIFJvbGUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChSb2xlLnJlYWR5U3RhdGUgPT0gNCAmJiAoUm9sZS5zdGF0dXMgPj0gMjAwICYmIFJvbGUuc3RhdHVzIDw9IDIwNykpIHsgLy/mmK/lkKbpgKPmjqXmiJDlip9cclxuICAgICAgICAgICAgdmFyIFhNTG9iamVjdCA9IEpTT04ucGFyc2UoUm9sZS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAvL+mWi+Wni+aOpeaUtuioiuaBr1xyXG4gICAgICAgICAgICBnYW1lTW9kZWwucm9sZSA9IFhNTG9iamVjdC5kYXRhLlVzZXIucm9sZVxyXG4gICAgICAgICAgICBnYW1lTW9kZWwuVXNlcl9pZCA9IFhNTG9iamVjdC5kYXRhLlVzZXIudXNlcl9pZDtcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLlVzZXJfTmFtZSA9IFhNTG9iamVjdC5kYXRhLlVzZXIubmFtZTtcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLlVzZXJfUGljdHVyZSA9IFhNTG9iamVjdC5kYXRhLlVzZXIuYXZhdGFyO1xyXG4gICAgICAgICAgICBnYW1lTW9kZWwucm91bmQgPSBYTUxvYmplY3QuZGF0YS5HYW1lLnJvdW5kO1xyXG4gICAgICAgICAgICBnYW1lTW9kZWwucHJpemVfdG90YWwgPSBYTUxvYmplY3QuZGF0YS5HYW1lLmFtb3VudDtcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLmNoYW5jZSA9IFhNTG9iamVjdC5kYXRhLlRpbWVzO1xyXG4gICAgICAgICAgICBnYW1lTW9kZWwuUHJpemVTdGFmZnMgPSBYTUxvYmplY3QuZGF0YS5Qcml6ZVN0YWZmc1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCBYTUxvYmplY3QuZGF0YS5Qcml6ZVN0YWZmcy5sZW5ndGg7IGkrKykvL+WPluW+l+eNjuWTgeizh+ioilxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZ2FtZU1vZGVsLnByaXplX0lEW2ldID0gWE1Mb2JqZWN0LmRhdGEuUHJpemVTdGFmZnNbaV0uaWQ7IC8v542O5ZOB57eo6JmfXHJcbiAgICAgICAgICAgICAgZ2FtZU1vZGVsLnByaXplX25hbWVfZ3Vlc3RbaV0gPSBYTUxvYmplY3QuZGF0YS5Qcml6ZVN0YWZmc1tpXS5wcml6ZV9uYW1lOyAvL+eNjuWTgeWQjeeosVxyXG4gICAgICAgICAgICAgIGdhbWVNb2RlbC5wcml6ZV9tZXRob2RbaV0gPSBYTUxvYmplY3QuZGF0YS5Qcml6ZVN0YWZmc1tpXS5tZXRob2Q7IC8v542O5ZOB5YWM5o+b5pa55byPXHJcbiAgICAgICAgICAgICAgZ2FtZU1vZGVsLnBhc3N3b3JkW2ldID0gWE1Mb2JqZWN0LmRhdGEuUHJpemVTdGFmZnNbaV0ucGFzc3dvcmQ7IC8v5YWM542O5a+G56K8XHJcbiAgICAgICAgICAgICAgZ2FtZU1vZGVsLldpbl9UaW1lW2ldID0gWE1Mb2JqZWN0LmRhdGEuUHJpemVTdGFmZnNbaV0ud2luX3RpbWU7IC8v5oq95Yiw542O5ZOB55qE5pmC6ZaTXHJcbiAgICAgICAgICAgICAgZ2FtZU1vZGVsLmdldHByaXplX3JvdW5kW2ldID0gWE1Mb2JqZWN0LmRhdGEuUHJpemVTdGFmZnNbaV0ucm91bmQ7IC8v5oq95Yiw542O5ZOB55qE6Lyq5qyhXHJcbiAgICAgICAgICAgICAgZ2FtZU1vZGVsLnByaXplX3BpY3R1cmVbaV0gPSBYTUxvYmplY3QuZGF0YS5Qcml6ZVN0YWZmc1tpXS5waWN0dXJlOyAvL+eNjuWTgeeFp+eJh1xyXG4gICAgICAgICAgICAgIGdhbWVNb2RlbC5leGNoYW5nZVByaXplW2ldID0gWE1Mb2JqZWN0LmRhdGEuUHJpemVTdGFmZnNbaV0uc3RhdHVzOyAvL+aYr+WQpuWFjOaPm1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5DaGVja1JvbGUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKFJvbGUucmVhZHlTdGF0ZSA9PSA0ICYmIFJvbGUuc3RhdHVzID49IDQwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBYTUxvYmplY3QgPSBKU09OLnBhcnNlKFJvbGUucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLkNoZWNrUm9sZSA9IHRydWVcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLkNhbm5vdEpvaW5HYW1lID0gWE1Mb2JqZWN0Lm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUm9sZS5zZW5kKCk7XHJcbn1cclxuXHJcbi8v5p+l6Kmi5omA5pyJ542O5ZOBWE1MXHJcbmZ1bmN0aW9uIFByaXplX0luZnJvbWF0aW9uKCl7XHJcbiAgICB2YXIgdXJsID0gJ2h0dHBzOi8vJysgZ2FtZU1vZGVsLmxvY2FsX0lEICsnL3YxL2ludGVyYWN0L2dhbWUvJysgZ2FtZU1vZGVsLkdhbWVOYW1lICsnL3ByaXplP2dhbWVfaWQ9JyArIGdhbWVNb2RlbC5nYW1lX2lkOyAgICAgICAgICAgICAgICBcclxuICAgIHZhciBQcml6ZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgUHJpemUub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpOyAvL0dFVOWPluW+l+OAgVBPU1TlgrPpgIHjgIFQVVTmm7TmlLlcclxuICAgIFByaXplLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoUHJpemUucmVhZHlTdGF0ZSA9PSA0ICYmIChQcml6ZS5zdGF0dXMgPj0gMjAwICYmIFByaXplLnN0YXR1cyA8PSAyMDcpKSB7IC8v5piv5ZCm6YCj5o6l5oiQ5YqfXHJcbiAgICAgICAgICAgIHZhciBYTUxvYmplY3QgPSBKU09OLnBhcnNlKFByaXplLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIC8v6ZaL5aeL5o6l5pS26KiK5oGvXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IFhNTG9iamVjdC5kYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZ2FtZU1vZGVsLlByaXplc3RhY2tfaWRbaV0gPSBYTUxvYmplY3QuZGF0YVtpXS5wcml6ZV9pZDsgLy/njY7lk4Hnt6jomZ9cclxuICAgICAgICAgICAgICBnYW1lTW9kZWwuUHJpemVzdGFja19uYW1lW2ldID0gWE1Mb2JqZWN0LmRhdGFbaV0ubmFtZTsgLy/njY7lk4HlkI3nqLFcclxuICAgICAgICAgICAgICBnYW1lTW9kZWwuUHJpemVzdGFja19waWN0dXJlW2ldID0gWE1Mb2JqZWN0LmRhdGFbaV0ucGljdHVyZTsgLy/njY7lk4HnhafniYdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnYW1lTW9kZWwuR2FtZV9qcy5TcGF3blByaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKFByaXplLnJlYWR5U3RhdGUgPT0gNCAmJiBQcml6ZS5zdGF0dXMgPj0gNDAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIFhNTG9iamVjdCA9IEpTT04ucGFyc2UoUHJpemUucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLkNhbm5vdEpvaW5HYW1lID0gWE1Mb2JqZWN0Lm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUHJpemUuc2VuZCgpO1xyXG59XHJcblxyXG4vL+eOqeWutuS4reeNjuWIpOaWt1hNTFxyXG5mdW5jdGlvbiBMb3R0ZXJ5X0d1ZXN0KCl7XHJcbiAgICB2YXIgdXJsID0gJ2h0dHBzOi8vJysgZ2FtZU1vZGVsLmxvY2FsX0lEICsnL3YxL2dhbWUvbHVja3k/YWN0aXZpdHlfaWQ9JysgZ2FtZU1vZGVsLmFjdGl2aXR5X2lkICsnJmdhbWVfaWQ9JyArIGdhbWVNb2RlbC5nYW1lX2lkICsgJyZnYW1lPScrIGdhbWVNb2RlbC5HYW1lTmFtZSArICcmc2Vzc2lvbl9pZD0nKyBnYW1lTW9kZWwuc2Vzc2lvbl9pZCArICcmbW9kZT0nICsgZ2FtZU1vZGVsLm1vZGU7ICAgICAgICAgICAgICAgIFxyXG4gICAgdmFyIExvdHRlcnkgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIExvdHRlcnkub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpOyAvL0dFVOWPluW+l+OAgVBPU1TlgrPpgIHjgIFQVVTmm7TmlLlcclxuICAgIExvdHRlcnkub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChMb3R0ZXJ5LnJlYWR5U3RhdGUgPT0gNCAmJiAoTG90dGVyeS5zdGF0dXMgPj0gMjAwICYmIExvdHRlcnkuc3RhdHVzIDw9IDIwNykpIHsgLy/mmK/lkKbpgKPmjqXmiJDlip9cclxuICAgICAgICAgICAgdmFyIFhNTG9iamVjdCA9IEpTT04ucGFyc2UoTG90dGVyeS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAvL+mWi+Wni+aOpeaUtuioiuaBr1xyXG4gICAgICAgICAgICBnYW1lTW9kZWwucmVzdWx0ID0gWE1Mb2JqZWN0LmRhdGEuUHJpemVTdGFmZi5tZXRob2Q7ICAvL+aKveeNjue1kOaenCDkuI3nrYnmlrx0aGFua3Pku6PooajkuK3njY7vvIx0aGFua3PluLbooajmnKrkuK3njY5cclxuICAgICAgICAgICAgaWYoZ2FtZU1vZGVsLkdhbWVOYW1lID09IFwibG90dGVyeVwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTW9kZWwucHJpemVfSUQgPSBYTUxvYmplY3QuZGF0YS5Qcml6ZVN0YWZmLnByaXplX2lkOyAvL+eNjuWTgee3qOiZn1xyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGVsLnByaXplX25hbWVfZ3Vlc3QgPSBYTUxvYmplY3QuZGF0YS5Qcml6ZVN0YWZmLnByaXplX25hbWU7IC8v542O5ZOB5ZCN56ixXHJcbiAgICAgICAgICAgICAgICBnYW1lTW9kZWwucHJpemVfcGljdHVyZSA9IFhNTG9iamVjdC5kYXRhLlByaXplU3RhZmYucGljdHVyZTsgLy/njY7lk4HnhafniYdcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5wcml6ZV90eXBlID0gIFhNTG9iamVjdC5kYXRhLlByaXplU3RhZmYucHJpemVfdHlwZVxyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGVsLlByaXplU3RhZmZzID0gWE1Mb2JqZWN0LmRhdGEuUHJpemVTdGFmZnNcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5HYW1lX2pzLmxldHRvcmV5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCBYTUxvYmplY3QuZGF0YS5Qcml6ZVN0YWZmcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgZ2FtZU1vZGVsLnByaXplX0lEW2ldID0gWE1Mb2JqZWN0LmRhdGEuUHJpemVTdGFmZnNbaV0uaWQ7IC8v542O5ZOB57eo6JmfXHJcbiAgICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5wcml6ZV9uYW1lX2d1ZXN0W2ldID0gWE1Mb2JqZWN0LmRhdGEuUHJpemVTdGFmZnNbaV0ucHJpemVfbmFtZTsgLy/njY7lk4HlkI3nqLFcclxuICAgICAgICAgICAgICAgICAgZ2FtZU1vZGVsLnByaXplX21ldGhvZFtpXSA9IFhNTG9iamVjdC5kYXRhLlByaXplU3RhZmZzW2ldLm1ldGhvZDsgLy/njY7lk4HlhYzmj5vmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgZ2FtZU1vZGVsLnBhc3N3b3JkW2ldID0gWE1Mb2JqZWN0LmRhdGEuUHJpemVTdGFmZnNbaV0ucGFzc3dvcmQ7IC8v5YWM542O5a+G56K8XHJcbiAgICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5XaW5fVGltZVtpXSA9IFhNTG9iamVjdC5kYXRhLlByaXplU3RhZmZzW2ldLndpbl90aW1lOyAvL+aKveWIsOeNjuWTgeeahOaZgumWk1xyXG4gICAgICAgICAgICAgICAgICBnYW1lTW9kZWwuZ2V0cHJpemVfcm91bmRbaV0gPSBYTUxvYmplY3QuZGF0YS5Qcml6ZVN0YWZmc1tpXS5yb3VuZDsgLy/mir3liLDnjY7lk4HnmoTovKrmrKFcclxuICAgICAgICAgICAgICAgICAgZ2FtZU1vZGVsLnByaXplX3BpY3R1cmVbaV0gPSBYTUxvYmplY3QuZGF0YS5Qcml6ZVN0YWZmc1tpXS5waWN0dXJlOyAvL+eNjuWTgeeFp+eJh1xyXG4gICAgICAgICAgICAgICAgICBnYW1lTW9kZWwuZXhjaGFuZ2VQcml6ZVtpXSA9IFhNTG9iamVjdC5kYXRhLlByaXplU3RhZmZzW2ldLnN0YXR1czsgLy/mmK/lkKblhYzmj5tcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChMb3R0ZXJ5LnJlYWR5U3RhdGUgPT0gNCAmJiBMb3R0ZXJ5LnN0YXR1cyA+PSA0MDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgWE1Mb2JqZWN0ID0gSlNPTi5wYXJzZShMb3R0ZXJ5LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5DYW5ub3RKb2luR2FtZSA9IFhNTG9iamVjdC5tZXNzYWdlO1xyXG4gICAgICAgICAgICBpZihnYW1lTW9kZWwuR2FtZU5hbWUgPT0gXCJsb3R0ZXJ5XCIpIGdhbWVNb2RlbC5HYW1lX2pzLmxldHRvcmV5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgTG90dGVyeS5zZW5kKCk7XHJcbn1cclxuXHJcbi8v5bCH546p5a625Lq65pW45paw5aKe5YiwV2Vic29ja2V044CB5o6l5pS2546p5a625Lit542O57SA6YyEXHJcbmZ1bmN0aW9uIFdlYlNvY2tldF9OdW1iZXJPZlBlb3BsZV9HdWVzdCh0aW1lLHNlbmRtZXNzYWdlKXtcclxuICAgIGlmKHNlbmRtZXNzYWdlID09IGZhbHNlKVxyXG4gICAge1xyXG4gICAgICAgIGdhbWVNb2RlbC5OdW1iZXJPZlBlb3BsZV9HdWVzdCA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9cIiArIGdhbWVNb2RlbC5sb2NhbF9JRCArIFwiL3dzL3YxL2dhbWUvc3RhZmY/YWN0aXZpdHlfaWQ9XCIrIGdhbWVNb2RlbC5hY3Rpdml0eV9pZCArIFwiJmdhbWVfaWQ9XCIrIGdhbWVNb2RlbC5nYW1lX2lkICsgXCImZ2FtZT1cIisgZ2FtZU1vZGVsLkdhbWVOYW1lKTtcclxuICAgICAgICAvL+mAo+e3mumWi+WVn+aZguinuOeZvCBcclxuICAgICAgICBnYW1lTW9kZWwuTnVtYmVyT2ZQZW9wbGVfR3Vlc3Qub25vcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvL+mAo+e3mumMr+iqpOaZglxyXG4gICAgICAgIGdhbWVNb2RlbC5OdW1iZXJPZlBlb3BsZV9HdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+mAo+e3mumXnOmWieaZguinuOeZvCAgXHJcbiAgICAgICAgZ2FtZU1vZGVsLk51bWJlck9mUGVvcGxlX0d1ZXN0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYoZ2FtZU1vZGVsLkNhbm5vdEpvaW5HYW1lICE9IFwi6Yyv6KqkOiDoqbLloLTmrKHpgYrmiLLkuI3lhYHoqLHph43opIfkuK3njY7vvIzmgqjlt7LkuK3njY7vvIznhKHms5Xlj4PliqDkuIvkuIDovKrpgYrmiLJcIikgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgIGdhbWVNb2RlbC5XZWJTb2NrZXRfTnVtYmVyT2ZQZW9wbGVfR3Vlc3QoMTAwMCxmYWxzZSlcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgLy/nrYnlvoUx56eS77yM562J6YCa6YGT5omT6ZaL5YaN5Z+36KGM5o6o6YCB6LOH5paZ57WmV2Vic29ja2V0XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgIGlmKGdhbWVNb2RlbC5OdW1iZXJPZlBlb3BsZV9HdWVzdC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTil7XHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5OdW1iZXJPZlBlb3BsZV9HdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IGdhbWVNb2RlbC5Vc2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGdhbWVNb2RlbC5Vc2VyX05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBnYW1lTW9kZWwuVXNlcl9QaWN0dXJlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgR2FtZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmQ6IChnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPT0gXCJzdGFydFwiIHx8IGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9PSBcImdhbWluZ1wiKSA/IGdhbWVNb2RlbC5yb3VuZCAtIDEgOiBnYW1lTW9kZWwucm91bmQgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICBpZihnYW1lTW9kZWwuQ2Fubm90Sm9pbkdhbWUgIT0gXCLpjK/oqqQ6IOipsuWgtOasoemBiuaIsuS4jeWFgeiosemHjeikh+S4reeNju+8jOaCqOW3suS4reeNju+8jOeEoeazleWPg+WKoOS4i+S4gOi8qumBiuaIslwiKSBnYW1lTW9kZWwuR3Vlc3QxX0pvaW5fSlMuQ29ubmV0RmFpbCgpO1xyXG4gICAgICAgIGVsc2UgZ2FtZU1vZGVsLkd1ZXN0MV9Kb2luX0pTLkNvbm5ldFN1Y2Nlc3MoKTtcclxuICAgICAgfVxyXG4gICAgIH0sdGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mjqXmlLbliLDoqIrmga/mmYLop7jnmbwgIFxyXG4gICAgZ2FtZU1vZGVsLk51bWJlck9mUGVvcGxlX0d1ZXN0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSkgLy/lsIflvoznq6/os4fmlpnmlL7lhaVvYmplY3RcclxuICAgICAgICBnYW1lTW9kZWwuQ2Fubm90Sm9pbkdhbWUgPSBvYmplY3QuZXJyb3I7XHJcbiAgICAgICAgZ2FtZU1vZGVsLkFscmVhZHlQbGF5ZWQgPSBvYmplY3QuUHJpemVTdGFmZi5pZDsgIC8v5piv5ZCm5pyJ5pCW6YGOIDDku6PooajpgoTmspLnjqnpgY4g5LiN562J5pa8MOS7o+ihqOeOqemBjuS6hlxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IG9iamVjdC5Qcml6ZVN0YWZmcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnYW1lTW9kZWwucHJpemVfSURbaV0gPSBvYmplY3QuUHJpemVTdGFmZnNbaV0uaWQ7IC8v542O5ZOB57eo6JmfXHJcbiAgICAgICAgICBnYW1lTW9kZWwucHJpemVfbmFtZV9ndWVzdFtpXSA9IG9iamVjdC5Qcml6ZVN0YWZmc1tpXS5wcml6ZV9uYW1lOyAvL+eNjuWTgeWQjeeosVxyXG4gICAgICAgICAgZ2FtZU1vZGVsLnByaXplX21ldGhvZFtpXSA9IG9iamVjdC5Qcml6ZVN0YWZmc1tpXS5tZXRob2Q7IC8v542O5ZOB5YWM5o+b5pa55byPXHJcbiAgICAgICAgICBnYW1lTW9kZWwucGFzc3dvcmRbaV0gPSBvYmplY3QuUHJpemVTdGFmZnNbaV0ucGFzc3dvcmQ7IC8v5YWM542O5a+G56K8XHJcbiAgICAgICAgICBnYW1lTW9kZWwuV2luX1RpbWVbaV0gPSBvYmplY3QuUHJpemVTdGFmZnNbaV0ud2luX3RpbWU7IC8v5oq95Yiw542O5ZOB55qE5pmC6ZaTXHJcbiAgICAgICAgICBnYW1lTW9kZWwuZ2V0cHJpemVfcm91bmRbaV0gPSBvYmplY3QuUHJpemVTdGFmZnNbaV0ucm91bmQ7IC8v5oq95Yiw542O5ZOB55qE6Lyq5qyhXHJcbiAgICAgICAgICBnYW1lTW9kZWwucHJpemVfcGljdHVyZVtpXSA9IG9iamVjdC5Qcml6ZVN0YWZmc1tpXS5waWN0dXJlOyAvL+eNjuWTgeeFp+eJh1xyXG4gICAgICAgICAgZ2FtZU1vZGVsLmV4Y2hhbmdlUHJpemVbaV0gPSBvYmplY3QuUHJpemVTdGFmZnNbaV0uc3RhdHVzOyAvL+aYr+WQpuWFjOaPm1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lTW9kZWwuR3Vlc3QxX0pvaW5fSlMuQ29ubmV0U3VjY2VzcygpO1xyXG4gICAgfTtcclxufSBcclxuXHJcbi8v5Li75oyB5Lq65b6eV2Vic29ja2V05Y+W5b6X54++5Zyo5Lq65pW4XHJcbmZ1bmN0aW9uIFdlYlNvY2tldF9OdW1iZXJPZlBlb3BsZV9Ib3N0KCl7XHJcbiAgICAvL+WPluW+l1dlYnNvY2tldOmAmuioiue2suWdgFxyXG4gICAgbGV0IHdzID0gbmV3IFdlYlNvY2tldChcIndzczovL1wiICsgZ2FtZU1vZGVsLmxvY2FsX0lEICsgXCIvd3MvdjEvZ2FtZS9wZW9wbGU/YWN0aXZpdHlfaWQ9XCIrIGdhbWVNb2RlbC5hY3Rpdml0eV9pZCArJyZnYW1lX2lkPScgKyBnYW1lTW9kZWwuZ2FtZV9pZCArICcmZ2FtZT0nKyBnYW1lTW9kZWwuR2FtZU5hbWUpICAgICAgICAgICAgIFxyXG4gICAgLy/pgKPnt5rplovllZ/mmYLop7jnmbwgXHJcbiAgICB3cy5vbm9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIH07XHJcbiAgICAvL+aOpeaUtuWIsOioiuaBr+aZguinuOeZvCAgXHJcbiAgICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG4gICAgICAgIHZhciBvYmplY3QgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpIC8v5bCH5b6M56uv6LOH5paZ5pS+5YWlb2JqZWN0XHJcbiAgICAgICAgZ2FtZU1vZGVsLnBlb3BsZSA9IG9iamVjdC5HYW1lLnBlb3BsZTtcclxuICAgICAgICBnYW1lTW9kZWwucm91bmQgPSBvYmplY3QuR2FtZS5yb3VuZDtcclxuICAgIH07XHJcbiAgICAvL+mAo+e3mumMr+iqpOaZglxyXG4gICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgfTtcclxuICAgIC8v6YCj57ea6Zec6ZaJ5pmC6Ke455m8ICBcclxuICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBnYW1lTW9kZWwuV2ViU29ja2V0X051bWJlck9mUGVvcGxlX0hvc3QoKTtcclxuICAgIH07XHJcbn0gXHJcblxyXG4vL+eOqeWutuW+nldlYnNvY2tldOWPluW+l+mWi+Wni+OAgeWGjeS+huS4gOi8quOAgemXnOmWieeahOioiuaBryAoc3RhcnTjgIFhZ2FpbuOAgWNsb3NlKVxyXG5mdW5jdGlvbiBXZWJTb2NrZXRfR2FtZVN0YXR1c19HdWVzdCgpe1xyXG4gICAgLy/lj5blvpdXZWJzb2NrZXTpgJroqIrntrLlnYBcclxuICAgIGxldCB3cyA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9cIiArIGdhbWVNb2RlbC5sb2NhbF9JRCArIFwiL3dzL3YxL2dhbWUvc3RhdHVzL2d1ZXN0P2FjdGl2aXR5X2lkPVwiKyBnYW1lTW9kZWwuYWN0aXZpdHlfaWQgKycmZ2FtZV9pZD0nICsgZ2FtZU1vZGVsLmdhbWVfaWQgKyAnJmdhbWU9JysgZ2FtZU1vZGVsLkdhbWVOYW1lKVxyXG4gICAgLy/pgKPnt5rplovllZ/mmYLop7jnmbwgXHJcbiAgICB3cy5vbm9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIH07XHJcbiAgICAvL+aOpeaUtuWIsOioiuaBr+aZguinuOeZvCAgXHJcbiAgICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG4gICAgICAgIHZhciBvYmplY3QgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXHJcbiAgICAgICAgZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID0gb2JqZWN0LkdhbWUuc3RhdHVzO1xyXG4gICAgICAgIGdhbWVNb2RlbC5yb3VuZCA9IG9iamVjdC5HYW1lLnJvdW5kO1xyXG4gICAgICAgIGdhbWVNb2RlbC5nYW1ldGltZUNvdW50RG93biA9IG9iamVjdC5HYW1lLnNlY29uZCA7XHJcbiAgICB9O1xyXG4gICAgLy/pgKPnt5rpjK/oqqTmmYJcclxuICAgIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIH07XHJcbiAgICAvL+mAo+e3mumXnOmWieaZguinuOeZvCAgXHJcbiAgICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9HYW1lU3RhdHVzX0d1ZXN0KClcclxuICAgIH07XHJcbn0gXHJcblxyXG4vL+S4u+aMgeS6uuWwh+mWi+Wni+OAgeWGjeS4gOi8quOAgemXnOmWieeahOioiuaBr+WCs+WIsFdlYnNvY2tldCAoc3RhcnTjgIFhZ2FpbuOAgWNsb3NlKVxyXG5mdW5jdGlvbiBXZWJTb2NrZXRfR2FtZVN0YXR1c19Ib3N0KHN0YXR1cyx0aW1lKXtcclxuICAgIC8v6YCj57ea6ZaL5ZWf5pmC6Ke455m8IFxyXG4gICAgZ2FtZU1vZGVsLkdhbWVTdGF0dXNXU19Ib3N0Lm9ub3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgfTtcclxuICAgIC8v5o6l5pS25Yiw6KiK5oGv5pmC6Ke455m8ICBcclxuICAgIGdhbWVNb2RlbC5HYW1lU3RhdHVzV1NfSG9zdC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG4gICAgICAgIHZhciBvYmplY3QgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXHJcbiAgICAgICAgZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID0gb2JqZWN0LkdhbWUuc3RhdHVzO1xyXG4gICAgICAgIGdhbWVNb2RlbC5jb25uZXRfd3MgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8v6YCj57ea6Yyv6Kqk5pmCXHJcbiAgICBnYW1lTW9kZWwuR2FtZVN0YXR1c1dTX0hvc3Qub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgfTtcclxuICAgIC8v6YCj57ea6Zec6ZaJ5pmC6Ke455m8ICBcclxuICAgIGdhbWVNb2RlbC5HYW1lU3RhdHVzV1NfSG9zdC5vbmNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZ2FtZU1vZGVsLmNvbm5ldF93cyA9IGZhbHNlO1xyXG4gICAgICAgIGdhbWVNb2RlbC5HYW1lU3RhdHVzV1NfSG9zdCA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9cIiArIGdhbWVNb2RlbC5sb2NhbF9JRCArIFwiL3dzL3YxL2dhbWUvc3RhdHVzL2hvc3Q/YWN0aXZpdHlfaWQ9XCIrIGdhbWVNb2RlbC5hY3Rpdml0eV9pZCArJyZnYW1lX2lkPScgKyBnYW1lTW9kZWwuZ2FtZV9pZCArICcmZ2FtZT0nKyBnYW1lTW9kZWwuR2FtZU5hbWUpOyAvL+mWi+WVn+mBiuaIsueLgOaFi3dzO1xyXG4gICAgICAgIGdhbWVNb2RlbC5XZWJTb2NrZXRfR2FtZVN0YXR1c19Ib3N0KHN0YXR1cywxMDAwKVxyXG4gICAgfTtcclxuICAgIC8v562J5b6FMeenku+8jOetiemAmumBk+aJk+mWi+WGjeWft+ihjOaOqOmAgeizh+aWmee1pldlYnNvY2tldFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGdhbWVNb2RlbC5HYW1lU3RhdHVzV1NfSG9zdC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTil7XHJcbiAgICAgICAgICAgIGlmKHN0YXR1cyA9PSBcImdhbWluZ1wiICYmIGdhbWVNb2RlbC5YTUxUaW1lTGltaXQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGVsLkdhbWVTdGF0dXNXU19Ib3N0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kOiBnYW1lTW9kZWwucm91bmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZDogZ2FtZU1vZGVsLmdhbWV0aW1lQ291bnREb3duLFxyXG4gICAgICAgICAgICAgICAgICAgIH19KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnYW1lTW9kZWwuR2FtZVN0YXR1c1dTX0hvc3Quc2VuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmQ6IHN0YXR1cyA9PSBcImVuZFwiPyBnYW1lTW9kZWwucm91bmQgLSAxIDogIGdhbWVNb2RlbC5yb3VuZCxcclxuICAgICAgICAgICAgICAgICAgICB9fSkpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLmNvbm5ldF93cyA9IGZhbHNlO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LHRpbWUpO1xyXG59IFxyXG5cclxuLy/njqnlrrbnq6/mr4/np5LlgrPpgIHliIbmlbjntablvoznq69cclxuZnVuY3Rpb24gV2ViU29ja2V0X1VwRGF0ZVNjb3JlX0d1ZXN0KCl7XHJcbiAgICBsZXQgd3MgPSBuZXcgV2ViU29ja2V0KFwid3NzOi8vXCIgKyBnYW1lTW9kZWwubG9jYWxfSUQgKyBcIi93cy92MS9nYW1lL3Njb3JlP2FjdGl2aXR5X2lkPVwiKyBnYW1lTW9kZWwuYWN0aXZpdHlfaWQgKycmZ2FtZV9pZD0nICsgZ2FtZU1vZGVsLmdhbWVfaWQgKyAnJmdhbWU9JysgZ2FtZU1vZGVsLkdhbWVOYW1lKTtcclxuXHJcbiAgICAvL+mAo+e3mumWi+WVn+aZguinuOeZvCBcclxuICAgIHdzLm9ub3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgfTtcclxuICAgIC8v5o6l5pS25Yiw6KiK5oGv5pmC6Ke455m8ICBcclxuICAgIHdzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBnYW1lTW9kZWwgPSByZXF1aXJlKFwiTW9kZWxcIik7XHJcbiAgICAgICAgdmFyIG9iamVjdCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcclxuICAgIH07XHJcbiAgICAvL+mAo+e3mumMr+iqpOaZglxyXG4gICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgfTtcclxuICAgIC8v6YCj57ea6Zec6ZaJ5pmC6Ke455m8ICBcclxuICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBpZihnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UgPT0gXCJnYW1pbmdcIilnYW1lTW9kZWwuV2ViU29ja2V0X1VwRGF0ZVNjb3JlX0d1ZXN0KClcclxuICAgICAgICBlbHNlIGNsZWFySW50ZXJ2YWwoSW50ZXJ2YWwpO1xyXG4gICAgfTtcclxuICAgIHZhciBJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgIGlmKHdzLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKXtcclxuICAgICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBHYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBnYW1lTW9kZWwuR2FtZVN0YXR1c01lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmQ6IGdhbWVNb2RlbC5yb3VuZCAtIDEgLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlOiBnYW1lTW9kZWwuU2NvcmVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiBnYW1lTW9kZWwuVXNlcl9pZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9LCA1MDApO1xyXG59IFxyXG5cclxuLy/kuLvmjIHkurrlvp5XZWJzb2NrZXTlj5blvpfnjqnlrrbkuK3njY7os4fmlplcclxuZnVuY3Rpb24gV2ViU29ja2V0X051bWJlck9mTG90dGVyeV9Ib3N0KCl7XHJcbiAgICAvL+mAo+e3mumWi+WVn+aZguinuOeZvCB6eFxyXG4gICAgZ2FtZU1vZGVsLk51bWJlck9mTG90dGVyeVdTX0hvc3Qub25vcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLy/mjqXmlLbliLDoqIrmga/mmYLop7jnmbwgIFxyXG4gICAgZ2FtZU1vZGVsLk51bWJlck9mTG90dGVyeVdTX0hvc3Qub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGdhbWVNb2RlbCA9IHJlcXVpcmUoXCJNb2RlbFwiKTtcclxuICAgICAgICB2YXIgb2JqZWN0ID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxyXG4gICAgICAgIGdhbWVNb2RlbC5wcml6ZV90b3RhbCA9IG9iamVjdC5HYW1lLmFtb3VudCAvL+eNjuWTgee4veaVuOmHj1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IG9iamVjdC5Qcml6ZVN0YWZmcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGdhbWVNb2RlbC53aW5uZXJfaWQuaW5jbHVkZXMob2JqZWN0LlByaXplU3RhZmZzW2ldLmlkKSA9PSBmYWxzZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGVsLndpbm5lcl9pZFtpXSA9IG9iamVjdC5Qcml6ZVN0YWZmc1tpXS5pZDsgLy/lvpfnjY7ogIVpZFxyXG4gICAgICAgICAgICAgICAgZ2FtZU1vZGVsLndpbm5lcl9uYW1lW2ldID0gb2JqZWN0LlByaXplU3RhZmZzW2ldLm5hbWUgLy/lvpfnjY7kurrlkI3nqLFcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlbC53aW5uZXJfcGljdHVyZVtpXSA9IG9iamVjdC5Qcml6ZVN0YWZmc1tpXS5hdmF0YXIgLy/lvpfnjY7kurrnhafniYdcclxuICAgICAgICAgICAgICAgIGdhbWVNb2RlbC5wcml6ZV9uYW1lX2hvc3RbaV0gPSBvYmplY3QuUHJpemVTdGFmZnNbaV0ucHJpemVfbmFtZS8v542O5ZOB5ZCN56ixXHJcbiAgICAgICAgICAgICAgICBnYW1lTW9kZWwuV2lubmVyRGF0YS5TcGF3bk5ld1dpbm5lcigpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlICE9IFwiZW5kXCIgJiYgZ2FtZU1vZGVsLndpbm5lcl9uYW1lLmxlbmd0aCA+IDAgJiYgZ2FtZU1vZGVsLlNwYXduTmV3ZXN0V2lubmVyID09IHRydWUpIGdhbWVNb2RlbC5XaW5uZXJEYXRhLk5ld2VzdFdpbm5lcigpO1xyXG4gICAgICAgIGVsc2UgaWYoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwiZW5kXCIpIGdhbWVNb2RlbC5OdW1iZXJPZkxvdHRlcnlXU19Ib3N0LmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gICAgLy/pgKPnt5rpjK/oqqTmmYJcclxuICAgIGdhbWVNb2RlbC5OdW1iZXJPZkxvdHRlcnlXU19Ib3N0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIH07XHJcbiAgICAvL+mAo+e3mumXnOmWieaZguinuOeZvCAgXHJcbiAgICBnYW1lTW9kZWwuTnVtYmVyT2ZMb3R0ZXJ5V1NfSG9zdC5vbmNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwic3RhcnRcIikge1xyXG4gICAgICAgICAgICBnYW1lTW9kZWwuTnVtYmVyT2ZMb3R0ZXJ5V1NfSG9zdCA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9cIiArIGdhbWVNb2RlbC5sb2NhbF9JRCArIFwiL3dzL3YxL2dhbWUvd2lubmluZy9zdGFmZj9hY3Rpdml0eV9pZD1cIisgZ2FtZU1vZGVsLmFjdGl2aXR5X2lkICsnJmdhbWVfaWQ9JyArIGdhbWVNb2RlbC5nYW1lX2lkICsgJyZnYW1lPScrIGdhbWVNb2RlbC5HYW1lTmFtZSk7IC8v6ZaL5ZWf5pu05paw5b6X542O5Lq655qEd3NcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLldlYlNvY2tldF9OdW1iZXJPZkxvdHRlcnlfSG9zdCgpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBcclxuXHJcbiAgLy/kuLvmjIHkurrlvp5XZWJzb2NrZXTlj5blvpfnjqnlrrbkuK3njY7os4fmlplcclxuICBmdW5jdGlvbiBXZWJTb2NrZXRfTnVtYmVyT2ZMb3R0ZXJ5X1Njb3JlX0hvc3QoKXtcclxuICAgIC8v6YCj57ea6ZaL5ZWf5pmC6Ke455m8IFxyXG4gICAgZ2FtZU1vZGVsLk51bWJlck9mTG90dGVyeVdTX0hvc3Qub25vcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLy/mjqXmlLbliLDoqIrmga/mmYLop7jnmbwgIFxyXG4gICAgZ2FtZU1vZGVsLk51bWJlck9mTG90dGVyeVdTX0hvc3Qub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGdhbWVNb2RlbCA9IHJlcXVpcmUoXCJNb2RlbFwiKTtcclxuICAgICAgICB2YXIgb2JqZWN0ID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxyXG4gICAgICAgIGdhbWVNb2RlbC5wcml6ZV90b3RhbCA9IG9iamVjdC5HYW1lLmFtb3VudCAvL+eNjuWTgee4veaVuOmHj1xyXG4gICAgICAgIGdhbWVNb2RlbC5XaW5uZXJEYXRhLkNsZWFyUmFuaygpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IG9iamVjdC5Qcml6ZVN0YWZmcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC53aW5uZXJfaWRbaV0gPSBvYmplY3QuUHJpemVTdGFmZnNbaV0uaWQ7IC8v5b6X542O6ICFaWRcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLndpbm5lcl9uYW1lW2ldID0gb2JqZWN0LlByaXplU3RhZmZzW2ldLm5hbWUgLy/lvpfnjY7kurrlkI3nqLFcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLndpbm5lcl9waWN0dXJlW2ldID0gb2JqZWN0LlByaXplU3RhZmZzW2ldLmF2YXRhciAvL+W+l+eNjuS6uueFp+eJh1xyXG4gICAgICAgICAgICBnYW1lTW9kZWwucHJpemVfbmFtZV9ob3N0W2ldID0gb2JqZWN0LlByaXplU3RhZmZzW2ldLnByaXplX25hbWUvL+eNjuWTgeWQjeeosVxyXG4gICAgICAgICAgICBnYW1lTW9kZWwud2lubmVyX3Njb3JlW2ldID0gb2JqZWN0LlByaXplU3RhZmZzW2ldLnNjb3JlLy/lvpfnjY7kurrliIbmlbhcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLldpbm5lckRhdGEuU3Bhd25OZXdXaW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZ2FtZU1vZGVsLkdhbWVTdGF0dXNNZXNzYWdlID09IFwiY2FsY3VsYXRlXCIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2FtZU1vZGVsLldpbm5lckRhdGEuTmV4dFNlbmNlKCk7XHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5OdW1iZXJPZkxvdHRlcnlXU19Ib3N0LmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8v6YCj57ea6Yyv6Kqk5pmCXHJcbiAgICBnYW1lTW9kZWwuTnVtYmVyT2ZMb3R0ZXJ5V1NfSG9zdC5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLy/pgKPnt5rpl5zplonmmYLop7jnmbwgIFxyXG4gICAgZ2FtZU1vZGVsLk51bWJlck9mTG90dGVyeVdTX0hvc3Qub25jbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmKGdhbWVNb2RlbC5HYW1lU3RhdHVzTWVzc2FnZSA9PSBcImdhbWluZ1wiKSB7XHJcbiAgICAgICAgICAgIGdhbWVNb2RlbC5OdW1iZXJPZkxvdHRlcnlXU19Ib3N0ID0gbmV3IFdlYlNvY2tldChcIndzczovL1wiICsgZ2FtZU1vZGVsLmxvY2FsX0lEICsgXCIvd3MvdjEvZ2FtZS93aW5uaW5nL3N0YWZmP2FjdGl2aXR5X2lkPVwiKyBnYW1lTW9kZWwuYWN0aXZpdHlfaWQgKycmZ2FtZV9pZD0nICsgZ2FtZU1vZGVsLmdhbWVfaWQgKyAnJmdhbWU9JysgZ2FtZU1vZGVsLkdhbWVOYW1lKTsgLy/plovllZ/mm7TmlrDlvpfnjY7kurrnmoR3c1xyXG4gICAgICAgICAgICBnYW1lTW9kZWwuV2lubmVyRGF0YS5XZWJTb2NrZXRfTnVtYmVyT2ZMb3R0ZXJ5X0hvc3QoKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcblxyXG4vL+WPluW+l+WLleaFi+WPg+aVuFxyXG5mdW5jdGlvbiBnZXRRdWVyeVZhcmlhYmxlKHZhcmlhYmxlKXtcclxuICAgIHZhciBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xyXG4gICAgdmFyIHZhcnMgPSBxdWVyeS5zcGxpdChcIiZcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhcnMubGVuZ3RoOyBpKyspIFxyXG4gICAge1xyXG4gICAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgaWYocGFpclswXSA9PSB2YXJpYWJsZSkgcmV0dXJuIHBhaXJbMV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXCJcIik7XHJcbn1cclxuXHJcbi8v6JmV55CGbGVMaWZmU3RhdGXlj5blvpdhY3Rpdml0eV9pZOWSjGdhbWVfaWRcclxuZnVuY3Rpb24gSGFuZGxlTGlmZlN0YXRlKCl7XHJcbiAgICBpZiAoZ2FtZU1vZGVsLmFjdGl2aXR5X2lkID09IFwiXCIgfHwgZ2FtZU1vZGVsLmdhbWVfaWQgPT0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBpZiAoZ2FtZU1vZGVsLmxpZmZzdGF0ZS5sZW5ndGggPiAxMykgZ2FtZU1vZGVsLmxpZmZzdGF0ZSA9IGdhbWVNb2RlbC5saWZmc3RhdGUuc3Vic3RyKDE3ICwgZ2FtZU1vZGVsLmxpZmZzdGF0ZS5sZW5ndGgpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChnYW1lTW9kZWwubGlmZnN0YXRlLmluY2x1ZGVzKFwiJTI2Z2FtZV9pZCUzRFwiKSkgLy8lM2bmmK8/ICAlMjbmmK8mICAlM2TmmK89XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IGdhbWVNb2RlbC5saWZmc3RhdGUuc3BsaXQoXCIlMjZnYW1lX2lkJTNEXCIpXHJcbiAgICAgICAgZ2FtZU1vZGVsLmFjdGl2aXR5X2lkID0gcGFyYW1zWzBdXHJcbiAgICAgICAgaWYocGFyYW1zLmxlbmd0aCA9PSAyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXNbMV0uc3BsaXQoXCIjbXN0X2NoYWxsZW5nZVwiKVxyXG4gICAgICAgICAgIGdhbWVNb2RlbC5nYW1lX2lkID0gcGFyYW1zWzBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL+WPluW+l0Nvb2tpZeizh+aWmVxyXG5mdW5jdGlvbiByZWFkQ29va2llKG5hbWUpIHtcclxuICAgIHZhciBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XHJcbiAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTsgLy/lj5blvpdjb29raWXkuKbnlKg75Y2A5YiG6ZaL5L6G5YSy5a2Y5ZyoY2FcclxuICAgIGZvcih2YXIgaSA9IDA7aSA8IGNhLmxlbmd0aDtpKyspIHtcclxuICAgICAgICB2YXIgYyA9IGNhW2ldO1xyXG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufSAgXHJcblxyXG52YXIgZ2FtZU1vZGVsID0gcmVxdWlyZShcIk1vZGVsXCIpO1xyXG5nYW1lTW9kZWwuYWN0aXZpdHlfaWQgPSAgZ2V0UXVlcnlWYXJpYWJsZShcImFjdGl2aXR5X2lkXCIpXHJcbmdhbWVNb2RlbC5nYW1lX2lkID0gIGdldFF1ZXJ5VmFyaWFibGUoXCJnYW1lX2lkXCIpXHJcbmdhbWVNb2RlbC5saWZmc3RhdGUgPSBnZXRRdWVyeVZhcmlhYmxlKFwibGlmZi5zdGF0ZVwiKVxyXG5nYW1lTW9kZWwuc2Vzc2lvbl9pZCA9IHJlYWRDb29raWUoJ2NoYXRyb29tX3Nlc3Npb24nKVxyXG5IYW5kbGVMaWZmU3RhdGUoKTtcclxuXHJcbiAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19