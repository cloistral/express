var express = require('express');
var expressJwt = require("express-jwt");
var config = require('../config/config')
var router = express.Router();

//配置JST
router.use(expressJwt({ secret: config.secret }).unless({
    path: ["/api/login", '/index.html', '/api/readFile']
}));

router.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('无效的token invalid token...');
    }
    next()
});

var indexCon = require('../app/controller/index/index')
  
router.get('/', indexCon.index)
var userCon = require('../app/controller/user/user')
router.post('/getUserInfo', userCon.getUserInfo);
router.post('/editUser', userCon.editUser)
router.delete('/deleteUser', userCon.deleteUser)
var login = require('../app/controller/user/login')
router.post('/login', login.login);

var story = require('../app/controller/story/story')
router.post('/getStoryList', story.getStoryList)

var read = require('../app/controller/user/read')
router.get('/readFile', read.readFile)

module.exports = router;
