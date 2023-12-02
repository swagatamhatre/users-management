

import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'Documentation for your API built with Swagger',
    },
  },
  apis: ['./src/controllers/*.ts'], // Path to your controller files or endpoints
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;