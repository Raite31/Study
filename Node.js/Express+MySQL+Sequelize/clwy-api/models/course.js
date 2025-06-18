"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Course.belongsTo(models.Category, { as: "category" });
      models.Course.belongsTo(models.User, { as: "user" });
    }
  }
  Course.init(
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "分类ID必须填写" },
          notEmpty: { msg: "分类ID不能为空" },
          async isPresent(value) {
            const category = await sequelize.models.Category.findByPk(value);
            if (!category) {
              throw new Error(`ID为：${value}的分类不存在`);
            }
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "用户ID必须填写" },
          notEmpty: { msg: "用户ID不能为空" },
          async isPresent(value) {
            const user = await sequelize.models.User.findByPk(value);
            if (!user) {
              throw new Error(`ID为${value}的用户不存在。`);
            }
          },
        },
      },
      name: DataTypes.STRING,
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: { msg: "头像地址不正确" },
        },
      },
      recommended: {
        type: DataTypes.BOOLEAN,
        validate: {
          isIn: {
            args: [[true, false]],
            msg: "是否推荐的值必须是，推荐：true 不推荐：false",
          },
        },
      },
      introductory: {
        type: DataTypes.BOOLEAN,
        validate: {
          isIn: {
            args: [[true, false]],
            msg: "是否入门课程的值必须是，推荐：true 不推荐：false",
          },
        },
      },
      content: DataTypes.TEXT,
      likesCount: DataTypes.INTEGER,
      chaptersCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
