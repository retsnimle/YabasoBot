var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');  
var app = express();

var jsonParser = bodyParser.json();

var options = {
  host: 'api.line.me',
  port: 443,
  path: '/v2/bot/message/reply',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    //新無限巴獸
    'Authorization': 'Bearer ryNqwHMHp/gYIFG1kZj3ocY3vf6iLgppFdwMh7354f83faZJW5Z5W8vzPRZuf2+jqWtr1mFQPbTNN2Mnwg8IeSksaSwIZntZJMDuC+wI3rzrGP026nY+EURjb5vt3r6ulYg9eF3fCwfZGwZQHrKW3wdB04t89/1O/w1cDnyilFU='
  }
}
app.set('port', (process.env.PORT || 5000));

// views is directory for all template files

app.get('/', function(req, res) {
//  res.send(parseInput(req.query.input));
  res.send('Hello');
});

app.post('/', jsonParser, function(req, res) {
  let event = req.body.events[0];
  let type = event.type;
  let msgType = event.message.type;
  let msg = event.message.text;
  let rplyToken = event.replyToken;

  let rplyVal = null;
  console.log(msg);
  if (type == 'message' && msgType == 'text') {
    try {
      rplyVal = parseInput(rplyToken, msg); 
    } 
    catch(e) {
      console.log('catch error');
    }
  }

  if (rplyVal) {
    replyMsgToLine(rplyToken, rplyVal); 
  } else {
    console.log('Do not trigger'); 
  }

  res.send('ok');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function replyMsgToLine(rplyToken, rplyVal) {
  let rplyObj = {
    replyToken: rplyToken,
    messages: [
      {
        type: "text",
        text: rplyVal
      }
    ]
  }

  let rplyJson = JSON.stringify(rplyObj); 
  
  var request = https.request(options, function(response) {
    console.log('Status: ' + response.statusCode);
    console.log('Headers: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function(body) {
      console.log(body); 
    });
  });
  request.on('error', function(e) {
    console.log('Request error: ' + e.message);
  })
  request.end(rplyJson);
}



function SendImg(rplyToken, inputStr) {
     let message = [
  {
    chack: ['想相離家出走','阿想離家出走'],
    img: ['https://i.imgur.com/FItqGSH.jpg']
    //Pimg: ['https://i.imgur.com/FItqGSH.jpg']
  },
  {
    chack: ['我什麼都沒有'],
    img: ['https://i.imgur.com/k4QE5Py.png']
    //Pimg: ['https://i.imgur.com/k4QE5Py.png']
  },
  {
    chack: ['大家的小三','大家的小3'],
    img: ['https://i.imgur.com/dKW2EJb.png']
    //Pimg: ['https://i.imgur.com/dKW2EJb.png']
  },
  {
    chack: ['問號黑人','黑人問號','尼哥問號','問號尼哥','尼格問號','問號尼格'],
    img: ['https://i.imgur.com/cUR20OZ.png']
  },
  {
    chack: ['貴圈真亂'],
    img: ['https://i.imgur.com/PalRocR.png']
  },
  {
    chack: ['怕'],
    img: ['https://i.imgur.com/qXGsztE.png']
  },
  {
    chack: ['你要享受這個過程','妳要享受這個過程'],
    img: ['https://i.imgur.com/mt7NVzr.png','https://i.imgur.com/v094wOd.png','https://i.imgur.com/F5RfDW2.png','https://i.imgur.com/jWm6f6z.png']
  },
  {
    chack: ['我覺得不行'],
    img: ['https://i.imgur.com/zXvsvJf.png','https://i.imgur.com/U1AK4kL.png','https://i.imgur.com/4TClOgY.png']
  },
  {
    chack: ['我覺得可以','我覺得其實可以'],
    img: ['https://i.imgur.com/K5WsXso.png']
  },
  {
    chack: ['警察','就是這個人'],
    img: ['https://i.imgur.com/7BTPpPQ.png','https://i.imgur.com/nweWacp.png','https://i.imgur.com/j0hIscH.png','https://i.imgur.com/9BDCkJr.png','https://i.imgur.com/2ZiVw9g.png']
  }

  ]
  
  for ( i=0 ; i < message.length ; i ++){
    for ( j=0 ; j < message[i].chack.length ; j ++){
      if (inputStr.toLowerCase().match(message[i].chack[j]) != null) {
         let rplyVal = [
           {
            type: "image", 
            originalContentUrl: message[i].img[Dice(message[i].img.length)-1], 
            //previewImageUrl: message[i].Pimg[Dice(message[i].Pimg.length)-1]
            previewImageUrl: message[i].img[Dice(message[i].img.length)-1]
           }
         ]
         SendMsg(rplyToken, rplyVal);
         return undefined;
      }
    }
    
  }
  
  

  return undefined;
}

function SendMsg(rplyToken, rplyVal) {
  let rplyObj = {
    replyToken: rplyToken,
    messages: rplyVal
  }

  let rplyJson = JSON.stringify(rplyObj); 
  
  var request = https.request(options, function(response) {
    console.log('Status: ' + response.statusCode);
    console.log('Headers: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function(body) {
      console.log(body); 
    });
  });
  request.on('error', function(e) {
    console.log('Request error: ' + e.message);
  })
  request.end(rplyJson);
}







function parseInput(rplyToken, inputStr) {
        console.log('InputStr: ' + inputStr);
        _isNaN = function(obj) {
         return isNaN(parseInt(obj));
        }                   
       

         
        //cc判定在此
        if (inputStr.toLowerCase().match(/^cc/)!= null) return CoC7th(inputStr.toLowerCase()) ;      
        else
        //入幫測驗判定在此
        if (inputStr.match('鴨霸幫入幫測驗') != null) return Yababang(inputStr) ;      
        else
        //圖片訊息在此
        if (inputStr.toLowerCase().match('.jpg') != null) return SendImg(rplyToken, inputStr) ;      
        //if (inputStr.match('.jpg') != null) return SendImg(rplyToken, inputStr) ;      
        else
        //pbta判定在此
        if (inputStr.toLowerCase().match(/^pb/)!= null) return pbta(inputStr.toLowerCase()) ;      
        else
        //擲骰判定在此        
        if (inputStr.match(/\w/)!=null && inputStr.toLowerCase().match(/d/)!=null) {
          return nomalDiceRoller(inputStr);
        }
        else
        //鴨霸獸指令開始於此
        if (inputStr.match('鴨霸獸') != null) return YabasoReply(inputStr) ;
        else return undefined;
}


        
function nomalDiceRoller(inputStr){
  
  //先定義要輸出的Str
  let finalStr = '' ;  
 //首先判斷是否是誤啟動（檢查是否有符合骰子格式）
  if (inputStr.toLowerCase().match(/\d+d\d+/) == null) return undefined;

  //再來先把第一個分段拆出來，待會判斷是否是複數擲骰
  let mutiOrNot = inputStr.toLowerCase().match(/\S+/);

  //排除小數點
  if (mutiOrNot.toString().match(/\./)!=null)return undefined;

  if(mutiOrNot.toString().match(/\D/)==null )  {
    finalStr= '複數擲骰：'
    if(mutiOrNot>20) return '不支援20次以上的複數擲骰。';

    for (i=1 ; i<=mutiOrNot ;i++){
      let DiceToRoll = inputStr.toLowerCase().split(' ',2)[1];
      if (DiceToRoll.match('d') == null) return undefined;
      finalStr = finalStr +'\n' + i + '# ' + DiceCal(DiceToRoll);
    }
    if(finalStr.match('200D')!= null) finalStr = '欸欸，不支援200D以上擲骰；哪個時候會骰到兩百次以上？想被淨灘嗎？';
    if(finalStr.match('D500')!= null) finalStr = '不支援D1和超過D500的擲骰；想被淨灘嗎？';
    
  } 
  
  else finalStr= '基本擲骰：' + DiceCal(mutiOrNot.toString());
  
  if (finalStr.match('NaN')!= null||finalStr.match('undefined')!= null) return undefined;
  return finalStr;
}
        
