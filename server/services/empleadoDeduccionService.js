// services/empleadoDeduccionService.js
const EmpleadoDeduccion = require('../models/empleadoDeduccion');

const getAllEmpleadoDeducciones = async () => {
  return await EmpleadoDeduccion.findAll();
};

const getEmpleadoDeduccionById = async (id) => {
  return await EmpleadoDeduccion.findOne({
    where: {
      id_empleadoDeduccion: id,
    },
  });
};

const createEmpleadoDeduccion = async (empleadoDeduccion) => {
  return await EmpleadoDeduccion.create(empleadoDeduccion);
};

const updateEmpleadoDeduccion = async (id, empleadoDeduccion) => {
  const existing = await EmpleadoDeduccion.findOne({ where: { id_empleadoDeduccion: id } });
  if (existing) {
    return await existing.update(empleadoDeduccion);
  }
  return null;
};

const deleteEmpleadoDeduccion = async (id) => {
  const deleted = await EmpleadoDeduccion.destroy({
    where: { id_empleadoDeduccion: id },
  });
  return deleted > 0;
};

module.exports = {
  getAllEmpleadoDeducciones,
  getEmpleadoDeduccionById,
  createEmpleadoDeduccion,
  updateEmpleadoDeduccion,
  deleteEmpleadoDeduccion,
};
