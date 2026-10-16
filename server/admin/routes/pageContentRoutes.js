const express = require('express');
const router = express.Router();
const {
    // Main Content Updates (PUT)
    updateHomePage,
    updateAboutPage,
    updateWomenTravelPage,
    updateGroupDeparturePage,
    updateContactPage,
    // Nested Content CRUD (About Members)
    addTeamMember,
    updateTeamMember,
    deleteTeamMember,
    // Nested Content CRUD (Women Travel Testimonials)
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    // Nested Content CRUD (Contact FAQs)
    addFaq,
    updateFaq,
    deleteFaq
} = require('../controllers/pageContentController');

// All routes are implicitly mounted under /api/admin/pages/

// --- Main Page Content Updates (PUT) ---
router.put('/home', updateHomePage);
router.put('/about', updateAboutPage);
router.put('/women-travel', updateWomenTravelPage);
router.put('/group-departures', updateGroupDeparturePage);
router.put('/contact', updateContactPage);

// --- Nested Content: About Page Members ---
router.post('/about/members', addTeamMember);
router.put('/about/members/:memberId', updateTeamMember);
router.delete('/about/members/:memberId', deleteTeamMember);

// --- Nested Content: Women Travel Testimonials ---
router.post('/women-travel/testimonials', addTestimonial);
router.put('/women-travel/testimonials/:cardId', updateTestimonial);
router.delete('/women-travel/testimonials/:cardId', deleteTestimonial);

// --- Nested Content: Contact Page FAQs ---
router.post('/contact/faqs', addFaq);
router.put('/contact/faqs/:faqId', updateFaq);
router.delete('/contact/faqs/:faqId', deleteFaq);

module.exports = router;