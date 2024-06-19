const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
    
const MONGOCONNECTION = process.env.MONGOCONNECTION;

mongoose.connect(MONGOCONNECTION)
.then(() => winston.info('Connected to MongoDB...'))
}