const EmpleadoService = require('../services/EmpleadoService');

// Create
const createEmpleado = async (req, res) => {
  try {
    const empleado = await EmpleadoService.createEmpleado(req.body);
    res.status(201).json(empleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read All
const getAllEmpleados = async (req, res) => {
  try {
    const empleados = await EmpleadoService.getAllEmpleados();
    res.status(200).json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read One
const getEmpleadoById = async (req, res) => {
  try {
    const empleado = await EmpleadoService.getEmpleadoById(req.params.id);
    if (!empleado) return res.status(404).json({ error: 'Empleado not found' });
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
const updateEmpleado = async (req, res) => {
  try {
    const empleado = await EmpleadoService.updateEmpleado(req.params.id, req.body);
    res.status(200).json(empleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
const deleteEmpleado = async (req, res) => {
  try {
    await EmpleadoService.deleteEmpleado(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEmpleado,
  getAllEmpleados,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado,
};