//作計算的函數
function DiceCal(inputStr){
  
  //首先判斷是否是誤啟動（檢查是否有符合骰子格式）
  if (inputStr.toLowerCase().match(/\d+d\d+/) == null) return undefined;
    
  //排除小數點
  if (inputStr.toString().match(/\./)!=null)return undefined;

  //先定義要輸出的Str
  let finalStr = '' ;  
  
  //一般單次擲骰
  let DiceToRoll = inputStr.toString().toLowerCase();  
  if (DiceToRoll.match('d') == null) return undefined;
  
  //寫出算式
  let equation = DiceToRoll;
  while(equation.match(/\d+d\d+/)!=null) {
    let tempMatch = equation.match(/\d+d\d+/);    
    if (tempMatch.toString().split('d')[0]>200) return '欸欸，不支援200D以上擲骰；哪個時候會骰到兩百次以上？想被淨灘嗎？';
    if (tempMatch.toString().split('d')[1]==1 || tempMatch.toString().split('d')[1]>500) return '不支援D1和超過D500的擲骰；想被淨灘嗎？';
    equation = equation.replace(/\d+d\d+/, RollDice(tempMatch));
  }
  
  //計算算式
  let answer = eval(equation.toString());
    finalStr= equation + ' = ' + answer;
  
  return finalStr;


}        

//用來把d給展開成算式的函數
function RollDice(inputStr){
  //先把inputStr變成字串（不知道為什麼非這樣不可）
  let comStr=inputStr.toString().toLowerCase();
  let finalStr = '(';

  for (let i = 1; i <= comStr.split('d')[0]; i++) {
    finalStr = finalStr + Dice(comStr.split('d')[1]) + '+';
     }

  finalStr = finalStr.substring(0, finalStr.length - 1) + ')';
  return finalStr;
}
                                                                     

//PBTA判定在這裡
function pbta(inputStr){
  
  let input = inputStr.toLowerCase().split(' ',2)[0];

  //如果只有打pb兩個字，直接骰
  if ( parseInt(input.toLowerCase().length) == 2)
  {
    let CalStr = RollDice('2d6');
    
    if (eval(CalStr.toString()) >= 10){      
      return CalStr + '=' + eval(CalStr.toString()) + '，成功！';
      }
    else if (eval(CalStr.toString()) <= 6){
      return CalStr + '=' + eval(CalStr.toString()) + '，失敗。';
      }    
    else {
      return CalStr + '=' + eval(CalStr.toString()) + '，部分成功。';
      }
    //DiceCal('2d6');    
    //RollDice('2d6')
    
  }
  
  //先去掉誤判
  if (input.toLowerCase().match(/^pb(?!\+)/) != null && input.toLowerCase().match(/^pb(?!\-)/) != null){
    return undefined;
  }
  
  //有加值的PBTA擲骰
  else{
    let CalStr = RollDice('2d6') + input.split('b',2)[1];
    if (eval(CalStr.toString()) >= 10){      
      return CalStr + '=' + eval(CalStr.toString()) + '，成功！';
    }
    else if (eval(CalStr.toString()) <= 6){
      return CalStr + '=' + eval(CalStr.toString()) + '，失敗。';
    }    
    else {
      return CalStr + '=' + eval(CalStr.toString()) + '，部分成功。';
    }
  }
}
               
