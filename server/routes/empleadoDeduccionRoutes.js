// routes/empleadoDeduccionRoutes.js
const express = require('express');
const router = express.Router();
const empleadoDeduccionController = require('../controllers/empleadoDeduccionController');

router.get('/', empleadoDeduccionController.getAllEmpleadoDeducciones);
router.get('/:id', empleadoDeduccionController.getEmpleadoDeduccionById);
router.post('/', empleadoDeduccionController.createEmpleadoDeduccion);
router.put('/:id', empleadoDeduccionController.updateEmpleadoDeduccion);
router.delete('/:id', empleadoDeduccionController.deleteEmpleadoDeduccion);

module.exports = router;
