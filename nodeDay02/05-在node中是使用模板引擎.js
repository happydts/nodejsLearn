var template = require('art-template')
var fs = require('fs')


fs.readFile('./tpl.html',function(err,data){
	if(err){
		console.log('文件读取失败')
	}
	else{
		var ret = template.render(data.toString(),{
			name: 'Jack',
		    age: 18,
		    province: '北京市',
		    hobbies: [
		      '写代码',
		      '唱歌',
		      '打游戏'
		    ],
		    title: '个人信息'
		})
		
		console.log(ret)
	}
})

