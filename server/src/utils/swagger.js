//TODO: ADD SWAGGER
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/board.routes.js'], // files containing annotations as above
};

module.exports = swaggerJsdoc(options);