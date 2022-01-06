//共用模塊js
var signner_name = [];//得獎人名字
var signner_id = [];//得獎人id
var signner_picture = [];//得獎人頭像網址
var Signner_js = null
var Signer_items = []
var WhitchBlock = null

//要在自己的腳本導出變量才能讓別人繼承  
module.exports = {    
    signner_name,
    signner_picture,
    signner_id,
    Signner_js,
    Signer_items,
    WhitchBlock,
    WebSocket_NumberOfSign_Host,
};

//主持人從Websocket取得已簽到的玩家資料
function WebSocket_NumberOfSign_Host(){
    //取得Websocket通訊網址
    let ws = new WebSocket("wss://api.hilives.net/ws/v1/interact/game/redpack?activity_id=" + gameModel.activity_id + "&game_id="+ gameModel.game_id);
    //連線開啟時觸發 
    ws.onopen = function (event) {
        console.log(" WebSocket_NumberOfSign_Host 通道開啟");
    };
    //接收到訊息時觸發  
    ws.onmessage = function (event) {
        console.log("response text msg: " + event.data);
        var gameModel = require("Model");
        var object = JSON.parse(event.data)
        console.log('已簽到玩家: ',object.message);
        for(var i = 0;i < object.PrizeStaffs.length; i++)
        {
            if(gameModel.signner_id.includes(object.PrizeStaffs[i].id) == false)
            {
                gameModel.signner_id[i] = object.PrizeStaffs[i].id; //得獎者id
                gameModel.signner_name[i] = object.PrizeStaffs[i].name //得獎人名稱
                gameModel.signner_picture[i] = object.PrizeStaffs[i].avatar //得獎人照片
                gameModel.Signner_js.SpawnNewWinner();
                console.log("已簽到玩家姓名[] : " + gameModel.winner_name[i]);
                console.log("已簽到玩家頭像[] : " + gameModel.winner_picture[i]);
            }  
        }
    };
    //連線錯誤時
    ws.onerror = function (event) {
        console.log(" WebSocket_NumberOfSign 連線錯誤");
    };
    //連線關閉時觸發  
    ws.onclose = function (event) {
        console.log(" WebSocket_NumberOfSign 通道關閉");
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

var gameModel = require("Model");
gameModel.activity_id =  getQueryVariable("activity_id")
gameModel.game_id =  getQueryVariable("game_id")
gameModel.identify_id =  getQueryVariable("identify")

  
    






