//mysql2/promiseモジュール読み込み
const mysql = require('mysql2/promise')
const db = require('../lib/db')

class User {
    //ユーザ追加（非同期処理）
    add = async (post) => {
        //DB接続
        const con = await mysql.createConnection(db.info);
        var result;
        //SQL
        var sql = `INSERT INTO users SET ?;`
        try {
            //SQL実行
            result = con.query(sql, post);
        } catch (error) {

        } finally {
            con.end();
        }
        return result;
    }
    auth = (email, password) => {

    }
}

//モジュール化
module.exports = User