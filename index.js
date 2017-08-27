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
      rplyVal = randomReply();
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

//測試由此開始
function replyToLine(rplyToken, rplyVal, rplyType, value1, value2) {

  if (rplyType==text){
    let rplyObj = {
     replyToken: rplyToken,
     messages: [
        {
         type: "text",
         text: rplyVal
         //type: "sticker",
         //packageId: "1",
         //stickerId: "1"
       }
     ]
    }
   }
  
  if (rplyType==sticker){
    let rplyObj = {
     replyToken: rplyToken,
     messages: [
        {
         //type: "text",
         //text: rplyVal
         type: "sticker",
         packageId: value1,
         stickerId: value2
       }
     ]
    }
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

function replyMsgToLine(rplyToken, rplyVal) {
  let rplyObj = {
    replyToken: rplyToken,
    messages: [
      {
        type: "text",
        text: rplyVal
        //type: "sticker",
        //packageId: "1",
        //stickerId: "1"
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

function parseInput(rplyToken, inputStr) {
        console.log('InputStr: ' + inputStr);
        _isNaN = function(obj) {
         return isNaN(parseInt(obj));
        }
        if (inputStr.match('test') != null) return "Good" ;
        else 
        if (inputStr.match('sticker') != null) {
          let rplyArr = inputStr.split(' ');
          replyToLine(rplyToken, 0, sticker, rplyArr[1], rplyArr[2]);
          return undefined;        
        }
        
     //cc判定在此
     //   if (inputStr.toLowerCase().match(/^cc/)!= null) return CoC7th(inputStr.toLowerCase()) ;      
     //   else
        //入幫測驗判定在此
     //   if (inputStr.match('鴨霸幫入幫測驗') != null) return Yababang(inputStr) ;      
     //   else
        //pbta判定在此
     //   if (inputStr.toLowerCase().match(/^pb/)!= null) return pbta(inputStr.toLowerCase()) ;      
     //   else
        //擲骰判定在此        
     //   if (inputStr.match(/\w/)!=null && inputStr.toLowerCase().match(/d/)!=null) {
     //     return nomalDiceRoller(inputStr);
        }
     //   else
        //鴨霸獸指令開始於此
     //   if (inputStr.match('鴨霸獸') != null) return YabasoReply(inputStr) ;
        else return undefined;
        
      }
