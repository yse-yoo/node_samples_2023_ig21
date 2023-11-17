//mysql2/promiseモジュール読み込み
const mysql = require('mysql2/promise')
const db = require('../lib/db')
//bcryptモジュール
class User {
    //ユーザ追加（非同期処理）
    add = async (post) => {
        var result;
        try {
            const con = await mysql.createConnection(db.info);
            var sql = `INSERT INTO tweets SET ?;`
            result = con.query(sql, post);
            con.end();
        } catch (error) {

        }
        return result;
    }
    get = async () => {
        try {
            var sql = `SELECT * FROM tweets;`
            const con = await mysql.createConnection(db.info);
            const[rows, fields] = await con.query(sql);
            con.end();
            return rows;
        } catch (error) {

        }
        return;
    }
}

//モジュール化
module.exports = User