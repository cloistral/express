var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UsersChildSchema = new mongoose.Schema({
    id : Schema.Types.ObjectId,
    name: String,
    age: String
})
module.exports = UsersChildSchema