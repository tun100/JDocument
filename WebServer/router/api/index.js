var express = require('express')
var prepareRouter = require('./prepare/')
var userRouter = require('./user/')
var projectRouter = require('./project/')
var router = express.Router();

// 初始化
router.use(prepareRouter)
// 用户验证及注册
router.use('/user',userRouter);
// 获取项目信息
router.use('/project',projectRouter)

router.use('/',(req,res,next)=>{
    res.send("you are in default page")
})


module.exports = router;