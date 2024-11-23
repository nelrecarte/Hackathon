const express = require('express');
const empleadoRoutes = require('./EmpleadoRoutes');
// Import other route files as you add more (e.g., userRoutes, eventRoutes, etc.)
const horasTrabajadasRoutes = require('./horasTrabajadasRoutes'); // Adjust path as needed
const detallesEmpleadoRoutes = require('./detallesEmpleadoRoutes'); // Import the new routes

// Use the routes for employee details

const router = express.Router();

// Use the imported route files
router.use('/empleados', empleadoRoutes);
router.use('/horas-trabajadas', horasTrabajadasRoutes);
router.use('/detalles-empleado', detallesEmpleadoRoutes);
// You can add more routers as needed:
// router.use('/api/users', userRoutes);
// router.use('/api/events', eventRoutes);

module.exports = router;
