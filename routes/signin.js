var express = require('express');
var router = express.Router();
const mysql = require('mysql')

//create db connection
const connection= mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'gmdrb918@@',
  database : 'survey'
});

//connect
connection.connect((error)=> {
  if(error) {
    throw error;
    console.log("디ㅣㅂ연결실패");
  }
  console.log("디비 연결 완료");
} );



//get homepage

router.get('/', function(req,res){ // 3
    res.render('signin');
  });

router.post('/join', function(req,res){
    var body = req.body;
    var email = body.email;
    var id = body.uid;
    var name = body.uname;
    var passwd = body.pse;
    var passwd_rep = body.passwd_rep;

    if(passwd !== passwd_rep) {
      alert("Please check your passowrd and password-rep. They do not match each other.")
    }
    else{
    var query = connection.query('insert into user (id,email, uname, password) values ("' + id + '","' + email + '","' + name + '","' + passwd + '")', function(err, rows) {
        if(err) { throw err;}
        console.log("Data inserted!");
        res.render('home')
    })
  }
})

module.exports = router;


