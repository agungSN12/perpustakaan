"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("books", "category_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      after: "tahun_terbit",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("books", "category_id");
  },
};
