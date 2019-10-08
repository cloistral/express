require('dotenv').config();  //环境变量
var express = require('express');
var cookieParser = require('cookie-parser'); //cookie
var router = require('./routes/index');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/public', express.static('public'));
app.use('/api', router);
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/public/dist/" + "index.html");
})

module.exports = app;
