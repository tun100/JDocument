var router = require("express").Router();
var util = require("util");
var _ = require("lodash");
var ProjectModel = global.AppUtil.db.model.project;
var UserModel = global.AppUtil.db.model.user;
var ServerLogger = global.AppUtil.logger.server;

router
  .use((req, res, next) => {
    // 判断是否有登录
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
    // 获取用户的项目列表
    var { hasLogin, username, password } = req.session.userInfo;
    UserModel.find({ username })
      .then(e => {
        ServerLogger.info(
          `Project信息：账户：${username} 密码：${password} 成功获取用户信息，检查是否有重复的Projects`
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
    // 处理用户提交的新项目数据
    var { username, password } = req.session.userInfo;
    var { project } = req.body;
    // 此处判断禁止空的project添加进来
    if (_.isEmpty(project) || _.isUndefined(project)) {
      res.send({
        status: "fail",
        info: {
          message: "请填入正确的Project内容"
        }
      });
      return;
    }
    new Promise((resolve, reject) => {
      // 先查询一下当前用户的终端列表，如果project.name 有重名的，就不能添加该Project
      UserModel.find({ username })
        .then(e => {
          ServerLogger.info(
            `Project信息：账户：${username} 密码：${password} 成功获取用户信息，下面开始查询ProjectList的所有内容`
          );
          // 如果查询到的结果为空，那么说明用户并不存在
          if (_.isEmpty(e) || _.isUndefined(e)) {
            res.send({
              status: "fail",
              info: {
                message: "当前用户不存在"
              }
            });
            return;
          } else {
            //如果结果不为空，那么就匹配一下现在的项目列表的名称是否重叠
            var currentProjectList = e[0].projectList;
            var isHasSameName = false;
            currentProjectList.every(item => {
              if (item.name === project.name) {
                isHasSameName = true;
                return false;
              } else {
                return true;
              }
            });
            //如果上面的循环设置isHasSameName为true，那么就告知用户已有相同项目
            if (isHasSameName === true) {
              res.send({
                status: "fail",
                info: {
                  message: "当前已有相同的项目，新增失败"
                }
              });
              return;
            } else {
              // 如果这是个新项目，那么就调到下一个Promise
              resolve();
            }
          }
        })
        .catch(fail => {
          // 此处请求mongodb出错异常
          ServerLogger.error(
            `Project信息：账户：${username} 密码：${password} 获取失败，原因:${JSON.stringify(
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
    }).then(e => {
      // 在前面验证了没有相同的项目名之后，此处进行添加新的项目
      // 设置Project当前的时间
      var currentTime = new Date();
      project.createTime = currentTime;
      project.content.map(item => {
        item.createTime = currentTime;
      });
      var newProject = new ProjectModel(project);
      newProject
        .addProject()
        .then(({ _id, name }) => {
          typeof _id;
          // 获取数据库信息成功，接下来添加projectList
          UserModel.update(
            {
              username: "libai"
            },
            {
              $push: {
                projectList: {
                  _id,
                  name
                }
              }
            }
          )
            .then(e => {
              // 如果操作记录为0，那么就说明新增失败
              if (e.ok === 0) {
                ServerLogger.info(
                  `Project信息： 新增项目失败（ok 为0）！项目ID：${_id},项目名称:${name}`
                );
                res.send({
                  status: "fail",
                  info: {
                    message: "新增项目失败，未能成功添加"
                  }
                });
                return;
              }
              // 新增项目成功！
              ServerLogger.info(`Project信息： 新增项目成功！项目ID：${_id},项目名称:${name}`);
              res.send({
                status: "success",
                info: {
                  message: "新增项目成功"
                }
              });
            })
            .catch(fail => {
              // 数据库不稳定，出现异常
              ServerLogger.error(
                `Project信息： 新增项目失败！项目ID：${_id},项目名称:${name},失败原因:${JSON.stringify(
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
          // res.send(e);
        })
        .catch(e => {
          //获取数据库信息失败
          ServerLogger.error(
            `Project信息, 账户：${username} 密码：${password}，在进行添加Project到数据库的过程中产生了错误，请检查：${JSON.stringify(
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
  });

module.exports = router;
