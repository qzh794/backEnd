// 导入mysql数据库
// npm install mysql
const mysql = require('mysql')

// 创建与数据库的连接
const db = mysql.createPool({
	host:'localhost',
	user:'qzh',
	password:'123456',
	database:'qzh'
})

// 对外暴露数据库
module.exports = db