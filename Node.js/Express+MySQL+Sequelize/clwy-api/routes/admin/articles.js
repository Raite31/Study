const express = require("express");
const router = express.Router();
const { Article } = require("../../models");
const { Op } = require("sequelize");
const { NotFoundError, success, failure } = require("../../utils/response");

/**
 * 查询文章列表
 */
router.get("/", async function (req, res) {
  try {
    const query = req.query;
    const currentPage = Math.abs(Number(query.currentPage)) || 1;
    const pageSize = Math.abs(Number(query.pageSize)) || 10;
    const offset = (currentPage - 1) * pageSize;
    const condition = {
      // 双中括号代表不止一个条件
      order: [["id", "DESC"]],
      limit: pageSize,
      offset: offset,
    };

    if (query.title) {
      condition.where = {
        title: {
          [Op.like]: `%${query.title}%`,
        },
      };
    }

    const { count, rows } = await Article.findAndCountAll(condition);
    // res.json({
    //   status: true,
    //   message: "查询文章列表成功",
    //   data: {
    //     articles: rows,
    //     pagination: {
    //       total: count,
    //       currentPage,
    //       pageSize,
    //     },
    //   },
    // });
    success(res, "查询文章列表成功", {
      articles: rows,
      pagination: {
        total: count,
        currentPage,
        pageSize,
      },
    });
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "查询文章列表失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 查询文章详情
 * GET admin/articles/:id
 */
router.get("/:id", async function (req, res) {
  try {
    const article = await getArticle(req);
    // res.json({
    //   status: true,
    //   message: "查询文章详情成功",
    //   data: article,
    // });
    success(res, "查询文章详情成功", {
      article,
    });
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "查询文章详情失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 创建文章
 * POST /admin/articles
 */
router.post("/", async function (req, res) {
  try {
    // 白名单过滤
    const body = filterBody(req);

    // 验证表单数据
    // if (body.title === "") {
    //   return res.status(400).json({
    //     status: false,
    //     message: "标题不能为空",
    //   });
    // }

    const article = await Article.create(body);
    // res.status(201).json({
    //   status: true,
    //   message: "创建文章成功",
    //   data: article,
    // });
    success(
      res,
      "创建文章成功",
      {
        article,
      },
      201
    );
  } catch (error) {
    // if (error.name === "SequelizeValidationError") {
    //   const errors = error.errors.map((e) => e.message);

    //   res.status(400).json({
    //     status: false,
    //     message: "请求参数错误",
    //     errors,
    //   });
    // } else {
    //   res.status(500).json({
    //     status: false,
    //     message: "创建文章失败",
    //     errors: [error.message],
    //   });
    // }
    failure(res, error);
  }
});

/**
 * 删除文章
 * DELETE
 */
router.delete("/:id", async function (req, res) {
  try {
    const article = await getArticle(req);
    await article.destroy();
    // res.json({
    //   status: true,
    //   message: "删除文章成功",
    // });
    success(res, "删除文章成功");
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "删除文章失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 更新文章
 * PUT /admin/articles/:id
 */
router.put("/:id", async function (req, res) {
  try {
    const article = await getArticle(req);
    const body = filterBody(req);
    await article.update(body);
    // res.json({
    //   status: true,
    //   message: "更新文章成功",
    // });
    success(res, "更新文章成功");
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "更新文章失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 公共方法：查询当前文章
 */
async function getArticle(req) {
  const { id } = req.params;
  const article = await Article.findByPk(id);
  if (!article) {
    throw new NotFoundError(`ID: ${id}的文章未找到`);
  }
}

/**
 * 公共方法：白名单过滤
 *
 */
function filterBody(req) {
  return {
    title: req.body.title,
    content: req.body.content,
  };
}

module.exports = router;
