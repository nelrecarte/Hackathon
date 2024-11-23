const deduccionesService = require('../services/deduccionesService');

// Create a new deduction record
const crearDeduccion = async (req, res) => {
  try {
    const data = req.body;
    const result = await deduccionesService.crearDeduccion(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all deduction records
const getDeducciones = async (req, res) => {
  try {
    const deducciones = await deduccionesService.getDeducciones();
    res.status(200).json(deducciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a deduction record by ID
const getDeduccionById = async (req, res) => {
  try {
    const { id } = req.params;
    const deduccion = await deduccionesService.getDeduccionById(id);
    if (deduccion) {
      res.status(200).json(deduccion);
    } else {
      res.status(404).json({ message: 'Deduction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a deduction record by ID
const actualizarDeduccion = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await deduccionesService.actualizarDeduccion(id, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a deduction record by ID
const eliminarDeduccion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deduccionesService.eliminarDeduccion(id);
    res.status(200).json({ message: 'Deduction deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearDeduccion,
  getDeducciones,
  getDeduccionById,
  actualizarDeduccion,
  eliminarDeduccion,
};
