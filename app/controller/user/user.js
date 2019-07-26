var User = require("../../model/user.model");
var Story = require('../../model/stoty.modal')
module.exports = {
    //查
    getUserInfo(req, res, next) {
        var format = res.app.get("format");
        let pageSize = req.body.pageSize || 0
        let pageCount = req.body.pageCount || 10

        Story.findOne({ title: 'north_1' })
            .populate('author')
            .exec(function (err, story) {
                console.log('什么',err, story)
            })

        User.estimatedDocumentCount((e, count) => {
            if (e) return;
            User.find()
                .skip(pageSize * pageCount)
                .limit(pageCount)
                .exec((err, data) => {
                    if (err) return;
                    let formatData = {
                        pageCount: pageCount,
                        pageSize: pageSize,
                        allCount: count,
                        list: data || []
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
        let id = req.body.id
        if (!id) {
            return format.success(res, 500, 'id必须传')
        }
        User.updateOne(
            { _id: id },
            { $set: { address: address, birthday: birthday } },
            function (err, data) {
                if (err) return
                format.success(res, 200, {})
            });
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
