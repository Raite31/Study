"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      recommended: {
        type: Sequelize.BOOLEAN,
      },
      introductory: {
        type: Sequelize.BOOLEAN,
      },
      content: {
        type: Sequelize.TEXT,
      },
      likesCount: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      chaptersCount: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addIndex("Courses", {
      fields: ["categoryId"],
    });
    await queryInterface.addIndex("Courses", {
      fields: ["userId"],
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Courses");
  },
};
