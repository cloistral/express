var jwt = require("jsonwebtoken");
var User = require('../../model/user.model')
var Story = require('../../model/stoty.modal')
module.exports = (req, res) => {
    var format = res.app.get('format')
    var config = res.app.get('config')

    User.find({ username: req.body.username })
        .then(data => {
            if (data && data.length > 0) {
                format.fail(res, 500, '当前用户名已经注册过了,请重新输入')
            } else {
                createUser()
            }
        })
    let createUser = function () {
        var user = new User({

            username: req.body.username,
            password: req.body.password,
        })
        user.save(function (error, data) {
            if (error) {
                return format.error(res, error.errors)
            }
            console.log(data)
            var authToken = jwt.sign({
                username: req.body.username,
                password: req.body.password,
                uid: data._id
            }, config.secret, {
                expiresIn: config.expiresIn
            });

            return format.success(res, 200, { token: authToken })
        })
    }
}