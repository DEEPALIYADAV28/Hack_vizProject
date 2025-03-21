const mongoose = require("mongoose");

const MarketDataSchema = new mongoose.Schema({
    state: { type: String, required: true },
    district: { type: String, required: true },
    market: { type: String, required: true },
    commodity: { type: String, required: true },
    variety: { type: String },
    grade: { type: String },
    arrival_date: { type: Date, required: true },
    min_price: { type: Number, required: true },
    max_price: { type: Number, required: true },
    modal_price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("MarketData", MarketDataSchema);
