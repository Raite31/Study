// var logger = require('./logger');

// console.log(logger);

// logger = 1;
// logger.log('message');

// Path module ========================================================
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// OS module ========================================================
// const os = require('os');
// const { Module } = require('module');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// // Template String
// console.log(`Total Memory： ${totalMemory}`);
// console.log(`Free Memory： ${freeMemory}`);

// File Module =========================================================
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function (err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
});
