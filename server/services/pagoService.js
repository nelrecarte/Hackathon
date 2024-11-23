const { sequelize } = require('../models/pago'); // Ensure sequelize is correctly imported

const getAllPagos = async () => {
  const query = `
    SELECT 
      p.*, 
      e.nombre AS empleadoNombre, 
      e.apellido AS empleadoApellido 
    FROM 
      pagos p
    JOIN 
      empleados e 
    ON 
      p.id_empleado = e.id_empleado
  `;

  const [results, metadata] = await sequelize.query(query);
  return results;
};

const createPago = async (pagoData) => {
  return await Pago.create(pagoData);
};

const getPagoById = async (id) => {
  return await Pago.findByPk(id, {
    include: [{ model: Empleado, as: 'empleado' }],
  });
};

module.exports = {
  getAllPagos,
  createPago,
  getPagoById,
};
