var User = require("../../model/user.model");
var BaseController = require('../base')

class UserController extends BaseController {
    constructor() {
        super()
        this.getUserInfo = this.getUserInfo.bind(this)
        this.editUser = this.editUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }
    //查
    getUserInfo(req, res) {
        let pageSize = req.body.pageSize || 0
        let pageCount = req.body.pageCount || 10
        User.estimatedDocumentCount((e, count) => {
            if (e) return;
            User.find()
                .populate('stories')
                .skip(pageSize * pageCount)
                .limit(pageCount)
                .exec((err, data) => {
                    if (err) return;
                    let list = []
                    if (typeof data == 'object' && data.constructor == Array) {
                        data.forEach((item, index) => {
                            let param = {
                                id: item._id,
                                username: item.username,
                                password: item.password,
                                address: item.address,
                                birthday: item.birthday,
                                children: item.children
                            }
                            list.push(param)
                        })
                    }
                    let formatData = {
                        pageCount: pageCount,
                        pageSize: pageSize,
                        allCount: count,
                        list: list
                    }
                    this.formatData({ res: res, data: formatData });
                })
        })

    }
    //改
    editUser(req, res) {
        let address = req.body.address
        let birthday = req.body.birthday
        let phone = req.body.phone
        let id = req.body.id
        if (!id) {
            return format.success(res, 500, 'id必须传')
        }
        User.findByIdAndUpdate(id,
            { $set: { address: address, birthday: birthday, phone: phone } },
            (err, data) => {
                if (err) throw (err);
                if (data) {
                    this.formatData({ res: res, data: data });
                } else {
                    this.formatData({ res: res, code: 500, msg: '更新出错了啊' });
                }
            })
    }
    //删
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.body.id }, (err, data) => {
            if (err) return
            this.formatData({ res: res, data: data });
        })
    }
}


module.exports = new UserController()