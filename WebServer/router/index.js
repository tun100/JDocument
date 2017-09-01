var express = require('express')
var router = express.Router();
var apiRouter =  require('./api/')
var loggerRouter = require('./logger/')

router.use(loggerRouter);
router.use('/api',apiRouter);

module.exports = router;