var mongoose = require("mongoose");
var StorySchema = require('../schemas/story.schema') 
var docModel = mongoose.model("story", StorySchema);
module.exports = docModel;