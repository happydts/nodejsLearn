var express = require('express')

var router = require('./router')
var bodyParser = require('body-parser')
var app = express()


// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//使用art-template
app.engine('html', require('express-art-template'));
 
 //放行静态资源
 app.use('/node_modules/', express.static('./node_modules/'))
 app.use('/public/',express.static('./public/'))
//创建路由
app.use(router)

app.listen(3000,function(){
	console.log('server is running 3000')
})
 