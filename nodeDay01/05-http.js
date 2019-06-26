var http = require('http')
//创建一个web服务器
var server = http.createServer()

server.on('request',function(){
	console.log('收到客户端的请求了。。')
})

//监听端口
server.listen(3000,function(){
	console.log('服务器启动了，可以通过3000端口访问')
})
