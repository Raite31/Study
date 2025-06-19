"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Chapters", [
      {
        courseId: 1,
        title: "Node.js入门",
        content: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。",
        video: "",
        rank: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: 1,
        title: "Node.js核心模块",
        content: "Node.js 提供了丰富的核心模块，帮助开发者快速构建应用。",
        video: "",
        rank: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: 2,
        title: "Node.js项目实践",
        content: "通过实践项目来深入理解 Node.js 的应用。",
        video: "",
        rank: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("chapters", null, {});
  },
};
