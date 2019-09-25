var fs = require("fs");
var path = require('path')
var baseController = require('../base')
class ReadController extends baseController {
    constructor() {
        super()
        this.readFile = this.readFile.bind(this)
    }
    readFile(req, res) {
        let file = path.join(__dirname, '../../../public/text.txt')
        // fs.stat(file, function (err, stats) {
        //     if (err) return;
        //     var filename = path.basename(file);
        //     res.setHeader('content-length', stats.size)
        //     res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        //     var filestream = fs.createReadStream(file);
        //     filestream.on('data', function (chunk) { })
        //     filestream.pipe(res);
        // })
      
    }
}

module.exports = new ReadController()

// var options = {
//     root: __dirname + '../../../../public/',
//     dotfiles: 'allow',
//     headers: {
//         'x-timestamp': Date.now(),
//         'x-sent': true
//     }
// };

// res.sendFile('text.txt', options, function (err) {
//     if (err) {
//     } else {
//         console.log('Sent:', 'text.txt');
//     }
// });