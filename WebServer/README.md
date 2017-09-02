# JDocument 服务器端(express) 接口详情

## GET **/user/valid**
> 请求验证状态
```js
    //发送格式 
    [无]
    //返回格式 json
    {
        hasLogin: false
    }
```

## POST **/user/valid**
> 提交登录信息
```js
    //发送格式 x-www-form-urlencoded
    {
        username: "john",
        password: "123456"
    }
    //返回数据 json
    {
        status: "success" | "fail",
        info: {
            message: "登录成功" | "没有这个注册账户"
        }
    }
```
