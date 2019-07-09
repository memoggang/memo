var express = require('express');
var router = express.Router();

/* 사용자 답장에 대한 대답 */
router.post('/', function(req, res, next) {
  const object = {
    user_key : req.body.user_key, // user식별키
    type : req.body.type, // 메시지 형태, 문자+사진 형식
    content : req.body.content // 메시지 내용
  };

  const menu = {
    type : 'buttons',
    buttons : ["안녕", "반가워"]
  };

  var res_object;
  if(object.type === "text")
  {
    if(object.content === "안녕"){
      res_object = {
        "message" : {
          "text" : '안녕 친구'
        },
        "keyboard" : menu
      };
    }
    else if(object.content === "반가워"){
      res_object = {
        "message" : {
          "text" : '반가워 친구'
        },
        "keyboard" : menu
      };
    }
    else{
      res_object = {
        "message" : {
          "text" : "오류입니다"
        },
        "keyboard" : menu
      };
    }
  }
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(res_object));
});

module.exports = router;
