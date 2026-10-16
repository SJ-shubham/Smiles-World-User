const express = require('express');
const router = express.Router();
const {
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    getAllPodcasts,
    createPodcast,
    updatePodcast,
    deletePodcast
} = require('../controllers/blogController');

// All routes are implicitly mounted under /api/admin/

// --- Blog Posts ---
router.get('/blogs', getAllBlogs);         // GET /api/admin/blogs
router.post('/blogs', createBlog);         // POST /api/admin/blogs
router.put('/blogs/:blogId', updateBlog);  // PUT /api/admin/blogs/:blogId
router.delete('/blogs/:blogId', deleteBlog); // DELETE /api/admin/blogs/:blogId

// --- Podcasts ---
router.get('/podcasts', getAllPodcasts);      // GET /api/admin/podcasts
router.post('/podcasts', createPodcast);     // POST /api/admin/podcasts
router.put('/podcasts/:podcastId', updatePodcast); // PUT /api/admin/podcasts/:podcastId
router.delete('/podcasts/:podcastId', deletePodcast); // DELETE /api/admin/podcasts/:podcastId

module.exports = router;