'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ngajar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.dosen, {
        as: "dosen",
        foreignKey: "nidn_dosen",
      });
      this.belongsTo(models.dmatkul, {
        as: "matakuliah",
        foreignKey: "kodematkul",
      });
    }
  }
  ngajar.init({
    nidn_dosen: DataTypes.INTEGER,
    kodematkul: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ngajar',
  });
  return ngajar;
};