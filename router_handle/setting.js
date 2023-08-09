const db = require('../db/index.js')

// 上传轮播图 需要两个参数  set_value set_name
exports.uploadSwiper = (req, res) => {
	// 用于拼接data的数据
	// let str = '';
	// for (let i = 0; i < 7; i++) {
	// 	str += req.body[i]
	// }
	let oldName = req.files[0].filename;
	let newName = Buffer.from(req.files[0].originalname, 'latin1').toString('utf8')
	fs.renameSync('./public/upload/' + oldName, './public/upload/' + newName)
	const sql = 'update setting set set_value = ? where set_name = ?'
	db.query(sql, [`http://127.0.0.1:3007/upload/${newName}`, req.body.set_name], (err, result) => {
		if (err) return res.cc(err)
		res.send({
			status: 0,
			message: '上传轮播图成功'
		})
	})
}

// 获取所有轮播图
exports.getAllSwiper = (req, res) => {
	// like 匹配 字段是否符合 前缀为 ...
	const sql = "select * from setting where set_name like 'swiper%' "
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send({
			status: 0,
			result
		})
	})
}

// 获取公司名称 
exports.getCompanyName = (req, res) => {
	const sql = 'select * from setting where set_name = "公司名称"'
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send(result[0].set_value)
	})
}

// 修改公司名字 参数 set_value
exports.changeCompanyName = (req, res) => {
	const sql = 'update setting set set_value = ? where set_name = "公司名称"'
	db.query(sql, req.body.set_value, (err, result) => {
		if (err) return res.cc(err)
		res.send({
			status: 0,
			message: '修改公司成功'
		})
	})
}

// 编辑公司介绍的接口 参数 set_value set_name
exports.changeCompanyIntroduce = (req, res) => {
	const sql = 'update setting set set_value = ? where set_name = ? '
	db.query(sql, [req.body.set_value, req.body.set_name], (err, result) => {
		if (err) return res.cc(err)
		res.send({
			status: 0,
			message: '修改公司介绍成功'
		})
	})
}

// 获取公司介绍 参数 set_name
exports.getCompanyIntroduce = (req, res) => {
	const sql = 'select * from setting where set_name = ?'
	db.query(sql, req.body.set_name,(err, result) => {
		if (err) return res.cc(err)
		res.send(result[0].set_value)
	})
}