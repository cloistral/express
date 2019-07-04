var mongoose = require("mongoose");
var docSchema = new mongoose.Schema({
    uid : {
        type : mongoose.Schema.Types.ObjectId,
        index : true
    },
    name : {
        type : String,
        index : true
    },
    age : {
        type : String,
        index : true
    },
    duty : {
        type : String,
        index : true
    }
})
var docModel = mongoose.model("site", docSchema);
module.exports = docModel;