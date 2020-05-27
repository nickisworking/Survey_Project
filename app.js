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

console.log("hi");
console.log("test");
console.log("please");
console.log("??")

//connect
db.connect((error)=> {
  if(error) {
    throw error;
    console.log("디ㅣㅂ연결실패");
  }
  console.log("디비 연결 완료");
} );

app.use('/',indexRouter);
app.use('/mypage',myPageRouter);
app.use('/surveylist',surveyListRouter);
app.use('/surveylist/:nameParam',surveyDetailRouter);
app.use('/create_survey',createSurveyRouter);
app.use('/signin',signInRouter);
app.use('/login',loginRouter);

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
