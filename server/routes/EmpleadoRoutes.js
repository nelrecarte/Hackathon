const express = require('express');
const {
  createEmpleado,
  getAllEmpleados,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado,
} = require('../controllers/EmpleadoController');

const router = express.Router();

// Define routes for empleados
router.post('/', createEmpleado);
router.get('/', getAllEmpleados);
router.get('/:id', getEmpleadoById);
router.put('/:id', updateEmpleado);
router.delete('/:id', deleteEmpleado);

module.exports = router;
