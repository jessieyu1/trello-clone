const express = require('express');
const loader = require('./src/loader');

const app = express();

app.get('/api/v1/health',(req,res)=>{
 
  res.send('ok')
})
loader.init(app)

module.exports = app;
