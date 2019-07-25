var mongoose = require("mongoose");
var childSchema = new mongoose.Schema({ name: 'string' });
var docSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, ''],
        lowercase: true,
    },
    password: {
        type: String,
        required: function () {
            return [true, ''];
        }
    },
    child: childSchema,
})
docSchema.statics.getAllCount = async function () {
    await this.model('user_info').estimatedDocumentCount((err,count) => {
       return count
    })
}
var docModel = mongoose.model("user_info", docSchema);

module.exports = docModel;