var mongoose = require("mongoose");
var UsersSchema = require('../schemas/user.schema')
//更新 保存时间钩子
UsersSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }

    next();
})
var User = mongoose.model("user", UsersSchema);
module.exports = User;