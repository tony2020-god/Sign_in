///共用模塊js
var TopTitle = null
var Prize_BackGround = null
var WhitchPrize_index = 0;
var XMLTimeLimit = false;
var gametimelimit = 5;
var gametimeCountDown = 0
var round = 1;
var Domain = null;
var GameStatusMessage = "close";
var result = "thanks"; 
var prize_total = 0;
var role = null;
var winner_name = [];
var winner_id = [];
var winner_picture = [];
var winner_score =[];
var winner_TakeTime = 0
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
var getprize_round = []
var password = [];
var prize_picture = [];
var prize_type = "";
var exchangePrize =[];
var GameStatusWS_Host = null
var NumberOfLotteryWS_Host = null
var NumberOfPeople_Guest = null;
var Session = null; 
var CannotJoinGame = "";
var AllowRePrize ="";
var CheckRole = false;
var connet_ws = false;
var Guest1_Join_JS ="";
var GameName = ""
var SpawnNewestWinner = false;
var session_id = ""
var CurrentRound = 0;
var HostWindow = "open";
var Score = 0;
var Skin = "";
var Local_ID = "";
var BackGround_Theme ="";
var AnswerResult = [];
var Question = [];
var QuestionCount = 0;
var Options = [];
var QuestionPicture = [];
var Answer = 0
var Rank = 0;
var mode = "";
var chance = 0;
var Prizestack_id = [];
var Prizestack_name = [];
var Prizestack_picture = []; 
var Game_js = "";
var game_type = "";
var PrizeStaffs = "";


//要在自己的腳本導出變量才能讓別人繼承  
module.exports = {    
    TopTitle, //遊戲的上方框
    Prize_BackGround, //玩家查看獎品場景的背景
    WhitchPrize_index, //兌換畫面當前選的獎品編號
    XMLTimeLimit, //遊戲是否限時
    gametimelimit, //遊戲限制的時間
    gametimeCountDown, //遊戲倒數計時
    round, //輪次
    Domain, //當前網域
    GameStatusMessage, //遊戲狀態 : open、start、end
    result, //中獎結果 thanks代表沒中獎，其他代表中獎
    prize_total, //獎品數量
    role, //用戶角色(主持人OR玩家)
    Game_Information, //取得遊戲設置資訊XML
    RoleComfirm, //接收角色判斷和輪次XML
    Lottery_Guest, //玩家中獎判斷XML
    winner_name, //主持人紀錄得獎玩家名子
    winner_picture, //主持人紀錄得獎玩家頭像
    winner_id, //主持人紀錄得獎玩家辨識碼
    winner_score, //主持人紀錄得獎玩家分數
    WinnerData, //主持人 Host3_ShowNewWinner js腳本
    WebSocket_NumberOfPeople_Guest,//新增人員(玩家用)
    WebSocket_NumberOfPeople_Host,//新增人員(主持人用)
    WebSocket_GameStatus_Guest,//遊戲狀態的訊息傳送(玩家用)
    WebSocket_GameStatus_Host,//遊戲狀態的訊息傳送(主持人用)
    WebSocket_UpDateScore_Guest,//玩家每秒將分數傳給後端(玩家用)
    WebSocket_NumberOfLottery_Host,//主持人收到搖紅包到一定次數的玩家訊息(主持人用)
    WebSocket_NumberOfLottery_Score_Host, //主持人收到玩家分數(主持人用)
    AlreadyPlayed, //該輪是否玩過
    people, //人數
    activity_id, //活動辨識碼
    game_id, //遊戲辨識碼
    liffstate,
    User_id, //用戶辨識碼(回傳後端用)
    User_Name, //用戶名稱(回傳後端用)
    User_Picture, //用戶頭像(回傳後端用)
    prize_ID, //獎品辨識碼
    Win_Time, //得獎時間
    prize_name_guest, //獎品名稱(玩家兌獎畫面顯示)
    prize_name_host, //獎品名稱(主持人結算場景顯示)
    prize_method, //獎品兌換方式
    password, //獎品密碼
    prize_picture, //獎品圖片
    getprize_round, //取得得獎的輪次
    exchangePrize, //獎品是否兌換過
    GameStatusWS_Host, //開啟主持人遊戲狀態的ws
    NumberOfLotteryWS_Host, //開啟主持人接收中獎人的ws 
    NumberOfPeople_Guest, //開啟玩家加入遊戲執行的ws
    Session, //場次
    CannotJoinGame, //不能參加遊戲的錯誤訊息
    AllowRePrize, //可以重複中獎
    CheckRole, //是否檢查完角色
    connet_ws, //是否有連接到websocket
    Guest1_Join_JS, //玩家 Guest1_Join js腳本
    GameName, //遊戲名稱
    SpawnNewestWinner, //是否有顯示最新兩位得獎人
    session_id, //用戶cookie值
    CurrentRound, //當前輪次(用於主持人結算頁面使用，因為開始遊戲會清空人數，輪次 + 1)
    HostWindow, //主持人在遊戲中是否關閉視窗
    Score, //玩家分數
    Skin, //用戶選擇的角色皮膚
    Local_ID,
    BackGround_Theme, //用戶選擇的主題背景
    ///--------------------------------------------------------------問答遊戲參數
    //=====主持人=====
    AnswerResult, // 問答遊戲 每個選項的人數
    Question, //問答遊戲 存放問題陣列
    QuestionCount, //問答遊戲 計數目前是哪個問題
    Options, //問答遊戲 問題選項文字陣列
    QuestionPicture, //問答遊戲 主持人遊戲時用得問題圖片陣列
    Answer, //問答遊戲 本輪問題的答案
    //=====玩家=====
    Rank, //問答問題 玩家排名
    winner_TakeTime, //問答遊戲 玩家耗時
    ///--------------------------------------------------------------幸運輪盤參數
    mode,  //目前模式
    chance, //目前抽獎次數
    Prize_Infromation,
    prize_type,
    Prizestack_id,
    Prizestack_name,
    Prizestack_picture,
    Game_js,
    game_type,
    PrizeStaffs,
};

