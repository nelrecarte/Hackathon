// controllers/empleadoDeduccionController.js
const empleadoDeduccionService = require('../services/empleadoDeduccionService');

const getAllEmpleadoDeducciones = async (req, res) => {
  try {
    const empleadoDeducciones = await empleadoDeduccionService.getAllEmpleadoDeducciones();
    res.json(empleadoDeducciones);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employee deductions' });
  }
};

const getEmpleadoDeduccionById = async (req, res) => {
  try {
    const empleadoDeduccion = await empleadoDeduccionService.getEmpleadoDeduccionById(req.params.id);
    if (!empleadoDeduccion) {
      return res.status(404).json({ error: 'Empleado Deduccion not found' });
    }
    res.json(empleadoDeduccion);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employee deduction' });
  }
};

const createEmpleadoDeduccion = async (req, res) => {
  try {
    const newEmpleadoDeduccion = await empleadoDeduccionService.createEmpleadoDeduccion(req.body);
    res.status(201).json(newEmpleadoDeduccion);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create employee deduction' });
  }
};

const updateEmpleadoDeduccion = async (req, res) => {
  try {
    const updatedEmpleadoDeduccion = await empleadoDeduccionService.updateEmpleadoDeduccion(req.params.id, req.body);
    if (!updatedEmpleadoDeduccion) {
      return res.status(404).json({ error: 'Empleado Deduccion not found' });
    }
    res.json(updatedEmpleadoDeduccion);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update employee deduction' });
  }
};

const deleteEmpleadoDeduccion = async (req, res) => {
  try {
    const deleted = await empleadoDeduccionService.deleteEmpleadoDeduccion(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Empleado Deduccion not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete employee deduction' });
  }
};

module.exports = {
  getAllEmpleadoDeducciones,
  getEmpleadoDeduccionById,
  createEmpleadoDeduccion,
  updateEmpleadoDeduccion,
  deleteEmpleadoDeduccion,
};
