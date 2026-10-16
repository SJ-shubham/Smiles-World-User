const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// NOTE: Cloudinary config is automatically loaded via the require('../config/cloudinary'); 
// mechanism, but we must configure it for use by multer-storage-cloudinary directly.
// This assumes your main server.js loads config/cloudinary.js first.

/**
 * Factory function to create upload middleware specific to a resource type.
 * @param {string} folderName - The primary folder in Cloudinary (e.g., 'smilesworld/packages').
 * @param {string} fieldName - The name of the field in the form (e.g., 'cardImage').
 * @param {string} resourceType - 'image' or 'raw' (for video/other files).
 * @returns {function} Multer middleware ready for use in a route.
 */
const createUploadMiddleware = (folderName, fieldName, resourceType = 'image') => {
    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: async (req, file) => {
            return {
                folder: folderName,
                resource_type: resourceType,
                // Accept common formats for image/video
                allowed_formats: ['jpeg', 'png', 'jpg', 'webp', 'mp4', 'mov', 'webm'], 
                // Unique filename
                public_id: file.originalname.split('.')[0] + '-' + Date.now(), 
            };
        },
    });

    const upload = multer({ 
        storage: storage,
        limits: { fileSize: 15 * 1024 * 1024 } // Example: Limit to 15MB for general files
    }).single(fieldName);

    // Wrapper function to pass control to the controller and handle errors
    return (req, res, next) => {
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                // Return a specific error for the client
                return res.status(400).json({ success: false, message: 'Upload Error: File size or format invalid.', error: err.message });
            } else if (err) {
                return res.status(500).json({ success: false, message: 'Unknown upload error.', error: err.message });
            }
            next();
        });
    };
};

module.exports = {
    createUploadMiddleware
};