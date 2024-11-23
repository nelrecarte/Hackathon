const express = require('express');
const db = require('./db');
require('dotenv').config();
const routes = require('./routes/routes');
const requestLogger = require('./middlewares/requestLogger'); 

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', routes);
app.use(requestLogger);

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const initApp = async () => {
  try {
    await db.authenticate();
    console.log("Conexión exitosa a la base de datos");

    await db.sync({ force: false, alter: true }).then(() => {
      console.log("Database synced without altering existing schema!");
    }).catch((error) => {
      console.error("Error syncing database:", error.message);
      console.error("Parent error:", error.parent);
      console.error("Error details:", error);
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
    console.error("Parent error:", error.parent);
    console.error("Detalles error:", error);
  }
};

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  server.close(() => {
    console.log('Closed out remaining connections');
    db.close().then(() => {
      console.log('Database connection closed');
      process.exit(0);
    });
  });

  // Force shutdown after 10 seconds if not closed gracefully
  setTimeout(() => {
    console.error('Forcefully shutting down...');
    process.exit(1);
  }, 10000);
});

initApp();
