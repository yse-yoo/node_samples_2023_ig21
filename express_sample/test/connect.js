// mysql2モジュール読み込み
const mysql = require('mysql2')
// lib/dbモジュール読み込み
const db = require('../lib/db')

console.log(db.info)

// dbモジュールの info を代入して MySQL接続の作成
const con = mysql.createConnection(db.info);
// MySQL接続
con.connect((error) => {
    if (error) {
        console.log('DB connect error...');
    } else {
        console.log('DB connect success!!');
    }
});
// MySQL接続終了
con.end();

// node test/connect でこのプログラムを実行
