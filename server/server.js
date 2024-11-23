const express = require('express');
const db = require('./db');  
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

const initApp = async () => {
    try {
      await db.authenticate();
      console.log("Conexión exitosa a la base de datos");
  
      await db
        .sync({ force: false, alter: true })
        .then(() => {
          console.log("Database synced without altering existing schema!");
        })
        .catch((error) => {
          console.error("Error syncing database:", error.message);
          console.error("Parent error:", error.parent);
          console.error("Error details:", error);
        });
  
      app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
      });
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error.message);
      console.error("Parent error:", error.parent);
      console.error("Detalles error:", error);
    }
  };
  
  initApp();
