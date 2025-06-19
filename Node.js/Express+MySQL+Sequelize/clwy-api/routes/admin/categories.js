const express = require("express");
const router = express.Router();
const { Category, Course } = require("../../models");
const { Op } = require("sequelize");
const { NotFoundError, success, failure } = require("../../utils/response");

/**
 * 查询分类列表
 */
router.get("/", async function (req, res) {
  try {
    const query = req.query;
    const currentPage = Math.abs(Number(query.currentPage)) || 1;
    const pageSize = Math.abs(Number(query.pageSize)) || 10;
    const offset = (currentPage - 1) * pageSize;
    const condition = {
      // 双中括号代表不止一个条件
      order: [
        ["rank", "ASC"],
        ["id", "ASC"],
      ],
      limit: pageSize,
      offset: offset,
    };

    if (query.name) {
      condition.where = {
        name: {
          [Op.like]: `%${query.name}%`,
        },
      };
    }

    const { count, rows } = await Category.findAndCountAll(condition);
    // res.json({
    //   status: true,
    //   message: "查询分类列表成功",
    //   data: {
    //     categories: rows,
    //     pagination: {
    //       total: count,
    //       currentPage,
    //       pageSize,
    //     },
    //   },
    // });
    success(res, "查询分类列表成功", {
      categories: rows,
      pagination: {
        total: count,
        currentPage,
        pageSize,
      },
    });
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "查询分类列表失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 查询分类详情
 * GET admin/categories/:id
 */
router.get("/:id", async function (req, res) {
  try {
    const category = await getCategory(req);
    // res.json({
    //   status: true,
    //   message: "查询分类详情成功",
    //   data: category,
    // });
    success(res, "查询分类详情成功", {
      category,
    });
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "查询分类详情失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 创建分类
 * POST /admin/categories
 */
router.post("/", async function (req, res) {
  try {
    // 白名单过滤
    const body = filterBody(req);

    // 验证表单数据
    // if (body.name === "") {
    //   return res.status(400).json({
    //     status: false,
    //     message: "标题不能为空",
    //   });
    // }

    const category = await Category.create(body);
    // res.status(201).json({
    //   status: true,
    //   message: "创建分类成功",
    //   data: category,
    // });
    success(
      res,
      "创建分类成功",
      {
        category,
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
    //     message: "创建分类失败",
    //     errors: [error.message],
    //   });
    // }
    failure(res, error);
  }
});

/**
 * 删除分类
 * DELETE
 */
router.delete("/:id", async function (req, res) {
  try {
    const category = await getCategory(req);
    const count = await Course.count({ where: { categoryId: req.params.id } });
    if (count > 0) {
      throw new Error("当前分类有课程，无法删除");
    }
    await category.destroy();
    // res.json({
    //   status: true,
    //   message: "删除分类成功",
    // });
    success(res, "删除分类成功");
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "删除分类失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 更新分类
 * PUT /admin/categories/:id
 */
router.put("/:id", async function (req, res) {
  try {
    const category = await getCategory(req);
    const body = filterBody(req);
    await category.update(body);
    // res.json({
    //   status: true,
    //   message: "更新分类成功",
    // });
    success(res, "更新分类成功");
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "更新分类失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 公共方法：查询当前分类
 */
async function getCategory(req) {
  const { id } = req.params;
  const category = await Category.findByPk(id);
  if (!category) {
    throw new NotFoundError(`ID: ${id}的分类未找到`);
  }
}

/**
 * 公共方法：白名单过滤
 *
 */
function filterBody(req) {
  return {
    name: req.body.name,
    content: req.body.content,
  };
}

module.exports = router;
