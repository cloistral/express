// //返回的数据化格式
// baseController.prototype.format = {
//     success(res, code, data, msg) {
//         code = code || 200
//         data = data || {}
//         msg = msg || 'success'
//         res.status(code).send({ code: code, msg: msg, data: data })
//         return;
//     },
//     fail(res, code, reason) {
//         code = code || 500
//         reason = reason || '请求失败'
//         res.status(code).send({ code: code, msg: reason, data: {} })
//         return;
//     },
//     error(res, reason) {
//         let code = 500
//         reason = reason || '请求失败'
//         let msgStr = ''
//         for (const key in reason) {
//             if (reason.hasOwnProperty(key)) {
//                 const element = reason[key];
//                 msgStr += element.message
//             }
//         }
//         res.status(code).send({ code: code, msg: '请求失败,请查看原因', data: reason })
//     }
// }
// --exec babel-node --presets es2015,stage-2

// module.exports = (req, res) => {
//     var format = res.app.get('format')
//     var config = res.app.get('config')

//     UserModel.find({ username: req.body.username }, function (err, data) {
//         if (err) return;
//         if (data && data.length > 0) {
//             format.fail(res, 500, '当前用户名已经注册过了,请重新输入')
//         } else {
//             createUser()
//         }
//     })
//     let createUser = function () {
//         var user = new UserModel({
//             _id: new mongoose.Types.ObjectId(),
//             username: req.body.username,
//             password: req.body.password,
//         })
//         // colection 关联
//         for (let i = 0; i < 10; i++) {
//             let stoty = new StoryModel({
//                 storyName: req.body.storyName + i,
//                 author: user._id
//             })
//             stoty.save((err) => {
//                 if (err) return;

//             })
//             user.stories.push(stoty);
//         }
//         user.children.push({ name: '1111', age: '222' })
//         user.save(function (error, data) {
//             if (error) {
//                 return format.error(res, error.errors)
//             }
//             var authToken = jwt.sign({
//                 username: req.body.username,
//                 password: req.body.password,
//                 uid: data._id
//             }, config.secret, {
//                 expiresIn: config.expiresIn
//             });

//             return format.success(res, 200, { token: authToken })
//         })
//     }
// }