require('dotenv').config({path:'./config.env'});
const express = require('express');
const app = express();
const port = process.env.port || 3000;
const db_connect = require('./db/db');
const userRoute = require('./routes/userRoute');
const jobRoute = require('./routes/jobRoute');
app.use(express.json());

// Database
db_connect();

// Middleware

// Routes
app.use('/api', userRoute);
app.use('/api', jobRoute);

app.listen(port, ()=>{
    console.log(`Server is Running at http://localhost:${port}`);
});