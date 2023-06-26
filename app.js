// 导入express框架
const express = require('express')
// 创建express实例
const app = express()
// 导入body-parser
var bodyParser = require('body-parser')

// 导入cors
const cors = require('cors')
// 全局挂载
app.use(cors())

// parse application/x-www-form-urlencoded
// 当extended为false时，值为数组或者字符串，当为ture时，值可以为任意类型
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req,res,next)=>{
	// status=0为成功,=1为失败,默认设为1,方便处理失败的情况
	res.cc = (err,status=1)=>{
		res.send({
			status,
			// 判断这个error是错误对象还是字符串
			message:err instanceof Error ? err.message : err,
		})
	}
	next()
})

const jwtconfig = require('./jwt_config/index.js')
const {expressjwt:jwt} = require('express-jwt')
app.use(jwt({
	secret:jwtconfig.jwtSecretKey,algorithms:['HS256']
}).unless({
	path:[/^\/api\//]
}))

const loginRouter = require('./router/login')
const Joi = require('joi')
app.use('/api',loginRouter)

// 对不符合joi规则的情况进行报错
app.use((req,res,next)=>{
	if(err instanceof Joi.ValidationError) return res.cc(err)
})

// 绑定和侦听指定的主机和端口
app.listen(3007, () => {
	console.log('http://127.0.0.1:3007')
})