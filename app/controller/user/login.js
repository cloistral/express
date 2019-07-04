var jwt = require("jsonwebtoken");
var User = require('../../model/userInfo.model')
module.exports = (req,res) => {
    var format = res.app.get('format')
    var username = req.query.username;
    var password = req.query.password;
    if (!username || !password) {
      format.fail(res,500,'请求失败,请输入用户名及密码!')
      return;
    }
    var user= new User({
        username:username,
        password:password,
        age:req.query.age,
        constellation : req.query.constellation
    })
    user.save(function(err,data) {
        if(err) return;
        console.log(data)
    })
    // 加密，获取token
    var config = res.app.get('config')
    var authToken = jwt.sign({
        username: username,
        password:password,
    }, config.secret,{
        expiresIn : config.expiresIn
    });
    // 发送给前端，存在浏览器里
    res.status(200).json({
        token: authToken
    });
}