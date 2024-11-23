const Empleado = require('../models/Empleado');

// Create
const createEmpleado = async (data) => {
  try {
    return await Empleado.create(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all empleados
const getAllEmpleados = async () => {
  try {
    return await Empleado.findAll();
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

// Get empleado by ID
const getEmpleadoById = async (id) => {
  try {
    return await Empleado.findByPk(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update empleado
const updateEmpleado = async (id, data) => {
  try {
    const empleado = await Empleado.findByPk(id);
    if (!empleado) throw new Error('Empleado not found');
    return await empleado.update(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete empleado
const deleteEmpleado = async (id) => {
  try {
    const empleado = await Empleado.findByPk(id);
    if (!empleado) throw new Error('Empleado not found');
    await empleado.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createEmpleado,
  getAllEmpleados,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado,
};
