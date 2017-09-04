var mongoose = require("../../database/");
var AppSchema = require("../../schema/");

var ProjectModel = mongoose.model("Project", AppSchema.project,"project");

module.exports = ProjectModel;