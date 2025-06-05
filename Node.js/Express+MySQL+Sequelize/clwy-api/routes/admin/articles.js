const express = require("express");
const router = express.Router();

/**
 * 查询文章列表
 */
router.get("/", function (req, res) {
  res.json({ message: "这是后台的文章列表接口" });
});

module.exports = router;
