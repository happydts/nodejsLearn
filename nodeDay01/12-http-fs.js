var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',function(req,res) {
	var url = req.url
	
	if(url === '/'){
		fs.readFile('./resource/index.html',function(err,data){
			if(err){
				res.setHeader('Content-type','text/plain;charset=utf-8')
				res.end('读取文件失败')
			}
			else{
//				res.setHeader('Content-type','text/html;charset=utf-8')
				res.end(data)
			}
			
		})
	}
	else if(url === '/baby'){
			fs.readFile('./resource/ab2.jpg',function(err,data){
			if(err){
				res.setHeader('Content-type','text/plain;charset=utf-8')
				res.end('读取文件失败')
			}
			else{
				res.setHeader('Content-type','image/jpeg')
				res.end(data)
			}
			
		})	
	}
})

server.listen(3000,function(){
	console.log('服务器已经启动，通过端口3000来访问')
})
