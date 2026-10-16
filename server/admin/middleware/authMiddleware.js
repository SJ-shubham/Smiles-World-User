const jwt = require('jsonwebtoken');
const ApiError = require('../../utils/ApiError');
const Admin = require('../../models/AdminSchema');

/**
 * @desc    Middleware to protect routes using the Access Token from the cookie
 */
exports.protect = async (req, res, next) => {
    // 1. Check for Access Token in the cookie
    const token = req.cookies.accessToken;

    if (!token) {
        // If the access token is missing, the request is unauthorized.
        // The frontend must then try the /refresh endpoint with the refresh token cookie.
        return next(new ApiError('Access token required. Please log in.', 401));
    }

    try {
        // 2. Verify Access Token using the JWT_SECRET
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3. Attach admin user object to the request
        req.admin = await Admin.findById(decoded.id);

        if (!req.admin) {
            // Token was valid, but user no longer exists in DB
            return next(new ApiError('Admin account not found.', 401));
        }

        next(); // Proceed to the controller
    } catch (error) {
        // Handle JWT expiration or invalid signature
        return next(new ApiError('Access token invalid or expired.', 401));
    }
};


/**
 * @desc    Middleware to check user permissions based on role
 * Since you only have the 'Admin' role, this simply verifies the user object exists.
 * @param {string[]} allowedRoles - Array of roles allowed (e.g., ['Admin'])
 */
exports.authorize = (allowedRoles) => {
    return (req, res, next) => {
        // Ensure the admin object was attached by the protect middleware
        if (!req.admin) {
            return next(new ApiError('Authentication required.', 401));
        }

        if (!allowedRoles.includes(req.admin.role)) {
            // User is authenticated but does not have the necessary role for this action
            return next(new ApiError(`Role (${req.admin.role}) is not authorized to access this resource.`, 403));
        }

        next();
    };
};
