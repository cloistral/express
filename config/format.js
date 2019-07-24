module.exports = {
    success (res,code,data,msg) {
        code = code || 200
        data = data || {}
        msg = msg || 'success'
        res.status(code).send({code:code,msg:msg,data:data})
        return;
    },
    fail (res,code,reason) {
        code = code || 500
        reason = reason || '请求失败'
        res.status(code).send({code:code,msg:reason})
        return ;
    },
    error (res,reason) {
        let code = 400 //数据库字段验证
        reason = reason || '请求失败'
        let list = []
        for (const key in reason) {
            if (reason.hasOwnProperty(key)) {
                const element = reason[key]; 
                list.push(element.message)
            }
        }
        res.status(code).send({code:code,msg:list})
    }
}