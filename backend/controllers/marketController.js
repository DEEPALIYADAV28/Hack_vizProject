const MarketData = require("../models/MarketData");

// Get market trends
const getMarketTrends = async (req, res) => {
  try {
    const trends = await MarketData.find().sort({ date: -1 });

    if (trends.length === 0) {
      return res.status(404).json({ message: "No market trends data available" });
    }

    res.status(200).json(trends);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Predict prices (Dummy logic, replace with real ML model)
const predictPrices = async (req, res) => {
  const { crop, season } = req.body;

  try {
    // Validate input
    if (!crop || !season) {
      return res.status(400).json({ message: "Both crop and season are required" });
    }

    // Dummy prediction logic (replace this with an actual ML model)
    const predictedPrice = (Math.random() * 100).toFixed(2); // Simulating price prediction

    res.status(200).json({ crop, season, predictedPrice });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { getMarketTrends, predictPrices };
