var http = require('http')
var fs = require('fs')

var server = http.createServer()
var dir = 'F:/html有关文档/代码/deng'
server.on('request',function(req,res){
	var url = req.url
	 
	 var filePath = '/index.html'
	 if(url !== '/'){
	 	filePath = url
	 }
	 
	 fs.readFile(dir + filePath,function(err,data){
	 	if (err) {
	 		return res.end('404 not found')
	 	}
	 	
	 	res.end(data)
	 })
})

server.listen(3000,function(){
	console.log('服务器已经启动，请通过3000端口访问。。')
})
