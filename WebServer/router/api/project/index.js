var router = require("express").Router();
var selfRouter = require("./self/");

router.use("/self", selfRouter);

module.exports = router;
