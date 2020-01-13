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

router.post('/login', require('../app/controller/user/login').login);
router.post('/getUserInfo', require('../app/controller/user/user').getUserInfo);
router.post('/editUser', require('../app/controller/user/user').editUser)
router.delete('/deleteUser', require('../app/controller/user/user').deleteUser)
router.get('/readFile', require('../app/controller/user/read').readFile)


module.exports = router;
