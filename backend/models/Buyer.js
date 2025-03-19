const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    contact: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{10}$/, 'Contact must be a valid 10-digit number'],
    },
    location: { type: String, required: true, trim: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model('Buyer', buyerSchema);
