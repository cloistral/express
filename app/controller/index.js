module.exports = (req,res,next) => {
    res.cookie('key', 'value');
    var data = {
        key : '1223456'
    }
    res.json(data)
};