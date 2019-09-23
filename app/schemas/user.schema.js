var mongoose = require("mongoose");
var UsersSchema = new mongoose.Schema({
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
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },       
    },
    birthday: {
        type: String,
    },
    address: {
        type: String,
    },
    // stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'story' }],
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
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
UsersSchema.statics.getAllCount = async function () {
    await this.model('user_info').estimatedDocumentCount((err, count) => {
        return count
    })
}

module.exports = UsersSchema