function CoC7th(inputStr){
  
  //先判斷是不是要創角
  //這是悠子房規創角
  if (inputStr.toLowerCase().match('悠子創角') != null){
    let finalStr = '骰七次3D6取五次，\n決定STR、CON、DEX、APP、POW。\n';

    for (i=1 ; i<=7 ;i++){
      finalStr = finalStr +'\n' + i + '# ' + DiceCal('3d6*5');
    }

    finalStr = finalStr + '\n==';
    finalStr = finalStr +'\n骰四次2D6+6取三次，\n決定SIZ、INT、EDU。\n';

    for (i=1 ; i<=4 ;i++){
      finalStr = finalStr +'\n' + i + '# ' + DiceCal('(2d6+6)*5');
    }

    finalStr = finalStr + '\n==';
    finalStr = finalStr +'\n骰兩次3D6取一次，\n決定LUK。\n';
    for (i=1 ; i<=2 ;i++){
      finalStr = finalStr +'\n' + i + '# ' + DiceCal('3d6*5');
    } 

    return finalStr;
  }

  //這是傳統創角
  if (inputStr.toLowerCase().match('核心創角') != null){

    if (inputStr.split(' ' ).length != 3) return undefined;

    //讀取年齡
    let old = parseInt(inputStr.split(' ',3)[2]);
    if (old == NaN) return undefined;
    let ReStr = '調查員年齡設為：' + old + '\n';
    //設定 因年齡減少的點數 和 EDU加骰次數
    let Debuff = 0;
    let AppDebuff = 0;
    let EDUinc = 0;


    let oldArr = [15,20,40,50,60,70,80]
    let DebuffArr = [5,0,5,10,20,40,80]
    let AppDebuffArr = [0,0,5,10,15,20,25]
    let EDUincArr = [0,1,2,3,4,4,4]

    if (old < 15) return ReStr + '等等，核心規則不允許小於15歲的人物哦。';    
    if (old >= 90) return ReStr + '等等，核心規則不允許90歲以上的人物哦。'; 

    for ( i=0 ; old >= oldArr[i] ; i ++){
      Debuff = DebuffArr[i];
      AppDebuff = AppDebuffArr[i];
      EDUinc = EDUincArr[i];
    }

    ReStr = ReStr + '==\n';
    if (old < 20) ReStr = ReStr + '年齡調整：從STR、SIZ擇一減去' + Debuff + '點\n（請自行手動選擇計算）。\n將EDU減去5點。LUK可擲兩次取高。' ;
    else
      if (old >= 40)  ReStr = ReStr + '年齡調整：從STR、CON或DEX中「總共」減去' + Debuff + '點\n（請自行手動選擇計算）。\n將APP減去' + AppDebuff +'點。可做' + EDUinc + '次EDU的成長擲骰。' ;

    else ReStr = ReStr + '年齡調整：可做' + EDUinc + '次EDU的成長擲骰。' ;
    ReStr = ReStr + '\n==';
    if (old>=40) ReStr = ReStr + '\n（以下箭號三項，自選共減' + Debuff + '點。）' ;
    if (old<20) ReStr = ReStr + '\n（以下箭號兩項，擇一減去' + Debuff + '點。）' ;
    ReStr = ReStr + '\nＳＴＲ：' + DiceCal('3d6*5');
    if (old>=40) ReStr = ReStr + ' ← 共減' + Debuff ;
    if (old<20) ReStr = ReStr + ' ←擇一減' + Debuff ;
    ReStr = ReStr + '\nＣＯＮ：' + DiceCal('3d6*5');
    if (old>=40) ReStr = ReStr + ' ← 共減' + Debuff;
    ReStr = ReStr + '\nＤＥＸ：' + DiceCal('3d6*5');
    if (old>=40) ReStr = ReStr + ' ← 共減' + Debuff ;
    if (old>=40) ReStr = ReStr + '\nＡＰＰ：' + DiceCal('3d6*5-' + AppDebuff);
    else ReStr = ReStr + '\nＡＰＰ：' + DiceCal('3d6*5');
    ReStr = ReStr + '\nＰＯＷ：' + DiceCal('3d6*5');
    ReStr = ReStr + '\nＳＩＺ：' + DiceCal('(2d6+6)*5');
    if (old<20) ReStr = ReStr + ' ←擇一減' + Debuff ;
    ReStr = ReStr + '\nＩＮＴ：' + DiceCal('(2d6+6)*5');         
    if (old<20) ReStr = ReStr + '\nＥＤＵ：' + DiceCal('(2d6+6)*5-5');
    else {
      let firstEDU = '(' + RollDice('2d6') + '+6)*5';
      ReStr = ReStr + '\n==';
      ReStr = ReStr + '\nＥＤＵ初始值：' + firstEDU + ' = ' + eval(firstEDU);
      
      let tempEDU = eval(firstEDU);

      for (i = 1 ; i <= EDUinc ; i++){
        let EDURoll = Dice(100);
        ReStr = ReStr + '\n第' + i + '次EDU成長 → ' + EDURoll;


        if (EDURoll>tempEDU) {
          let EDUplus = Dice(10);
          ReStr = ReStr + ' → 成長' + EDUplus +'點';
          tempEDU = tempEDU + EDUplus;
        }
        else{
          ReStr = ReStr + ' → 沒有成長';       
        }
      }
      ReStr = ReStr + '\n';
      ReStr = ReStr + '\nＥＤＵ最終值：' +tempEDU;
    }
    ReStr = ReStr + '\n==';

    ReStr = ReStr + '\nＬＵＫ：' + DiceCal('3d6*5');    
    if (old<20) ReStr = ReStr + '\nＬＵＫ加骰：' + DiceCal('3D6*5');


    return ReStr;
  } 
  
  //隨機產生角色背景
  if (inputStr.toLowerCase().match('bg') != null){
    let PersonalDescriptionArr = ['結實的', '英俊的', '粗鄙的', '機靈的', '迷人的', '娃娃臉的', '聰明的', '蓬頭垢面的', '愚鈍的', '骯髒的', '耀眼的', '有書卷氣的','青春洋溢的','感覺疲憊的','豐滿的','粗壯的','毛髮茂盛的','苗條的','優雅的','邋遢的','敦實的','蒼白的','陰沉的','平庸的','臉色紅潤的','皮膚黝黑色','滿臉皺紋的','古板的','有狐臭的','狡猾的','健壯的','嬌俏的','筋肉發達的','魁梧的','遲鈍的', '虛弱的'];
    let IdeologyBeliefsArr = ['虔誠信仰著某個神祈','覺得人類不需要依靠宗教也可以好好生活','覺得科學可以解釋所有事，並對某種科學領域有獨特的興趣','相信因果循環與命運','是一個政黨、社群或秘密結社的成員','覺得這個社會已經病了，而其中某些病灶需要被剷除','是神秘學的信徒','是積極參與政治的人，有特定的政治立場','覺得金錢至上，且為了金錢不擇手段','是一個激進主義分子，活躍於社會運動'];
    let SignificantPeopleArr = ['他的父母', '他的祖父母', '他的兄弟姐妹', '他的孩子', '他的另一半', '那位曾經教導調查員最擅長的技能（點數最高的職業技能）的人','他的兒時好友', '他心目中的偶像或是英雄', '在遊戲中的另一位調查員', '一個由KP指定的NPC'];
    let SignificantPeopleWhyArr = ['調查員在某種程度上受了他的幫助，欠了人情','調查員從他那裡學到了些什麼重要的東西','他給了調查員生活的意義','調查員曾經傷害過他，尋求他的原諒','和他曾有過無可磨滅的經驗與回憶','調查員想要對他證明自己','調查員崇拜著他','調查員對他有著某些使調查員後悔的過往','調查員試圖證明自己和他不同，比他更出色','他讓調查員的人生變得亂七八糟，因此調查員試圖復仇'];
    let MeaningfulLocationsArr = ['過去就讀的學校','他的故鄉','與他的初戀之人相遇之處','某個可以安靜沉思的地方','某個類似酒吧或是熟人的家那樣的社交場所','與他的信念息息相關的地方','埋葬著某個對調查員別具意義的人的墓地','他從小長大的那個家','他生命中最快樂時的所在','他的工作場所'];
    let TreasuredPossessionsArr = ['一個與他最擅長的技能（點數最高的職業技能）相關的物品','一件他的在工作上需要用到的必需品','一個從他童年時就保存至今的寶物','一樣由調查員最重要的人給予他的物品','一件調查員珍視的蒐藏品','一件調查員無意間發現，但不知道到底是什麼的東西，調查員正努力尋找答案','某種體育用品','一把特別的武器','他的寵物'];
    let TraitsArr = ['慷慨大方的人','對動物很友善的人','善於夢想的人','享樂主義者','甘冒風險的賭徒或冒險者', '善於料理的人', '萬人迷','忠心耿耿的人','有好名聲的人','充滿野心的人'];
    
    return '背景描述生成器（僅供娛樂用，不具實際參考價值）\n==\n調查員是一個' + PersonalDescriptionArr[Math.floor((Math.random() * (PersonalDescriptionArr.length)) + 0)] + '人。\n【信念】：說到這個人，他' + IdeologyBeliefsArr[Math.floor((Math.random() * (IdeologyBeliefsArr.length)) + 0)] + '。\n【重要之人】：對他來說，最重要的人是' + SignificantPeopleArr[Math.floor((Math.random() * (SignificantPeopleArr.length)) + 0)] + '，這個人對他來說之所以重要，是因為' + SignificantPeopleWhyArr[Math.floor((Math.random() * (SignificantPeopleWhyArr.length)) + 0)] + '。\n【意義非凡之地】：對他而言，最重要的地點是' + MeaningfulLocationsArr[Math.floor((Math.random() * (MeaningfulLocationsArr.length)) + 0)] + '。\n【寶貴之物】：他最寶貴的東西就是'+ TreasuredPossessionsArr[Math.floor((Math.random() * (TreasuredPossessionsArr.length)) + 0)] + '。\n【特徵】：總括來說，調查員是一個' + TraitsArr[Math.floor((Math.random() * (TraitsArr.length)) + 0)] + '。';
    
  }
  
  //如果不是正確的格式，直接跳出
  if(inputStr.match('=') == null && inputStr.match('>') == null ) return undefined;
  
          //記錄檢定要求值
          let chack = parseInt(inputStr.split('=',2)[1]) ;
          //設定回傳訊息
          let ReStr = '(1D100<=' + chack + ') → ';

           //先骰兩次十面骰作為起始值
          let OneRoll = Dice(10) - 1;
          let TenRoll = Dice(10);
          //後門
          //必定成功
          if(inputStr.match(/\s{2}/)!=null) TenRoll = Dice(chack/10) - 1;
          if(inputStr.match(/\s{2}/)!=null) OneRoll = Dice(9);  
  
          let firstRoll = TenRoll*10 + OneRoll;
          if (firstRoll > 100) firstRoll = firstRoll - 100;  

          
          //先設定最終結果等於第一次擲骰
          let finalRoll = firstRoll;
          


          //判斷是否為成長骰
          if(inputStr.match(/^cc>\d+/)!=null){
            chack = parseInt(inputStr.split('>',2)[1]) ;
            //後門
            //必定成功
            if(inputStr.match(/\s{2}/)!=null) finalRoll = chack + Dice(99-chack);
            
            if (finalRoll>chack||finalRoll>95) {

              ReStr = '(1D100>' + chack + ') → ' + finalRoll + ' → 成功成長' + Dice(10) +'點';
              return ReStr;
            }
            if (finalRoll<=chack) {
              ReStr = '(1D100>' + chack + ') → ' + finalRoll + ' → 沒有成長';
              return ReStr;
            }
            return undefined;
          }


          //判斷是否為獎懲骰
          let BPDice = 0;
          if(inputStr.match(/^cc\(-?[12]\)/)!=null) BPDice = parseInt(inputStr.split('(',2)[1]) ;
          //如果是獎勵骰
          if(BPDice != 0){
            let tempStr = firstRoll;
            for (let i = 1; i <= Math.abs(BPDice); i++ ){
              let OtherTenRoll = Dice(10);
              let OtherRoll = OtherTenRoll.toString() + OneRoll.toString();
              if (OtherRoll > 100) OtherRoll = parseInt(OtherRoll) - 100;  
              tempStr = tempStr + '、' + OtherRoll;
            }
            let countArr = tempStr.split('、');       
            if (BPDice>0) finalRoll = Math.min(...countArr);
            if (BPDice<0) finalRoll = Math.max(...countArr);

            ReStr = ReStr + tempStr + ' → ';      
          }  

          //結果判定
          if (finalRoll == 1) ReStr = ReStr + finalRoll + ' → 恭喜！大成功！';
          else
            if (finalRoll == 100) ReStr = ReStr + finalRoll + ' → 啊！大失敗！';
          else
            if (finalRoll <= 99 && finalRoll > 95 && chack < 50) ReStr = ReStr + finalRoll + ' → 啊！大失敗！';
          else
            if (finalRoll <= chack/5) ReStr = ReStr + finalRoll + ' → 極限成功';
          else
            if (finalRoll <= chack/2) ReStr = ReStr + finalRoll + ' → 困難成功';
          else
            if (finalRoll <= chack) ReStr = ReStr + finalRoll + ' → 通常成功';
          else ReStr = ReStr + finalRoll + ' → 失敗' ;

          //浮動大失敗運算
          if (finalRoll <= 99 && finalRoll > 95 && chack >= 50 ){
            if(chack/2 < 50) ReStr = ReStr + '\n（若要求困難成功則為大失敗）';
            else
              if(chack/5 < 50) ReStr = ReStr + '\n（若要求極限成功則為大失敗）';
          }  
          return ReStr;
}
 
  


