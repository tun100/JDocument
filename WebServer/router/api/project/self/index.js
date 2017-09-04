var router = require("express").Router();
var util = require("util");
var _ = require("lodash");
var ProjectModel = global.AppUtil.db.model.project;
var ServerLogger = global.AppUtil.logger.server;

router
  .use((req, res, next) => {
    var { hasLogin, username, password } = req.session.userInfo;
    if (hasLogin === false) {
      res.send({
        status: "fail",
        info: {
          message: "您尚未登录，请先登录"
        }
      });
    } else {
      next();
    }
  })
  .get("/", (req, res, next) => {
    var { hasLogin, username, password } = req.session.userInfo;
    UserModel.find({ username })
      .then(e => {
        ServerLogger.info(
          `Project信息：账户：${username} 密码：${password} 成功获取用户信息，下面开始查询ProjectList的所有内容`
        );
        res.send({
          status: "success",
          info: {
            list: e
          }
        });
      })
      .catch(fail => {
        ServerLogger.error(
          `Project信息：账户：${username} 密码：${password} 未能获取用户信息，失败原因如下:${fail}`
        );
        res.send({
          status: "fail",
          info: {
            message: "服务器不稳定，请重试"
          }
        });
      });
  })
  .post("/", (req, res, next) => {
    var { project } = req.body;
    if (_.isEmpty(project) || _.isUndefined(project)) {
      res.send({
        status: "fail",
        info: {
          message: "请填入正确的Project内容"
        }
      });
      return;
    }
    var currentTime = new Date();
    project.createTime = currentTime;
    project.content.map((item=>{
      item.createTime = currentTime;
    }))
    var newProject = new ProjectModel(project);
    newProject.addProject().then(e=>{
      res.send(e);
    }).catch(e=>{
      ServerLogger.error(`Project信息, 账户：${username} 密码：${password}，在进行添加Project到数据库的过程中产生了错误，请检查：${JSON.stringify(fail)}`)
      res.send({
        status: "fail",
        info: {
          message: "服务器不稳定，请重试"
        }
      })
    })
  });

module.exports = router;
