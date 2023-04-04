"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chatroom extends Model {
    static associate(models) {
      Chatroom.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Chatroom.hasMany(models.Message, {
        foreignKey: "messageId",
      });
    }
  }
  Chatroom.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Chatroom",
      tableName: "chatrooms",
    }
  );
  return Chatroom;
};
