var mongoose = require("mongoose");
var StorySchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    title : String,
})
module.exports = StorySchema