var express = require("express");
var router = express.Router();
var util = require("util");
var UserModel = AppUtil.db.model.user;
var ServerLogger = AppUtil.logger.server;

router
  .get("/valid", (req, res, next) => {
    var { userInfo } = req.session;
    var { hasLogin } = userInfo;
    res.send({
      hasLogin
    });
  })
  .post("/valid", (req, res, next) => {
    var { username, password } = req.body;
    if (username === undefined || password === undefined) {
      res.send({
        status: "fail",
        info: {
          message: "提供登录信息不完整"
        }
      });
      return;
    }
    UserModel.find({ username, password })
      .then(res => {
        res.send({
          status: "success",
          info: {
            data: res
          }
        });
      })
      .catch(fail => {
        ServerLogger.error(
          `服务器在处理/user/valid请求时，查询数据库产生错误。用户名：${username}，密码：${password}，错误原因为${JSON.stringify(
            fail
          )}`
        );
        res.send({
          status: "fail",
          info: {
            message: "服务器不稳定，请重试"
          }
        });
      });
  });

module.exports = router;