//取得遊戲設置資訊
function Game_Information(){ 
    var url = 'https://'+ gameModel.local_ID +'/v1/interact/game/' + gameModel.GameName + '?game_id=' + gameModel.game_id;
    var redpack = new XMLHttpRequest(); 
    redpack.open("GET", url, true);
    redpack.onreadystatechange = function () {
        if (redpack.readyState == 4 && (redpack.status >= 200 && redpack.status <= 207)) { //是否連接成功
            var text = redpack.responseText
            var XMLobject = JSON.parse(redpack.responseText);
            gameModel.Session = XMLobject.data.title;
            gameModel.AllowRePrize = XMLobject.data.allow;
            gameModel.game_type = XMLobject.data.game_type
            //是否有限制遊戲時間
            if(XMLobject.data.limit_time == "open")
            {
                gameModel.XMLTimeLimit = true;
                gameModel.gametimelimit = XMLobject.data.second;
            }
            else gameModel.XMLTimeLimit = false;
        } 
    };
    redpack.send();
}

//接收角色判斷和輪次XML
function RoleComfirm(){
    var url = 'https://'+ gameModel.local_ID +'/v1/user?activity_id=' + gameModel.activity_id + '&game_id='+ gameModel.game_id + '&game='+ gameModel.GameName + '&session_id='+ gameModel.session_id;                
    var Role = new XMLHttpRequest();
    Role.open("GET", url, true); //GET取得、POST傳送、PUT更改
    Role.onreadystatechange = function () {
        if (Role.readyState == 4 && (Role.status >= 200 && Role.status <= 207)) { //是否連接成功
            var XMLobject = JSON.parse(Role.responseText);
            //開始接收訊息
            gameModel.role = XMLobject.data.User.role
            gameModel.User_id = XMLobject.data.User.user_id;
            gameModel.User_Name = XMLobject.data.User.name;
            gameModel.User_Picture = XMLobject.data.User.avatar;
            gameModel.round = XMLobject.data.Game.round;
            gameModel.prize_total = XMLobject.data.Game.amount;
            gameModel.chance = XMLobject.data.Times;
            gameModel.PrizeStaffs = XMLobject.data.PrizeStaffs
            for(var i = 0;i < XMLobject.data.PrizeStaffs.length; i++)//取得獎品資訊
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
            gameModel.CheckRole = true
        }
        else if (Role.readyState == 4 && Role.status >= 400)
        {
            var XMLobject = JSON.parse(Role.responseText);
            gameModel.CheckRole = true
            gameModel.CannotJoinGame = XMLobject.message;
        }
    }
    Role.send();
}

