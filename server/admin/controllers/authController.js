const Admin = require('../../models/AdminSchema');
const ApiError = require('../../utils/ApiError');
const jwt = require('jsonwebtoken');

/**
 * Helper function to set the refresh token cookie securely
 */
const sendRefreshTokenCookie = (token, res) => {
    const cookieOptions = {
        // Expiry in milliseconds
        expires: new Date(Date.now() + process.env.JWT_REFRESH_COOKIE_EXPIRE * 24 * 60 * 60 * 1000), 
        httpOnly: true, // Prevents client-side JS from reading it
        secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
        sameSite: 'strict',
    };

    res.cookie('refreshToken', token, cookieOptions);
};

// @desc    POST /api/admin/login
// @access  Public
exports.adminLogin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ApiError('Please provide email and password', 400));
    }

    // 1. Find admin by email (select: false in schema ensures password is included)
    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin) {
        return next(new ApiError('Invalid credentials', 401));
    }

    // 2. Check password
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
        return next(new ApiError('Invalid credentials', 401));
    }

    // 3. Generate tokens and set cookie
    const accessToken = admin.getSignedAccessToken();
    const refreshToken = admin.getSignedRefreshToken();

    sendRefreshTokenCookie(refreshToken, res);

    res.status(200).json({
        success: true,
        accessToken,
        admin: {
            id: admin._id,
            username: admin.username,
            role: admin.role,
        },
    });
};

// @desc    POST /api/admin/logout
// @access  Private (Always succeeds)
exports.adminLogout = (req, res) => {
    // Clear the refresh token cookie by setting a blank value with immediate expiry
    res.cookie('refreshToken', 'none', {
        expires: new Date(Date.now() + 10 * 1000), // Expires in 10 seconds
        httpOnly: true,
    });
    res.cookie('accessToken', 'none', {
        expires: new Date(Date.now() + 10 * 1000), // Clear access token cookie as well
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: 'Logged out successfully',
    });
};

// @desc    POST /api/admin/refresh
// @access  Public (Uses Refresh Token Cookie)
exports.refreshTokenRotation = async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return next(new ApiError('Refresh token required for renewal.', 401));
    }

    try {
        // 1. Verify Refresh Token using the long-lived secret
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

        // 2. Find admin user based on decoded ID
        const admin = await Admin.findById(decoded.id);

        if (!admin) {
            return next(new ApiError('Admin account not found.', 401));
        }

        // 3. Generate NEW tokens (Access and Refresh)
        const newAccessToken = admin.getSignedAccessToken();
        const newRefreshToken = admin.getSignedRefreshToken();

        // 4. Send new refresh token in cookie (Rotation)
        sendRefreshTokenCookie(newRefreshToken, res);

        // 5. Respond with new Access Token
        res.status(200).json({
            success: true,
            accessToken: newAccessToken,
        });

    } catch (error) {
        // Handle token expiration/malformation by clearing the cookie
        res.cookie('refreshToken', 'none', { expires: new Date(Date.now() + 1000) });
        return next(new ApiError('Refresh token invalid or expired.', 401));
    }
};
