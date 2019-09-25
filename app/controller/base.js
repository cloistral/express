var config = require('./../../config/config')
class baseController {
    constructor() {
        this.config = config
        this.formatData = this.formatData.bind(this)
    }

    formatData(...paramList) {
        let param = paramList[0]
        let response = param.res
        if (!response) return;
        let code = param.code || 200
        let msg = param.msg || '请求成功'
        let data = param.data || {}
        response.status(code).send({ code: code, msg: msg, data: data })
    }
}
module.exports = baseController