//查詢所有獎品XML
function Prize_Infromation(){
    var url = 'https://'+ gameModel.local_ID +'/v1/interact/game/'+ gameModel.GameName +'/prize?game_id=' + gameModel.game_id;                
    var Prize = new XMLHttpRequest();
    Prize.open("GET", url, true); //GET取得、POST傳送、PUT更改
    Prize.onreadystatechange = function () {
        if (Prize.readyState == 4 && (Prize.status >= 200 && Prize.status <= 207)) { //是否連接成功
            var XMLobject = JSON.parse(Prize.responseText);
            //開始接收訊息
            for(var i = 0;i < XMLobject.data.length; i++)
            {
              gameModel.Prizestack_id[i] = XMLobject.data[i].prize_id; //獎品編號
              gameModel.Prizestack_name[i] = XMLobject.data[i].name; //獎品名稱
              gameModel.Prizestack_picture[i] = XMLobject.data[i].picture; //獎品照片
            }
            gameModel.Game_js.SpawnPrize();
        }
        else if (Prize.readyState == 4 && Prize.status >= 400)
        {
            var XMLobject = JSON.parse(Prize.responseText);
            gameModel.CannotJoinGame = XMLobject.message;
        }
    }
    Prize.send();
}

//玩家中獎判斷XML
function Lottery_Guest(){
    var url = 'https://'+ gameModel.local_ID +'/v1/game/lucky?activity_id='+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName + '&session_id='+ gameModel.session_id + '&mode=' + gameModel.mode;                
    var Lottery = new XMLHttpRequest();
    Lottery.open("GET", url, true); //GET取得、POST傳送、PUT更改
    Lottery.onreadystatechange = function () {
        if (Lottery.readyState == 4 && (Lottery.status >= 200 && Lottery.status <= 207)) { //是否連接成功
            var XMLobject = JSON.parse(Lottery.responseText);
            //開始接收訊息
            gameModel.result = XMLobject.data.PrizeStaff.method;  //抽獎結果 不等於thanks代表中獎，thanks帶表未中獎
            if(gameModel.GameName == "lottery")
            {
                gameModel.prize_ID = XMLobject.data.PrizeStaff.prize_id; //獎品編號
                gameModel.prize_name_guest = XMLobject.data.PrizeStaff.prize_name; //獎品名稱
                gameModel.prize_picture = XMLobject.data.PrizeStaff.picture; //獎品照片
                gameModel.prize_type =  XMLobject.data.PrizeStaff.prize_type
                gameModel.PrizeStaffs = XMLobject.data.PrizeStaffs
                gameModel.Game_js.lettorey();
            }
            else
            {
                for(var i = 0;i < XMLobject.data.PrizeStaffs.length; i++)
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
            }
        }
        else if (Lottery.readyState == 4 && Lottery.status >= 400)
        {
            var XMLobject = JSON.parse(Lottery.responseText);
            gameModel.CannotJoinGame = XMLobject.message;
            if(gameModel.GameName == "lottery") gameModel.Game_js.lettorey();
        }
    }
    Lottery.send();
}

