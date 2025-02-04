# Wanderlust

Wanderlust is a full-stack web application inspired by Airbnb, allowing users to browse, create, edit, and review rental listings. It features user authentication, image uploads, mapping, and secure session management. The app follows the MVC (Model-View-Controller) pattern and is deployed on Render.

## Features

### Listings Management
- CRUD (Create, Read, Update, Delete) operations on listings.
- Listings can only be edited or deleted by their respective owners.
- Image uploads and editing using **Cloudinary** and **Multer**.
- **Mapbox API** integration to display locations on an interactive map.

### Reviews & Ratings
- Users can leave reviews on listings.
- Ratings powered by Starability.
- Both client-side and server-side validation for reviews.

### Authentication & Authorization
- User authentication with **Passport.js**.
- Secure password storage using hashing and salting.
- Session management with **express-session** and **connect-mongo**.
- Authorization constraints for listing owners.

### Middleware & Validation
- **Joi** for schema validation.
- **Expresserror** middleware for custom error handling.
- **Mongoose middleware** for handling listings.
- **Express Router** used to modularize routes.

### Frontend & UI
- Styled with **Bootstrap** for a responsive design.
- Client-side validation for form inputs.
- Flash messages with **connect-flash** for user notifications.

### Deployment & Database
- **MongoDB Atlas** for cloud-based database storage.
- **connect-mongo** for MongoDB-based session storage.
- Hosted and deployed on **Render**.

### Tech Stack

- **Frontend:** Bootstrap, EJS (Embedded JavaScript)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication & Security:** Passport npm package, express-session, connect-mongo
- **Cloud Storage:** Cloudinary, Multer
- **Mapping API:** Mapbox

### Deployment 
- The website is deployed on render at "https://wanderlust-major-project-z69z.onrender.com/listings" 
