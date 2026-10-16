const ApiError = class extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        // Ensure this error is caught by the global handler
        Error.captureStackTrace(this, this.constructor);
    }
};

module.exports = ApiError;
