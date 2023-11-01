// models/Item.js を読み込む
const Item = require('../models/Item')

/**
 * 商品一覧
 */
exports.index = (req, res) => {
    //Itemインスタンスを生成
    const item = new Item()
    var data = {
        title: "商品一覧",
        //商品をすべて取得
        items: item.get(),
    }
    // views/item/index.ejs にデータを渡して表示
    res.render('item/index', data)
}

/**
 * 商品詳細
 */
exports.detail = (req, res) => {
    const id = req.params.id
    //Itemインスタンスを生成
    const item = new Item()
    //IDで商品を取得
    var selectItem = item.find(id)
    var data = {
        title: "商品詳細",
        item: selectItem,
    }
    res.render('item/detail', data)
}