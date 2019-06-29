var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = require('./routes/index');
var config = require('./config/config')
var format = require('./config/format')
var cors = require('cors')
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

//设置全局配置文件
app.set('config',config)
app.set('format',format)
app.use('/public', express.static('public'));
app.use('/api', router);
app.get('/index.html',(req,res) => {
    res.sendFile( __dirname + "/public/dist/" + "index.html" );
})

module.exports = app;
