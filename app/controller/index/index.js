var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

module.exports = {
    index(req, res) {
        console.log(req.signedCookies);
        res.send("日了狗了");
    }
};
