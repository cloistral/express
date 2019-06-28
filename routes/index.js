var express = require('express');
var expressJwt = require("express-jwt");
var config = require('../config/config')
var router = express.Router();
const path = require('path');
let rootPath = path.resolve(__dirname,'..');

//配置JST
router.use(expressJwt({
    secret: config.secret
}).unless({
    path: ["/login",'/index.html']
}),);


router.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {   
      res.status(401).send('invalid token...');
    }
});


var indexCon = require('../app/controller/index/index')
router.get('/',indexCon.index)

var userCon = require('../app/controller/user/user')
router.get('/getUserInfo', userCon.getUserInfo);

var loginCon = require('../app/controller/index/login')
router.get('/login', loginCon);

router.get('/index.html',(req,res) => {
    res.sendFile( rootPath + "/public/" + "index.html" );
})


module.exports = router;
