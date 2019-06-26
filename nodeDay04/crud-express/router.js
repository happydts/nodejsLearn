
var express = require('express')
var fs = require('fs')

var student = require('./student')

var router = express.Router()

/*
 * 渲染学生列表页面
 */
router.get('/students', function (req, res) {
   student.find(function(err,data){
   		if(err){
   			return res.send('没有数据')
   		}
   		

   		
   		res.render('index.html',{
   			students:data
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
  var stu = req.body
  student.addStudent(stu,function(){
	  if(err)
	  {
	   return res.send('添加失败')
	  }
	  
  	res.redirect('/students')
  
  })
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
