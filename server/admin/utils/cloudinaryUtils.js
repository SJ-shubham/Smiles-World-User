const cloudinary = require('cloudinary').v2;
// Import the configuration file that is already set up
require('../config/cloudinary'); 

/**
 * Extracts the public ID from a Cloudinary URL and deletes the asset.
 * @param {string} imageUrl - The full URL of the image/video asset.
 */
exports.deleteFileFromCloudinary = async (imageUrl) => {
    if (!imageUrl) return;

    try {
        // Example URL: http://res.cloudinary.com/cloudname/image/upload/v123456789/folder/public_id.jpg
        const parts = imageUrl.split('/');
        
        // Find the index of the version number 'vXXXXXXXXX'
        const versionIndex = parts.findIndex(part => part.startsWith('v'));
        
        // Extract the part of the path that contains the folder and public ID (everything after 'vXXXXXXXXX')
        const publicIdWithFormat = parts.slice(versionIndex + 1).join('/');
        
        // Remove file extension (e.g., '.jpg') to get the clean public ID
        const publicId = publicIdWithFormat.substring(0, publicIdWithFormat.lastIndexOf('.'));

        await cloudinary.uploader.destroy(publicId);
        console.log(`✅ Cloudinary Cleanup: Successfully deleted asset: ${publicId}`);

    } catch (error) {
        // Log the error for monitoring but allow the main CRUD operation to finish
        console.error(`❌ Cloudinary cleanup failed for ${imageUrl}:`, error);
    }
};