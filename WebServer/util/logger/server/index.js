var LoggerCreator = require("../_create/");
var ServerLogger = LoggerCreator.create({
  directory: "server",
  loggerName: "ServerLogger"
});

module.exports = ServerLogger