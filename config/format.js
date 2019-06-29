module.exports = {
    success (res,code,data,msg) {
        code = code || 200
        data = data || {}
        msg = msg || 'success'
        res.status(code).send({code:code,msg:msg,data:data})
    },
    fail (res,code,reason) {
        code = code || 500
        reason = reason || '请求失败'
        res.status(code).send({code:code,msg:reason})
        return ;
    }
}