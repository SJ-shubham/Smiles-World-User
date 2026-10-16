const ApiError = require('../../utils/ApiError');
const { manageNestedArray } = require('../services/pageService'); // The essential helper
const mongoose = require('mongoose');

// --- Import all 6 Page Schema Models (Required for Mongoose operations) ---
const HomeContent = require('../../models/HomeSchema');
const AboutContent = require('../../models/AboutSchema');
const WomenTravelContent = require('../../models/WomenTravelSchema');
const GroupDepartureContent = require('../../models/GroupDepartureSchema');
const ContactContent = require('../../models/ContactSchema');
const BlogContent = require('../../models/BlogSchema'); 

// =========================================================
// --- UTILITY FUNCTIONS ---
// =========================================================

/**
 * Utility function to handle generic PUT updates on static pages (5 simple routes)
 * Finds the single document by its predetermined _id and updates the top-level fields.
 */
const updateStaticPage = async (req, res, next, Model) => {
    try {
        // Determine the single document's _id (e.g., 'HomeContent' -> 'home_page')
        const pageId = Model.modelName.toLowerCase().replace(/content$/, '') + '_page';

        const updatedPage = await Model.findByIdAndUpdate(
            pageId,
            req.body,
            // upsert: true creates the document if it doesn't exist (initial save)
            { new: true, runValidators: true, upsert: true } 
        );

        if (!updatedPage) {
            return next(new ApiError(`Could not update/find page document for ID: ${pageId}`, 404));
        }

        res.status(200).json({
            success: true,
            message: `${Model.modelName} updated successfully.`,
            data: updatedPage
        });

    } catch (error) {
        if (error.name === 'ValidationError' || error.name === 'CastError') {
            return next(new ApiError(error.message, 400));
        }
        next(new ApiError(`Failed to update ${Model.modelName}.`, 500));
    }
};

/**
 * Utility function to handle nested CRUD operations (9 complex routes)
 * Calls the reusable pageService.manageNestedArray helper.
 */
const handleNestedAction = async (req, res, next, Model, rootArrayPath, elementIdKey, action) => {
    try {
        // elementId is extracted from req.params (e.g., req.params.memberId)
        const elementId = req.params[elementIdKey];
        const updateData = req.body;
        
        const updatedPage = await manageNestedArray({ 
            Model, 
            rootArrayPath, 
            elementIdKey, 
            action, 
            updateData, 
            elementId 
        });

        const status = action === 'add' ? 201 : 200;
        const message = `${Model.modelName} nested content (${action}) successfully.`;
        
        res.status(status).json({
            success: true,
            message: message,
            data: updatedPage
        });

    } catch (error) {
        if (error.name === 'ApiError' || error.name === 'ValidationError') {
            return next(new ApiError(error.message, error.statusCode || 400));
        }
        next(new ApiError(`Failed to ${action} item in ${rootArrayPath}.`, 500));
    }
};

// =========================================================
// --- A. Main Page Content Updates (5 PUT Routes) ---
// =========================================================

exports.updateHomePage = (req, res, next) => updateStaticPage(req, res, next, HomeContent);
exports.updateAboutPage = (req, res, next) => updateStaticPage(req, res, next, AboutContent);
exports.updateWomenTravelPage = (req, res, next) => updateStaticPage(req, res, next, WomenTravelContent);
exports.updateGroupDeparturePage = (req, res, next) => updateStaticPage(req, res, next, GroupDepartureContent);
exports.updateContactPage = (req, res, next) => updateStaticPage(req, res, next, ContactContent);


// =========================================================
// --- B. Nested Content: About Page Members (3 Routes) ---
// =========================================================

exports.addTeamMember = (req, res, next) => 
    handleNestedAction(req, res, next, AboutContent, 'ourMembers.cards', 'memberId', 'add');

exports.updateTeamMember = (req, res, next) => 
    handleNestedAction(req, res, next, AboutContent, 'ourMembers.cards', 'memberId', 'update');

exports.deleteTeamMember = (req, res, next) => 
    handleNestedAction(req, res, next, AboutContent, 'ourMembers.cards', 'memberId', 'delete');

// =========================================================
// --- C. Nested Content: Women Travel Testimonials (3 Routes) ---
// =========================================================

exports.addTestimonial = (req, res, next) => 
    handleNestedAction(req, res, next, WomenTravelContent, 'whatOurSistersSay.cards', 'cardId', 'add');

exports.updateTestimonial = (req, res, next) => 
    handleNestedAction(req, res, next, WomenTravelContent, 'whatOurSistersSay.cards', 'cardId', 'update');

exports.deleteTestimonial = (req, res, next) => 
    handleNestedAction(req, res, next, WomenTravelContent, 'whatOurSistersSay.cards', 'cardId', 'delete');

// =========================================================
// --- D. Nested Content: Contact Page FAQs (3 Routes) ---
// =========================================================

exports.addFaq = (req, res, next) => 
    handleNestedAction(req, res, next, ContactContent, 'faqSection.faqs', 'faqId', 'add');

exports.updateFaq = (req, res, next) => 
    handleNestedAction(req, res, next, ContactContent, 'faqSection.faqs', 'faqId', 'update');

exports.deleteFaq = (req, res, next) => 
    handleNestedAction(req, res, next, ContactContent, 'faqSection.faqs', 'faqId', 'delete');