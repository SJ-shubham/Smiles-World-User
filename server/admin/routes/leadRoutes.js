const express = require('express');
const router = express.Router();
const {
    // 1. General Messages (from MessageSchema)
    getAllMessages,
    updateMessageStatus,
    deleteMessage,
    
    // 2. Package Inquiries (from EnquirySchema)
    getAllPackageInquiries,         // NEW: Fetch all Package-Specific Inquiries
    updatePackageInquiryStatus,     // NEW: Update status/notes for Package Inquiry
    deletePackageInquiry,           // NEW: Delete a Package Inquiry
    
    // 3. Custom Trips (from CustomEnquirySchema)
    getAllCustomTrips,              // MODIFIED: Fetch all Custom Trip Requests
    updateCustomTripStatus,         // MODIFIED: Update status/notes for Custom Trip
    deleteCustomTrip                // MODIFIED: Delete a Custom Trip
} = require('../controllers/leadController');

// All routes are implicitly mounted under /api/admin/

// --- 1. General Messages (Contact Form) ---
router.get('/messages', getAllMessages);                   // GET /api/admin/messages
router.put('/messages/:id', updateMessageStatus);         // PUT /api/admin/messages/:id
router.delete('/messages/:id', deleteMessage);             // DELETE /api/admin/messages/:id

// --- 2. Package-Specific Inquiries (EnquirySchema) ---
// This handles the "Request Details" from individual package pages
router.get('/package-inquiries', getAllPackageInquiries);   // GET /api/admin/package-inquiries
router.put('/package-inquiries/:id', updatePackageInquiryStatus); // PUT /api/admin/package-inquiries/:id
router.delete('/package-inquiries/:id', deletePackageInquiry); // DELETE /api/admin/package-inquiries/:id

// --- 3. Custom Trip Requests (CustomEnquirySchema) ---
// This handles the detailed form submissions
router.get('/custom-trips', getAllCustomTrips);             // GET /api/admin/custom-trips
router.put('/custom-trips/:id', updateCustomTripStatus);   // PUT /api/admin/custom-trips/:id
router.delete('/custom-trips/:id', deleteCustomTrip);       // DELETE /api/admin/custom-trips/:id

module.exports = router;