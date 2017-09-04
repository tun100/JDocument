var router = require("express").Router();
var _ = require("lodash");

// 初始化req.session
router.use((req, res, next) => {
  if (_.isUndefined(req.session.userInfo)) {
    req.session.userInfo = global.ConfigInfo.defaultSession.userInfo;
  }
  next();
});

module.exports = router;
