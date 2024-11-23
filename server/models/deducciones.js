const Deducciones = sequelize.define('deducciones', {
  id_deduccion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: { type: DataTypes.STRING, allowNull: false },
  frecuencia: {
    type: DataTypes.ENUM('mensual', 'quincenal'),
    allowNull: false,
  },
  monto: { type: DataTypes.NUMERIC, allowNull: false },
});

module.exports = Deducciones;
