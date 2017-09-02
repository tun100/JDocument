var mongoose = require("../../database/user/");
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  lastLoginTime: Date,
  userType: String // admin,normal
});

module.exports = UserSchema;