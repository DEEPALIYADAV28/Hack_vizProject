const mongoose = require('mongoose');

const marketDataSchema = new mongoose.Schema(
  {
    crop: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: [0, 'Price must be positive'] },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model('MarketData', marketDataSchema);
