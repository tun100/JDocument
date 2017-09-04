var router = require("express").Router();
var _ = require("lodash");

router.use((req, res, next) => {
  if (_.isUndefined(req.session.userInfo)) {
    req.session.userInfo = {
      hasLogin: false,
      username: undefined,
      password: undefined
    };
    if (global.ConfigInfo.user.isNeedLogin === false) {
      req.session.userInfo.hasLogin = true;
      next();
      return;
    }
  }
  next();
});

module.exports = router;
