# User Backend Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT (Frontend)                           │
│                     React/Vue/Angular Application                    │
└────────────────────────────┬────────────────────────────────────────┘
                             │
                             │ HTTP Requests
                             │
┌────────────────────────────▼────────────────────────────────────────┐
│                       EXPRESS SERVER                                 │
│                        (server.js)                                   │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │              MIDDLEWARE LAYER                               │   │
│  │  • CORS                                                     │   │
│  │  • JSON Body Parser                                         │   │
│  │  • Request Logger                                           │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │              ROUTES LAYER                                   │   │
│  │           (user/routes/index.js)                            │   │
│  │                                                             │   │
│  │  /api/user                                                  │   │
│  │    ├── /packages          → packagesRoutes.js              │   │
│  │    ├── /pages             → pagesRoutes.js                 │   │
│  │    ├── /blogs             → blogsRoutes.js                 │   │
│  │    ├── /podcasts          → podcastsRoutes.js              │   │
│  │    ├── /messages          → formsRoutes.js                 │   │
│  │    └── /enquiries         → formsRoutes.js                 │   │
│  └────────────────────────────────────────────────────────────┘   │
│                             │                                        │
│                             │                                        │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │         VALIDATION MIDDLEWARE                               │   │
│  │   (user/middleware/validationMiddleware.js)                │   │
│  │   • validateMessage                                         │   │
│  │   • validateEnquiry                                         │   │
│  │   • validateObjectIdParam                                   │   │
│  └────────────────────────────────────────────────────────────┘   │
│                             │                                        │
│                             │                                        │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │            CONTROLLERS LAYER                                │   │
│  │         (user/controllers/*.js)                             │   │
│  │                                                             │   │
│  │  • packagesController - Package operations                 │   │
│  │  • pagesController    - Page content operations            │   │
│  │  • blogsController    - Blogs & podcasts operations        │   │
│  │  • formsController    - Form submissions                   │   │
│  │                                                             │   │
│  │  Wrapped in asyncHandler for error catching                │   │
│  └────────────────────────────────────────────────────────────┘   │
│                             │                                        │
│                             │                                        │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │            SERVICES LAYER                                   │   │
│  │          (user/services/*.js)                               │   │
│  │                                                             │   │
│  │  • packagesService - Business logic for packages           │   │
│  │  • pagesService    - Business logic for pages              │   │
│  │  • blogsService    - Business logic for blogs/podcasts     │   │
│  │  • formsService    - Business logic for submissions        │   │
│  │                                                             │   │
│  │  Pure business logic - No HTTP concerns                    │   │
│  └────────────────────────────────────────────────────────────┘   │
│                             │                                        │
│                             │                                        │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │              UTILITIES                                      │   │
│  │           (user/utils/*.js)                                 │   │
│  │                                                             │   │
│  │  • responseFormatter - Format API responses                │   │
│  │  • validators        - Input validation helpers            │   │
│  └────────────────────────────────────────────────────────────┘   │
│                             │                                        │
│                             │                                        │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │         ERROR HANDLER MIDDLEWARE                            │   │
│  │      (user/middleware/errorHandler.js)                      │   │
│  │   • Catches all errors                                      │   │
│  │   • Formats error responses                                 │   │
│  │   • Sends appropriate HTTP status codes                     │   │
│  └────────────────────────────────────────────────────────────┘   │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               │
┌──────────────────────────────▼──────────────────────────────────────┐
│                      DATABASE LAYER                                  │
│                     (models/*.js)                                    │
│                                                                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐   │
│  │   Package       │  │   HomeContent   │  │   AboutContent  │   │
│  │   Schema        │  │   Schema        │  │   Schema        │   │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘   │
│                                                                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐   │
│  │ WomenTravel     │  │  GroupDeparture │  │   Contact       │   │
│  │ Content Schema  │  │  Content Schema │  │   Content Schema│   │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘   │
│                                                                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐   │
│  │  BlogPageContent│  │    Message      │  │    Enquiry      │   │
│  │    Schema       │  │    Schema       │  │    Schema       │   │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘   │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
                               │
┌──────────────────────────────▼──────────────────────────────────────┐
│                      MONGODB DATABASE                                │
│                                                                      │
│  Collections:                                                       │
│  • packages                                                         │
│  • pages (Home, About, Women Travel, Group, Contact, Blogs)        │
│  • messages                                                         │
│  • enquiries                                                        │
│                                                                      │
│  External Storage:                                                  │
│  • Cloudinary (Images & Audio Files)                               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📊 Request Flow

### GET Request (e.g., GET /api/user/packages)
```
1. Client → HTTP GET /api/user/packages?tag=domestic
2. Express Server → Routes to packagesRoutes.js
3. Route → Calls packagesController.getAllPackages()
4. Controller → Extracts query params (tag=domestic)
5. Controller → Calls packagesService.getAllPackages({ tag: 'domestic' })
6. Service → Queries Package model with filter
7. Model → Fetches data from MongoDB
8. MongoDB → Returns package documents
9. Service → Returns data to controller
10. Controller → Uses successResponse() to format response
11. Response → Sent to client with 200 status
```

### POST Request (e.g., POST /api/user/messages)
```
1. Client → HTTP POST /api/user/messages + JSON body
2. Express Server → Routes to formsRoutes.js
3. Route → Applies validateMessage middleware
4. Middleware → Validates required fields, email format, etc.
5. If invalid → Returns 400 error with details
6. If valid → Calls formsController.submitMessage()
7. Controller → Extracts body data
8. Controller → Calls formsService.createMessage(data)
9. Service → Creates new Message document
10. Model → Saves to MongoDB
11. MongoDB → Returns saved document with _id
12. Service → Returns message data to controller
13. Controller → Uses successResponse() to format response
14. Response → Sent to client with 201 status
```

### Error Flow
```
1. Error occurs in service/controller
2. Error is caught by asyncHandler wrapper
3. Error → Passed to errorHandler middleware
4. errorHandler → Determines error type:
   - ValidationError → 400
   - CastError → 400
   - Not Found → 404
   - Other → 500
5. errorHandler → Formats error response
6. Response → Sent to client with appropriate status code
```

---

## 🔄 Data Flow Patterns

### Pattern 1: Read Operations (Packages, Pages, Blogs)
```
Route → Controller → Service → Model → MongoDB → Service → Controller → Response
```

### Pattern 2: Write Operations (Messages, Enquiries)
```
Route → Validation → Controller → Service → Model → MongoDB → Service → Controller → Response
```

### Pattern 3: Error Handling
```
Any Layer → Error Thrown → asyncHandler → errorHandler → Error Response
```

---

## 🎯 Key Design Principles

### 1. Separation of Concerns
- **Routes**: Define endpoints only
- **Controllers**: Handle HTTP only
- **Services**: Pure business logic
- **Models**: Database schema only

### 2. Single Responsibility
- Each file has one clear purpose
- Easy to locate and modify code
- Better maintainability

### 3. Error Handling at Every Level
- Validation at route level
- Business logic errors at service level
- Global error handler catches all

### 4. Consistent Response Format
- All success responses use successResponse()
- All error responses use errorResponse()
- Client always knows what to expect

### 5. Reusability
- Services can be called from anywhere
- Utils can be used across the app
- Middleware can be applied to any route

---

## 📦 Module Dependencies

```
routes/
  └── depends on: controllers, middleware

controllers/
  └── depends on: services, utils, middleware

services/
  └── depends on: models

middleware/
  └── depends on: utils

utils/
  └── depends on: nothing (pure functions)
```

---

## 🔐 Security Layers

```
1. CORS                    → Restricts origins
2. Body Parser             → Limits request size
3. Validation Middleware   → Validates input
4. Sanitization           → Cleans strings
5. Mongoose Schema        → Type validation
6. Error Handler          → Hides internal errors
```

---

## 🚀 Performance Optimizations

```
1. Lean Queries           → No Mongoose overhead
2. Select Fields          → Only needed data
3. Indexes               → Fast queries
4. Async/Await           → Non-blocking I/O
5. Connection Pooling    → Reuse DB connections
```

---

## 📝 Summary

This architecture provides:
✅ **Scalability** - Easy to add new features
✅ **Maintainability** - Clear code organization
✅ **Testability** - Pure functions easy to test
✅ **Security** - Multiple validation layers
✅ **Performance** - Optimized queries
✅ **Developer Experience** - Well documented
