var mongoose = require("../../database/");
var AppSchema = require("../../schema/");

var UserModel = mongoose.model("User", AppSchema.user,"user");

module.exports = UserModel;