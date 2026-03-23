/* ============================================
   SpiceRoute - Authentication Routes
   POST /api/auth/login  - Staff login
   GET  /api/auth/me     - Get current user
   POST /api/auth/logout - Logout (set off-duty)
   ============================================ */

const express = require('express');
const router = express.Router();
const { login, getMe, logout, rescueManager } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Public routes
router.post('/login', login);
router.get('/rescue', rescueManager); // GET request to trigger reset

// Protected routes - Require authentication
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);

module.exports = router;