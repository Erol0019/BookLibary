const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next){
    const token = req.header('x-auth-token'); 
    if (!token) return res.status(401).send("access denied. no token.") //401 means unauthorized

    try{
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.user = decoded; 
    next();
    } catch (ex) {
        res.status(400).send('Invalid token.'); //400 means bad request
    }
}

