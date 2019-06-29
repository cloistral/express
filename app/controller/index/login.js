var jwt = require("jsonwebtoken");
module.exports = (req,res) => {
    var format = res.app.get('format')
    var username = req.query.username;
    var password = req.query.password;
    if (!username || !password) {
      format.fail(res,500,'请求失败,请输入用户名及密码!')
      return;
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