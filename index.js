require('express-async-errors');
const winston = require('winston'); // logging library
require('dotenv').config();
const express = require('express');
const app = express();
const swaggerjsdoc = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

const option = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node.js Api Project for mongodb',
            version: '1.0.0',
            description: 'A simple express library API'
        },
        servers:[
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: ['./swagger/*.js']
}

const swaggerSpec = swaggerjsdoc(option);
app.use('/swagger', swaggerui.serve, swaggerui.setup(swaggerSpec));

require('./startup/cors')(app);
require('./startup/routes.js')(app);
require('./startup/db.js')();
require('./startup/config.js')();
require('./startup/validation.js')();


// process.on('uncaughtException', (ex) => {
//     console.log('WE GOT AN UNCAUGHT EXCEPTION');
//     winston.error(ex.message, ex);
// });

winston.add(winston.transports.File, { filename: 'logfile.log' }); // log errors to a file
//winston.add(winston.transports.MongoDB, { db: MONGOCONNECTION }); // log errors to a database

// const p = Promise.reject(new Error('Something failed miserably!'));


const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Server is running on port ${port}`));