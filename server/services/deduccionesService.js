const Deducciones = require('../models/deducciones');

// Create a new deduction record
const crearDeduccion = async (data) => {
  try {
    const deduccion = await Deducciones.create(data);
    return deduccion;
  } catch (error) {
    throw error;
  }
};

// Get all deduction records
const getDeducciones = async () => {
  try {
    const deducciones = await Deducciones.findAll();
    return deducciones;
  } catch (error) {
    throw error;
  }
};

// Get a deduction by its ID
const getDeduccionById = async (id) => {
  try {
    const deduccion = await Deducciones.findByPk(id);
    return deduccion;
  } catch (error) {
    throw error;
  }
};

// Update a deduction record by ID
const actualizarDeduccion = async (id, data) => {
  try {
    const result = await Deducciones.update(data, {
      where: { id_deduccion: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

// Delete a deduction record by ID
const eliminarDeduccion = async (id) => {
  try {
    const result = await Deducciones.destroy({
      where: { id_deduccion: id },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearDeduccion,
  getDeducciones,
  getDeduccionById,
  actualizarDeduccion,
  eliminarDeduccion,
};
