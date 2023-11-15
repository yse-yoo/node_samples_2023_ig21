// expressモジュール読み込み
const express = require('express')
// Routerオブジェクトを生成
const router = express.Router()

// Controllerモジュール読み込み
const HomeController = require('./controllers/HomeController')
const ItemController = require('./controllers/ItemController')
const LoginController = require('./controllers/LoginController')
const UserController = require('./controllers/UserController')
const RegistController = require('./controllers/RegistController')

// Regist 
router.get('/regist', RegistController.index)
router.post('/regist/add', RegistController.add)

// Home
router.get('/', HomeController.index)
router.get('/profile', HomeController.profile)

// Item
router.get('/item', ItemController.index)
router.get('/item/:id', ItemController.detail)

// Login
router.get('/login', LoginController.index)
router.post('/auth', LoginController.auth)

// User
router.get('/user', UserController.index)
router.get('/user/logout', UserController.logout)

// モジュール化
module.exports = router