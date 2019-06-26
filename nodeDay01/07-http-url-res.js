var http= require('http') 

var server=http.createServer()

server.on('request',function(request,response){
	console.log('有客户端访问。。')
	var url=request.url
	if(url === '/'){
		response.end('index')
	}else if(url === '/login'){
		response.end('login')
	}else if(url === '/products'){
		var products = [
		{
			name:'苹果X',
			price:9999
		},
		{
			name:"华为",
			price:8888
		}
		]
		response.setHeader('content-type','text/plain;charset=utf-8')
		response.end(JSON.stringify(products))
	}
})


server.listen(3000,function(){
	console.log('服务器已经启动，可以通过3000端口来访问')
})
