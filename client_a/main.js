const dotenv = require('dotenv')
dotenv.config();
const fs = require('fs')
const message = require('./message')

var name = process.env.NAME
var number = process.env.NUMBER

var result = message.create(name, number)
console.log(result)

try {
    fs.writeFileSync('result.txt', result, 'utf8');
    console.log('ファイルが正常に書き出されました。');
} catch (err) {
    console.error(err);
}
