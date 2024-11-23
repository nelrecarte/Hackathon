const Empleado = require('../models/Empleado');
const bcrypt = require('bcrypt');


// Create
const createEmpleado = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    const empleado = await Empleado.create({
      ...data,
      password: hashedPassword 
    });

    return empleado;
  } catch (error) {
    throw new Error(error.message);
  }
};
// Get all employees
const getAllEmpleados = async () => {
  try {
    const empleados = await Empleado.findAll();
    return empleados;
  } catch (error) {
    throw error;
  }
};

// Get a single employee by ID
const getEmpleadoById = async (id) => {
  try {
    const empleado = await Empleado.findByPk(id);
    if (!empleado) {
      throw new Error('Empleado not found');
    }
    return empleado;
  } catch (error) {
    throw error;
  }
};

// Update an employee
const updateEmpleado = async (id, data) => {
  try {
    const empleado = await Empleado.findByPk(id);
    if (!empleado) {
      throw new Error('Empleado not found');
    }
    await empleado.update(data);
    return empleado;
  } catch (error) {
    throw error;
  }
};

// Delete an employee
const deleteEmpleado = async (id) => {
  try {
    const empleado = await Empleado.findByPk(id);
    if (!empleado) {
      throw new Error('Empleado not found');
    }
    await empleado.destroy();
    return { message: 'Empleado deleted successfully' };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createEmpleado,
  getAllEmpleados,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado,
};