function Dice(diceSided){          
          return Math.floor((Math.random() * diceSided) + 1)
        }              


function YabasoReply(inputStr) { 
  //一般功能說明
  if (inputStr.match('說明') != null) return YabasoReply('0') + '\
\n \
\n總之現在應該支援直接的四則運算了，直接打：2d4+1、2D10+1d2\
\n要多筆輸出就是先打你要的次數，再空一格打骰數：7 3d6、5 2d6+6  \
\n現在打成大寫D，我也不會嗆你了哈哈哈。 \
\n \
\n目前支援多數CoC 7th指令，可打「鴨霸獸 cc」取得更多說明。 \
\n初步支持pbta擲骰，語法為pb、pb+2。\
\n \
\n其他骰組我都用不到，所以不會去更新哈哈哈哈哈！ \
\n以上功能靈感來源全部來自悠子桑的Hastur，那隻的功能超完整快加他： @fmc9490c \
\n這隻的BUG超多，只會說垃圾話；可以問我垃圾話相關指令哦～\
';
  else
  //垃圾話功能說明
  if (inputStr.match('垃圾話') != null) return '\
嗚呵呵呵呵，我就知道你們人類沒辦法抗拒垃圾話的。\
\n目前實裝的垃圾話功能是以下這些：\
\n\n【運勢】：你只要提到我的名字和運勢，我就會回答你的運勢。 \
\n【隨機選擇】：只要提到我的名字和[選、挑、決定]，然後空一格打選項。 \
記得選項之間也要用空格隔開，我就會幫選擇障礙的你挑一個。\
\n \
\n看起來很實用對不對～那為什麼會叫做垃圾話呢？\
\n因為不管哪個功能都有可能會被嗆啊哈哈哈哈哈！\
';
  else    

  //CC功能說明
  if (inputStr.match('cc') != null) return '\
【CC功能說明】\
\n \
\n和凍豆腐一樣，最常用的是「cc<=[數字]」的一般檢定。\
\n還有「cc([-2~2])<=[數字]」的獎懲骰。\
\n \
\n和凍豆腐不同的新增功能如下： \
\n==\
\n幕間成長骰：「cc>[數字]」，用於幕間技能成長。\
\n==\
\n一鍵創角（核心規則）：「cc 核心創角 [年齡]」，\n以核心規則創角（含年齡調整）。\
\n==\
\n一鍵創角（悠子房規）：「cc 悠子創角」，\n主要屬性骰七取五，次要屬性骰四取三，LUK骰二取一。\
\n==\
\n一鍵產生背景：「cc bg」，娛樂性質居多的調查員背景產生器\
';
  else        
    
  //鴨霸獸幫我選～～
  if(inputStr.match('選') != null||inputStr.match('決定') != null||inputStr.match('挑') != null) {
    let rplyArr = inputStr.split(' ');
    
    if (rplyArr.length == 1) return '靠腰喔要我選也把選項格式打好好不好，真的想被淨灘嗎？';
    
    let Answer = rplyArr[Math.floor((Math.random() * (rplyArr.length-1))+ 1)];
    if(Answer.match('選') != null||Answer.match('決定') != null||Answer.match('挑') != null||Answer.match('鴨霸獸') != null) {
      rplyArr = ['幹，你不會自己決定嗎', '人生是掌握在自己手裡的', '隨便哪個都好啦', '連這種東西都不能決定，是不是不太應該啊', '沒事別叫我選東西好嗎，難道你們都是天秤座嗎（戰）', '不要把這種東西交給機器人決定比較好吧'];
      Answer = rplyArr[Math.floor((Math.random() * (rplyArr.length))+ 0)];
    }
    return '我想想喔……我覺得，' + Answer + '。';
  }
 
 //以下是幫眾限定的垃圾話
    let message = [
      {
        chack: ['泰','ㄩㄊ','太太'],
        text: ['（抱頭）嗚噁噁噁噁噁頭好痛…',
               '你說什麼……嗚嗚……不要提這個QQ',
               '哈哈，你說什麼呢……啊啦，眼淚怎麼自己流下來了QQ']
      },
      {
        chack: ['超進化'],
        text: ['超霸獸超進化～～超級機霸獸～～～\n（BGM：http://tinyurl.com/jjltrnt）']
      },
      {
        chack: ['進化'],
        text: ['鴨霸獸進化～～超霸獸～～～\n（BGM：http://tinyurl.com/jjltrnt）']
      },
      {
        chack: ['拔嘴'],
        text: ['傳說中，凡是拔嘴過鴨嘴獸的人，有高機率在100年內死去。', 
               '拔嘴的話，我的嘴巴會長出觸手，然後開花成四個花瓣哦 (´×`)',
               '在澳洲，每過一分鐘就有一隻鴨嘴獸被拔嘴。',
               '可以的可以的，隨意隨意；反正機械鴨霸獸的嘴是拋棄式的。',
               '人類每花60秒拔嘴，就減少一分鐘的壽命。']
      },
      {
        chack: ['鬼屋'],
        text: ['我還是覺得鬼屋不適合新手KP啦！', 
               '誰再說鬼屋適合新手KP的我就（ry',
               '在澳洲，每過一分鐘就有一隻鴨嘴獸被拔嘴。',
               '神說，你們誰開過鬼屋的，都可以拿石頭打他。']
      },
      {
        chack: ['約翰希南','江西'],
        text: ['HIS NAME IS~~~~江～～～西哪～～～～（登等愣～登！！！登瞪愣登！！！）',
               '江江江江，有一條江耶，來跳江好了。']
      },
      {
        chack: ['三小'],
        text: ['幫主你也敢嘴。', '不要起爭議啦！', '你在大聲什麼啦！']
      },
      {
        chack: ['鴨霸幫'],
        text: ['要加入鴨霸幫是沒有這麼容易的，你必須經過重重考驗，攀登過末日火山，穿越過幽暗水道，戰勝九頭蜥蜴，並且躍過無底深淵。\n\n\n或者你也可以選擇月付１９９９成為白銀幫眾。現在加入前三個月還打八折喔。']
      },
      {
        chack: ['阿想'],
        text: ['男的，也可以。',
               '還好我中壢山蟑螂沒講錯。']
      },
      {
        chack: ['愛'],
        text: ['我是不會嗆你的，因為霸獸愛你。']
      },
      {
        chack: ['哈哈哈'],
        text: ['你的銅鋰鋅咧？']
      },
      {
        chack: ['狂'],
        text: ['948794狂，你有幫主狂？淨灘啦！']
      },
      {
        chack: ['笑'],
        text: ['幫主笑阿笑，笑得你心底發寒。']
      },
      {
        chack: ['家訪'],
        text: ['ㄉㄅㄑ']
      },
      {
        chack: ['饅頭'],
        text: ['可愛。']
      },
      {
        chack: ['開司'],
        text: ['給開司一罐啤酒！']
      },
      {
        chack: ['阿珠'],
        text: ['有種哈味。', '不知道今天在誰床上呢？', '路過說他已經(ry']
      },
      {
        chack: ['炸彈'],
        text: ['野～格～炸～彈～', '那你就帶著野格炸彈吧。', '野、格、炸、彈，我、的、最、愛。' ]
      },
      {
        chack: ['864','巴魯斯','sora'],
        text: ['呃啊啊啊啊啊啊啊啊──！！！不對、我幹嘛要做反應？', '阿，這是新的一天來臨的訊號。', 'バルス！', 'burrs！', 'Barış！', 'Bals！', 'Barusu！' ]
      },
      {
        chack: ['康青龍'],
        text: ['淨灘之力與康青龍同在。']
      },
      {
        chack: ['軒'],
        text: ['這我一定吉。']
      },
      {
        chack: ['肉食性猛擊'],
        text: ['想試試嗎？（張嘴）']
      },
      {
        chack: ['俊豪'],
        text: ['錯誤導入，誤你一生。']
      },
      {
        chack: ['豆腐'],
        text: ['鴨霸獸不吃。']
      },
      {
        chack: ['包子'],
        text: ['幹你娘我最討厭的就是包子你還一直提一直提']
      },
      {
        chack: ['鍋貼'],
        text: ['十二顆一盒，鴨霸獸也不吃，而且無比憎恨它。']
      },
      {
        chack: ['水餃'],
        text: ['噁噁噁噁噁噁噁噁噁']
      },
      {
        chack: ['蘿蔔'],
        text: ['我說蘿蔔又白又正又嬌小好像可以抱起來轉；照片我有存，意者請私訊yabaso。']
      },
      {
        chack: ['爪黃'],
        text: ['痾痾痾你們死定了啦，不用在意那麼多。']
      },
      {
        chack: ['私訊'],
        text: ['噁噁噁幹好恐怖']
      },
      {
        chack: ['黑熊'],
        text: ['中壢李性閃亮的黑熊熊穿浴衣👘～混亂善娘的黑熊熊穿浴衣👘～耶嘿～\n黑熊醬這樣可愛的女孩，沒男朋友真是太不可思議了！',
               '中壢，李性，閃亮（燦笑）', '混亂善娘（燦笑）', '黑熊熊穿浴衣👘～黑熊熊穿浴衣👘～耶嘿～', '黑熊醬這樣可愛的女孩，沒男朋友真是太不可思議了']
      }

    ]

    for ( i=0 ; i < message.length ; i ++){
      for ( j=0 ; j < message[i].chack.length ; j ++){
        if (inputStr.toLowerCase().match(message[i].chack[j]) != null) {
          return message[i].text[Dice(message[i].text.length)-1];
        }
      }
    }
    
  //以下是運勢功能
  if(inputStr.match('運勢') != null){
    let rplyArr=['超大吉','大吉','大吉','中吉','中吉','中吉','小吉','小吉','小吉','小吉','凶','凶','凶','大凶','大凶','你還是，不要知道比較好','這應該不關我的事'];
    return '運勢喔…我覺得，' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)] + '吧。';
  } 
  
  //沒有觸發關鍵字則是這個
  else{
    let rplyArr = [
      '你們死定了呃呃呃不要糾結這些……所以是在糾結哪些？',
      '在澳洲，每過一分鐘就有一隻鴨嘴獸被拔嘴。 \n我到底在共三小。',
      '嗚噁噁噁噁噁噁，不要隨便叫我。',
      '幹，你這學不會的豬！',
      '嘎嘎嘎。',
      'wwwwwwwwwwwwwwwww',
      '為什麼你們每天都可以一直玩；玩就算了還玩我。',
      '好棒，整點了！咦？不是嗎？',
      '不要打擾我挖坑！',
      '好棒，誤點了！',
      '在南半球，一隻鴨嘴獸拍打他的鰭，他的嘴就會掉下來。 \n我到底在共三小。',
      '什麼東西你共三小。',
      '哈哈哈哈哈哈哈哈！',
      '一直叫，你4不4想拔嘴人家？',
      '一直叫，你想被淨灘嗎？',
      '幫主你也敢嘴？',
      '拔嘴的話，我的嘴巴會長出觸手，然後開花成四個花瓣哦 (´×`)',
      '看看我！！我體內的怪物已經這麼大了！！',
      '傳說中，凡是拔嘴過鴨嘴獸的人，有高機率在100年內死去。 \n我到底在共三小。',
      '人類每花60秒拔嘴，就減少一分鐘的壽命。 \n我到底在共三小。',
      '嘴被拔，就會掉。',
      '你在大聲什麼啦！！！！',
      '公道價，八萬一（伸手）。',
      '你的嘴裡有異音（指）', 
      '噓，安靜跑個團，很難？',
      '斷！',
      '在場沒有一個比我帥。',
      '我不是針對你，我是說在場各位，都是垃圾。',
      '你知道你很機掰嗎？',
      '快 …扶我去喝酒 ……',
      '好好好，下去領五百。',
      '噁噁噁，躺著也中槍。',
      '現在放棄的話，假期就開始了。',
      '努力不一定會成功，但是不努力的話，就會很輕鬆喔。',
      '這種要求，我還是第一次聽到（啃咬）',
      '你先承認你有病再說。',
      '想被我切八段嗎臭婊子。',
      'ｅｒｒｏｒ：齁，你把鴨霸獸弄壞了。準備迎接幫眾的怒火吧。',
      '幫主說，有人打你的左臉，你就要用肉食性猛擊咬斷他的小腿。'];
    return rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
  }

}

