var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserChildrenSchema = require('./user.childschema')
var UsersSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: [true, ''],
        lowercase: true,
    },
    password: {
        type: String,
        required: function () {
            return [true, ''];
        }
    },
    phone: { type: String, },
    birthday: { type: String, },
    address: { type: String, },
    children : [UserChildrenSchema],
    stories: [{ type: Schema.Types.ObjectId, ref: 'story' }],
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    },

})
//每次执行都会调用,时间更新操作
UsersSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }

    next();
})
module.exports = UsersSchema