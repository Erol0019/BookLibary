const mongoose = require('mongoose');
const genres = require('./routes/genres.js');
const customers = require('./routes/customers.js');
const express = require('express');

const app = express();

mongoose.connect('mongodb+srv://Admin:Password@atlascluster.vunsmk6.mongodb.net/movie')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));