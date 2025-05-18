const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' }); // 渲染模板
  res.json({ message: "Hello Lee" }); // 渲染json，这才是接口模式 
});

module.exports = router;
