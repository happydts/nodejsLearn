
var express = require('express')
var bodyParser = require('body-parser')


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

var app = express()

//放行静态资源
app.use('/public/',express.static('./public/'))
//express使用art-tempate
app.engine('html', require('express-art-template'));

//配置中间件body-parse
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',function(req,res){
	res.render('index.html',{
		comments:comments
	})
})

app.get('/post',function(req,res){
	res.render('post.html')
})


app.post('/pinglun',function(req,res){
	var comment = req.body
	comment.dateTime = new Date()
	comments.unshift(comment)
	
	
	res.redirect('/')

})


app.listen(3000,function(){
	console.log('服务已经启动')
})

