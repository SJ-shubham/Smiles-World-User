# User API Documentation

## Base URL
All user API endpoints are prefixed with: `/api/user`

---

## Table of Contents
1. [Packages API](#packages-api)
2. [Pages API](#pages-api)
3. [Blogs & Podcasts API](#blogs--podcasts-api)
4. [Forms API](#forms-api)

---

## Packages API

### 1. Get All Packages
Retrieve all travel packages with optional filtering.

**Endpoint:** `GET /api/user/packages`

**Query Parameters:**
- `tag` (optional): Filter by 'domestic' or 'international'
- `is_featured` (optional): Filter by featured status (true/false)
- `is_women_only` (optional): Filter by women-only packages (true/false)
- `is_group_departure` (optional): Filter by group departure packages (true/false)

**Example Request:**
```
GET /api/user/packages?tag=domestic&is_featured=true
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Retrieved 5 package(s) successfully",
  "data": [
    {
      "_id": "64abc123...",
      "name": "Dubai Luxury Experience",
      "shortDescription": "Experience luxury in Dubai...",
      "cardImage": "https://cloudinary.com/...",
      "duration": "06N/07D",
      "startingFromPrice": "Rs.71000/-pp+ Airfare",
      "tag": "international",
      "is_featured": true,
      "is_women_only": false,
      "is_group_departure": true,
      "placesCovered": "Dubai -05N, Abu Dhabi -01N",
      "bestTime": {
        "peakSeason": "November to March",
        "midSeason": "April to October"
      },
      "highlights": [
        "Burj Khalifa visit",
        "Desert Safari"
      ],
      "itinerary": [
        {
          "dayTitle": "Day 1: Arrival in Dubai",
          "description": "Welcome to Dubai..."
        }
      ],
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

### 2. Get Package by ID
Retrieve detailed information about a specific package.

**Endpoint:** `GET /api/user/packages/:id`

**URL Parameters:**
- `id` (required): Package ID (MongoDB ObjectId)

**Example Request:**
```
GET /api/user/packages/64abc123def456789...
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Package retrieved successfully",
  "data": {
    "_id": "64abc123...",
    "name": "Dubai Luxury Experience",
    "shortDescription": "Experience luxury in Dubai...",
    "cardImage": "https://cloudinary.com/...",
    "duration": "06N/07D",
    "startingFromPrice": "Rs.71000/-pp+ Airfare",
    "tag": "international",
    "is_featured": true,
    "is_women_only": false,
    "is_group_departure": true,
    "placesCovered": "Dubai -05N, Abu Dhabi -01N",
    "bestTime": {
      "peakSeason": "November to March",
      "midSeason": "April to October",
      "notes": "Best weather for outdoor activities"
    },
    "highlights": [
      "Burj Khalifa visit",
      "Desert Safari",
      "Abu Dhabi City Tour"
    ],
    "itinerary": [
      {
        "dayTitle": "Day 1: Arrival in Dubai",
        "description": "Welcome to Dubai. Airport pickup and transfer to hotel..."
      },
      {
        "dayTitle": "Day 2: Dubai City Tour",
        "description": "Explore the magnificent Burj Khalifa..."
      }
    ],
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Package not found"
}
```

---

### 3. Get Featured Packages
Retrieve packages marked as featured.

**Endpoint:** `GET /api/user/packages/featured`

**Query Parameters:**
- `limit` (optional): Maximum number of packages to return (default: 6)

**Example Request:**
```
GET /api/user/packages/featured?limit=3
```

**Response:** Same structure as "Get All Packages"

---

### 4. Get Women-Only Packages
Retrieve packages designed for women travelers.

**Endpoint:** `GET /api/user/packages/women-only`

**Query Parameters:**
- `tag` (optional): Filter by 'domestic' or 'international'

**Example Request:**
```
GET /api/user/packages/women-only?tag=domestic
```

**Response:** Same structure as "Get All Packages"

---

### 5. Get Group Departure Packages
Retrieve packages with group departure schedules.

**Endpoint:** `GET /api/user/packages/group-departure`

**Query Parameters:**
- `tag` (optional): Filter by 'domestic' or 'international'

**Example Request:**
```
GET /api/user/packages/group-departure?tag=international
```

**Response:** Same structure as "Get All Packages"

---

## Pages API

### 1. Get Home Page Content
Retrieve content for the home page.

**Endpoint:** `GET /api/user/pages/home`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Home page content retrieved successfully",
  "data": {
    "_id": "home_page",
    "heroBanner": {
      "imageUrl": "https://cloudinary.com/hero-banner.jpg"
    },
    "featuredPackageIds": [
      {
        "_id": "64abc123...",
        "name": "Dubai Luxury",
        "cardImage": "...",
        "price": "71000"
      }
    ],
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### 2. Get About Page Content
Retrieve content for the about page.

**Endpoint:** `GET /api/user/pages/about`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "About page content retrieved successfully",
  "data": {
    "_id": "about_page",
    "storyAndMission": {
      "story": "Our journey began in...",
      "mission": {
        "text": "To provide unforgettable travel experiences...",
        "imageUrl": "https://cloudinary.com/mission.jpg"
      }
    },
    "ourMembers": {
      "cards": [
        {
          "imageUrl": "https://cloudinary.com/member1.jpg",
          "name": "John Doe",
          "designation": "Founder & CEO",
          "information": "With 15 years of experience..."
        }
      ]
    },
    "journeyInNumbers": {
      "cards": [
        {
          "value": "5000+",
          "label": "Happy Travelers"
        },
        {
          "value": "50+",
          "label": "Destinations"
        }
      ]
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### 3. Get Women Travel Page Content
Retrieve content for the women travel page.

**Endpoint:** `GET /api/user/pages/women-travel`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Women travel page content retrieved successfully",
  "data": {
    "_id": "women_travel_page",
    "heroBanner": {
      "imageUrl": "https://cloudinary.com/women-travel-banner.jpg"
    },
    "whatOurSistersSay": {
      "sectionTitle": "What Our Sisters Say",
      "cards": [
        {
          "description": "Amazing experience! Felt safe and empowered...",
          "name": "Priya Sharma",
          "location": "Mumbai, India"
        }
      ]
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### 4. Get Group Departures Page Content
Retrieve content for the group departures page.

**Endpoint:** `GET /api/user/pages/group-departures`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Group departures page content retrieved successfully",
  "data": {
    "_id": "group_departures_page",
    "heroBanner": {
      "imageUrl": "https://cloudinary.com/group-banner.jpg"
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### 5. Get Contact Page Content
Retrieve content for the contact page including FAQs.

**Endpoint:** `GET /api/user/pages/contact`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Contact page content retrieved successfully",
  "data": {
    "_id": "contact_page",
    "contactDetails": {
      "phoneNumber": "+91-9876543210",
      "operatingHours": "Mon-Sat: 9AM-6PM",
      "email": "info@smilesworld.com",
      "address": "123 Travel Street, Mumbai, India",
      "communityRating": "4.8/5"
    },
    "faqSection": {
      "faqs": [
        {
          "question": "What is your cancellation policy?",
          "answer": "You can cancel up to 15 days before departure..."
        }
      ]
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

## Blogs & Podcasts API

### 1. Get All Blogs
Retrieve all blog posts.

**Endpoint:** `GET /api/user/blogs`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Retrieved 10 blog post(s) successfully",
  "data": [
    {
      "_id": "64xyz789...",
      "title": "Top 10 Travel Destinations in 2024",
      "author": "Jane Smith",
      "readMin": 5,
      "publishDate": "2024-03-15T00:00:00.000Z",
      "content": "Full blog content here...",
      "thumbnailUrl": "https://cloudinary.com/blog1.jpg",
      "createdAt": "2024-03-15T00:00:00.000Z",
      "updatedAt": "2024-03-15T00:00:00.000Z"
    }
  ]
}
```

---

### 2. Get Blog by ID
Retrieve a single blog post.

**Endpoint:** `GET /api/user/blogs/:blogId`

**URL Parameters:**
- `blogId` (required): Blog ID (MongoDB ObjectId)

**Example Request:**
```
GET /api/user/blogs/64xyz789abc...
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Blog post retrieved successfully",
  "data": {
    "_id": "64xyz789...",
    "title": "Top 10 Travel Destinations in 2024",
    "author": "Jane Smith",
    "readMin": 5,
    "publishDate": "2024-03-15T00:00:00.000Z",
    "content": "Full detailed blog content goes here...",
    "thumbnailUrl": "https://cloudinary.com/blog1.jpg",
    "createdAt": "2024-03-15T00:00:00.000Z",
    "updatedAt": "2024-03-15T00:00:00.000Z"
  }
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Blog not found"
}
```

---

### 3. Get All Podcasts
Retrieve all podcasts.

**Endpoint:** `GET /api/user/podcasts`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Retrieved 5 podcast(s) successfully",
  "data": [
    {
      "_id": "64pod123...",
      "title": "Travel Tales: Episode 1",
      "description": "Join us as we explore...",
      "filePath": "https://cloudinary.com/podcasts/episode1.mp3",
      "publishDate": "2024-04-01T00:00:00.000Z",
      "thumbnailUrl": "https://cloudinary.com/podcast1.jpg",
      "createdAt": "2024-04-01T00:00:00.000Z",
      "updatedAt": "2024-04-01T00:00:00.000Z"
    }
  ]
}
```

---

### 4. Get Podcast by ID
Retrieve a single podcast.

**Endpoint:** `GET /api/user/podcasts/:podcastId`

**URL Parameters:**
- `podcastId` (required): Podcast ID (MongoDB ObjectId)

**Example Request:**
```
GET /api/user/podcasts/64pod123abc...
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Podcast retrieved successfully",
  "data": {
    "_id": "64pod123...",
    "title": "Travel Tales: Episode 1",
    "description": "Join us as we explore the hidden gems of Southeast Asia...",
    "filePath": "https://cloudinary.com/podcasts/episode1.mp3",
    "publishDate": "2024-04-01T00:00:00.000Z",
    "thumbnailUrl": "https://cloudinary.com/podcast1.jpg",
    "createdAt": "2024-04-01T00:00:00.000Z",
    "updatedAt": "2024-04-01T00:00:00.000Z"
  }
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "message": "Podcast not found"
}
```

---

## Forms API

### 1. Submit Contact Message
Submit a message through the contact form.

**Endpoint:** `POST /api/user/messages`

**Request Body:**
```json
{
  "fullName": "John Doe",
  "emailAddress": "john@example.com",
  "phoneNumber": "+91-9876543210",
  "subject": "Inquiry about Dubai package",
  "message": "I would like to know more about your Dubai package..."
}
```

**Validation Rules:**
- `fullName`: Required, max 100 characters
- `emailAddress`: Required, valid email format
- `phoneNumber`: Required, valid phone format
- `subject`: Required, max 200 characters
- `message`: Required, max 2000 characters

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Your message has been submitted successfully. We will get back to you soon!",
  "data": {
    "messageId": "64msg123...",
    "submittedAt": "2024-05-01T10:30:00.000Z"
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Valid email address is required",
    "Message is required"
  ]
}
```

---

### 2. Submit Package Enquiry
Submit an enquiry for a travel package.

**Endpoint:** `POST /api/user/enquiries`

**Request Body:**
```json
{
  "type": "Package Enquiry",
  "fullName": "Jane Smith",
  "emailAddress": "jane@example.com",
  "phoneNumber": "+91-9876543210",
  "packageId": "64abc123def...",
  "numberOfTravelers": 4,
  "subject": "Group booking for Dubai",
  "message": "We are a group of 4 looking to book the Dubai package..."
}
```

**Field Descriptions:**
- `type` (required): Type of enquiry (e.g., "Package Enquiry", "Custom Package", "Women Travel")
- `fullName` (required): Full name of the person
- `emailAddress` (required): Valid email address
- `phoneNumber` (required): Contact phone number
- `packageId` (optional): ID of the package being enquired about
- `numberOfTravelers` (optional): Number of people traveling
- `subject` (optional): Brief subject line
- `message` (optional): Detailed message

**Validation Rules:**
- `type`: Required
- `fullName`: Required, max 100 characters
- `emailAddress`: Required, valid email format
- `phoneNumber`: Required, valid phone format

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Your enquiry has been submitted successfully. Our team will contact you shortly!",
  "data": {
    "enquiryId": "64enq456...",
    "submittedAt": "2024-05-01T11:00:00.000Z"
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Enquiry type is required",
    "Valid email address is required"
  ]
}
```

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
Invalid request parameters or validation failure.

```json
{
  "success": false,
  "message": "Invalid ID format"
}
```

### 404 Not Found
Requested resource not found.

```json
{
  "success": false,
  "message": "Package not found"
}
```

### 500 Internal Server Error
Server error occurred.

```json
{
  "success": false,
  "message": "Internal server error"
}
```

---

## Notes

1. **Image Handling**: All image URLs are served from Cloudinary and are fully qualified URLs ready to use in `<img>` tags.

2. **Data Consistency**: The API follows the database structure provided and maintains consistency with the schema definitions.

3. **CORS**: The API supports CORS for cross-origin requests from the frontend.

4. **Response Format**: All responses follow a consistent format with `success`, `message`, and optional `data` fields.

5. **Timestamps**: All documents include `createdAt` and `updatedAt` timestamps automatically managed by MongoDB.

6. **Validation**: All POST endpoints include request validation before processing.

7. **Error Handling**: Comprehensive error handling with appropriate HTTP status codes and descriptive messages.
