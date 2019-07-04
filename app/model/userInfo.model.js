var mongoose = require("mongoose");
var docSchema = new mongoose.Schema({
    username : {
        type : String,
        index : true
    },
    password : {
        type : String,
        index : true
    },
    date : {
        type : Date,
    },
    age : {
        type : String,
    },
    constellation : {
        type : String,
    }
})
var docModel = mongoose.model("user_info", docSchema);
// docModel.methods.
module.exports = docModel;