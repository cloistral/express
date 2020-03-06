let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let UsersSchema = new mongoose.Schema({
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
    status: {
        // 状态
        type: String
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[1][0-9]{10}$/.test(v);
            },
            message: '手机号 - {VALUE} - 不符合验证规则!'
        },
    },
    birthday: { type: String, },
    address: { type: String, },
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

module.exports = UsersSchema