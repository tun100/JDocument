var router = require("express").Router();
var selfRouter = require("./self/");

// 获取和设置当前用户自己的项目信息
router.use("/self", selfRouter);

module.exports = router;