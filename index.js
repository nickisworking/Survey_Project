var express = require('express');
var app = express();

app.set('view engine','ejs'); // 1
app.use(express.static(__dirname + '/public'));

//home
app.get('/',function(req,res) {
    res.render('home');
})

//mypage
app.get('/mypage', function(req,res){ // 2
  res.render('mypage', {name:req.query.nameQuery});
});

//surveylist-1
app.get('/surveylist', function(req,res){ // 3
  res.render('surveylist', {name:req.params.nameParam});
});

//surveylist- 상세페이지
app.get('/surveylist/:nameParam', function(req,res){ // 3
  res.render('surveylist', {name:req.params.nameParam});
});

//create_survey
app.get('/create_survey', function(req,res){ // 3
    res.render('create_survey', {name:req.params.nameParam});
  });
  
//signin
app.get('/signin', function(req,res){ // 3
    res.render('signin', {name:req.params.nameParam});
  });

//login
app.get('/login', function(req,res){ // 3
    res.render('login', {name:req.params.nameParam});
  });

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});