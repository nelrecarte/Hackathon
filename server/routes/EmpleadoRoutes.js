const express = require('express');
const {
  createEmpleado,
  getAllEmpleados,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado,
  loginEmpleado,
} = require('../controllers/EmpleadoController');
const authenticateJWT = require('../middlewares/auth'); 

const router = express.Router();

// Protect a route using the middleware
router.get('/protected', authenticateJWT, (req, res) => {
    res.status(200).json({ message: 'You have access to this route', user: req.user });
  });

// Define routes for empleados
router.post('/', createEmpleado);
router.get('/', getAllEmpleados);
router.get('/:id', getEmpleadoById);
router.put('/:id', updateEmpleado);
router.delete('/:id', deleteEmpleado);

// Login route
router.post('/login', loginEmpleado);


module.exports = router;
