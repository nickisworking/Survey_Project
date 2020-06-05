var express = require('express');
var router = express.Router();

//get homepage
router.get('/', function(req,res){ // 3
    let session = req.session;
    res.render('create_survey_detail', {
      session: session
    });
  });

module.exports = router;

