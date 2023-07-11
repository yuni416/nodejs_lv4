"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Posts, {
        sourceKey: "userId",
        foreignKey: "UserId",
      });

      this.hasMany(models.Comments, {
        sourceKey: "userId",
        foreignKey: "UserId",
      });

      this.hasMany(models.Likes, {
        sourceKey: "userId",
        foreignKey: "UserId",
      });
      this.hasMany(models.Posts, {
        sourceKey: "nickname",
        foreignKey: "Nickname",
      });
      this.hasMany(models.Comments, {
        sourceKey: "nickname",
        foreignKey: "Nickname",
      });
      this.hasMany(models.Likes, {
        sourceKey: "nickname",
        foreignKey: "Nickname",
      });
      this.hasMany(models.Likes, {
        targetKey: "nickname",
        foreignKey: "Nickname",
      });
    }
  }

  Users.init(
    {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
