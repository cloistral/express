var mongoose = require("mongoose");
var UsersSchema = require('../schemas/user.schema') 
var docModel = mongoose.model("user", UsersSchema);
module.exports = docModel;