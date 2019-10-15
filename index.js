// Adding the Express Framework
const express = require('express');
const bodyParser = require('body-parser');

// Initialize The Express
const app = express();

// Adding .env
const dotenv = require('dotenv');
dotenv.config();

// Importing The Routes
const authRoute = require('./routes/auth');

// Adding Mongoose
const mongoose = require('mongoose');

// Connecting to Database
mongoose.connect(process.env.DB_CONNECT,  { useUnifiedTopology: true }, () => console.log('You\'re now Connected to the MongoDB on Port 27017...'));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Route Middlewares
app.use('/api/user', authRoute);

// Running The NodeJS Server
app.listen(3000, () => console.log('Server Running...'));