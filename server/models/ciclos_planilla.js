const CiclosPlanilla = sequelize.define('ciclos_planilla', {
  id_cicloPlanilla: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo: {
    type: DataTypes.ENUM('mensual', 'bimensual'),
    allowNull: false,
  },
  fecha_inicio: { type: DataTypes.DATE, allowNull: false },
  fecha_fin: { type: DataTypes.DATE, allowNull: false },
});

module.exports = CiclosPlanilla;
