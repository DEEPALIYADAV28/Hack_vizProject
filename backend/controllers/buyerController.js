const Buyer = require("../models/Buyer");

// Get all buyers
const getBuyers = async (req, res) => {
  try {
    const buyers = await Buyer.find();
    if (buyers.length === 0) {
      return res.status(404).json({ message: "No buyers found" });
    }
    res.status(200).json(buyers);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Add a new buyer
const addBuyer = async (req, res) => {
  const { name, contact, location } = req.body;

  try {
    // Check if required fields are provided
    if (!name || !contact || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if buyer already exists
    const existingBuyer = await Buyer.findOne({ contact });
    if (existingBuyer) {
      return res.status(400).json({ message: "Buyer with this contact already exists" });
    }

    // Create a new buyer
    const buyer = await Buyer.create({ name, contact, location });
    res.status(201).json({ message: "Buyer added successfully", buyer });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { getBuyers, addBuyer };
