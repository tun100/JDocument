var mongoose = require("mongoose");
var AppSchema = require("../../schema/");

var UserModel = mongoose.model("UserModel", AppSchema.user);

module.exports = UserModel;
