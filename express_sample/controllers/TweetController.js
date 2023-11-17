//Userモデル
const Tweet = require('../models/Tweet')

//入力画面
exports.index = async (req, res) => {
    var tweet = new Tweet();
    var tweets = await tweet.get();
    console.log(tweets)
    res.render('tweet/index', { tweets: tweets })
}

exports.add = async (req, res) => {
    res.redirect('/tweet')
}