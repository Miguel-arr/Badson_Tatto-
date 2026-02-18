const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  idea: { type: String, required: true },
  size: { type: String },
  placement: { type: String },
  status: { type: String, default: 'pending' }, // pending, contacted, completed
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', quoteSchema);