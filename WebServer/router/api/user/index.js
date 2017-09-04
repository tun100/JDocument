var express = require("express");
var router = express.Router();
var validRouter = require('./valid/')
var registerRouter = require('./register/')

router.use('/valid',validRouter)
router.use('/register',registerRouter)

module.exports = router;