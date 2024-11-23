const DetallesEmpleado = sequelize.define('detalles_empleado', {
  id_detalleEmpleado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_empleado: { type: DataTypes.INTEGER, allowNull: false },
  fecha_inicio: { type: DataTypes.DATE, allowNull: false },
  fecha_fin: { type: DataTypes.DATE, defaultValue: null },
  puesto: { type: DataTypes.STRING, allowNull: false },
});

DetallesEmpleado.belongsTo(Empleados, { foreignKey: 'id_empleado' });

module.exports = DetallesEmpleado;
