var express = require('express')
var router = express.Router();
var apiRouter =  require('./api/')
var loggerRouter = require('./logger/')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var expressSession = require('express-session')

router.use(expressSession({
    secret: "JDocument Secret"
}));
router.use(cookieParser())
router.use(bodyParser())
router.use(loggerRouter);
router.use('/api',apiRouter);

module.exports = router;