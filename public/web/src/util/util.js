
function util() {
    let extend = function (newObj, oldObj) {
        if (!oldObj) return {}
        for (let key in oldObj) {
            newObj[key] = oldObj[key]
        }
        return newObj
    }
}

export default util