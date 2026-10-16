const express = require('express');
const router = express.Router();
const {
    adminLogin,
    adminLogout,
    refreshTokenRotation // <-- This is the function needed for renewal
} = require('../controllers/authController');

// All routes are implicitly mounted under /api/admin/

router.post('/login', adminLogin);           // POST /api/admin/login: Authenticates admin
router.post('/logout', adminLogout);         // POST /api/admin/logout: Logs out admin (clears cookies)
router.post('/refresh', refreshTokenRotation); // POST /api/admin/refresh: Renews access token using refresh token

module.exports = router;