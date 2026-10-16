/**
 * Pages Service - Business logic for page content operations
 */
const HomeContent = require('../../models/HomeSchema');
const AboutContent = require('../../models/AboutSchema');
const WomenTravelContent = require('../../models/WomenTravelSchema');
const GroupDepartureContent = require('../../models/GroupDepartureSchema');
const ContactContent = require('../../models/ContactSchema');

/**
 * Get home page content
 * @returns {Promise<Object>} - Home page content
 */
const getHomePageContent = async () => {
  let content = await HomeContent.findById('home_page')
    .populate('featuredPackageIds', '-__v')
    .select('-__v')
    .lean();

  if (!content) {
    // Return default structure if not found
    content = {
      _id: 'home_page',
      heroBanner: { imageUrl: '', title: '', subtitle: '', description: '' },
      featuredPackageIds: [],
    };
  }

  return content;
};

/**
 * Get about page content
 * @returns {Promise<Object>} - About page content
 */
const getAboutPageContent = async () => {
  let content = await AboutContent.findById('about_page')
    .select('-__v')
    .lean();

  if (!content) {
    // Return default structure if not found
    content = {
      _id: 'about_page',
      pageDescription: '',
      storyAndMission: { story: '', mission: { text: '', imageUrl: '' } },
      ourMembers: { cards: [] },
      journeyInNumbers: { cards: [] },
    };
  }

  return content;
};

/**
 * Get women travel page content
 * @returns {Promise<Object>} - Women travel page content
 */
const getWomenTravelPageContent = async () => {
  let content = await WomenTravelContent.findById('women_travel_page')
    .select('-__v')
    .lean();

  if (!content) {
    // Return default structure if not found
    content = {
      _id: 'women_travel_page',
      heroBanner: { imageUrl: '', title: '', subtitle: '', description: '' },
      whatOurSistersSay: { sectionTitle: 'What Our Sisters Say', cards: [] },
    };
  }

  return content;
};

/**
 * Get group departures page content
 * @returns {Promise<Object>} - Group departures page content
 */
const getGroupDeparturesPageContent = async () => {
  let content = await GroupDepartureContent.findById('group_departures_page')
    .select('-__v')
    .lean();

  if (!content) {
    // Return default structure if not found
    content = {
      _id: 'group_departures_page',
      header: { title: '', description: '' },
      domesticTitle: 'Domestic Group Tours',
      internationalTitle: 'International Group Tours',
    };
  }

  return content;
};

/**
 * Get contact page content
 * @returns {Promise<Object>} - Contact page content
 */
const getContactPageContent = async () => {
  let content = await ContactContent.findById('contact_page')
    .select('-__v')
    .lean();

  if (!content) {
    // Return default structure if not found
    content = {
      _id: 'contact_page',
      header: { title: 'Get In Touch', description: '' },
      contactDetails: {
        phoneNumber: '',
        operatingHours: '',
        email: '',
        address: '',
        communityRating: '',
      },
      quickHelp: [],
      faqSection: { faqs: [] },
    };
  }

  return content;
};

module.exports = {
  getHomePageContent,
  getAboutPageContent,
  getWomenTravelPageContent,
  getGroupDeparturesPageContent,
  getContactPageContent,
};
