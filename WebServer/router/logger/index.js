var express = require("express");
var router = express.Router();
var morgan = require("morgan");
var fs = require("fs");
var path = require("path");
var moment = require("moment");
var currentDay = moment().format("YYYY-MM-DD");
var httpLogPath = path.join(
  process.cwd(),
  "logger",
  "http",
  currentDay + ".log"
);
if (global.ConfigInfo.logger.isNeedConsoleLog === true) {
  router.use(morgan("common"));
}
if (global.ConfigInfo.logger.isNeedFileLog === true) {
  router.use(
    morgan("common", {
      stream: fs.createWriteStream(httpLogPath, { flags: "a" })
    })
  );
}

module.exports = router;
