
var express = require('express')
var fs = require('fs')
var router = express.Router()

/*
 * 渲染学生列表页面
 */
router.get('/students', function (req, res) {
 fs.readFile('./db.json',function(err,data){
 	if(err){
 		return 	res.send('文件读取失败')
 	}
 	var students = JSON.parse(data).students
 	res.render('index.html',{
 		students:students
 	})
 })
 
})

/*
 * 渲染添加学生页面
 */
router.get('/students/new', function (req, res) {
  res.render('new.html')
})

/*
 * 处理添加学生
 */
router.post('/students/new', function (req, res) {
  
})

/*
 * 渲染编辑学生页面
 */
router.get('/students/edit', function (req, res) {
  
})

/*
 * 处理编辑学生
 */
router.post('/students/edit', function (req, res) {
  
})

/*
 * 处理删除学生
 */
router.get('/students/delete', function (req, res) {
  
})

// 3. 把 router 导出
module.exports = router
