var fs = require('fs')
var path = require('path')

let filePath = path.join(__filename,'../','./public/fu_1.jpg')
console.log(filePath)
fs.stat(filePath, function (err, data) {
    console.log(data.size)
}) 