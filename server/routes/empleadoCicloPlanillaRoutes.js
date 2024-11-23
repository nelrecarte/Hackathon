// routes/empleadoCicloPlanillaRoutes.js
const express = require('express');
const router = express.Router();
const empleadoCicloPlanillaController = require('../controllers/empleadoCicloPlanillaController');

router.get('/', empleadoCicloPlanillaController.getAllEmpleadoCicloPlanillas);
router.get('/:id', empleadoCicloPlanillaController.getEmpleadoCicloPlanillaById);
router.post('/', empleadoCicloPlanillaController.createEmpleadoCicloPlanilla);
router.put('/:id', empleadoCicloPlanillaController.updateEmpleadoCicloPlanilla);
router.delete('/:id', empleadoCicloPlanillaController.deleteEmpleadoCicloPlanilla);

module.exports = router;
