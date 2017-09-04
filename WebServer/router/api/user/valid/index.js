var express = require("express");
var router = express.Router();
var UserModel = global.AppUtil.db.model.user;
var ServerLogger = global.AppUtil.logger.server;

router
  .get("/", (req, res, next) => {
    // 获取当前页面是否有登录
    var { userInfo } = req.session;
    var { hasLogin } = userInfo;
    res.send({
      hasLogin
    });
  })
  .post("/", (req, res, next) => {
    // 登录操作
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
    // 将提交的登录信息变成字符串
    username = "" + username;
    password = "" + password;
    UserModel.find({ username, password })
      .then(e => {
        // 成功查询数据库信息I
        if (e.length === 0) {
          res.send({
            status: "fail",
            info: {
              message: "提供的登录信息有误"
            }
          });
          ServerLogger.warn(`登录请求：账户：${username} 密码：${password} 尝试登陆，但是登录失败`);
          return;
        }
        // 登录成功，设置lastLoginTime
        ServerLogger.warn(`登录请求：账户：${username} 密码：${password} 登录成功`);
        var loginTime = new Date();
        UserModel.update(
          {
            username,
            password
          },
          {
            $set: {
              lastLoginTime: loginTime
            }
          }
        )
          .then(e => {
            // 设置lastLoginTime成功
            ServerLogger.info(
              `登录请求：账户：${username} 密码：${password} 成功更新数据库用户字段lastLoginTime`
            );
            req.session.userInfo.hasLogin = true;
            req.session.userInfo.username = username;
            req.session.userInfo.password = password;
            res.send({
              status: "success",
              info: {
                message: {
                  lastLoginTime: loginTime
                }
              }
            });
          })
          .catch(fail => {
            // 设置lastLoginTime失败
            ServerLogger.info(
              `登录请求：账户：${username} 密码：${password} 未能更新数据库用户字段lastLoginTime`
            );
            throw new Error(`登录请求：账户：${username} 密码：${password} 未能更新数据库用户字段`);
          });
      })
      .catch(fail => {
        // 查询用户登录信息，在查询数据库时失败
        ServerLogger.error(
          `服务器在处理/user/valid请求过程中 查询数据库时产生错误。用户名：${username}，密码：${password}，错误原因为 ${JSON.stringify(
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
