// 引入http模块
// var http = require('http');
// 引入URL模块
// var url = require('url');

// 创建http服务
// var server = http.createServer(function (req, res) {
// 根据请求路径的不同，进行的响应也不同
//   if (req.url == '/index?userId=123') {
//     console.log(req.url);
//     res.write('index');
//     res.end();
//     var urlobj = url.parse(req.url);
//     console.log(urlobj);
//   } else if (req.url == '/login') {
//     console.log(req.url);
//     res.write('login');
//     res.end();
//   }
// });

// 监听端口号
// server.listen(8888, function () {
//   console.log('start server');
// });

// 连接数据库
let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'Lee',
  password: '123456',
  database: 'day11',
});

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});
