var express = require('express');
var app = express();
var router = express.Router()
var bodyParser = require('body-parser');
const mysql = require('mysql');

console.log("??");

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
app.use(bodyParser.urlencoded({extended:true}));

//home
app.get('/',function(req,res) {
    res.render('home');
})

 
loginRouter.use(bodyParser.json());
signInRouter.use(bodyParser.json());

//surveylist-1
app.get('/surveylist', function(req,res){ // 3
  res.render('surveylist', {name:req.params.nameParam});
});

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
