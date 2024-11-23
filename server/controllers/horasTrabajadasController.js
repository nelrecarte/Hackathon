const horasTrabajadasService = require('../services/horasTrabajadasService');

// Create worked hours
const createWorkedHours = async (req, res) => {
  try {
    const newWorkedHours = await horasTrabajadasService.createWorkedHours(
      req.body
    );
    res.status(201).json(newWorkedHours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all worked hours
const getAllWorkedHours = async (req, res) => {
  try {
    const hours = await horasTrabajadasService.getAllWorkedHours();
    res.status(200).json(hours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get worked hours by employee ID
const getWorkedHoursByEmployee = async (req, res) => {
  const { id_empleado } = req.params;
  try {
    const hours = await horasTrabajadasService.getWorkedHoursByEmployee(
      id_empleado
    );
    res.status(200).json(hours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWorkedHours,
  getAllWorkedHours,
  getWorkedHoursByEmployee,
};
