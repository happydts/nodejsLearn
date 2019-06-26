var fs = require('fs')

fs.writeFile('./data/你好.md','你好，很高※认识你',function(error){
	if(error){
		console.log('文件写入失败')
	}
	else{
		console.log('文件写入成功')
	}
})
