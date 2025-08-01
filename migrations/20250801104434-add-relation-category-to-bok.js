"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("books", "category_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      allowNull: false,
      after: "tahun_terbit",
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("books", "category_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
