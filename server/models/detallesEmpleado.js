const { DataTypes } = require('sequelize');
const db = require('../db'); // Adjust the path if needed

const DetallesEmpleado = db.define('DetallesEmpleado', {
  id_detalleEmpleado: {
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
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false, // Start date is mandatory
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: true, // End date can be null if the employee is still active
  },
  puesto: {
    type: DataTypes.STRING,
    allowNull: false, // Position is mandatory
  },
}, {
  tableName: 'detalles_empleado',
  timestamps: false, // If you do not need automatic timestamp fields
});

module.exports = DetallesEmpleado;
