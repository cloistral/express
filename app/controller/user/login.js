var jwt = require("jsonwebtoken");
var mongoose = require('mongoose')

var UserModel = require('../../model/user.model')
var BaseController = require('../../controller/base')

class LoginController extends BaseController {
    constructor() {
        super()
        this.login = this.login.bind(this)
    }
    login(req, res) {
        UserModel.find({ username: req.body.username }, (err, data) => {
            if (err) return;
            if (data && data.length > 0) {
                this.formatData({ res: res, code: 500, msg: '当前用户名已经注册过了,请重新输入' })
            } else {
                let user = new UserModel({
                    _id: new mongoose.Types.ObjectId(),
                    username: req.body.username,
                    password: req.body.password,
                    status: req.body.status
                })
                user.save((error, data) => {
                    if (error) {
                        return this.formatData({ res: res, code: 500, data: error.message })
                    }
                    var authToken = jwt.sign({
                        username: req.body.username,
                        password: req.body.password,
                        uid: data._id
                    }, this.config.secret, {
                        expiresIn: this.config.expiresIn
                    });
                    return this.formatData({ res: res, code: 200, data: { token: authToken } })
                })
            }
        })
    }
}

module.exports = new LoginController();



