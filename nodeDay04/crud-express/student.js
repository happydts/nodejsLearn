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
 		return callback(null)
 	})
 	
	})
}
/**
 * 通过id查询用户
 * @param {Object} id
 * @param {Object} callback
 */
exports.findStudentById = function(id,callback){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err)
		}
		var students = JSON.parse(data).students
		var ret = students.find(function(item){
			return item.id === id
		})
		return callback(null,ret)
		
	})
}
/**
 * 修改学生
 * @param {Object} student
 * @param {Object} callback
 */

exports.updateStudent = function(student,callback){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err)
		}
		
		var students = JSON.parse(data).students
		
		student.id = parseInt(student.id)
		
		var stu = students.find(function(item){
			return item.id === student.id
		})
	
		for(var key in stu){
			stu[key] = student[key]
		}
		
		var fileData = JSON.stringify({
			students:students
		})
		
		fs.writeFile(dbPath,fileData,function(err){
			if(err){
				return callback(err)
			}
			return callback(null)
		})
		
	})
	

}

exports.deleteStudent  = function(id,callback){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err)
		}
		
		var students = JSON.parse(data).students
		
		var retId = students.findIndex(function(item){
			return item.id  === id
		})
		
	students.splice(retId,1)
		
	var fileData = JSON.stringify({
		students:students
	}
	)
	
	fs.writeFile(dbPath,fileData,function(err){
		if(err){
			return callback(err)
		}
		return callback(null)

	})
})
}
	

