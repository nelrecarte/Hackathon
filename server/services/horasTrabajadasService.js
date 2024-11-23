const HorasTrabajadas = require('../models/horas_trabajadas'); // Adjust path as needed

// Create a new entry for worked hours
const createWorkedHours = async (data) => {
  try {
    const newWorkedHours = await HorasTrabajadas.create(data);
    return newWorkedHours;
  } catch (error) {
    throw new Error('Error creating worked hours: ' + error.message);
  }
};

// Get all worked hours
const getAllWorkedHours = async () => {
  try {
    const hours = await HorasTrabajadas.findAll();
    return hours;
  } catch (error) {
    throw new Error('Error fetching worked hours: ' + error.message);
  }
};

// Get worked hours by employee ID
const getWorkedHoursByEmployee = async (id_empleado) => {
  try {
    const hours = await HorasTrabajadas.findAll({
      where: { id_empleado },
    });
    return hours;
  } catch (error) {
    throw new Error(
      'Error fetching worked hours for employee: ' + error.message
    );
  }
};

module.exports = {
  createWorkedHours,
  getAllWorkedHours,
  getWorkedHoursByEmployee,
};
