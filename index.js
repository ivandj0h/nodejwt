// Imports the Express Framework
const express = require('express');
const bodyParser = require('body-parser');

// Initialize The Express
const app = express();

// Imports .env
const dotenv = require('dotenv');
dotenv.config();

// Importing The Routes
const authRoute = require('./routes/auth');

// Importing Posts Routes
const postRoutes = require('./routes/posts');

// Imports Mongoose
const mongoose = require('mongoose');

// Connecting to Database
mongoose.connect(process.env.DB_CONNECT,  { useUnifiedTopology: true }, () => console.log('You\'re now Connected to the MongoDB on Port 27017...'));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoutes);


// Running The NodeJS Server
app.listen(3000, () => console.log('Server Running...'));