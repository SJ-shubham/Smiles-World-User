// This middleware is placed at the end of your server route chain.

const errorMiddleware = (err, req, res, next) => {
    // Default status is 500 (Internal Server Error)
    const statusCode = err.statusCode || 500;
    
    // Default message
    let message = err.message || 'Server encountered an unexpected error.';

    // Handle Mongoose specific errors if they somehow bypass the controller
    if (err.name === 'CastError') {
        // e.g., Invalid ID format
        message = `Resource not found. Invalid ID: ${err.value}`;
        statusCode = 404;
    }
    if (err.code === 11000) {
        // Handle MongoDB duplicate key error (e.g., unique email)
        const value = Object.values(err.keyValue)[0];
        message = `Duplicate field value entered: ${value}. Please use another value.`;
        statusCode = 400;
    }

    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
        // Optional: show stack trace in development mode
        // stack: process.env.NODE_ENV === 'development' ? err.stack : {} 
    });
};

module.exports = errorMiddleware;
