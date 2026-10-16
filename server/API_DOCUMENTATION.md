# Smiles World - API Documentation

## Base URL
```
http://localhost:5000/api/user
```

---

## 📌 Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/testimonials` | Submit a new testimonial |
| GET | `/testimonials` | Get all approved testimonials |
| POST | `/inquiries` | Submit a new inquiry |
| POST | `/newsletters` | Subscribe to newsletter |
| GET | `/newsletters/check/:email` | Check subscription status |
| POST | `/newsletters/unsubscribe` | Unsubscribe from newsletter |
| GET | `/health` | Health check endpoint |

---

## 🎯 Testimonials

### 1. Submit a Testimonial

**Endpoint:** `POST /testimonials`

**Description:** Submit a new testimonial with optional image upload. The testimonial will be in "pending" status until approved by admin.

**Content-Type:** `multipart/form-data`

**Request Body:**
```
name: string (required) - Customer name (max 100 chars)
email: string (required) - Valid email address
message: string (required) - Testimonial message (max 1000 chars)
rating: number (required) - Rating from 1 to 5
image: file (optional) - Image file (JPEG, JPG, PNG, WebP, max 5MB)
```

**Example Request (JavaScript):**
```javascript
const formData = new FormData();
formData.append('name', 'John Doe');
formData.append('email', 'john@example.com');
formData.append('message', 'Amazing service! Highly recommended.');
formData.append('rating', '5');
formData.append('image', imageFile); // File object

fetch('http://localhost:5000/api/user/testimonials', {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then(data => console.log(data));
```

**Success Response (201):**
```json
{
  "success": true,
  "statusCode": 201,
  "message": "Testimonial submitted successfully. It will be visible after admin approval.",
  "data": {
    "_id": "65f1a2b3c4d5e6f7g8h9i0j1",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Amazing service! Highly recommended.",
    "rating": 5,
    "image": {
      "url": "https://res.cloudinary.com/...",
      "publicId": "smiles-world/testimonials/..."
    },
    "status": "pending",
    "createdAt": "2024-10-02T10:30:00.000Z",
    "updatedAt": "2024-10-02T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Please provide all required fields"
}
```

---

### 2. Get Approved Testimonials

**Endpoint:** `GET /testimonials`

**Description:** Retrieve all approved testimonials with pagination.

**Query Parameters:**
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 10) - Items per page

**Example Request:**
```javascript
fetch('http://localhost:5000/api/user/testimonials?page=1&limit=10')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Success Response (200):**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Approved testimonials fetched successfully",
  "data": {
    "testimonials": [
      {
        "_id": "65f1a2b3c4d5e6f7g8h9i0j1",
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Amazing service!",
        "rating": 5,
        "image": {
          "url": "https://res.cloudinary.com/...",
          "publicId": "smiles-world/testimonials/..."
        },
        "status": "approved",
        "createdAt": "2024-10-02T10:30:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 48,
      "itemsPerPage": 10
    }
  }
}
```

---

## 📝 Inquiries

### 1. Submit an Inquiry

**Endpoint:** `POST /inquiries`

**Description:** Submit a new inquiry or contact form message.

**Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "string (required, max 100 chars)",
  "email": "string (required, valid email)",
  "phone": "string (required, valid phone)",
  "subject": "string (required, max 200 chars)",
  "message": "string (required, max 2000 chars)"
}
```

**Example Request:**
```javascript
fetch('http://localhost:5000/api/user/inquiries', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1234567890',
    subject: 'Service Inquiry',
    message: 'I would like to know more about your services.',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data));
