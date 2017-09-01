var bunyan = require("bunyan");
var moment = require("moment");
var fs = require("fs");
var currentDay = moment().format("YYYY-MM-DD");
var path = require("path");
var LEVEL = require("../_const/LEVEL");

function create({ directory, loggerName, filename = currentDay }) {
  class LoggerWriter {
    write(rec) {
      if (process.env.NODE_ENV !== "production") {
        let { name, msg, time } = rec;
        let parseTime = moment(time).format("YYYY年MM月DD日HH时mm分ss秒");
        console.log(`${name} [${LEVEL[rec.level]}] [${parseTime}]: ${msg} `);
      }
      var logPath = path.join(
        process.cwd(),
        "logger",
        directory,
        `${filename}.log`
      );
      fs.appendFile(logPath, JSON.stringify(rec)+"\r\n");
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
