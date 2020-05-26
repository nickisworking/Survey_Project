var express = require('express');
var app = express();
var router = express.Router()
const mysql = require('mysql');


//router
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var createSurveyRouter = require('./routes/createsurvey');
var myPageRouter = require('./routes/mypage');
var signInRouter = require('./routes/signin');
var surveyDetailRouter = require('./routes/surveydetail');
var surveyListRouter = require('./routes/surveylist');


app.set('view engine','ejs'); // 1
app.use(express.static(__dirname + '/public'));


//create db connection
const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'gmdrb918@@',
  database : 'survey'
});

console.log("hi");
console.log("test");

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
