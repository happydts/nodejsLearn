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


## 表单提交
###get提交
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


###post提交

- 安装

```shell
npm install body-parser --save
```

- 使用

```java
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  //拿取post提交的内容
var obj= req.body
})
```

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
app.use(router)
```

