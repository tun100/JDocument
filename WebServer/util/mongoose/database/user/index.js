var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/JDocumentUser",{
    useMongoClient: true
})

var db = mongoose.connection;
db.on('connected',()=>{
    global.AppUtil.logger.sql.info("User Mongodb 服务已连接")
})
db.on('error',(error)=>{
    global.AppUtil.logger.sql.error("User Mongodb 服务失败，原因:"+JSON.stringify(error))
})
db.on('disconnected',()=>{
    global.AppUtil.logger.sql.info("User Mongodb 服务停止连接")
})

module.exports = mongoose;