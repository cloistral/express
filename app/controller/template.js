var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// function index (req,res) {
//     res.send('欢迎来到德莱文联盟!')
// }

// function insert(req,res) {
//     res.send('插入成功!')
// }

// exports.index = index
// exports.insert = insert

// module.exports = {
//   index,
//   insert
// }

let obj = {
    index : (req,res) => {
      res.send('111111111!')
    },
    insert : (req,res) => {
      res.send('2222222222!')
    }
}

module.exports = obj



// module.exports = (req,res,next) => {
//   MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("user")
//       let data =  dbo.collection('user_info').find({name:'north'}).toArray()
//       res.json(data)
//       db.close()
//   });
// };
