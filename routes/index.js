var express = require('express');
var router = express.Router();

var index = require('../app/controller/index/index')
router.get('/',index.index);
router.get('/insert',index.insert);
router.get('/delete_data',index.deleteDb);

var user = require('../app/controller/user')
router.get('/user', user);

module.exports = router;
