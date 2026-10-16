const Message = require('../../models/MessageSchema'); // 1. General Contact
const Enquiry = require('../../models/EnquirySchema'); // 2. Package-Specific Inquiry
const CustomEnquiry = require('../../models/CustomEnquirySchema'); // 3. Custom Trip Request
const ApiError = require('../../utils/ApiError'); // For centralized error handling

// =========================================================
// --- REUSABLE HELPER FUNCTIONS ---
// =========================================================

/**
 * Universal helper to update status and optional notes for any lead model.
 * Handles the status update logic required for Admin UI.
 */
const updateLeadStatusAndNotes = async (req, res, next, Model, modelName) => {
    try {
        const { id } = req.params;
        // Fields expected: status (mandatory), internalNotes (optional/for sales)
        const { status, internalNotes } = req.body; 

        if (!status) {
            return next(new ApiError('Status field is required for the update.', 400));
        }

        const updateData = { status };
        
        // IMPORTANT: Only include internalNotes if provided in the body.
        // This prevents Mongoose from throwing an error when updating the MessageSchema,
        // which does not have the internalNotes field.
        if (internalNotes !== undefined) {
            updateData.internalNotes = internalNotes;
        }

        const updatedLead = await Model.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedLead) {
            return next(new ApiError(`${modelName} not found with ID: ${id}`, 404));
        }

        res.status(200).json({
            success: true,
            message: `${modelName} status updated successfully.`,
            data: updatedLead
        });

    } catch (error) {
        if (error.name === 'ValidationError' || error.name === 'CastError') {
            return next(new ApiError(error.message, 400));
        }
        next(new ApiError(`Failed to update ${modelName}.`, 500));
    }
};

/**
 * Universal helper to delete a lead document by ID.
 */
const deleteLead = async (req, res, next, Model, modelName) => {
    try {
        const { id } = req.params;
        const deleted = await Model.findByIdAndDelete(id);

        if (!deleted) {
            return next(new ApiError(`${modelName} not found with ID: ${id}`, 404));
        }

        // 204 No Content for successful deletion (REST best practice)
        res.status(204).json({ success: true, data: {} });
    } catch (error) {
        next(new ApiError(`Failed to delete ${modelName}.`, 500));
    }
};

// =========================================================
// --- 1. General Messages (MessageSchema) ---
// =========================================================

exports.getAllMessages = async (req, res, next) => {
    try {
        const messages = await Message.find().sort({ submittedAt: -1 });
        res.status(200).json({ success: true, count: messages.length, data: messages });
    } catch (error) {
        next(new ApiError('Failed to retrieve general messages.', 500));
    }
};

exports.updateMessageStatus = (req, res, next) => {
    updateLeadStatusAndNotes(req, res, next, Message, 'Message');
};

exports.deleteMessage = (req, res, next) => {
    deleteLead(req, res, next, Message, 'Message');
};

// =========================================================
// --- 2. Package-Specific Inquiries (EnquirySchema) ---
// =========================================================

exports.getAllPackageInquiries = async (req, res, next) => {
    try {
        // Populate the Package name for the Admin UI to easily identify the package
        const inquiries = await Enquiry.find()
            .sort({ submittedAt: -1 })
            .populate('packageId', 'name shortDescription');
            
        res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
    } catch (error) {
        next(new ApiError('Failed to retrieve package inquiries.', 500));
    }
};

exports.updatePackageInquiryStatus = (req, res, next) => {
    updateLeadStatusAndNotes(req, res, next, Enquiry, 'Package Inquiry');
};

exports.deletePackageInquiry = (req, res, next) => {
    deleteLead(req, res, next, Enquiry, 'Package Inquiry');
};

// =========================================================
// --- 3. Custom Trip Requests (CustomEnquirySchema) ---
// =========================================================

exports.getAllCustomTrips = async (req, res, next) => {
    try {
        const customTrips = await CustomEnquiry.find().sort({ submittedAt: -1 });
        res.status(200).json({ success: true, count: customTrips.length, data: customTrips });
    } catch (error) {
        next(new ApiError('Failed to retrieve custom trip requests.', 500));
    }
};

exports.updateCustomTripStatus = (req, res, next) => {
    updateLeadStatusAndNotes(req, res, next, CustomEnquiry, 'Custom Trip');
};

exports.deleteCustomTrip = (req, res, next) => {
    deleteLead(req, res, next, CustomEnquiry, 'Custom Trip');
};
