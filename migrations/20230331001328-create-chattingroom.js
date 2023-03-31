"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("chattingrooms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId3: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId4: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId5: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId6: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId7: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId8: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("chattingrooms");
  },
};
