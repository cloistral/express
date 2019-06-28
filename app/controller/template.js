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


function index (req,res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
     if (err) throw err;
     var dbo = db.db("user")
     dbo.collection('user_info')
        .find({name:'north'})
        .toArray((err,data) => {
            if (err) throw err;
            res.json(data)
            db.close()
        })
        res.send('欢迎来到德莱文联盟!')
 });
}

function insert(req,res) {
   MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
     if (err) throw err;
     var dbo = db.db("user");
     let dataList = []
     for (var i = 0; i < 100 ; i++) {
       let param =  { name: '菜鸟工具' + i, url: 'https://c.runoob.com' + i*100, type: 'cn' + i}
       dataList.push(param)  
     }
     dbo.collection("site").insertMany(dataList, function(err, obj) {
         if (err) throw err;
         res.send('插入成功!')
         db.close();
     });
   });
}
