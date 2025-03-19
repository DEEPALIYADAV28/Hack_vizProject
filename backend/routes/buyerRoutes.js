const express = require('express');
const router = express.Router();
const { getBuyers, addBuyer } = require('../controllers/buyerController');

// Buyer Routes
router.get('/', getBuyers); // Get all buyers
router.post('/', addBuyer); // Add a new buyer

module.exports = router;
