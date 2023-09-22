// 导入数据库操作模块
const db = require('../db/index')


/**
 * message_title 消息主题
 * message_category 消息类别
 * message_publish_department 消息发布部门
 * message_publish_name 消息发布者
 * message_receipt_object 消息接收者
 * message_click_number 消息查看数量
 * message_content 消息内容
 * message_publish_time 消息发布时间
 * message_update_time 消息更新时间
 * message_level 消息等级
 * message_status 默认为0 ，1在回收站
 * message_delete_time 消息删除时间
 */

// 发布消息
exports.publishMessage = (req, res) => {
	const {
		message_title,
		message_category,
		message_publish_department,
		message_publish_name,
		message_receipt_object,
		message_content,
		message_level
	} = req.body
	const message_publish_time = new Date()
	const sql = 'insert into message set ? '
	db.query(sql, {
		message_title,
		message_category,
		message_publish_department,
		message_publish_name,
		message_publish_time,
		message_click_number: 0,
		message_status: 0,
		message_receipt_object,
		message_content,
		message_level
	}, (err, result) => {
		if (err) return res.cc(err)
		res.send({
			status: 0,
			message: '发布消息成功'
		})
	})
}

// 获取公司公告列表
exports.companyMessageList = (req, res) => {
	const sql = 'select * from message where message_category = "公司公告" and message_status = "0"'
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send(result)
	})
}

// 获取系统消息列表
exports.systemMessageList = (req, res) => {
	const sql = 'select * from message where message_category = "系统消息" and message_status = "0"'
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send(result)
	})
}

// 编辑公告
exports.editMessage = (req, res) => {
	const {
		message_title,
		message_publish_name,
		message_content,
		message_receipt_object,
		message_level,
		id
	} = req.body
	const message_update_time = new Date()
	const sql =
		'update message set message_title = ?,message_publish_name= ?,message_content = ? ,message_receipt_object = ?,message_level= ?,message_update_time= ? where id = ?'
	db.query(sql, [
		message_title,
		message_publish_name,
		message_content,
		message_receipt_object,
		message_level,
		message_update_time,
		id
	], (err, result) => {
		if (err) return res.cc(err)
		res.send({
			status: 0,
			message: '编辑消息成功'
		})
	})
}

// 根据发布部门进行获取消息
exports.searchMessageBydepartment = (req, res) => {
	const sql = 'select * from message where message_publish_department = ? and message_status = "0"'
	db.query(sql, req.body.message_publish_department, (err, result) => {
		if (err) return res.cc(err)
		res.send(result)
	})
}

// 根据发布等级进行获取消息
exports.searchMessageByLevel = (req, res) => {
	const sql = 'select * from message where message_level = ? and message_status = "0"'
	db.query(sql, req.body.message_level, (err, result) => {
		if (err) return res.cc(err)
		res.send(result)
	})
}

// 获取公告/系统消息
exports.getMessage = (req, res) => {
	const sql = 'select * from message where id = ?'
	db.query(sql, req.body.id, (err, result) => {
		if (err) return res.cc(err)
		res.send(result)
	})
}

// 更新点击率
exports.updateClick = (req, res) => {
	const {
		message_click_number,
		id
	} = req.body
	number = message_click_number * 1 + 1
	const sql = 'update message set message_click_number = ? where id = ?'
	db.query(sql, [number, id], (err, result) => {
		if (err) return res.cc(err)
		res.send({
			status: 0,
			message: '点击率增加'
		})
	})
}

// 初次删除
exports.fisrtDelete = (req, res) => {
	const message_status = 1
	const message_delete_time = new Date()
	const sql = 'update message set message_status = ? ,message_delete_time = ? where id = ?'
	db.query(sql, [message_status, message_delete_time, req.body.id], (err, result) => {
		if (err) return res.cc(err)
		res.send({
			status: 0,
			message: '删除成功'
		})
	})
}


// 获取回收站的列表
exports.recycleList = (req, res) => {
	const sql = 'select * from message where message_status = 1'
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send(result)
	})
}

// 获取回收站总数
exports.getRecycleMessageLength = (req, res) => {
	const sql = 'select * from message where message_status = 1'
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send({
			length: result.length
		})
	})
}

// 回收站监听换页
exports.returnRecycleListData = (req, res) => {
	const number = (req.body.pager - 1) * 10
	const sql =
		`select * from message where message_status = 1 ORDER BY message_delete_time limit 10 offset ${number} `
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send(result)
	})
}


// 还原操作
exports.recover = (req, res) => {
	const message_status = 0
	const message_update_time = new Date()
	const sql = 'update message set message_status = ? ,message_update_time = ? where id = ?'
	db.query(sql, [message_status, message_update_time, req.body.id], (err, result) => {
		if (err) return res.cc(err)
		res.send({
			status: 0,
			message: '还原成功'
		})
	})
}


// 删除操作
exports.deleteMessage = (req, res) => {
	const sql = 'delete from message where id = ?'
	db.query(sql, req.body.id, (err, result) => {
		if (err) return res.cc(err)
		res.send({
			status: 0,
			message: '删除消息成功'
		})
	})
}

// 获取公司公告总数
exports.getCompanyMessageLength = (req, res) => {
	const sql = 'select * from message where message_category ="公司公告"'
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send({
			length: result.length
		})
	})
}

// 获取系统消息总数
exports.getSystemMessageLength = (req, res) => {
	const sql = 'select * from message where message_category ="系统消息"'
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send({
			length: result.length
		})
	})
}

// 监听换页返回数据  公司公告列表
// limit 10 为我们要拿到数据 offset 我们跳过多少条数据
exports.returnCompanyListData = (req, res) => {
	const number = (req.body.pager - 1) * 10
	const sql =
		`select * from message where message_category ="公司公告" ORDER BY message_publish_time limit 10 offset ${number} `
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send(result)
	})
}

// 监听换页返回数据  系统消息列表
exports.returnSystemListData = (req, res) => {
	const number = (req.body.pager - 1) * 10
	const sql =
		`select * from message where message_category ="系统消息" ORDER BY message_publish_time limit 10 offset ${number} `
	db.query(sql, (err, result) => {
		if (err) return res.cc(err)
		res.send(result)
	})
}