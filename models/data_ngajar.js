'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_ngajar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data_ngajar.init({
    id_dosen: DataTypes.INTEGER,
    id_matkul: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'data_ngajar',
  });
  return data_ngajar;
};