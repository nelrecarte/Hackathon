// models/empleadoCicloPlanilla.js
const { DataTypes } = require('sequelize');
const db = require('../db');  // Adjust the path to your db.js file

const EmpleadoCicloPlanilla = db.define('EmpleadoCicloPlanilla', {
  id_empleadoCicloPlanilla: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_empleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dia_corte: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: 'Fin del ciclo de planilla',
  },
  tipo: {
    type: DataTypes.ENUM('mensual', 'bimensual'),
    allowNull: false,
    comment: 'Frecuencia del ciclo de planilla',
  },
}, {
  tableName: 'empleado_ciclo_planilla',
  timestamps: false,  // Assuming no timestamps (createdAt, updatedAt)
});

module.exports = EmpleadoCicloPlanilla;
