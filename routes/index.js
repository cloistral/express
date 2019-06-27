var express = require('express');


var router = express.Router();

var index = require('../app/controller/index')
router.get('/', index);

var user = require('../app/controller/user')
router.get('/user', user);

module.exports = router;
