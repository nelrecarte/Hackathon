const { DataTypes } = require('sequelize');
const db = require('../db'); // Adjust the path if needed

const Empleado = db.define(
  'empleado',
  {
    id_empleado: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
      unique: true, // Ensure unique codes
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
      unique: true, // Ensure unique personal email
      allowNull: false,
    },
    correo_empresarial: {
      type: DataTypes.STRING,
      unique: true, // Ensure unique business email
      allowNull: false,
    },
    tipo_salario: {
      type: DataTypes.ENUM('mensual', 'por hora'),
      allowNull: false,
    },
    medio_pago: {
      type: DataTypes.ENUM(
        'banco',
        'transferencia internacional',
        'plataforma internacional'
      ),
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM('admin', 'usuario_planilla', 'empleado'),
      allowNull: false,
    },
    payRate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'empleados', // Explicitly set table name
    timestamps: false,
  }
);

// Adjust this to ensure models is available
Empleado.associate = (models) => {
  Empleado.hasMany(models.Pago, {
    foreignKey: 'id_empleado',
    as: 'pagos', // Alias used for reverse association
  });
};


module.exports = Empleado;
