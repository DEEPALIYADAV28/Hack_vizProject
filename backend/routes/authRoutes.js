const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// User Authentication Routes
router.post('/register', registerUser); // Register a new user
router.post('/login', loginUser); // User login

module.exports = router;
