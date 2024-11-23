const express = require('express');
const router = express.Router();
const deduccionesController = require('../controllers/deduccionesController');

// Routes for deductions
router.post('/', deduccionesController.crearDeduccion); // Create new deduction
router.get('/', deduccionesController.getDeducciones); // Get all deductions
router.get('/:id', deduccionesController.getDeduccionById); // Get deduction by ID
router.put('/:id', deduccionesController.actualizarDeduccion); // Update deduction
router.delete('/:id', deduccionesController.eliminarDeduccion); // Delete deduction

module.exports = router;
