"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chattingroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chattingroom.init(
    {
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
    },
    {
      sequelize,
      modelName: "Chattingroom",
    }
  );
  return Chattingroom;
};
