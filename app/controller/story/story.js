var StoryModel = require('../../model/stoty.modal')
var StoryModel = require('../../model/stoty.modal')
class Story {
    constructor() {

    }
}
Story.prototype.init = function (req, res) {

}
Story.prototype.getStoryList = function (req, res) {
    var format = res.app.get("format");
    StoryModel.find().
        populate('author','username').
        exec(function (err, storys) {
            format.success(res, 200, storys);
        })
}
let story = new Story()
module.exports = story;