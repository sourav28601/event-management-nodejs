'use strict';

/** @type {import('sequelize-cli').Migration} */
require("dotenv").config();
const bcrypt = require("bcrypt")
module.exports = {
  async up (queryInterface, Sequelize) {
    let hash = await bcrypt.hash("admin123", 10)
    await queryInterface.bulkInsert('Admin', [{
      username: "admin",
      email:  "admin@gmail.com",
      password: hash,
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt : Sequelize.literal("CURRENT_TIMESTAMP")
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admin', null, {});
  }
};
