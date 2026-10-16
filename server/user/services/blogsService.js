/**
 * Blogs Service - Business logic for blogs and podcasts operations
 */
const BlogPageContent = require('../../models/BlogSchema');

/**
 * Get all blogs
 * @returns {Promise<Array>} - Array of blog posts
 */
const getAllBlogs = async () => {
  const blogPage = await BlogPageContent.findById('blogs_page')
    .select('blogs -_id')
    .lean();

  if (!blogPage || !blogPage.blogs) {
    return [];
  }

  // Sort by publish date (newest first)
  const blogs = blogPage.blogs.sort((a, b) => 
    new Date(b.publishDate) - new Date(a.publishDate)
  );

  return blogs;
};

/**
 * Get a single blog by ID
 * @param {String} blogId - Blog ID
 * @returns {Promise<Object>} - Blog post object
 */
const getBlogById = async (blogId) => {
  const blogPage = await BlogPageContent.findById('blogs_page').lean();

  if (!blogPage || !blogPage.blogs) {
    const error = new Error('Blog not found');
    error.statusCode = 404;
    error.isOperational = true;
    throw error;
  }

  const blog = blogPage.blogs.find(
    (b) => b._id.toString() === blogId
  );

  if (!blog) {
    const error = new Error('Blog not found');
    error.statusCode = 404;
    error.isOperational = true;
    throw error;
  }

  return blog;
};

/**
 * Get all podcasts
 * @returns {Promise<Array>} - Array of podcasts
 */
const getAllPodcasts = async () => {
  const blogPage = await BlogPageContent.findById('blogs_page')
    .select('podcasts -_id')
    .lean();

  if (!blogPage || !blogPage.podcasts) {
    return [];
  }

  // Sort by publish date (newest first)
  const podcasts = blogPage.podcasts.sort((a, b) => 
    new Date(b.publishDate) - new Date(a.publishDate)
  );

  return podcasts;
};

/**
 * Get a single podcast by ID
 * @param {String} podcastId - Podcast ID
 * @returns {Promise<Object>} - Podcast object
 */
const getPodcastById = async (podcastId) => {
  const blogPage = await BlogPageContent.findById('blogs_page').lean();

  if (!blogPage || !blogPage.podcasts) {
    const error = new Error('Podcast not found');
    error.statusCode = 404;
    error.isOperational = true;
    throw error;
  }

  const podcast = blogPage.podcasts.find(
    (p) => p._id.toString() === podcastId
  );

  if (!podcast) {
    const error = new Error('Podcast not found');
    error.statusCode = 404;
    error.isOperational = true;
    throw error;
  }

  return podcast;
};

module.exports = {
  getAllBlogs,
  getBlogById,
  getAllPodcasts,
  getPodcastById,
};
