'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nilai_mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nilai_mahasiswa.init({
    nim: DataTypes.STRING,
    nama: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    program_studi: DataTypes.STRING,
    kelas: DataTypes.STRING,
    ipk: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'nilai_mahasiswa',
  });
  return nilai_mahasiswa;
};