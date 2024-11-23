const { DataTypes } = require('sequelize');
const db = require('../db'); // Import the Sequelize instance

const Empleado = db.define('Empleado', {
  id_empleado: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  codigo: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  correo_personal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo_empresarial: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipo_salario: {
    type: DataTypes.ENUM('mensual', 'por hora'),
    allowNull: false,
  },
  medio_pago: {
    type: DataTypes.ENUM('banco', 'transferencia internacional', 'plataforma internacional'),
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('admin', 'usuario_planilla', 'empleado'),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'empleados', // Optional: Specify table name explicitly
  timestamps: false, // Disable Sequelize's default createdAt/updatedAt fields
});

module.exports = Empleado;
