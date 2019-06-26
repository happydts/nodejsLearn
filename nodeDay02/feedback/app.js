var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

http.createServer(function(req,res){
		var parseObj = url.parse(req.url,true)
		
		var pathname = parseObj.pathname
		
		if(pathname === '/'){
			fs.readFile('views/index.html',function(err,data){
				if(err){
					return res.end('404 not found')
				}
				
				var ret = template.render(data.toString(),{
					comments:comments
				})
				
				res.end(ret)
			})
		}
		else if(pathname.indexOf('/public/') === 0){
			fs.readFile('.'+pathname,function(err,data){
				if(err){
					return res.end('404 not found')
				}
				res.end(data)
			})
		}
		else if(pathname === '/post'){
				fs.readFile('views/post.html',function(err,data){
				if(err){
					return res.end('404 not found')
				}
				res.end(data)
			})
		}
		else if(pathname === '/pinglun'){
			var comment = parseObj.query
			comment.dateTime= new Date()
			comments.unshift(comment)
			
			
			res.statusCode = 302
			res.setHeader('Location','/')
			res.end()
		}
		else{
			res.end('404 ')
		}
})

.listen(3000,function(){
	console.log('服务已经启动')
})

