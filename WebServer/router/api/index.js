var express = require('express')
var userRouter = require('./user/')
var router = express.Router();

router.use('/user',userRouter);

router.use('/',(req,res,next)=>{
    res.send("you are in default page")
})


module.exports = router;