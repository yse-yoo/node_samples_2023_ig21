//Userモデル
const User = require('../models/User')

//入力画面
exports.index = (req, res) => {
    res.render('regist/index')
}

exports.add = async (req, res) => {
    //TODO: validate

    //DB登録
    var user = new User();
    var newUser = await user.add(req.body)

    //TODO: bug
    if (newUser.id) {
        res.redirect('/login')
    } else {
        res.redirect('/regist')
    }
}