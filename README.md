# NodeJs 学习

## 常见问题处理

### 解决nodejs被墙问题

- 安装cnpm

```shell
npm install --global cnpm
```

- 使用淘宝镜像

```shell
npm --config registry https://registry.npm.taobao.org
```

- 查看配置

```shell
npm config list 
```

### 修改完代码自动重启

`nodemon`来帮我们解决频繁修改代码重启服务器的问题

```shell
npm install --global nodemon
```
- 安装完毕后使

```shell
node app.js
#使用nodemon
nodemon app.js
```

### 修改默认的views路径

```javascript
app.set('views',想要修改的路径)
```

### 表单get提交

- express内置

```javas
var query = req.query
```

### javacript api

#### json文件查找

```java
	var ret = students.find(function (item) {
      return item.id === parseInt(id)
    })
        
  	返回一个对象
```

#### json文件查找下标

 ```javascript
	var retId = students.findIndex(function(item){
			return item.id  === id
		})
 ```
#### json文件删除

 ```javascript
		students.splice(通过查找到的下标,1)	

 ```

#### 封装ajax方法

```javascript
 <script>
    // setTimeout
    // readFile
    // wirteFile
    // readdir
    // ajax
    // 往往异步 API 都伴随有一个回调函数
    // var ret = fn()
    // $.get('dsadas', fucntion () {})
    // var ret = $.get()

    function get(url, callback) {
      var oReq = new XMLHttpRequest()
      // 当请求加载成功之后要调用指定的函数
      oReq.onload = function () {
        // 我现在需要得到这里的 oReq.responseText
        callback(oReq.responseText)
      }
      oReq.open("get", url, true)
      oReq.send()
    }

    get('data.json', function (data) {
      console.log(data)
    })
  </script>
```





### fs.writeFile()

```javascript
 // 把字符串保存到文件中
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err)
      }
      // 成功就没错，所以错误对象是 null
      callback(null)
    })
```





### 关于url和 Java不同

#### 关于nodeJs

- `href` ，相对路径的话还是会被解析成url地址，把所有的路径都想象成 url 地址， 浏览器在真正发请求的时候会最终把 http://127.0.0.1:3000 拼上

![1561533026400](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1561533026400.png)

![1561532937099](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1561532937099.png)

- 在这里写成

 ```javascript
 <link rel="stylesheet" href="/public/lib/bootstrap/bootstrap.css">
 ```

- 两种方式都行，相对路径最终还是会被解析成从服务器根路径开始。。。

- 而`fs.readFile('')`则是读取的文件路径

####  而对于java

`webapp`中的 `html` 文件请求 `css` 和 `js` 还是用文件路径，但是要放行静态资源

#### json字符串转换对象
```javascript
	JSON.stringify({
 		students:students
 	})
```
这样的话转出来的就是这样的格式

```json
{
	"students":[
			{"id":1,"name":"张三三","gender":"0","age":"22","hobbies":"吃饭、睡觉、打豆豆"},
			{"id":2,"name":"张三三","gender":"0","age":"22","hobbies":"吃饭、睡觉、打豆豆"},
			{"id":3,"name":"张三三","gender":"0","age":"22","hobbies":"吃
	]
}
```
```javascript
JSON.stringify(students)
```
而这样的话转出来的就是这样的格式

```json
[
	
			{"id":1,"name":"张三三","gender":"0","age":"22","hobbies":"吃饭、睡觉、打豆豆"},
			{"id":2,"name":"张三三","gender":"0","age":"22","hobbies":"吃饭、睡觉、打豆豆"},
			{"id":3,"name":"张三三","gender":"0","age":"22","hobbies":"吃

]
```


### 从文件读取的数据一定是字符串，所以一定要手动转换成对象，通过url拿到的也是字符串




## express 整合art-template

