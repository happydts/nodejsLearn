var express = require('express')

var router = require('./router')

var app = express()

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
 