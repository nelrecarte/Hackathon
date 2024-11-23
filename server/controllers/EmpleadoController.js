const empleadoService = require('../services/EmpleadoService');
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
      const empleado = await empleadoService.createEmpleado(req.body);
  
      // Respond with the created empleado object (or custom response)
      res.status(201).json(empleado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// Get all employees
const getAllEmpleados = async (req, res) => {
  try {
    const empleados = await empleadoService.getAllEmpleados();
    res.status(200).json(empleados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single employee by ID
const getEmpleadoById = async (req, res) => {
  try {
    const id = req.params.id;
    const empleado = await empleadoService.getEmpleadoById(id);
    res.status(200).json(empleado);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update an employee
const updateEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedEmpleado = await empleadoService.updateEmpleado(id, data);
    res.status(200).json(updatedEmpleado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an employee
const deleteEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await empleadoService.deleteEmpleado(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createEmpleado,
  getAllEmpleados,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado,
  loginEmpleado
};