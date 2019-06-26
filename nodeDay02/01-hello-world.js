var http = require('http')
var fs = require('fs')

var server = http.createServer()
var dir = 'F:/html有关文档/代码/deng'
server.on('request',function(req,res){
	var url = req.url
	if(url === '/'){
		fs.readFile(dir + '/index.html',function(err,data){
			if(err){
				return res.end('读取文件失败。。')
			}
			else{
				res.end(data)
			}
		})
	}
	else if(url === '/img'){
		fs.readFile(dir + '/img/小插图/1.jpg',function(err,data){
			if(err){
				return res.end('404')
			}
			
			res.end(data)
		})
	}
	else{
		res.end('404')
	}
	
})

server.listen(3000,function(){
	console.log('服务器已经启动，请通过3000端口访问。。')
})
