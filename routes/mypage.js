var express = require('express');
var router = express.Router();

//get homepage

router.get('/', function(req,res){ // 2
    let session = req.session;
    res.render('mypage', {
      session : session
    });
  });
  
module.exports = router;
