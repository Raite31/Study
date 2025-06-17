const express = require("express");
const router = express.Router();
const { User } = require("../../models");
const { Op } = require("sequelize");
const { NotFoundError, success, failure } = require("../../utils/response");

/**
 * 查询用户列表
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
      // where:
    };

    if (query.email) {
      condition.where = {
        email: {
          [Op.eq]: query.email,
        },
      };
    }
    if (query.username) {
      condition.where = {
        username: {
          [Op.eq]: query.username,
        },
      };
    }
    if (query.nickname) {
      condition.where = {
        nickname: {
          [Op.like]: `%${query.nickname}`,
        },
      };
    }
    if (query.role) {
      condition.where = {
        role: {
          [Op.eq]: query.role,
        },
      };
    }

    const { count, rows } = await User.findAndCountAll(condition);
    // res.json({
    //   status: true,
    //   message: "查询用户列表成功",
    //   data: {
    //     users: rows,
    //     pagination: {
    //       total: count,
    //       currentPage,
    //       pageSize,
    //     },
    //   },
    // });
    success(res, "查询用户列表成功", {
      users: rows,
      pagination: {
        total: count,
        currentPage,
        pageSize,
      },
    });
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "查询用户列表失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 查询用户详情
 * GET admin/users/:id
 */
router.get("/:id", async function (req, res) {
  try {
    const user = await getUser(req);
    // res.json({
    //   status: true,
    //   message: "查询用户详情成功",
    //   data: user,
    // });
    success(res, "查询用户详情成功", {
      user,
    });
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "查询用户详情失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 创建用户
 * POST /admin/users
 */
router.post("/", async function (req, res) {
  try {
    // 白名单过滤
    const body = filterBody(req);
    // body.password = bcrypt.hashSync(body.password, 10);

    // 验证表单数据
    // if (body.title === "") {
    //   return res.status(400).json({
    //     status: false,
    //     message: "标题不能为空",
    //   });
    // }

    const user = await User.create(body);
    // res.status(201).json({
    //   status: true,
    //   message: "创建用户成功",
    //   data: user,
    // });
    success(
      res,
      "创建用户成功",
      {
        user,
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
    //     message: "创建用户失败",
    //     errors: [error.message],
    //   });
    // }
    failure(res, error);
  }
});

/**
 * 更新用户
 * PUT /admin/users/:id
 */
router.put("/:id", async function (req, res) {
  try {
    const user = await getUser(req);
    const body = filterBody(req);
    await user.update(body);
    // res.json({
    //   status: true,
    //   message: "更新用户成功",
    // });
    success(res, "更新用户成功");
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "更新用户失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 公共方法：查询当前用户
 */
async function getUser(req) {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    throw new NotFoundError(`ID: ${id}的用户未找到`);
  }
}

/**
 * 公共方法：白名单过滤
 *
 */
function filterBody(req) {
  return {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    nickname: req.body.nickname,
    sex: req.body.sex,
    company: req.body.company,
    introduce: req.body.introduce,
    role: req.body.role,
    avatar: req.body.avatar,
  };
}

module.exports = router;
