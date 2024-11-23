const express = require('express');
const router = express.Router();
const detallesEmpleadoController = require('../controllers/detallesEmpleadoController');

// Routes for employee details
router.post('/', detallesEmpleadoController.crearDetalleEmpleado); // Create new employee detail
router.get('/', detallesEmpleadoController.getDetallesEmpleado); // Get all employee details
router.get('/:id_empleado', detallesEmpleadoController.getDetallesPorEmpleado); // Get details by employee ID
router.put('/:id', detallesEmpleadoController.actualizarDetalleEmpleado); // Update employee detail
router.delete('/:id', detallesEmpleadoController.eliminarDetalleEmpleado); // Delete employee detail

module.exports = router;
