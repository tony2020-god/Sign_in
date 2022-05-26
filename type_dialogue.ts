import { _decorator, Component, Node , Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('type_dialogue')
export class type_dialogue extends Component {
    @property({ tooltip:"播放速度"})
    playSpeed:number = 0;
    @property({ type: Node , tooltip:"選項"})
    Chooses:Node = null;
    @property({ type: Node , tooltip:"重新開始"})
    Replay:Node = null;
    @property({ type: Node , tooltip:"過關頁面"})
    Win:Node = null;

    _storyLV:string;                    //故事時間線
    _speed:number;                      //打字速度
    _dialogLabel:Label = null;          //對話文字
    _contentStr:string = "";            //當前播放的字
    _currentTextIndex:number = 0;       //當前播放文字的索引
    _currentDialogIndex:number = 0;     //當前對話內容的索引
    _currentStoryIndex:number = 0;      //當前故事內容的索引
    _isPlaying:boolean = false;         //是否正在播放
    _isChoose:boolean = false;          //是否正在選擇分支
    fail:boolean = false;               //遊戲是否失敗
    pass:boolean = false;               //遊戲是否通關
    

    _currentcontentList:Array<string> = null;  //當前要顯示的談話内容
    _currentChooseList:Array<string> = null;  //當前要顯示的分支選項

    _contentList:Array<Array<string>> = [[]];  //談話内容分支
    _chooseList:Array<Array<string>> = [[]];  //選項分支
    _endEvent:Function = null;                //段落結束事件

    onLoad () {
        this._dialogLabel = this.node.getComponent(Label);
        this.node.on(Node.EventType.TOUCH_END, this._onClickBox, this);
    }

    //點擊一下跳過打字效果
    _onClickBox(){
        if(this._isPlaying){
            this._dialogLabel.string = this._contentStr;
            this._reset();
            if(this._currentcontentList[this._currentDialogIndex + 1] == null && this.fail == true) this.Replay.active = true
        }else{
            if(this._isChoose == true) return;
            //對話是否结束
            this._currentDialogIndex++;
            if(this._currentcontentList[this._currentDialogIndex] == null)
            {
                if(this.fail == true) return;
                else if(this.pass == true) 
                {
                    this.Win.active = true
                    this.Replay.active = true
                    return
                }
                this._isChoose = true
                this._currentDialogIndex = 0;
                for(var i = 0 ; i < this._currentChooseList.length ; i++)
                {
                    this._dialogLabel.string = ""
                    this.Chooses.children[i].getChildByName("Label").getComponent(Label).string = this._currentChooseList[i]
                    this.Chooses.children[i].active = true
                }     
                console.log(this._currentChooseList.length)
            }
            else this.playDialog(this._currentcontentList[this._currentDialogIndex]);
        }
    }

    start () {
        this._storyLV = "0"
        this._speed = this.playSpeed;
        this.TextData();
        this._currentChooseList = this._chooseList[0];
        this._currentcontentList = this._contentList[0];    //對話段落陣列
        this.playDialog(this._currentcontentList[this._currentDialogIndex]);
    }

    update (dt) {
        //打字機效果
        if(this._isPlaying && this._isChoose == false){
            this._speed -= dt;
            if(this._speed <= 0){
                this._speed = this.playSpeed;
                if(this._contentStr[this._currentTextIndex] == null){
                    this._reset();
                }else{
                    this._addText(this._contentStr[this._currentTextIndex]);
                    this._currentTextIndex++;
                }
            }else return;
        }
    }

    //開始對話
    playDialog(str:string, callback?:Function){
        this._isPlaying = true;
        this._contentStr = str;
        this._clearContent();
        
        if(callback)
            this._endEvent = callback;
    }

    //設置速度
    setSpeed(val:number){
        this.playSpeed = val;
    }


    //重置内容
    _reset(){
        this._isPlaying = false;
        this._contentStr = "";
        this._currentTextIndex = 0;
        this._speed = this.playSpeed;
    }

    //清除對話框內容
    _clearContent(){
        this._dialogLabel.string = "";
    }

    //新增文字
    _addText(aStr:string){
        this._dialogLabel.string += aStr;
    }

    TextData(){
       this._contentList[0] = ["蓋倫: 你今天要做甚麼","亞瑟: 我要去打組隊任務","蓋倫: 可以幫我順便幫我消滅一隻怪獸嗎"]
       this._chooseList[0] = ["哥布林","龍王","白幽狼","無頭騎士"] 
    }

    ReplayFuc(){
        this.Replay.active = false
        this.Win.active = false
        this._reset()
        this._currentDialogIndex = 0
        this._currentStoryIndex = 0
        this._storyLV = "0"
        this._isChoose = false
        this.fail = false
        this.pass = false
        this._currentChooseList = this._chooseList[0];
        this._currentcontentList = this._contentList[0];    //對話段落陣列
        this.playDialog(this._currentcontentList[this._currentDialogIndex]);
    }

    ChooseBtn(event: Event, customEventData: string){
        const unknown = event.target as unknown;
        const node = unknown as Node;
        const content = node.getChildByName("Label").getComponent(Label).string //選項的內容
        for(var i = 0 ; i < this._currentChooseList.length ; i++) this.Chooses.children[i].active = false
        this.Story(content)
        this._currentStoryIndex ++
        this._currentChooseList = this._chooseList[this._currentStoryIndex]
        this._currentcontentList = this._contentList[this._currentStoryIndex];   
        this._isChoose = false
        this.playDialog(this._currentcontentList[this._currentDialogIndex]);
    }

    Story(YourChooses){

        //時間線0
        if(this._storyLV == "0")
        {
            if(YourChooses == "哥布林") //哥布林分支
            {
                this._storyLV = "1"
                this._contentList[1] = ["當你走著走著突然有個人影閃過","一看發現是哥布林","他發出低吼警示你不要再靠近","但是你只是輕輕地揮動你那生鏽的劍","哥布林便已經人頭落地","而你提著哥布林的頭回去找蓋倫","蓋倫便給你300金幣當作獎賞，並賦予你一把沒有生鏽的大劍","你提著劍就出發了","在路上不經意發現有兩條路口"];
                this._chooseList[1] = ["左邊","右邊"]
            }
            else if(YourChooses != "哥布林") //選不是哥布林的分支
            {
                this.fail = true
                if(YourChooses == "龍王") this._contentList[1] = ["你看到龍王後大驚失色，從沒見過魔力這麼強大的敵人","但是還是鼓起勇氣想與之一戰","當你揮著生鏽的劍向龍王砍去","龍王使用了'龍炎彈'直接將你燒成灰燼..."];   
                else if(YourChooses == "白幽狼") this._contentList[1] = ["你看到白幽狼後打起了歪腦筋","因為白幽狼的毛皮相當稀有肯定能賣個好價錢","當你揮著生鏽的劍向白幽狼興奮地砍去","對方卻使用影分身，召喚上千隻白幽狼將你埋沒..."];
                else if(YourChooses == "無頭騎士") this._contentList[1] = ["當你正在尋找有甚什麼魔物的時候","一個高250公分穿著黑色鎧甲的大漢朝你襲來","仔細一看他似乎沒有頭","當你還在震驚之中對方已經首起刀落","你的視線也逐漸變得模糊，最後已感覺不到任何東西..."];      
            }
        }
       
        //時間線1
        if(this._storyLV == "1")
        {
            if(YourChooses == "左邊") //左邊分支
            {
                this._storyLV = "2-1"
                this._contentList[2] = ["在你走著走著不小心掉進一個洞","而洞下裡面似乎通往其他地方..."];   
                this._chooseList[2] = ["左洞穴","右洞穴"]
            }
            else if (YourChooses == "右邊") //右邊分支
            {
               this._storyLV = "2-2"
               this.pass = true
               this._contentList[2] = ["你走了很遠，發現前面有一陣亮晶晶的閃光","走進發現竟然是一大片金銀財寶"];   
               this._chooseList[2] = ["拿走","不拿"]
            }
        }

        //時間線2-1
         if(this._storyLV == "2-1")
         {
             if(YourChooses == "左洞穴") //左邊分支
             {
                this.fail = true
                this._contentList[3] = ["在你摸黑走著","忽然摸到黏黏的液體","是蜘蛛精!","才剛看到她的模樣便已被他用蜘蛛絲包裹住","成為她今日的晚餐..."];   
             }
             else if (YourChooses == "右洞穴") //右邊分支
             {
                this.pass = true
                this._contentList[3] = ["在你走著走著","發現前方有一片光亮的地方","你迫不及待地往那個地方跑去","來到了一座桃花源","裡面與世無爭、衣食無憂","你便在這度過了下半生"];   
             }
         }

        //時間線2-2
        if(this._storyLV == "2-2")
        {
            if(YourChooses == "拿走") //左邊分支
            {
               this.fail = true
               this._contentList[3] = ["在你即將觸碰到財寶的時候","忽然一陣槍響朝你後面發出","在摸摸自己的頭，已是滿頭是血","才知道自己中了別人的誘餌","可惜已經來不及了..."];   
            }
            else if (YourChooses == "不拿") //右邊分支
            {
               this.pass = true
               this._contentList[3] = ["你面對金銀財寶卻不為所動","準備轉身離開時","一個聲音叫祝你了","你轉頭一看，原來是一個斯巴達戰士","她覺得你這不貪財的信念很難得","便決定給你所有寶藏","你也拿著這些寶藏過上無法描述的快樂生活"];   
            }
        }         
    }
}

