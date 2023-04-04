"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chattingroom extends Model {
    static associate(models) {}
  }
  Chattingroom.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      chatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Chattingroom",
      tableName: "chattingrooms",
    }
  );
  return Chattingroom;
};
