var fs = require('fs')

var dbPath = './db.json'
/**
 * 查找全部学生
 * @param {Object} callback
 */
exports.find = function(callback){
	fs.readFile(dbPath,function(err,data){
	if(err){
 		return 	callback(err)
 	}
 	var students = JSON.parse(data).students
 	return callback(null,students)
	})
}
/**
 * 添加学生
 * @param {Object} obj
 * @param {Object} callback
 */
exports.addStudent =function(obj , callback){
	fs.readFile(dbPath,function(err,data){
	if(err){
 		return 	callback(err)
 	}
 	var students = JSON.parse(data).students
 	
 	obj.id = students[students.length - 1].id + 1 
 	
 	students.push(obj)
 	
 	var fileData = JSON.stringify({
 		students:students
 	})
 	
 	fs.writeFile(dbPath,fileData,function(err){
 		if(err){
 			return callback(err)
 		}
 	})
 	
	})
}
