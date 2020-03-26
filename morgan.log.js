
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

module.exports = function (app) {
    var accessLogStream = fs.createWriteStream(path.join(__dirname,'/log/', 'access.log'), { flags: 'a' })
    if (app) {
        app.use(morgan('short', { stream: accessLogStream }))
    }
}
