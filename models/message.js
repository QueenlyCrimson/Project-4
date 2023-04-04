"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {}
  }
  Message.init(
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user: {
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
      modelName: "Message",
      tableName: "messages",
    }
  );
  return Message;
};