[art-template官网](http://aui.github.io/art-template/)
[art-template整合express](http://aui.github.io/art-template/express/)

- 安装

```shell
npm install --save art-template
npm install --save express-art-template
```

- 使用

```java
var express = require('express');
var app = express();
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

app.get('/', function (req, res) {
    res.render('index.art', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    });
});
```

+ 路径默认在views路径之下
+ res.send()方法默认会设置utf-8编码，最多只能发送字符串，而res.render()可以直接设置views下的页面


## 表单提交 body-parser
### get提交

- 安装
```shell
	npm install path
```
- 使用
```javascript
	var path = require('path')
	
	var parseobj = path.parse(url,true)
	//  ? 前面的部分
	var pathname = parseobj.pathname 
	// ？ 后面的部分
	var query = parseobj.query
```

- express

- ```javascript
  req.query
  ```

- 

### post提交

- 安装

```shell
npm install body-parser --save
```

- 使用

```java
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  //拿取post提交的内容
var obj= req.body
})
```

- body-parser

- ```java
  req.body
  ```

- 

## Router路由

- router.js

```javascript
var express = require('express')

var router = express.Router()

/*
 * 渲染学生列表页面
 */
router.get('/students', function (req, res) {
 res.render('index.html')
})

/*
 * 渲染添加学生页面
 */
router.get('/students/new', function (req, res) {
  res.render('new.html')
})

/*
 * 处理添加学生
 */
router.post('/students/new', function (req, res) {
  
})

/*
 * 渲染编辑学生页面
 */
router.get('/students/edit', function (req, res) {
  
})

/*
 * 处理编辑学生
 */
router.post('/students/edit', function (req, res) {
  
})

/*
 * 处理删除学生
 */
router.get('/students/delete', function (req, res) {
  
})

// 3. 把 router 导出
module.exports = router

```

- app.js

```javascript
var router = require('./router')

//创建路由
app.use(orouter)
```

## mongod数据库

### 查看数据库版本

```shell
 mongod --version
```

### 启动和关闭数据库

第一次需要在启动盘符新建data/db文件夹

```shell
mongod #启动
# crtl+c关闭
```

如果想要更改指定操作文件夹

```shell
mongod --dbpath=数据盘符目录
```

### 连接数据库

```shell
# 该命令默认连接本机的mongo数据库
mongo
```

退出

```shell
exit
```

### 基本命令

+ `show  dbs`
  + 查看显示所有数据库

- ` use 数据库名称`
- `db`
  - 查看当前使用的数据库

+ show collections
  + 查看当前数据库里的集合

+ 插入数据
  + db.students.insertOne({"name":"youngdeng"}

+ 查找数据
  + db.students.find()

### 在node中使用mogodb

#### 官方模式

[mongodb官方文档](https://www.npmjs.com/package/mongodb)

#### 更便捷的方式

[mongoose](https://mongoosejs.com/)

```shell
npm i mongoose
```
实例

```java
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

```javascript
var mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

var Schema = mongoose.Schema

var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    // 注意：这里不要写 Date.now() 因为会即刻调用
    // 这里直接给了一个方法：Date.now
    // 当你去 new Model 的时候，如果你没有传递 create_time ，则 mongoose 就会调用 default 指定的Date.now 方法，使用其返回值作为默认值
    default: Date.now
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: '/public/img/avatar-default.png'
  },
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1
  },
  birthday: {
    type: Date
  },
  status: {
    type: Number,
    // 0 没有权限限制
    // 1 不可以评论
    // 2 不可以登录
    enum: [0, 1, 2],
    default: 0
  }
})

module.exports = mongoose.model('User', userSchema)

```



### 查询数据

```javascript
User.findOne({
    email: body.email,
    password: md5(md5(body.password))
  }, function (err, user) {
    if (err) {
      return res.status(500).json({
        err_code: 500,
        message: err.message
      })
    }
    
    // 如果邮箱和密码匹配，则 user 是查询到的用户对象，否则就是 null
    if (!user) {
      return res.status(200).json({
        err_code: 1,
        message: 'Email or password is invalid.'
      })
    }

    // 用户存在，登陆成功，通过 Session 记录登陆状态
    req.session.user = user

    res.status(200).json({
      err_code: 0,
      message: 'OK'
    })
  })
```



#### 查询所有

#### 查询单个数据

### 更新数据

```javascript
User.findOne({
    $or: [{
        email: body.email
      },
      {
        nickname: body.nickname
      }
    ]
  }, function (err, data) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: '服务端错误'
      })
    }
    // console.log(data)
    if (data) {
      // 邮箱或者昵称已存在
      return res.status(200).json({
        err_code: 1,
        message: 'Email or nickname aleady exists.'
      })
      return res.send(`邮箱或者密码已存在，请重试`)
    }

    // 对密码进行 md5 重复加密
    body.password = md5(md5(body.password))

    new User(body).save(function (err, user) {
      if (err) {
        return res.status(500).json({
          err_code: 500,
          message: 'Internal error.'
        })
      }

      // 注册成功，使用 Session 记录用户的登陆状态
      req.session.user = user

      // Express 提供了一个响应方法：json
      // 该方法接收一个对象作为参数，它会自动帮你把对象转为字符串再发送给浏览器
      res.status(200).json({
        err_code: 0,
        message: 'OK'
      })

      // 服务端重定向只针对同步请求才有效，异步请求无效
      // res.redirect('/')
    })
  })
```



### 删除数据



##  mysql

## path模块

+ path.isAbsolute()
  + 看是不是绝对路径

+ path .basename

  + 获取一个路径的文件名（包含扩展名）

+ path.dirname

  + 获取一个路径的目录部分

+ path.extname

  + 获取扩展名

+ path.join

  + 当你需要路径拼接的时候，推荐使用这个方法

+ path.parse
  + 把一个路径转换成对象
    + root根路径
    + dir目录
    + base包含后缀名的文件名
    + ext后缀名
    + name不包含后缀名的文件名
    + 

####  __dirname(文件所在位置)

 ```javascript
app.use('/public/', express.static(path.join(__dirname, './public/')))
 ```

#### ——filename（文件所在位置精确到文件）

## 中间件

和拦截器差不多

### 配置404的中间件（在路由之后）

```javascript
app.use(function(req,res){
    res.render('404.html')
})
```

### 配置一个全局错误处理(在路由之后)

```javascript
if（err）{
    //直接找有四个参数的
    next(err)
}

//要写全参数，必须写四个
app.use(function(err,req,res,next){
   // console.log('error')
    res.send(500).send(err.message)
})
```

