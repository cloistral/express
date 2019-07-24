var mongoose = require("mongoose");
var docSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, '']
    },
    password: {
        type: String,
        required: [true, '']
    },
    birthday: {
        type: String,
        required: function () {
            return [true, ''];
        }
    },
    address: {
        type: String,
        required : true
       
    }
})
var docModel = mongoose.model("user_info", docSchema);

module.exports = docModel;