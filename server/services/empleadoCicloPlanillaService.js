// services/empleadoCicloPlanillaService.js
const EmpleadoCicloPlanilla = require('../models/empleadoCicloPlanilla');

const getAllEmpleadoCicloPlanillas = async () => {
  return await EmpleadoCicloPlanilla.findAll();
};

const getEmpleadoCicloPlanillaById = async (id) => {
  return await EmpleadoCicloPlanilla.findOne({
    where: {
      id_empleadoCicloPlanilla: id,
    },
  });
};

const createEmpleadoCicloPlanilla = async (empleadoCicloPlanilla) => {
  return await EmpleadoCicloPlanilla.create(empleadoCicloPlanilla);
};

const updateEmpleadoCicloPlanilla = async (id, empleadoCicloPlanilla) => {
  const existing = await EmpleadoCicloPlanilla.findOne({ where: { id_empleadoCicloPlanilla: id } });
  if (existing) {
    return await existing.update(empleadoCicloPlanilla);
  }
  return null;
};

const deleteEmpleadoCicloPlanilla = async (id) => {
  const deleted = await EmpleadoCicloPlanilla.destroy({
    where: { id_empleadoCicloPlanilla: id },
  });
  return deleted > 0;
};

module.exports = {
  getAllEmpleadoCicloPlanillas,
  getEmpleadoCicloPlanillaById,
  createEmpleadoCicloPlanilla,
  updateEmpleadoCicloPlanilla,
  deleteEmpleadoCicloPlanilla,
};
