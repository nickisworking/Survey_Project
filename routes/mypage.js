var express = require('express');
var router = express.Router();

//get homepage

router.get('/', function(req,res){ // 2
    res.render('mypage');
  });
  
module.exports = router;
