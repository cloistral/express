var expressJwt = require("express-jwt");
var jwt = require("jsonwebtoken");
app.use(expressJwt({
    secret: "secret"//加密密钥，可换
}).unless({
    path: ["/login"]//添加不需要token的接口
}));

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {   
      res.status(401).send('invalid token...');
    }
});
  

app.post("/login", function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if (!username||!password) {
        return res.status(400).send("输入username及password");
    }
    // 加密，获取token
    var authToken = jwt.sign({
        username: username,
        password:password
    }, "secret",{
        expiresIn : 60*60*24// 授权时效24小时
    });
    // 发送给前端，存在浏览器里
    res.status(200).json({
        token: authToken
    });
});


app.post('/test',function(req,res) {
    res.send('1111')
})