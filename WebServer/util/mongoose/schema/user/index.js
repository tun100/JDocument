var mongoose = require("../../database/");
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  lastLoginTime: Date,
  createTime: Date,
  userType: String // admin,normal
});

module.exports = UserSchema;