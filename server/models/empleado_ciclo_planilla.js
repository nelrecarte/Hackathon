const EmpleadoCicloPlanilla = sequelize.define('empleado_ciclo_planilla', {
  id_empleadoCicloPlanilla: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_empleado: { type: DataTypes.INTEGER, allowNull: false },
  id_cicloPlanilla: { type: DataTypes.INTEGER, allowNull: false },
});

EmpleadoCicloPlanilla.belongsTo(Empleados, { foreignKey: 'id_empleado' });
EmpleadoCicloPlanilla.belongsTo(CiclosPlanilla, {
  foreignKey: 'id_cicloPlanilla',
});

module.exports = EmpleadoCicloPlanilla;
