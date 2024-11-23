const { DataTypes } = require('sequelize');
const db = require('../db'); // Adjust the path if needed

const HorasTrabajadas = db.define(
  'HorasTrabajadas',
  {
    id_hora: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_empleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empleados', // Reference to the empleados table
        key: 'id_empleado',
      },
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    horas_trabajadas: {
      type: DataTypes.INTEGER,
      allowNull: false, // Store the number of hours worked
    },
  },
  {
    tableName: 'horas_trabajadas',
    timestamps: false,
  }
);

module.exports = HorasTrabajadas;
