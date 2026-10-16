const express = require('express');
const router = express.Router();
const {
    getAllPackages,
    createPackage,
    updatePackage,
    deletePackage
} = require('../controllers/packageController');
const { createUploadMiddleware } = require('../middleware/uploadMiddleware');

// --- Define Package Upload Middleware ---
// Use this middleware for package creation/updates (single image field named 'cardImage')
const uploadPackageImage = createUploadMiddleware(
    'smilesworld/packages', 
    'cardImage',            
    'image'                 
);

// All routes are implicitly mounted under /api/admin/packages

router.get('/', getAllPackages); 
router.post('/', uploadPackageImage, createPackage);     // Middleware added here
router.put('/:id', uploadPackageImage, updatePackage); // Middleware added here
router.delete('/:id', deletePackage); 

module.exports = router;