var User = require("../../model/userInfo.model");
module.exports = {
    getUserInfo(req, res, next) {
        var format = res.app.get("format");
        User.find().then(data => {
            format.success(res, 200, data);
        });
    }
};