//將玩家人數新增到Websocket、接收玩家中獎紀錄
function WebSocket_NumberOfPeople_Guest(time,sendmessage){
    if(sendmessage == false)
    {
        gameModel.NumberOfPeople_Guest = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/staff?activity_id="+ gameModel.activity_id + "&game_id="+ gameModel.game_id + "&game="+ gameModel.GameName);
        //連線開啟時觸發 
        gameModel.NumberOfPeople_Guest.onopen = function (event) {
        };
        
        //連線錯誤時
        gameModel.NumberOfPeople_Guest.onerror = function (event) {
        };
        //連線關閉時觸發  
        gameModel.NumberOfPeople_Guest.onclose = function (event) {
            if(gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") 
            {
             gameModel.WebSocket_NumberOfPeople_Guest(1000,false)
            }  
        };
    }
    else
    {
      //等待1秒，等通道打開再執行推送資料給Websocket
      setTimeout(function(){
       if(gameModel.NumberOfPeople_Guest.readyState === WebSocket.OPEN){
            gameModel.NumberOfPeople_Guest.send(JSON.stringify({
                User:{
                    user_id: gameModel.User_id,
                    name: gameModel.User_Name,
                    avatar: gameModel.User_Picture
                },
                Game:{
                    round: (gameModel.GameStatusMessage == "start" || gameModel.GameStatusMessage == "gaming") ? gameModel.round - 1 : gameModel.round 
                }
            }));
      }
      else
      {
        if(gameModel.CannotJoinGame != "錯誤: 該場次遊戲不允許重複中獎，您已中獎，無法參加下一輪遊戲") gameModel.Guest1_Join_JS.ConnetFail();
        else gameModel.Guest1_Join_JS.ConnetSuccess();
      }
     },time);
    }

    //接收到訊息時觸發  
    gameModel.NumberOfPeople_Guest.onmessage = function (event) {
        var gameModel = require("Model");
        var object = JSON.parse(event.data) //將後端資料放入object
        gameModel.CannotJoinGame = object.error;
        gameModel.AlreadyPlayed = object.PrizeStaff.id;  //是否有搖過 0代表還沒玩過 不等於0代表玩過了
        for(var i = 0;i < object.PrizeStaffs.length; i++)
        {
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
} 

//主持人從Websocket取得現在人數
function WebSocket_NumberOfPeople_Host(){
    //取得Websocket通訊網址
    let ws = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/people?activity_id="+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName)             
    //連線開啟時觸發 
    ws.onopen = function (event) {
    };
    //接收到訊息時觸發  
    ws.onmessage = function (event) {
        var gameModel = require("Model");
        var object = JSON.parse(event.data) //將後端資料放入object
        gameModel.people = object.Game.people;
        gameModel.round = object.Game.round;
    };
    //連線錯誤時
    ws.onerror = function (event) {
    };
    //連線關閉時觸發  
    ws.onclose = function (event) {
        gameModel.WebSocket_NumberOfPeople_Host();
    };
} 

//玩家從Websocket取得開始、再來一輪、關閉的訊息 (start、again、close)
function WebSocket_GameStatus_Guest(){
    //取得Websocket通訊網址
    let ws = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/status/guest?activity_id="+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName)
    //連線開啟時觸發 
    ws.onopen = function (event) {
    };
    //接收到訊息時觸發  
    ws.onmessage = function (event) {
        var gameModel = require("Model");
        var object = JSON.parse(event.data)
        gameModel.GameStatusMessage = object.Game.status;
        gameModel.round = object.Game.round;
        gameModel.gametimeCountDown = object.Game.second ;
    };
    //連線錯誤時
    ws.onerror = function (event) {
    };
    //連線關閉時觸發  
    ws.onclose = function (event) {
        gameModel.WebSocket_GameStatus_Guest()
    };
} 

//主持人將開始、再一輪、關閉的訊息傳到Websocket (start、again、close)
function WebSocket_GameStatus_Host(status,time){
    //連線開啟時觸發 
    gameModel.GameStatusWS_Host.onopen = function (event) {
    };
    //接收到訊息時觸發  
    gameModel.GameStatusWS_Host.onmessage = function (event) {
        var gameModel = require("Model");
        var object = JSON.parse(event.data)
        gameModel.GameStatusMessage = object.Game.status;
        gameModel.connet_ws = true;
    };
    //連線錯誤時
    gameModel.GameStatusWS_Host.onerror = function (event) {
    };
    //連線關閉時觸發  
    gameModel.GameStatusWS_Host.onclose = function (event) {
        gameModel.connet_ws = false;
        gameModel.GameStatusWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/status/host?activity_id="+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName); //開啟遊戲狀態ws;
        gameModel.WebSocket_GameStatus_Host(status,1000)
    };
    //等待1秒，等通道打開再執行推送資料給Websocket
    setTimeout(function(){
        if(gameModel.GameStatusWS_Host.readyState === WebSocket.OPEN){
            if(status == "gaming" && gameModel.XMLTimeLimit == true)
            {
                gameModel.GameStatusWS_Host.send(JSON.stringify({
                    Game: {
                        status: status,
                        round: gameModel.round,
                        second: gameModel.gametimeCountDown,
                    }}));
            }
            else
            {
                gameModel.GameStatusWS_Host.send(JSON.stringify({
                    Game: {
                        status: status,
                        round: status == "end"? gameModel.round - 1 :  gameModel.round,
                    }}));
            }  
        }
        else
        {
            gameModel.connet_ws = false;
        } 
    },time);
} 

//玩家端每秒傳送分數給後端
function WebSocket_UpDateScore_Guest(){
    let ws = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/score?activity_id="+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName);

    //連線開啟時觸發 
    ws.onopen = function (event) {
    };
    //接收到訊息時觸發  
    ws.onmessage = function (event) {
        var gameModel = require("Model");
        var object = JSON.parse(event.data)
    };
    //連線錯誤時
    ws.onerror = function (event) {
    };
    //連線關閉時觸發  
    ws.onclose = function (event) {
        if(gameModel.GameStatusMessage == "gaming")gameModel.WebSocket_UpDateScore_Guest()
        else clearInterval(Interval);
    };
    var Interval = setInterval(function(){ 
        if(ws.readyState === WebSocket.OPEN){
            ws.send(JSON.stringify({
                Game: {
                    status: gameModel.GameStatusMessage,
                    round: gameModel.round - 1 ,
                    score: gameModel.Score
                },
                User:{
                    user_id: gameModel.User_id,
                },
            }));
        }
    }, 500);
} 

//主持人從Websocket取得玩家中獎資料
function WebSocket_NumberOfLottery_Host(){
    //連線開啟時觸發 zx
    gameModel.NumberOfLotteryWS_Host.onopen = function (event) {
    };
    //接收到訊息時觸發  
    gameModel.NumberOfLotteryWS_Host.onmessage = function (event) {
        var gameModel = require("Model");
        var object = JSON.parse(event.data)
        gameModel.prize_total = object.Game.amount //獎品總數量
        for(var i = 0;i < object.PrizeStaffs.length; i++)
        {
            if(gameModel.winner_id.includes(object.PrizeStaffs[i].id) == false)
            {
                gameModel.winner_id[i] = object.PrizeStaffs[i].id; //得獎者id
                gameModel.winner_name[i] = object.PrizeStaffs[i].name //得獎人名稱
                gameModel.winner_picture[i] = object.PrizeStaffs[i].avatar //得獎人照片
                gameModel.prize_name_host[i] = object.PrizeStaffs[i].prize_name//獎品名稱
                gameModel.WinnerData.SpawnNewWinner();
            }  
        }
        if(gameModel.GameStatusMessage != "end" && gameModel.winner_name.length > 0 && gameModel.SpawnNewestWinner == true) gameModel.WinnerData.NewestWinner();
        else if(gameModel.GameStatusMessage == "end") gameModel.NumberOfLotteryWS_Host.close();
    };
    //連線錯誤時
    gameModel.NumberOfLotteryWS_Host.onerror = function (event) {
    };
    //連線關閉時觸發  
    gameModel.NumberOfLotteryWS_Host.onclose = function (event) {
        if(gameModel.GameStatusMessage == "start") {
            gameModel.NumberOfLotteryWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/winning/staff?activity_id="+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName); //開啟更新得獎人的ws
            gameModel.WebSocket_NumberOfLottery_Host()
        }
    };
} 

  //主持人從Websocket取得玩家中獎資料
  function WebSocket_NumberOfLottery_Score_Host(){
    //連線開啟時觸發 
    gameModel.NumberOfLotteryWS_Host.onopen = function (event) {
    };
    //接收到訊息時觸發  
    gameModel.NumberOfLotteryWS_Host.onmessage = function (event) {
        var gameModel = require("Model");
        var object = JSON.parse(event.data)
        gameModel.prize_total = object.Game.amount //獎品總數量
        gameModel.WinnerData.ClearRank();
        for(var i = 0;i < object.PrizeStaffs.length; i++)
        {
            gameModel.winner_id[i] = object.PrizeStaffs[i].id; //得獎者id
            gameModel.winner_name[i] = object.PrizeStaffs[i].name //得獎人名稱
            gameModel.winner_picture[i] = object.PrizeStaffs[i].avatar //得獎人照片
            gameModel.prize_name_host[i] = object.PrizeStaffs[i].prize_name//獎品名稱
            gameModel.winner_score[i] = object.PrizeStaffs[i].score//得獎人分數
            gameModel.WinnerData.SpawnNewWinner();
        }
        if(gameModel.GameStatusMessage == "calculate") 
        {
            gameModel.WinnerData.NextSence();
            gameModel.NumberOfLotteryWS_Host.close();
        }
    };
    //連線錯誤時
    gameModel.NumberOfLotteryWS_Host.onerror = function (event) {
    };
    //連線關閉時觸發  
    gameModel.NumberOfLotteryWS_Host.onclose = function (event) {
        if(gameModel.GameStatusMessage == "gaming") {
            gameModel.NumberOfLotteryWS_Host = new WebSocket("wss://" + gameModel.local_ID + "/ws/v1/game/winning/staff?activity_id="+ gameModel.activity_id +'&game_id=' + gameModel.game_id + '&game='+ gameModel.GameName); //開啟更新得獎人的ws
            gameModel.WinnerData.WebSocket_NumberOfLottery_Host()
        }
    };
}


//取得動態參數
function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) 
    {
        var pair = vars[i].split("=");
        if(pair[0] == variable) return pair[1];
    }
    return("");
}

//處理leLiffState取得activity_id和game_id
function HandleLiffState(){
    if (gameModel.activity_id == "" || gameModel.game_id == "")
    {
        if (gameModel.liffstate.length > 13) gameModel.liffstate = gameModel.liffstate.substr(17 , gameModel.liffstate.length)
    }
    
    if (gameModel.liffstate.includes("%26game_id%3D")) //%3f是?  %26是&  %3d是=
    {
        var params = gameModel.liffstate.split("%26game_id%3D")
        gameModel.activity_id = params[0]
        if(params.length == 2)
        {
           params = params[1].split("#mst_challenge")
           gameModel.game_id = params[0]
        }
    }
}

//取得Cookie資料
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';'); //取得cookie並用;區分開來儲存在ca
    for(var i = 0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) ==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}  

var gameModel = require("Model");
gameModel.activity_id =  getQueryVariable("activity_id")
gameModel.game_id =  getQueryVariable("game_id")
gameModel.liffstate = getQueryVariable("liff.state")
gameModel.session_id = readCookie('chatroom_session')
HandleLiffState();

  
    






