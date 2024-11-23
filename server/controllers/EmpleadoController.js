const EmpleadoService = require('../services/EmpleadoService');
const bcrypt = require('bcrypt');
const Empleado = require('../models/Empleado');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginEmpleado = async (req, res) => {
    try {
      const { correo_personal, password } = req.body;

      const empleado = await Empleado.findOne({ where: { correo_personal } });
      if (!empleado) return res.status(404).json({ error: 'Empleado not found' });

      const isMatch = await bcrypt.compare(password, empleado.password);
  
      if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });
  
      // Generate JWT
      const token = jwt.sign(
        { id_empleado: empleado.id_empleado, correo_personal: empleado.correo_personal },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      // Send the token in response
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Create
const createEmpleado = async (req, res) => {
    try {
      // Call the createEmpleado service with the request body
      const empleado = await EmpleadoService.createEmpleado(req.body);
  
      // Respond with the created empleado object (or custom response)
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
  loginEmpleado,
};
