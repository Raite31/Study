const express = require("express");
const router = express.Router();
const { Setting } = require("../../models");
const { NotFoundError, success, failure } = require("../../utils/response");

/**
 * 查询系统设置详情
 * GET admin/settings/
 */
router.get("/", async function (req, res) {
  try {
    const setting = await getSetting();
    // res.json({
    //   status: true,
    //   message: "查询系统设置详情成功",
    //   data: setting,
    // });
    success(res, "查询系统设置详情成功", {
      setting,
    });
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "查询系统设置详情失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 更新系统设置
 * PUT /admin/settings/
 */
router.put("/", async function (req, res) {
  try {
    const setting = await getSetting();
    const body = filterBody(req);
    await setting.update(body);
    // res.json({
    //   status: true,
    //   message: "更新系统设置成功",
    // });
    success(res, "更新系统设置成功");
  } catch (error) {
    // res.status(500).json({
    //   status: false,
    //   message: "更新系统设置失败",
    //   errors: [error.message],
    // });
    failure(res, error);
  }
});

/**
 * 公共方法：查询当前系统设置
 */
async function getSetting() {
  const setting = await Setting.findOne({ where: {} });
  if (!setting) {
    throw new NotFoundError(`初始系统设置未找到，请运行种子文件。`);
  }
  return setting;
}

/**
 * 公共方法：白名单过滤
 *
 */
function filterBody(req) {
  return {
    name: req.body.name,
    icp: req.body.icp,
    copyright: req.body.copyright,
  };
}

module.exports = router;
