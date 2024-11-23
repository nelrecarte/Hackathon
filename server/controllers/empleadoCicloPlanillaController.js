// controllers/empleadoCicloPlanillaController.js
const empleadoCicloPlanillaService = require('../services/empleadoCicloPlanillaService');

const getAllEmpleadoCicloPlanillas = async (req, res) => {
  try {
    const empleadoCicloPlanillas = await empleadoCicloPlanillaService.getAllEmpleadoCicloPlanillas();
    res.json(empleadoCicloPlanillas);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employee cycle planillas' });
  }
};

const getEmpleadoCicloPlanillaById = async (req, res) => {
  try {
    const empleadoCicloPlanilla = await empleadoCicloPlanillaService.getEmpleadoCicloPlanillaById(req.params.id);
    if (!empleadoCicloPlanilla) {
      return res.status(404).json({ error: 'Empleado Ciclo Planilla not found' });
    }
    res.json(empleadoCicloPlanilla);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employee cycle planilla' });
  }
};

const createEmpleadoCicloPlanilla = async (req, res) => {
  try {
    const newEmpleadoCicloPlanilla = await empleadoCicloPlanillaService.createEmpleadoCicloPlanilla(req.body);
    res.status(201).json(newEmpleadoCicloPlanilla);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create employee cycle planilla' });
  }
};

const updateEmpleadoCicloPlanilla = async (req, res) => {
  try {
    const updatedEmpleadoCicloPlanilla = await empleadoCicloPlanillaService.updateEmpleadoCicloPlanilla(req.params.id, req.body);
    if (!updatedEmpleadoCicloPlanilla) {
      return res.status(404).json({ error: 'Empleado Ciclo Planilla not found' });
    }
    res.json(updatedEmpleadoCicloPlanilla);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update employee cycle planilla' });
  }
};

const deleteEmpleadoCicloPlanilla = async (req, res) => {
  try {
    const deleted = await empleadoCicloPlanillaService.deleteEmpleadoCicloPlanilla(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Empleado Ciclo Planilla not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete employee cycle planilla' });
  }
};

module.exports = {
  getAllEmpleadoCicloPlanillas,
  getEmpleadoCicloPlanillaById,
  createEmpleadoCicloPlanilla,
  updateEmpleadoCicloPlanilla,
  deleteEmpleadoCicloPlanilla,
};
