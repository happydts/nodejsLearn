var express = require('express')
// 创建服务器
var app = express()
 
//app.use('/public/',express.static('./public/'))

app.use(express.static('./public/'))

app.get('/',function(req,res){
	res.send('/public/login.html')
})

app.listen(3000,function(){
	console.log('server is running 3000')
})