```

**Success Response (201):**
```json
{
  "success": true,
  "statusCode": 201,
  "message": "Inquiry submitted successfully. We will get back to you soon!",
  "data": {
    "_id": "65f1a2b3c4d5e6f7g8h9i0j2",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+1234567890",
    "subject": "Service Inquiry",
    "message": "I would like to know more about your services.",
    "status": "pending",
    "createdAt": "2024-10-02T10:35:00.000Z",
    "updatedAt": "2024-10-02T10:35:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Please provide all required fields"
}
```

---

## 📧 Newsletters

### 1. Subscribe to Newsletter

**Endpoint:** `POST /newsletters`

**Description:** Subscribe an email address to the newsletter. Prevents duplicate subscriptions.

**Content-Type:** `application/json`

**Request Body:**
```json
{
  "email": "string (required, valid email)"
}
```

**Example Request:**
```javascript
fetch('http://localhost:5000/api/user/newsletters', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'subscriber@example.com',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data));
```

**Success Response (201):**
```json
{
  "success": true,
  "statusCode": 201,
  "message": "Successfully subscribed to newsletter!",
  "data": {
    "_id": "65f1a2b3c4d5e6f7g8h9i0j3",
    "email": "subscriber@example.com",
    "subscribedAt": "2024-10-02T10:40:00.000Z",
    "isActive": true,
    "createdAt": "2024-10-02T10:40:00.000Z",
    "updatedAt": "2024-10-02T10:40:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Email is already subscribed to newsletter"
}
```

---

### 2. Check Subscription Status

**Endpoint:** `GET /newsletters/check/:email`

**Description:** Check if an email is subscribed to the newsletter.

**URL Parameters:**
- `email` - Email address to check

**Example Request:**
```javascript
fetch('http://localhost:5000/api/user/newsletters/check/subscriber@example.com')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Success Response (200):**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Subscription status checked successfully",
  "data": {
    "isSubscribed": true,
    "subscription": {
      "_id": "65f1a2b3c4d5e6f7g8h9i0j3",
      "email": "subscriber@example.com",
      "subscribedAt": "2024-10-02T10:40:00.000Z",
      "isActive": true
    }
  }
}
```

---

### 3. Unsubscribe from Newsletter

**Endpoint:** `POST /newsletters/unsubscribe`

**Description:** Unsubscribe an email from the newsletter.

**Content-Type:** `application/json`

**Request Body:**
```json
{
  "email": "string (required)"
}
```

**Example Request:**
```javascript
fetch('http://localhost:5000/api/user/newsletters/unsubscribe', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'subscriber@example.com',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data));
```

**Success Response (200):**
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Successfully unsubscribed from newsletter",
  "data": {
    "_id": "65f1a2b3c4d5e6f7g8h9i0j3",
    "email": "subscriber@example.com",
    "isActive": false
  }
}
```

---

## 🏥 Health Check

**Endpoint:** `GET /health`

**Description:** Check if the API is running properly.

**Example Request:**
```javascript
fetch('http://localhost:5000/api/user/health')
  .then(response => response.json())
  .then(data => console.log(data));
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "User API is running",
  "timestamp": "2024-10-02T10:45:00.000Z"
}
```

---

## ⚠️ Error Handling

### Common Error Codes

| Status Code | Description |
|-------------|-------------|
| 400 | Bad Request - Invalid input data |
| 404 | Not Found - Resource not found |
| 500 | Internal Server Error |

### Error Response Format
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

---

## 📋 Validation Rules

### Testimonials
- **name**: Required, max 100 characters
- **email**: Required, valid email format
- **message**: Required, max 1000 characters
- **rating**: Required, number between 1-5
- **image**: Optional, max 5MB, formats: JPEG, JPG, PNG, WebP

### Inquiries
- **name**: Required, max 100 characters
- **email**: Required, valid email format
- **phone**: Required, valid phone number format
- **subject**: Required, max 200 characters
- **message**: Required, max 2000 characters

### Newsletters
- **email**: Required, valid email format, unique

---

## 🔐 CORS Configuration

The API accepts requests from all origins (`*`). In production, configure specific allowed origins in the `.env` file:

```env
CORS_ORIGIN=https://yourdomain.com
```

---

## 📊 Rate Limiting

Currently, there are no rate limits. Consider implementing rate limiting for production using packages like `express-rate-limit`.

---

## 🧪 Testing with cURL

### Submit Testimonial
```bash
curl -X POST http://localhost:5000/api/user/testimonials \
  -F "name=John Doe" \
  -F "email=john@example.com" \
  -F "message=Great service!" \
  -F "rating=5" \
  -F "image=@/path/to/image.jpg"
```

### Get Testimonials
```bash
curl http://localhost:5000/api/user/testimonials?page=1&limit=10
```

### Submit Inquiry
```bash
curl -X POST http://localhost:5000/api/user/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+1234567890",
    "subject": "Inquiry",
    "message": "I have a question"
  }'
```

### Subscribe Newsletter
```bash
curl -X POST http://localhost:5000/api/user/newsletters \
  -H "Content-Type: application/json" \
  -d '{"email": "subscriber@example.com"}'
```

---

## 📞 Support

For issues or questions, please contact the development team.
