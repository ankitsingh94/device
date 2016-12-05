//nodejs of Project gettinjg Url pakka
var express = require("express"),
    ch = require('./routes/check');

//    data_base = require('./routes/database');

var app     = express();
var arr,
    dd= require('./routes/database');
var bodyParser = require('body-parser');

app.use( bodyParser() );       // to support JSON-encoded bodies
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static(__dirname + '/public'));
//Store all HTML files in view folder.

app.get('/public',ch.throwfile);
//app.post('/', data_base.findAll);
//app.post('/',ch.my_msg);

//app.post('/',ch.my_msg);

app.post('/',dd.addInp);
//app.post('/',dd.findAll);


// routes will go here
//app.post('/',ch.trial);
//changed the post
/*
this is being working in right dires=ction may swami bless yous
*/
//app.post('/',ch.urlwork);

app.get('/api/users',ch.urlwork);


app.listen(4000);
console.log("Running at Port 4000");
