"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Chapter.belongsTo(models.Course, {
        as: "course",
      }); 
    }
  }
  Chapter.init(
    {
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "课程ID必须填写。" },
          notEmpty: { msg: "课程ID不能为空。" },
          async isPresent(value) {
            const course = await sequelize.models.Course.findByPk(value);
            if (!course) {
              throw new Error("课程ID不存在，请检查。");
            }
          },
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "章节标题必须填写。" },
          notEmpty: { msg: "章节标题不能为空。" },
          len: {
            args: [2, 450],
            msg: "章节标题长度必须在2~45之间。",
          },
        },
      },
      content: DataTypes.TEXT,
      video: {
        type: DataTypes.STRING,
        validate: {
          isUrl: { msg: "视频链接格式不正确。" },
        },
      },
      rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "排序必须填写。" },
          notEmpty: { msg: "排序不能为空。" },
          isInt: { msg: "排序必须为整数。" },
          isPositive(value) {
            if (value < 0) {
              throw new Error("排序必须为正整数。");
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Chapter",
    }
  );
  return Chapter;
};
