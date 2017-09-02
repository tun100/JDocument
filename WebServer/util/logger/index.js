var bunyan = require("bunyan");
var serverLogger = require("./server/");
var sqlLogger = require('./sql/')

module.exports = {
  server: serverLogger,
  sql: sqlLogger
};