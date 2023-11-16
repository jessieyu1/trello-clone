const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/utils/swagger');
const loader = require('./src/loader');
const errorHandlerMiddleware = require('./src/middleware/error-handler');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/v1/health',(req,res)=>{
 
  res.send('ok')
})

app.use(errorHandlerMiddleware)

loader.init(app)

module.exports = app;
