var express = require("express");
var router = express.Router();
var UserModel = global.AppUtil.db.model.user;
var ServerLogger = global.AppUtil.logger.server;
var util = require("util");
var _ = require("lodash");

router.post("/", (req, res, next) => {
  var { username, password } = req.body;
  if (_.isUndefined(username) || _.isUndefined(password)) {
    res.send({
      status: "fail",
      info: {
        message: "注册信息未提供完整"
      }
    });
    return;
  } else {
    UserModel.find({
      username
    })
      .then(e => {
        if (e.length !== 0) {
          res.send({
            status: "fail",
            info: {
              message: "当前账户已存在"
            }
          });
          return;
        } else {
          var currentTime = new Date();
          var newUser = new UserModel({
            username,
            password,
            lastLoginTime: currentTime,
            createTime: currentTime,
            userType: "normal"
          });
          newUser
            .save()
            .then(e => {
              res.send({
                status: "success",
                info: {
                  message: "注册成功",
                  createTime: currentTime
                }
              });
              req.session.userInfo.hasLogin = true;
              req.session.userInfo.username = username;
              req.session.userInfo.password = password;
              ServerLogger.info(
                `注册信息：账户:${username} 密码: ${password} 注册成功，登录时间为${currentTime.toString()}`
              );
              return;
            })
            .catch(fail => {
              ServerLogger.info(
                `注册信息：账户:${username} 密码: ${password} 注册失败，原因是${JSON.stringify(
                  fail
                )}`
              );
              res.send({
                status: "fail",
                info: {
                  message: "服务器未能及时处理，请重试"
                }
              });
              return;
            });
        }
      })
      .catch(fail => {
        ServerLogger.error(
          `注册信息：账户：${username} 密码：${password} 尝试注册时，产生了一些问题，请检查！` +
            JSON.stringify(fail)
        );
        res.send({
          status: "fail",
          info: {
            message: "服务器不稳定，请重试"
          }
        });
      });
  }
});

module.exports = router;
