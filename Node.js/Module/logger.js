// console.log(module);

// 模块封装函数 是令模块可封闭，在没exports之前外部不可调用的原因 （需要隐藏的）
// (function (exports, require, module, __filename, __dirname) {
console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message) {
  console.log(message);
}

module.exports.log = log;
// module.exports = log;
// exports.log = log;
// exports = log; // ❌，因为exports是来自于module.exports

// module.exports.endPoint = url;
// });

