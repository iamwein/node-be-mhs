'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nilai_mahasiswas', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   type: Sequelize.INTEGER
      // },
      nim: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      nama: {
        type: Sequelize.STRING
      },
      tempat_lahir: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATE
      },
      program_studi: {
        type: Sequelize.STRING
      },
      kelas: {
        type: Sequelize.STRING
      },
      ipk: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('nilai_mahasiswas');
  }
};