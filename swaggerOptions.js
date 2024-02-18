const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HOUSING-HUB',
      version: '1.0.0',
      description: 'API documentation for Housing-Hub App',
    },
    servers: [
      {
        url: 'https://housing-hub-back.onrender.com',
      },
    ],
  },
  apis: ['./routers/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
