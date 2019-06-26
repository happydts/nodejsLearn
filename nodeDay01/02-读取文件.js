var fs = require('fs')

fs.readFile('./resource/index.html',function(error,data){
	if(error != null){
		console.log('读取文件失败')
	}
	else{
		console.log(data)
	}
})
