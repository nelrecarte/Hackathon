const EmpleadoDeducciones = sequelize.define('empleado_deducciones', {
  id_empleadoDeduccion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_empleado: { type: DataTypes.INTEGER, allowNull: false },
  id_deduccion: { type: DataTypes.INTEGER, allowNull: false },
});

EmpleadoDeducciones.belongsTo(Empleados, { foreignKey: 'id_empleado' });
EmpleadoDeducciones.belongsTo(Deducciones, { foreignKey: 'id_deduccion' });

module.exports = EmpleadoDeducciones;
