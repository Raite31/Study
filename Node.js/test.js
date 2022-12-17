// 引入http模块
var http = require('http');
// 引入URL模块
var url = require('url');
// 创建http服务
var server = http.createServer(function (req, res) {
  if (req.url == '/index?userId=123') {
    console.log(req.url);
    res.write('index');
    res.end();
    var urlobj = url.parse(req.url);
    console.log(urlobj);
  } else if (req.url == '/login') {
    console.log(req.url);
    res.write('login');
    res.end();
  }
});
// 监听端口号
server.listen(8888, function () {
  console.log('start server');
});
