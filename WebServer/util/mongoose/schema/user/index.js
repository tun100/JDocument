var mongoose = require("../../database/");
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  lastLoginTime: Date,
  createTime: Date,
  userType: String, // admin,normal
  projectList: [
    {
      _id: Object,
      name: String
    }
  ]
});

module.exports = UserSchema;