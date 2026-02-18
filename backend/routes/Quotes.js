const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// Crear una nueva cotización (POST /api/quotes)
router.post('/', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener todas las cotizaciones (GET /api/quotes)
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;