module.exports = {
    getUserInfo(req,res,next){
        console.log(req.user)
        res.json(req.user);
    }
}