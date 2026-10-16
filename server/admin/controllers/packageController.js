const Package = require('../../models/PackageSchema');
const ApiError = require('../../utils/ApiError');
const { deleteFileFromCloudinary } = require('../../utils/cloudinaryUtils');

// GET /api/admin/packages
// Fetch all packages sorted by creation date
exports.getAllPackages = async (req, res, next) => {
    const packages = await Package.find()
        .sort({ createdAt: -1 });
    
    res.status(200).json({
        success: true,
        data: packages
    });
};

// POST /api/admin/packages
// Create a new package with image handling
exports.createPackage = async (req, res, next) => {
    // Set cardImage from uploaded file
    if (req.file) {
        req.body.cardImage = req.file.path;
    }

    // Validate cardImage presence
    if (!req.body.cardImage) {
        return next(new ApiError('Package card image is required', 400));
    }

    const package = await Package.create(req.body);
    
    res.status(201).json({
        success: true,
        data: package
    });
};

// PUT /api/admin/packages/:id
// Update a package with image handling
exports.updatePackage = async (req, res, next) => {
    // Find existing package
    const existingPackage = await Package.findById(req.params.id);
    
    if (!existingPackage) {
        return next(new ApiError('Package not found', 404));
    }

    // Handle image update if new file is uploaded
    if (req.file) {
        const oldImageUrl = existingPackage.cardImage;
        req.body.cardImage = req.file.path;

        // Update package first
        const updatedPackage = await Package.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        // Delete old image after successful update
        if (oldImageUrl) {
            await deleteFileFromCloudinary(oldImageUrl);
        }

        return res.status(200).json({
            success: true,
            data: updatedPackage
        });
    }

    // Update without image change
    const updatedPackage = await Package.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );

    res.status(200).json({
        success: true,
        data: updatedPackage
    });
};

// DELETE /api/admin/packages/:id
// Delete a package and its associated image
exports.deletePackage = async (req, res, next) => {
    // Find package to get image URL before deletion
    const package = await Package.findById(req.params.id);
    
    if (!package) {
        return next(new ApiError('Package not found', 404));
    }

    const imageUrl = package.cardImage;

    // Delete the package from database
    await Package.findByIdAndDelete(req.params.id);

    // Clean up image from Cloudinary if exists
    if (imageUrl) {
        await deleteFileFromCloudinary(imageUrl);
    }

    res.status(200).json({
        success: true,
        message: 'Package deleted successfully'
    });
};
