var jwt = require("jsonwebtoken");
module.exports = (req,res) => {
    var username = req.body.username;
    var password = req.body.password;
    
    if (!username||!password) {
        return res.status(400).send("输入username及password");
    }
    // 加密，获取token
    var config = res.app.get('config')
    var authToken = jwt.sign({
        username: username,
        password:password
    }, config.secret,{
        expiresIn : config.expiresIn
    });
    // 发送给前端，存在浏览器里
    res.status(200).json({
        token: authToken
    });
}