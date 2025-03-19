const express = require('express');
const router = express.Router();
const { getMarketTrends, predictPrices } = require('../controllers/marketController');

// Market Routes
router.get('/trends', getMarketTrends); // Get market trends
router.post('/predict', predictPrices); // Predict crop prices

module.exports = router;
