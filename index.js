// Adding the Express Framework
const express = require('express');

// Initialize The Express
const app = express();

// Importing The Routes
const authRoute = require('./routes/auth');

// Route Middlewares
app.use('/api/user', authRoute);
// Running The NodeJS Server
app.listen(3000, () => console.log('Server Running...'));