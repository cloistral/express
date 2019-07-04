var express = require('express');
var expressJwt = require("express-jwt");
var config = require('../config/config')
var router = express.Router();

//配置JST
router.use(expressJwt({
    secret: config.secret
}).unless({
    path: ["/api/login",'/index.html']
}),);

router.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {   
      res.status(401).send('无效的token invalid token...');
    }
});

var indexCon = require('../app/controller/index/index')
router.get('/',indexCon.index)

var userCon = require('../app/controller/user/user')
router.post('/getUserInfo', userCon.getUserInfo);

var loginCon = require('../app/controller/user/login')
router.get('/login', loginCon);

module.exports = router;
