const express = require('express');
const router = express.Router();
const horasTrabajadasController = require('../controllers/horasTrabajadasController');

// Route to create worked hours
router.post('/', horasTrabajadasController.createWorkedHours);

// Route to get all worked hours
router.get('/', horasTrabajadasController.getAllWorkedHours);

// Route to get worked hours by employee ID
router.get('/employee/:id_empleado', horasTrabajadasController.getWorkedHoursByEmployee);

module.exports = router;