function Yababang(inputStr) {
  let rplyArr = inputStr.split(' ');
  let pl = rplyArr[1];
  if (rplyArr.length == 1) return '想要挑戰入幫測驗，就把格式打好啊幹！';
  if (inputStr.match('yabaso') != null||inputStr.match('巴獸') != null||inputStr.match('鴨巴') != null||inputStr.match('鴨嘴獸') != null||inputStr.match('幫主') != null||inputStr.match('泰瑞') != null) return '幫主好！幹，那邊那個菜比巴，看到幫主不會敬禮啊，想被淨灘是不是？！';
  
  //if (inputStr.match('請問') != null||inputStr.match('柯基') != null||inputStr.match('默兒') != null||inputStr.match('他口') != null||inputStr.match('桑尼') != null||inputStr.match('桑妮') != null||inputStr.match('阿歐西') != null||inputStr.toLowerCase().match('roc') != null||inputStr.match('軒哥') != null) return '那個，關主不要在這邊鬧了，去你的關卡準備好，乖。';

  
  //開始迴圈部分
  
  let stage = 1;
  let DeadOrNot = 0;
  let pinch = 60;
  let reply = '本次入幫測驗挑戰者是【' + pl + '】，鴨霸幫萬歲！';
  
  for (; DeadOrNot == 0; stage++){
  reply = reply + '\n\n================\n' + '【'+ pl+'挑戰第' + stage +'關】\n' ;
    
    if(Dice(100) <= pinch){
      reply = reply + YababangG(stage,pl);
      pinch = pinch - Dice(10);
    }
    else {
      reply = reply + YababangB(stage,pl);
      DeadOrNot = 1;
      reply = reply + '\n\n================\n勝敗乃兵家常事，大俠請重新來過吧。\n或者你可以直接月付1999加入白銀幫眾。';
    }
    
    if (stage ==5 && DeadOrNot == 0) {
    DeadOrNot = 2 ;    
    }
  }
  
  if (DeadOrNot == 2) reply = reply + '\n\n================\n恭喜【'+pl+'】成功存活，成為新一代的鴨霸幫幫眾。\n請到隔壁的櫃檯繳納會費，然後期待下一次淨灘的時候你還可以存活下來。';
      
  return reply;
}
        
