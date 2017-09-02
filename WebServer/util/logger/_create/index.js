var bunyan = require("bunyan");
var moment = require("moment");
var fs = require("fs");
var currentDay = moment().format("YYYY-MM-DD");
var path = require("path");
var LEVEL = require("../_const/LEVEL");
var domain = require("domain");

function create({ directory, loggerName, filename = currentDay }) {
  class LoggerWriter {
    write(rec) {
      let { name, msg, time } = rec;
      let parseTime = moment(time).format("YYYY年MM月DD日HH时mm分ss秒");
      if (global.ConfigInfo.logger.isNeedConsoleLog === true) {
        console.log(`${name} [${LEVEL[rec.level]}] [${parseTime}]: ${msg} `);
      }
      if (global.ConfigInfo.logger.isNeedFileLog === true) {
        var logPath = path.join(
          process.cwd(),
          "logger",
          directory,
          `${filename}.log`
        );
        fs.appendFile(logPath, JSON.stringify(rec) + "\r\n");
      }
    }
  }

  var log = bunyan.createLogger({
    name: loggerName,
    streams: [
      {
        level: "info",
        stream: new LoggerWriter(),
        type: "raw"
      }
    ]
  });
  return log;
}

module.exports = {
  create
};
