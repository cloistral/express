var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var StorySchema = new mongoose.Schema({
    // author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    storyName: {
        type: String
    },
    author: { type: Schema.Types.ObjectId, ref: 'user' }
})
module.exports = StorySchema