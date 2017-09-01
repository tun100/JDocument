var LoggerCreator = require("../_create/");
var SQLLogger = LoggerCreator.create({
  directory: "sql",
  loggerName: "SQLLogger"
});
module.exports = SQLLogger
