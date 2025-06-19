const express = require("express");
const router = express.Router();
const { Course, Category, User, Chapter } = require("../../models");
const { Op, where } = require("sequelize");
const { NotFoundError, success, failure } = require("../../utils/response");

/**
 * 查询课程列表
 */
router.get("/", async function (req, res) {
  try {
    const query = req.query;
    const currentPage = Math.abs(Number(query.currentPage)) || 1;
    const pageSize = Math.abs(Number(query.pageSize)) || 10;
    const offset = (currentPage - 1) * pageSize;
    const condition = {
      ...getCondition(),
      // 双中括号代表不止一个条件
      order: [["id", "DESC"]],
      limit: pageSize,
      offset: offset,
    };
    if (query.categoryId) {
      condition.where = {
        [Op.eq]: query.categoryId,
      };
    }

    if (query.userId) {
      condition.where = {
        userId: {
          [Op.eq]: query.userId,
        },
      };
    }

    if (query.name) {
      condition.where = {
        name: {
          [Op.like]: `%${query.name}%`,
        },
      };
    }

    if (query.recommended) {
      condition.where = {
        recommended: {
          [Op.eq]: query.recommended === "true",
        },
      };
    }

    if (query.introductory) {
      condition.where = {
        introductory: {
          [Op.eq]: query.introductory === "true",
        },
      };
    }

    const { count, rows } = await Course.findAndCountAll(condition);
    // res.json({
    //   status: true,
    //   message: "查询课程列表成功",
    //   data: {
    //     courses: rows,
    //     pagination: {
    //       total: count,
    //       currentPage,
    //       pageSize,
    //     },
    //   },
    // });
    success(res, "查询课程列表成功", {
      courses: rows,
      pagination: {
        total: count,
        currentPage,
        pageSize,
      },
    });
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "查询课程列表失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 查询课程详情
 * GET admin/courses/:id
 */
router.get("/:id", async function (req, res) {
  try {
    const course = await getCourse(req);
    // res.json({
    //   status: true,
    //   message: "查询课程详情成功",
    //   data: course,
    // });
    success(res, "查询课程详情成功", {
      course,
    });
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "查询课程详情失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 创建课程
 * POST /admin/courses
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

    const course = await Course.create(body);
    // res.status(201).json({
    //   status: true,
    //   message: "创建课程成功",
    //   data: course,
    // });
    success(
      res,
      "创建课程成功",
      {
        course,
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
    //     message: "创建课程失败",
    //     errors: [error.message],
    //   });
    // }
    failure(res, error);
  }
});

/**
 * 删除课程
 * DELETE
 */
router.delete("/:id", async function (req, res) {
  try {
    const course = await getCourse(req);
    const count = await Chapter.count({ where: { courseId: req.params.id } });
    if (count > 0) {
      throw new Error("当前课程有章节，无法删除");
    }
    await course.destroy();
    // res.json({
    //   status: true,
    //   message: "删除课程成功",
    // });
    success(res, "删除课程成功");
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "删除课程失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 更新课程
 * PUT /admin/courses/:id
 */
router.put("/:id", async function (req, res) {
  try {
    const course = await getCourse(req);
    const body = filterBody(req);
    await course.update(body);
    // res.json({
    //   status: true,
    //   message: "更新课程成功",
    // });
    success(res, "更新课程成功");
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "更新课程失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 公共方法：关联分类、用户数据
 */
function getCondition() {
  return {
    attributes: { exclude: ["CategoryId", "UserId"] },
    include: [
      {
        model: Category,
        as: "category",
        attributes: ["id", "name"],
      },
      {
        model: User,
        as: "user",
        attributes: ["id", "username", "avatar"],
      },
    ],
  };
}

/**
 * 公共方法：查询当前课程
 */
async function getCourse(req) {
  const { id } = req.params;
  const condition = getCondition();
  const course = await Course.findByPk(id, condition);
  if (!course) {
    throw new NotFoundError(`ID: ${id}的课程未找到`);
  }
  return course;
}

/**
 * 公共方法：白名单过滤
 *
 */
function filterBody(req) {
  return {
    categoryId: req.body.categoryId,
    userId: req.body.userId,
    name: req.body.name,
    image: req.body.image,
    recommended: req.body.recommended,
    introductory: req.body.introductory,
    content: req.body.content,
  };
}

module.exports = router;
