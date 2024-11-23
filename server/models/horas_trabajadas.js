const HorasTrabajadas = sequelize.define('horas_trabajadas', {
  id_horasTrabajadas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_empleado: { type: DataTypes.INTEGER, allowNull: false },
  horas_regulares: { type: DataTypes.INTEGER, allowNull: false },
  horas_extras: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
});

HorasTrabajadas.belongsTo(Empleados, { foreignKey: 'id_empleado' });

module.exports = HorasTrabajadas;
