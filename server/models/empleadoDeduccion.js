// models/empleadoDeduccion.js
const { DataTypes } = require('sequelize');
const db = require('../db');  // Adjust the path to your db.js file

const EmpleadoDeduccion = db.define('EmpleadoDeduccion', {
  id_empleadoDeduccion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_empleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_deduccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'empleado_deducciones',
  timestamps: false,  // Assuming no timestamps (createdAt, updatedAt)
});

module.exports = EmpleadoDeduccion;
