var express = require('express')
var prepareRouter = require('./prepare/')
var userRouter = require('./user/')
var projectRouter = require('./project/')
var router = express.Router();

router.use(prepareRouter)
router.use('/user',userRouter);
router.use('/project',projectRouter)

router.use('/',(req,res,next)=>{
    res.send("you are in default page")
})


module.exports = router;