var http= require('http') 

var server=http.createServer()

server.on('request',function(request,response){
	console.log('有客户端访问。。');
	response.write('hello')
	response.write(' nodeJs')
	response.end()
})


server.listen(3000,function(){
	console.log('服务器已经启动，可以通过3000端口来访问')
})
