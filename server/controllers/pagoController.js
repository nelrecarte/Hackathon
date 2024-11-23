// controllers/pagoController.js
const pagoService = require('../services/pagoService');

const getPagos = async (req, res) => {
  try {
    const pagos = await pagoService.getAllPagos();
    res.status(200).json(pagos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch pagos' });
  }
};

const createPago = async (req, res) => {
  try {
    const pagoData = req.body;
    const newPago = await pagoService.createPago(pagoData);
    res.status(201).json(newPago);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create pago' });
  }
};

const getPago = async (req, res) => {
  try {
    const { id } = req.params;
    const pago = await pagoService.getPagoById(id);
    if (pago) {
      res.status(200).json(pago);
    } else {
      res.status(404).json({ error: 'Pago not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pago' });
  }
};

module.exports = {
  getPagos,
  createPago,
  getPago
};
