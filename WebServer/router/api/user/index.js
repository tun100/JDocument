var express = require("express");
var router = express.Router();
var validRouter = require('./valid/')
var registerRouter = require('./register/')

// 验证
router.use('/valid',validRouter)
// 注册
router.use('/register',registerRouter)

module.exports = router;