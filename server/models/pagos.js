const Pagos = sequelize.define('pagos', {
  id_pago: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_empleado: { type: DataTypes.INTEGER, allowNull: false },
  id_cicloPlanilla: { type: DataTypes.INTEGER, allowNull: false },
  salario_base: { type: DataTypes.NUMERIC, allowNull: false },
  horas_extras: { type: DataTypes.NUMERIC, allowNull: false },
  total_deducciones: { type: DataTypes.NUMERIC, allowNull: false },
  total_pagar: { type: DataTypes.NUMERIC, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

Pagos.belongsTo(Empleados, { foreignKey: 'id_empleado' });
Pagos.belongsTo(CiclosPlanilla, { foreignKey: 'id_cicloPlanilla' });

module.exports = Pagos;
