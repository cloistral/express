
var User = require('../../model/user.model')
module.exports = {
    getUserInfo(req,res,next){
        User.find().then((data) => {
            console.log(data)
        })
        console.log(req.user)
        res.json(req.user);
    }
}