var AppUtil = require("../../");
var ConfigInfo = require("../../../config/");
ConfigInfo.logger.isNeedFileLog = false;
global.ConfigInfo = ConfigInfo;
global.AppUtil = AppUtil;

var UserModel = AppUtil.db.model.user;

var UserInstance = new UserModel({
  username: "test2",
  password: "666",
  lastLoginTime: new Date(),
  userType: "admin"
});

UserInstance.save().then(res=>{
    console.log(res);
}).catch(fail=>{
    console.log(fail)
})