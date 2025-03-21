const express = require("express");
const MarketData = require("../models/MarketData");

const router = express.Router();

// Fetch all market data
router.get("/", async (req, res) => {
    try {
        const marketData = await MarketData.find();
        res.json(marketData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
});

// Fetch data by commodity
router.get("/:commodity", async (req, res) => {
    try {
        const marketData = await MarketData.find({ commodity: req.params.commodity });
        res.json(marketData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
});

module.exports = router;
