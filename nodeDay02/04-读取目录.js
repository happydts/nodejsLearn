var fs = require('fs')

fs.readdir('F:/movie/www',function(err,data){
	if(err){
		console.log('访问错误')
	}
	else{
		console.log(data)
	}
})
