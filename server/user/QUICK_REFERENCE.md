# User API Quick Reference

## Base URL: `/api/user`

---

## 📦 Packages

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/packages` | Get all packages (supports filters) |
| GET | `/packages/:id` | Get single package |
| GET | `/packages/featured` | Get featured packages |
| GET | `/packages/women-only` | Get women-only packages |
| GET | `/packages/group-departure` | Get group departure packages |

**Query Filters**: `tag`, `is_featured`, `is_women_only`, `is_group_departure`

---

## 📄 Pages

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/pages/home` | Home page content |
| GET | `/pages/about` | About page content |
| GET | `/pages/women-travel` | Women travel page content |
| GET | `/pages/group-departures` | Group departures page content |
| GET | `/pages/contact` | Contact page content + FAQs |

---

## 📝 Blogs & Podcasts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/blogs` | Get all blogs |
| GET | `/blogs/:blogId` | Get single blog |
| GET | `/podcasts` | Get all podcasts |
| GET | `/podcasts/:podcastId` | Get single podcast |

---

## 📬 Forms

| Method | Endpoint | Description | Required Fields |
|--------|----------|-------------|-----------------|
| POST | `/messages` | Submit contact message | fullName, emailAddress, phoneNumber, subject, message |
| POST | `/enquiries` | Submit package enquiry | type, fullName, emailAddress, phoneNumber |

---

## 🔧 Utility

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |

---

## 📊 Response Format

### Success (200/201)
```json
{
  "success": true,
  "message": "Description",
  "data": { }
}
```

### Error (400/404/500)
```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Optional details"]
}
```

---

## 🎯 Example Requests

### Get international packages
```
GET /api/user/packages?tag=international
```

### Get featured packages (limit 3)
```
GET /api/user/packages/featured?limit=3
```

### Submit contact message
```
POST /api/user/messages
{
  "fullName": "John Doe",
  "emailAddress": "john@example.com",
  "phoneNumber": "+91-9876543210",
  "subject": "Package Inquiry",
  "message": "I'm interested in..."
}
```

### Submit enquiry
```
POST /api/user/enquiries
{
  "type": "Package Enquiry",
  "fullName": "Jane Smith",
  "emailAddress": "jane@example.com",
  "phoneNumber": "+91-9876543210",
  "packageId": "64abc123...",
  "numberOfTravelers": 4
}
```

---

## 🖼️ Image Fields

All image fields contain full Cloudinary URLs:
- `cardImage` - Package card image
- `imageUrl` - General images (banners, hero sections)
- `thumbnailUrl` - Blog/podcast thumbnails
- `filePath` - Podcast audio files

---

## 📱 Status Codes

- `200` - Success (GET)
- `201` - Created (POST)
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Internal Server Error

---

For complete documentation, see **USER_API_DOCUMENTATION.md**
