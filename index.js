require('dotenv').config();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const genres = require('./routes/genres.js');
const customers = require('./routes/customers.js');
const movies = require('./routes/movies.js');
const rentals = require('./routes/rentals.js');
const users = require('./routes/users.js');
const auth = require('./routes/auth.js');
const express = require('express');

if(!process.env.jwtPrivateKey){
    console.error('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1); // 0 means success, anything else means failure
};

const app = express();

const mongoConnection = process.env.mongoConnection;

mongoose.connect(mongoConnection)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));