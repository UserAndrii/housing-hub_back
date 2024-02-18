# HOUSING-HUB System Backend

This repository contains the base code for the advertisement system. It provides
RESTful API endpoints for managing users, fetching an array of advertisements,
and posting a new advertisement. Further manipulations with advertisements are
implemented subsequently. The technologies used include Node.js, Express.js,
Cloudinary, MongoDB, and other middleware and libraries.

## Technologies Used

- Node.js: A JavaScript runtime for building server-side applications.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing user and car information.
- Multer: Middleware for handling file uploads (used for car photos).
- Cloudinary: Cloud storage for storing car photos.
- Swagger-jsdoc and Swagger-ui-express: Used for API documentation.
- Cors: Middleware for handling Cross-Origin Resource Sharing.
- Morgan: Middleware for logging HTTP requests.
- Dotenv: Used for loading environment variables from a .env file.
- Joi: A library for data validation.
- UUID: Used for generating unique identifiers.

## Installation

#### 1. Clone the repository:

`git clone https://github.com/UserAndrii/housing-hub_back.git`

#### 2. Install dependencies:

`cd housing-hub-backend`

`npm install`

#### 3. Set up environment variables:

Create a .env file in the root directory and add the following:

```env
PORT=3000
MONGODB_URI=your-mongodb-uri

CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

#### 4. Start the server:

`npm start` or `npm run dev`

## API Documentation

API documentation is available using Swagger UI. Access it by visiting
https://housing-hub-back.onrender.com/api-docs/ in your browser.

## API Endpoints

### Advertisement

#### 1. Get all ads

Endpoint: GET `/advertisement`

Description: Get information about all available ads.

Response (Example):

```json
[
  {
    "_id": "65b909e3a48da347ac46dcb2",
    "image": "https://hk.partnerguesthouse.net/web/image/321169",
    "title": "Нові апартаменти",
    "price": 50,
    "description": "Опис для апартаментів",
    "position": {
      "lat": 49.842957,
      "lng": 24.031111
    }
  }
]
```

#### 2. Add a new ad

Endpoint: POST `/advertisement`

Description: Add a new ad with coordinates to the system.

Request Body: multipart/form-data

```json
{
  "image": "byte, formData",
  "title": "string",
  "price": "number",
  "description": "string",
  "position": "latString, lngString"
}
```

Response (Example):

```json
{
  "_id": "65b909e3a48da347ac46dcb2",
  "image": "https://hk.partnerguesthouse.net/web/image/321169",
  "title": "Нові апартаменти",
  "price": 50,
  "description": "Опис для апартаментів",
  "position": {
    "lat": 49.842957,
    "lng": 24.031111
  }
}
```

## Conclusion

Thank you for exploring the HOUSING-HUB System Backend repository! I provided a
robust foundation for managing advertisements, complete with RESTful API
endpoints and integration with various technologies like Node.js, Express.js,
MongoDB, Cloudinary, and more.

Whether you're a developer looking to extend functionality or a user interested
in leveraging the advertisement system, we hope this repository serves as a
valuable resource. Feel free to contribute, suggest improvements, or use the
system to enhance your projects.

Happy coding and advertising! 🏠🚀
