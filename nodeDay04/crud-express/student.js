var fs = require('fs')

var dbPath = './db.json'

exports.find = function(callback){
	fs.find(dbPath,function(err,data){
	if(err){
 		return 	callback(err)
 	}
 	var students = JSON.parse(data).students
 	return callback(null,students)
	})
}
