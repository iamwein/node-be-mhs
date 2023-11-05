'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ngajars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nidn_dosen: {
        type: Sequelize.STRING
      },
      kodematkul: {
        type: Sequelize.STRING
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
    await queryInterface.addConstraint('ngajars', {
      fields: ["nidn_dosen"],
      type: "foreign key",
      name: "nidn_fk",
      references: {
          table: "dosens",
          field: "nidn"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })
    await queryInterface.addConstraint('ngajars', {
      fields: ["kodematkul"],
      type: "foreign key",
      name: "kodematkul_fk",
      references: {
          table: "dmatkuls",
          field: "kodematkul"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ngajars');
  }
};