const detallesEmpleadoService = require('../services/detallesEmpleadoService');

// Create a new employee detail record
const crearDetalleEmpleado = async (req, res) => {
  try {
    const data = req.body;
    const result = await detallesEmpleadoService.crearDetalleEmpleado(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all employee detail records
const getDetallesEmpleado = async (req, res) => {
  try {
    const detallesEmpleado = await detallesEmpleadoService.getDetallesEmpleado();
    res.status(200).json(detallesEmpleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get employee details by employee ID
const getDetallesPorEmpleado = async (req, res) => {
  try {
    const { id_empleado } = req.params;
    const detallesEmpleado = await detallesEmpleadoService.getDetallesPorEmpleado(id_empleado);
    res.status(200).json(detallesEmpleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update employee detail record
const actualizarDetalleEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await detallesEmpleadoService.actualizarDetalleEmpleado(id, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete employee detail record
const eliminarDetalleEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await detallesEmpleadoService.eliminarDetalleEmpleado(id);
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crearDetalleEmpleado,
  getDetallesEmpleado,
  getDetallesPorEmpleado,
  actualizarDetalleEmpleado,
  eliminarDetalleEmpleado,
};
