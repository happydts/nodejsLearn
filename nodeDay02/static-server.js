var http = require('http')
var fs = require('fs')
var template =  require('art-template')

var server = http.createServer()
var dir = 'F:/movie/www'
server.on('request',function(req,res){
	var url = req.url
	
	fs.readFile('./template-apache.html',function(err,data){
		
	fs.stat(dir+url,function(err,stats){
		if(err){
			return res.end('文件读取失败')
		}
		if(stats.isFile()){
			fs.readFile(dir+url,function(err,content){
				res.end(content)
			})
		}
		else if(stats.isDirectory()){
			fs.readdir(dir+url,function(err,files){
				if(err){
				  return res.end('cant read the dir')
				}
				
				var ret = template.render(data.toString(),{
					title:'youngdeng',
					files:files
				})
				res.end(ret)
			})
		}
	})



	})
})

server.listen(3000,function(){
	console.log('服务器已经启动，请通过3000端口访问。。')
})
