var User = require("../../model/userInfo.model");
module.exports = {
    getUserInfo(req, res, next) {
        var format = res.app.get("format");
        let pageSize = req.body.pageSize || 0
        let pageCount = req.body.pageCount || 10
        User.estimatedDocumentCount((e,count) => {
            if(e) return;
            User.find()
            .skip(pageSize * pageCount)
            .limit(pageCount)
            .exec((err,data) => {
                if (err) return ;
                let formatData = {
                    pageCount : pageCount,
                    pageSize : pageSize,
                    allCount : count,
                    list : data || []
                }
                format.success(res, 200, formatData);
            })
        })
        
    },
    getCurrentUser(req,res) {
        var format = res.app.get("format");
        format.success(res, 200, req.user);
    }
};
