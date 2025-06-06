const express = require("express");
const router = express.Router();
const { Article } = require("../../models");

/**
 * 查询文章列表
 */
router.get("/", async function (req, res) {
  try {
    const condition = {
      // 双中括号代表不止一个条件
      order: [["id", "DESC"]],
    };
    const articles = await Article.findAll(condition);
    res.json({
      status: true,
      message: "查询文章列表成功",
      data: articles,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "查询文章列表失败",
      errors: [error.message],
    });
  }
});

/**
 * 查询文章详情
 * GET admin/articles/:id
 */
router.get("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);
    if (article) {
      res.json({
        status: true,
        message: "查询文章详情成功",
        data: article,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "文章未找到",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "查询文章详情失败",
      errors: [error.message],
    });
  }
});

/**
 * 创建文章
 * POST /admin/articles
 */
router.post("/", async function (req, res) {
  try {
    const article = await Article.create(req.body);
    res.status(201).json({
      status: true,
      message: "创建文章成功",
      data: article,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "创建文章失败",
      errors: [error.message],
    });
  }
});

/**
 * 删除文章
 * DELETE
 */
router.delete("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);
    if (article) {
      await article.destroy();
      res.json({
        status: true,
        message: "删除文章成功",
      });
    } else {
      res.status(404).json({
        status: false,
        message: "文章未找到",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "删除文章失败",
      errors: [error.message],
    });
  }
});

/**
 * 更新文章
 * PUT /admin/articles/:id
 */
router.put("/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);
    if (article) {
      await article.update(req.body);
      res.json({
        status: true,
        message: "更新文章成功",
      });
    } else {
      res.status(404).json({
        status: false,
        message: "文章未找到",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "更新文章失败",
      errors: [error.message],
    });
  }
});

module.exports = router;
