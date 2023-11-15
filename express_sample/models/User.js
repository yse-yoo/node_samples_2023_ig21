//mysql2/promiseモジュール読み込み
const mysql = require('mysql2/promise')
const db = require('../lib/db')
//bcryptモジュール
const bcrypt = require('bcrypt')

class User {
    //ユーザ追加（非同期処理）
    add = async (post) => {
        //DB接続
        //パスワードをハッシュ化
        post.password = bcrypt.hashSync(post.password, 10);

        var result;
        try {
            const con = await mysql.createConnection(db.info);
            //SQL実行
            var sql = `INSERT INTO users SET ?;`
            result = con.query(sql, post);
            con.end();
        } catch (error) {

        }
        return result;
    }
    auth = async (email, password) => {
        try {
            //SQL実行(email 検索)
            var sql = `SELECT * FROM users WHERE ?;`
            const con = await mysql.createConnection(db.info);
            const[rows, fields] = await con.query(sql, { email: email });
            var user = rows[0];
            //パスワードのハッシュ検証
            if (user && bcrypt.compareSync(password, user.password)) {
                return user;
            }
            con.end();
        } catch (error) {

        }
        return;
    }
}

//モジュール化
module.exports = User