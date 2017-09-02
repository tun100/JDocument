var AppUtil = require("../../");
var ConfigInfo = require("../../../config/");
ConfigInfo.logger.isNeedFileLog = false;
global.ConfigInfo = ConfigInfo;
global.AppUtil = AppUtil;

var UserModel = AppUtil.db.model.user;

/**
 * got no data
 */
// UserModel.find()
//   .where("password")
//   .equals("df666")
//   .exec()
//   .then(res => {
      //I got 666 []
//     console.log("I got 666", res);
//   })
//   .catch(fail => {
//     console.log("it's fail ", fail);
//   });

/**
 * find total data
 */
// UserModel.find().then((res)=>{
//     console.log(res);
// }).catch(fail=>{
//     console.log("error occurs",fail)
// })

/**
 * save,update method
 */
// var UserInstance = new UserModel({
//   username: "test2",
//   password: "666",
//   lastLoginTime: new Date(),
//   userType: "admin"
// });

// UserInstance.save().then(res=>{
//     /**
//      * { __v: 0,
//         username: 'test2',
//         password: '666',
//         lastLoginTime: 2017-09-02T06:25:18.847Z,
//         userType: 'admin',
//         _id: 59aa4ece221f36874181f46f }
//      */
//     console.log(res);
// }).catch(fail=>{
//     console.log(fail)
// })
