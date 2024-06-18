require('express-async-errors');
const winston = require('winston'); // logging library
require('winston-mongodb'); // log errors to a database
require('dotenv').config();
const express = require('express');
const app = express();

require('./startup/routes.js')(app);
require('./startup/db.js')();
require('./startup/config.js')();
require('./startup/validation.js')();

// process.on('uncaughtException', (ex) => {
//     console.log('WE GOT AN UNCAUGHT EXCEPTION');
//     winston.error(ex.message, ex);
// });

winston.add(winston.transports.File, { filename: 'logfile.log' }); // log errors to a file
//winston.add(winston.transports.MongoDB, { db: mongoConnection }); // log errors to a database

// const p = Promise.reject(new Error('Something failed miserably!'));


const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Server is running on port ${port}`));