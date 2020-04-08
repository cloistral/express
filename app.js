require('dotenv').config();  //环境变量
const express = require('express');
const cookieParser = require('cookie-parser'); //cookie
const router = require('./routes/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static('public'));
app.use('/api', router);
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
})

module.exports = app;
