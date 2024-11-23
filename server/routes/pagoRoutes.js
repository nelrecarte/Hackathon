// routes/pagoRoutes.js
const express = require('express');
const pagoController = require('../controllers/pagoController');
const router = express.Router();

router.get('/', pagoController.getPagos); // Get all pagos
router.get('/pagos/:id', pagoController.getPago); // Get pago by ID
router.post('/', pagoController.createPago); // Create a new pago

module.exports = router;
