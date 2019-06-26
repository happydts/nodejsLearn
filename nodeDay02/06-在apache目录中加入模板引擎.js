var http = require('http')
var fs = require('fs')

var server = http.createServer()
var dir = 'F:/movie/www'
server.on('request',function(req,res){
	var url = req.url
	
	fs.readFile('./template.html',function(err,data){
		
	 content = ''
	fs.readdir(dir, function (err,files) {
		if(err){
		  return res.end('cant read the dir')
		}
		files.forEach(function(item){
			content += `
          <tr>
            <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
          </tr>
        `			
		})		
	data = data.toString()
	
	data = data.replace('^_^',content)
	
	res.end(data)

	})
	console.log(content)

	})
})

server.listen(3000,function(){
	console.log('服务器已经启动，请通过3000端口访问。。')
})
