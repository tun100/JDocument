var mongoose = require("../../database/user/");
var AppSchema = require("../../schema/");

var UserModel = mongoose.model("User", AppSchema.user);

module.exports = UserModel;