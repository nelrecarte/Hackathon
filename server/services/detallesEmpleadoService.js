const DetallesEmpleado = require('../models/detallesEmpleado');

// Create a new entry for employee details
const crearDetalleEmpleado = async (data) => {
  try {
    const detalleEmpleado = await DetallesEmpleado.create(data);
    return detalleEmpleado;
  } catch (error) {
    throw error;
  }
};

// Get all employee details
const getDetallesEmpleado = async () => {
  try {
    const detallesEmpleado = await DetallesEmpleado.findAll();
    return detallesEmpleado;
  } catch (error) {
    throw error;
  }
};

// Get employee details by employee ID
const getDetallesPorEmpleado = async (id_empleado) => {
  try {
    const detallesEmpleado = await DetallesEmpleado.findAll({
      where: { id_empleado },
    });
    return detallesEmpleado;
  } catch (error) {
    throw error;
  }
};

// Update employee details
const actualizarDetalleEmpleado = async (id, data) => {
  try {
    const detalleEmpleado = await DetallesEmpleado.update(data, {
      where: { id_detalleEmpleado: id },
    });
    return detalleEmpleado;
  } catch (error) {
    throw error;
  }
};

// Delete employee detail record
const eliminarDetalleEmpleado = async (id) => {
  try {
    const result = await DetallesEmpleado.destroy({
      where: { id_detalleEmpleado: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearDetalleEmpleado,
  getDetallesEmpleado,
  getDetallesPorEmpleado,
  actualizarDetalleEmpleado,
  eliminarDetalleEmpleado,
};