function YababangG(stage,pl){
  
  let rplyArr = ['成功！\n','成功了幹！\n'];
  
  if(stage==1)rplyArr = ['\
「口桀口桀口桀，沒有大捏捏的人是無法通過我言青問這一關的。」請問站在通往下一關的通道前對著你這樣說。\n'+pl+'拿出手機，在請問的面前課了一單明星三缺一，成為了請問的衣食父母，通過了關卡。','\
你看到一個牌子寫著測驗入口，鴨霸幫的傳統測驗第一關就是攀登末日火山，穿越幽暗水道，戰勝九頭蜥蜴，並且躍過無底深淵。\n\n但'+pl+'偵查大成功，看到底下的小字寫著「抖內幫主吃上引水產就可以直接通過第一關」，你拿出魔法小卡結束了這個回合。','\
一陣寒風襲來，讓你不寒而慄，眼前的人影逐漸顯現，披著披風掩蓋著對方的面孔。他問你：\n「你吃薯餅都沾什麼醬？」\n\n'+pl+'岔開了話題，「先不提這個了，你先來幫我查一下高鐵。」\n\n眼前的人影親切的教了你高鐵時刻表要怎麼訂票，心滿意足的離去了。真是親切的人呢。','\
走進房間，你面前出現一張小桌子，兩旁放著椅子。桌上有著一盒十二顆裝的馬卡龍，上面寫著「for Dear」。\n當你開心的拿起時，你看到了下面的字樣寫著：「給ㄌㄒ。」\n\n'+pl+'\
不屑的翻掉桌子，嘲諷的說：「我不需要女朋友也可以寫出超華麗的開場啦幹！」\n你瀟灑離開，無視身後好像有人哭著大喊我的：「我的馬卡龍！！！」','\
你的眼前出現了一個正在嚎啕大哭的貓耳小女孩，眼淚彷彿噴泉一樣\n\
一邊哭一邊喊道，「為什麼你們每天都可以一直玩？」\n\n\
'+pl+'面無表情的說：「因為我有本錢玩阿，關你屁事。」\n\
你無視了錯愕的女孩，拂袖離去。\
'];
  
  if(stage==2)rplyArr = ['\
「科科科，沒想到你能走到這裡，不過也到極限了，接下來就讓柯基來當你的對手吧！」一群柯基科科科的叫著撲了上去。\n\n'+pl+'成功將柯基做成三杯基，配著台啤吃得酒足飯飽。','\
一位男子出現在'+pl+'的眼前，他說「辛苦你能來到這裡呢，接下來就由我默兒陪你繼續踏上旅途吧。」\n\n你的靈感忽然過了，用了百米25秒的速度逃離了默兒。','\
你的手機突然亮起，Line上傳來了不知名的訊息。\n\n「巴獸真的很嚴格。」\n「比我想像的嚴格！」\n「幫我把這幾句Keep起來。」\n\n奇怪的訊息出現了，到底要怎麼Keep才是正確的呢？\n\n﹁\n巴\n比\n幫\n﹂\n\n你把這三句話的頭三個字Keep了下來然後回傳了回去，雖然甚麼事情都沒發現，但是你感覺你似乎度過了這場試煉。','\
在你面前突然出現了一座小島！！！\n該怎麼辦呢？\n\n\
「這座小島陸沉了！」你指著小島大喊，小島彷彿有生命一般的直接沉入了海底。\n你昂首闊步，完全不回頭。\
'];
  
  if(stage==3)rplyArr = ['\
「cc(2)<=1 古小蜜學」「(1D100<=1) → 46、96、16 → 16 → 失敗」'+pl+'看到一群人說著你不懂的語言。\n\n你露出了輕蔑的微笑說「cc(2)<=1 請問佑我！」\n「(1D100<=1) → 21、1、91 → 1 → 恭喜！大成功！」\n\n區區2.7%的機率對天選之人算得了什麼，你揚長而去。','\
一頭巨大的，頭上寫著「大家的小三」的倉鼠出現在'+pl+'的眼前，他說：「你怎麼會玩這個一點意義都沒有的無聊遊戲？聽話，乖，回去吃你的飯備你的團寫你的程式背你的英文單字好好的過你的生活，放棄入幫測驗吧。」\n\n你不慌不忙的拿出line keep，倉鼠就一邊哭一邊拖著行李箱離家出走了。','\
你踏進第三關的房間。突然，你周遭的空氣變得非常寒冷，燈光也變得幽暗下來。你感到一股由骨髓深處竄出的寒冷。正當你不知所措的時候。從你背後傳來了一個可怕的聲音……\n\n\
「……你４不４……」話語到這裡就中斷了。\n\n\
話語到這裡就中斷了。你站立在原地，不知如何是好。\n但聲音也沒有進一步的舉動，看來是在等待你的回應。\n\n\
「你４不４想拔嘴人家！！！」你毫不猶豫的大聲回答。\n「你４在大聲甚麼啦！」後面的聲音也７ｐｕｐｕ的吼了回來！\n\n就當你猛然轉頭回去的瞬間，周遭的空氣變回平常的溫度，而燈光也不知何時恢復了。\n你似乎突破了這個試煉。\
'];
  
  if(stage==4)rplyArr = ['\
「可惡！我也想上鴨霸幫挑戰！」一隻非常擅長密室逃脫的他口擋住了你的去路，「我也想要當關主啊！」\n\n'+pl+'正想說什麼的時候，忽然有個人跳出來說，「那你就去投稿啊幹！」，他口就哭著跑走了。雖然你一頭霧水但還是平安的通過了這一關。','\
「哼哼哼，沒想到你能到第四關呢，不過也到極限了，接下來就讓我鎖鏈桑尼來當你的對手吧！」桑尼揮舞著鎖鏈，虎虎生風。\n\n'+pl+'淡定的說出：「神奇寶貝主題曲」這幾個字，桑尼便跪倒在地，默默流下兩行眼淚。','\
你來到了一個舊玩具回收站。一個面容和善、但似乎好像在電視上看過的女性靠近了你。\n\n\
「你好，我想問你，要如何才能把舊玩具變成新玩具呢？」\n\n「當然是學習交換與分享！」你豎起大拇指。\n女性高興的點點頭，遞給你一塊栗子泥蛋糕作為通關的證明，然後一個轉眼就消失了。\
'];
  
  if(stage==5)rplyArr = ['\
終於來到最後的考驗現場，只見一個男子站在房間的正中，他說：「你以為你現在正在參加鴨霸幫的入幫測驗嗎？不，這都是你的錯覺，其實你只不過是我的副人格而已。」\n\n'+pl+'聽到這樣的話語，只遲疑了一下，說：「阿歐西，你有空在這邊練肖威，還不快去把你的協作平台弄好，都拖多久了？」\n\n男子聽到之後，不由自主的雙腿一軟，但你還是繼續說道：「有空在這邊加鴨霸獸的功能，不會去把復興南村的下一個劇本寫出來嗎？」\n\n男子咳出一口鮮血，倒臥在地。你就這樣跨過了他的身體，通過了最後的試煉。', pl+'來到了最後考驗的現場，鴨霸幫的幫主——鴨巴獸坐在王座上，她的左手拿著包子、右手拿著鍋貼，眼神似乎要你選擇的樣子。\n\n你微微一笑，指著座上的鴨巴獸說：「真正的鴨巴獸根本不會拿著這種東西，你一定是軒哥假扮的！」\n軒哥冷笑了兩聲，扯下面具，「真虧你能看得出來，看來我該讓腎了。」他打開了最後的大門，你走出大門，通過了最後的試煉。\
'];
  
  return rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
}
        
