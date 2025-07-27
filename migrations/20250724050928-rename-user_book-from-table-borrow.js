"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("borrows", "user_book", "book_id");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("borrows", "user_book", "book_id");
  },
};
