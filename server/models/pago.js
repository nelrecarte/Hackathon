// models/pago.js
const { DataTypes } = require('sequelize');
const db = require('../db');

const Pago = db.define(
  'pago',
  {
    id_pago: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_empleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    total_deducciones: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    total_pagar: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'pagos',
    timestamps: false,
  }
);

module.exports = Pago;
