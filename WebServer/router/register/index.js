var express = require('express')
var router = express.Router();

router.use((req,res,next)=>{
    if(req.session.userInfo === undefined){
        req.session.userInfo = {
            hasLogin: false
        }
    }
    next();
})

module.exports = router;