// 导入express框架
const express = require('express')
// 使用express框架的路由
const router = express.Router()
// 导入expreJoi
const expressJoi = require('@escook/express-joi')

// 导入userinfo的路由处理模块
const userinfoHandler = require('../router_handle/userinfo')
// 导入验证规则
const {
	password_limit,
	name_limit,
	email_limit,
} = require('../limit/user.js')

// 上传头像
router.post('/uploadAvatar', userinfoHandler.uploadAvatar)
// 绑定账号
router.post('/bindAccount', userinfoHandler.bindAccount)
// 修改用户密码 changePassword
router.post('/changePassword', expressJoi(password_limit), userinfoHandler.changePassword)
// 获取用户信息
router.post('/getUserInfo', userinfoHandler.getUserInfo)
// 修改姓名 changeName
router.post('/changeName', expressJoi(name_limit), userinfoHandler.changeName)
// 修改姓名 
router.post('/changeSex', userinfoHandler.changeSex)
// 修改邮箱
router.post('/changeEmail', expressJoi(email_limit), userinfoHandler.changeEmail)
// 向外暴露路由
module.exports = router