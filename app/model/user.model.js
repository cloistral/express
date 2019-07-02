var mongoose = require("mongoose");
var docSchema = new mongoose.Schema({
    uid : {
        type : mongoose.Schema.Types.ObjectId,
        index : true
    },
    usernmae : {
        type : String,
        index : true
    },
    password : {
        type : String,
        index : true
    }
})
var docModel = mongoose.model("user", docSchema);
// docModel.methods.
module.exports = docModel;