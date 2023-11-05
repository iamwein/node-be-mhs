'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dmatkul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ngajar, {
        as: "matakuliah",
        foreignKey: "kodematkul",
      })
    }
  }
  dmatkul.init({
    kodematkul: DataTypes.STRING,
    matkul: DataTypes.STRING,
    sks: DataTypes.INTEGER,
    smt: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dmatkul',
  });
  return dmatkul;
};