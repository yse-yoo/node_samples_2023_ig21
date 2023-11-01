## Node.jsプロジェクト初期化
```
npm init -y 
```

- package.jsonが作成

## インストール
```
npm i express dotenv nodemon fs
```

## スクリプト設定
package.json

```
...
scripts {
    "dev": "nodemon server",
    ...
}
...
```

## サーバ起動
```
npm run dev
```

## EJS
### インストール
```
npm i ejs
```

### View（EJS テンプレート）
- viewsフォルダに .ejs ファイルを作成

### 表示
##### views/index.ejs
```
res.render('index')
```

##### views/profile.ejs
- Viewにデータを渡す
```
res.render('index', data)
```

## レイアウト
### インストール
```
npm i express-ejs-layouts
```

## npxコマンドでエラーになる場合
### エラー
```shell
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\xxxx\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\xxxx\AppData\Roaming\npm'  
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent
```

### 原因
Node.js v18.18.0（Windows版）のバグ

### 解決方法
ユーザホームの/AppData/Roaming/ に「npm」フォルダを作成