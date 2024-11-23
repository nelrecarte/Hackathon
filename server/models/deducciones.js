const { DataTypes } = require('sequelize');
const db = require('../db'); // Adjust the path if needed

const Deducciones = db.define('Deducciones', {
  id_deduccion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false, // Deduction name is mandatory
  },
  monto: {
    type: DataTypes.NUMERIC,
    allowNull: false, // Amount is mandatory (could be a fixed value or percentage)
  },
  frecuencia: {
    type: DataTypes.ENUM('mensual', 'quincenal'),
    allowNull: false, // Frequency is mandatory
  },
}, {
  tableName: 'deducciones',
  timestamps: false, // Disable auto-created timestamps (createdAt/updatedAt)
});

module.exports = Deducciones;
