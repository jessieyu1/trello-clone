const express = require('express');
const loader = require('./src/loader');

const app = express();

const boardsRouter=require('./src/routes/board.routes')
app.use(express.json());
app.use('/api',boardsRouter)
app.get('/api/v1/health',(req,res)=>{
 
    res.send('ok')
})
loader.init(app)

module.exports = app;
