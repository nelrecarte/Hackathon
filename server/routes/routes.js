const express = require('express');
const empleadoRoutes = require('./EmpleadoRoutes');
// Import other route files as you add more (e.g., userRoutes, eventRoutes, etc.)

const router = express.Router();

// Use the imported route files
router.use('/empleados', empleadoRoutes);
// You can add more routers as needed:
// router.use('/api/users', userRoutes);
// router.use('/api/events', eventRoutes);

module.exports = router;
