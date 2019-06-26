var http = require('http')
var fs = require('fs')
var template =  require('art-template')

var server = http.createServer()
var dir = 'F:/movie/www'
server.on('request',function(req,res){
	var url = req.url
	
	fs.readFile('./template-apache.html',function(err,data){
		

	fs.readdir(dir, function (err,files) {
		if(err){
		  return res.end('cant read the dir')
		}
		
		var ret = template.render(data.toString(),{
			title:'youngdeng',
			files:files
		})
		
		console.log(ret)

	})


	})
})

server.listen(3000,function(){
	console.log('服务器已经启动，请通过3000端口访问。。')
})
