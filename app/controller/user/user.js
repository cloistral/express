var User = require("../../model/user.model");
var Story = require('../../model/stoty.modal')
module.exports = {
    //查
    getUserInfo(req, res, next) {
        var format = res.app.get("format");
        let pageSize = req.body.pageSize || 0
        let pageCount = req.body.pageCount || 10
        User.estimatedDocumentCount((e, count) => {
            if (e) return;
            User.find()
                .skip(pageSize * pageCount)
                .limit(pageCount)
                .exec((err, data) => {
                    if (err) return;
                    let list = []
                    console.log(data, typeof data, data.constructor)
                    if (typeof data == 'object' && data.constructor == Array) {
                        data.forEach((item, index) => {
                            let param = {
                                id: item._id,
                                username: item.username,
                                password: item.password,
                                address: item.address,
                                birthday: item.birthday
                            }
                            list.push(param)
                        })
                    }
                    let formatData = {
                        pageCount: pageCount,
                        pageSize: pageSize,
                        allCount: count,
                        list: list || []
                    }
                    format.success(res, 200, formatData);
                })
        })

    },
    //改
    editUser(req, res) {
        var format = res.app.get("format");
        let address = req.body.address
        let birthday = req.body.birthday
        let phone = req.body.phone
        console.log(phone)
        let id = req.body.id
        if (!id) {
            return format.success(res, 500, 'id必须传')
        }
        User.findByIdAndUpdate(id,
            { $set: { address: address, birthday: birthday, phone: phone } },
            function (err, data) {

                if (err) handleError(err);
                if (data) {
                    format.success(res, 200, data)
                } else {
                    format.success(res, 500, '更新出错了')
                }
            })

    },
    //删
    deleteUser(req, res) {
        var format = res.app.get("format");
        let id = req.body.id
        User.findOneAndRemove({ _id: id }, (err, data) => {
            if (err) return
            format.success(res, 200, data)
        })
    }
};