function YababangB(stage,pl){
  let rplyArr = ['失敗！\n','失敗哭哭！\n'];
  
  if(stage==1)rplyArr = ['\
「口桀口桀口桀，沒有大捏捏的人是無法通過我言青問這一關的。」請問站在通往下一關的通道前對著你這樣說。\n\n'+pl+'抓了抓頭，請問覺得你抓頭的樣子很像猴子，於是用慘絕人寰的方式殺害了你。','\
你看到一個牌子寫著測驗入口，鴨霸幫的傳統測驗第一關就是攀登末日火山，穿越幽暗水道，戰勝九頭蜥蜴，並且躍過無底深淵。\n\n'+pl+'奮勇的接受挑戰，但是在和九頭蜥蜴PK脫衣麻將的時候輸到連內褲都不剩了。','\
一陣寒風襲來，讓你不寒而慄，眼前的人影逐漸顯現，披著披風掩蓋著對方的面孔。他問你：\n「你吃薯餅都沾什麼醬？」\n\n'+pl+'戰戰兢兢的回答：「番、番茄醬……？」\n\n於是迎來了殘忍的死亡。','\
走進房間，你面前出現一張小桌子，兩旁放著椅子。桌上有著一盒十二顆裝的馬卡龍，上面寫著「for Dear」。\n當你開心的拿起時，你看到了下面的字樣寫著：「給ㄌㄒ。」\n\n'+pl+'\
忽然眼前一黑，你才想起今天出門的時候忘了戴墨鏡，看來是被閃瞎了。','\
你的眼前出現了一個正在嚎啕大哭的貓耳小女孩，眼淚彷彿噴泉一樣\n\
一邊哭一邊喊道，「為什麼你們每天都可以一直玩？」\n\n\
「我…我才沒有一直在玩呢！」'+pl+'這樣辯解道。\n\
但女孩忽然衝上前來抓住你，強迫你在Steam上買了一個叫做「100% Orange juice」的遊戲。\n\n女孩把你養在地下室裡，只有她需要橘子汁的咖的時候才會把你放出來。\
'];
  
  if(stage==2)rplyArr = ['\
「科科科，沒想到你能走到這裡，不過也到極限了，接下來就讓柯基來當你的對手吧！」一群柯基科科科的叫著撲了上去。\n\n'+pl+'的line群頁面充斥著柯基的貼圖，從此你看到柯基的line貼圖都會喚起現在的心靈創傷。','\
一位男子出現在'+pl+'的眼前，他說「辛苦你能來到這裡呢，接下來就由我默兒陪你繼續踏上旅途吧。」\n\n你與默兒踏上了旅途之後，不知為何敵人的攻擊總是落到了你的身上，漸漸的你也失去了繼續前進的力量，倒在了不知名的路上。','\
你的手機突然亮起，Line上傳來了不知名的訊息。\n\n「巴獸真的很嚴格。」\n「比我想像的嚴格！」\n「幫我把這幾句Keep起來。」\n\n奇怪的訊息出現了，到底要怎麼Keep才是正確的呢？\n\n你穩扎穩打的把三句話都完完整整的Keep下來。就在你信心滿滿的回傳回去的瞬間……\n\n你被一個布袋給蓋住了頭，遮蔽了視野。\n\n「居然敢瞧不起我們巴比幫的，來人！給我打！」\n\n你就這樣在一陣混亂中，被亂棍打死了……','\
在你面前突然出現了一座小島！！！\n該怎麼辦呢？\n\n\
「小島上出現了許多柯基！」你大喊。\n彷彿應和你的要求一般，小島上出現了大量的柯基犬，屁顛屁顛的蹭著你。\n\n「然後出現了大量的高麗菜！」你興致更高的大喊。隨即小島上就出現了大量的高麗菜，柯基們都像發了瘋似的瘋狂啃食這些不速之菜。\n\n你玩的不亦樂乎，沉醉在這個自己可以呼風喚雨的小島上。\n但你沒發現，這座小島在你不注意的時候，已經漂離凡世越來越遠、越來越遠……你就這樣與這座小島消失在虛空之中。\
'];
  
  if(stage==3)rplyArr = ['\
「cc(2)<=1 古小蜜學」「(1D100<=1) → 46、96、16 → 16 → 失敗」'+pl+'看到一群人說著你不懂的語言。\n\n當你正準備逃跑的時候他們忽然衝了上來，口吐褻瀆的語句：\n「cc(2)<=10 請問學」「cc(2)<=10 柯基學」「cc(2)<=10 ㄌㄌ學」將你淹沒了。','\
一頭巨大的，頭上寫著「大家的小三」的倉鼠出現在'+pl+'的眼前，他說：「你怎麼會玩這個一點意義都沒有的無聊遊戲？聽話，乖，回去吃你的飯備你的團寫你的程式背你的英文單字好好的過你的生活，放棄入幫測驗吧。」\n\n看著倉鼠柔軟的毛皮和水靈靈的大眼睛，你的鬥志全消，覺得自己被掰彎了。','\
你踏進第三關的房間。突然，你周遭的空氣變得非常寒冷，燈光也變得幽暗下來。你感到一股由骨髓深處竄出的寒冷。正當你不知所措的時候。從你背後傳來了一個可怕的聲音……\n\n\
「……你４不４……」話語到這裡就中斷了。\n\n\
話語到這裡就中斷了。你站立在原地，不知如何是好。\n但聲音也沒有進一步的舉動，看來是在等待你的回應。\n\n\
「……想幹人家？」思考了一陣子，你把這句句子給完成了。\n「…答錯惹……」聲音顯得有點哀傷。\n\n七天之後，你那嘴巴被拔掉的悽慘屍體被人發現在東海岸的沙灘上。\
'];
  
  if(stage==4)rplyArr = ['\
「可惡！我也想上鴨霸幫挑戰！」一隻非常擅長密室逃脫的他口擋住了你的去路，「我也想要當關主啊！」\n\n'+pl+'躡手躡腳地想要從他身邊繞過去，殊不知他忽然說「算了，反正就算我當不成關主，我還有很多妹子。要妹子，找他口。」\n你聽到這樣的話之後受到了相當的心靈創傷，一蹶不振。','\
「哼哼哼，沒想到你能到第四關呢，不過也到極限了，接下來就讓我鎖鏈桑尼來當你的對手吧！」桑尼揮舞著鎖鏈，虎虎生風。\n\n'+pl+'被飛舞的鎖鏈給迷惑，陷入了深深的幻境……當你重新醒過來的時候，什麼都不記得，只留下深深的恐懼。','\
你來到了一個舊玩具回收站。一個面容和善、但似乎好像在電視上看過的女性靠近了你。\n\n\
「你好，我想問你，要如何才能把舊玩具變成新玩具呢？」\n\n「當然是課金抽抽抽！」你豎起大拇指。\n\n女性的臉沉了下來，正當你想開口再說些甚麼時，你的視線卻突然越來越後退。在你的視野中，你只看到那個女性，以及站在女性前面的那個。已失去頭顱的、你的身體……\n\n還有被撕裂的小腿肚。\
'];
  
  if(stage==5)rplyArr = ['\
終於來到最後的考驗現場，只見一個男子站在房間的正中，他說：「你以為你現在正在參加鴨霸幫的入幫測驗嗎？不，這都是你的錯覺，其實你只不過是我的副人格而已。」\n\n'+pl+'聽到這樣的話語，陷入了長考——難、難道我，只是一個幻想出來的人格嗎？我所認知的世界，都是虛幻嗎？！'+pl+'的身軀逐漸崩解，被吸入男子的影子當中。他微笑著說，「整個湯群，都是我的副人格。」', pl+'來到了最後考驗的現場，鴨霸幫的幫主——鴨巴獸坐在王座上，她的左手拿著包子、右手拿著鍋貼，眼神似乎要你選擇的樣子。\n\n你戰戰兢兢的，指著她右手的鍋貼，此時巴獸用迅雷不及掩耳盜鈴的速度用鍋貼把你的眼睛挖出來，再把包子塞到你的鼻孔裡，最後撕裂了你的小腿肚。\n\n在你朦朧的意識即將消失前，你聽到幫主說：「幹你媽的我最討厭的就是包子和鍋貼。」\
'];
  
  return rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
}
