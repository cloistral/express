var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = require('./routes/index');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/public', express.static('public'));
router.get('/index.html',(req,res) => {
    res.sendFile( __dirname + "/public/" + "index.html" );
})

app.use('/', router);
module.exports = app;
