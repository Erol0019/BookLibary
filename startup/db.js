const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
    
const mongoConnection = process.env.mongoConnection;

mongoose.connect(mongoConnection)
.then(() => winston.info('Connected to MongoDB...'))
}