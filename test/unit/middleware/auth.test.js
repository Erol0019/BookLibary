const { User } = require('../../../models/user');
const auth = require('../../../middleware/auth');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

describe('auth middleware', () => {
    it('should populate req.user with the payload of a valid JWT', () => {
        const user = { 
            _id: new mongoose.Types.ObjectId().toHexString(), 
            isAdmin: true 
        };
        
        const token = jwt.sign(user, process.env.JWTPRIVATEKEY);

        const req = {
            header: jest.fn().mockReturnValue(token)
        };
        const res = {};
        const next = jest.fn();
        
        auth(req, res, next);

        expect(req.user).toMatchObject(user);
    });

    it('should return 401 if no token is provided', () => {
        const req = {
            header: jest.fn().mockReturnValue(null)
        };
        const res = {
            status: jest.fn().mockReturnValue({ send: jest.fn() })
        };
        const next = jest.fn();
        
        auth(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.status().send).toHaveBeenCalledWith("access denied. no token.");
    });

    it('should return 400 if token is invalid', () => {
        const req = {
            header: jest.fn().mockReturnValue("invalid token")
        };
        const res = {
            status: jest.fn().mockReturnValue({ send: jest.fn() })
        };
        const next = jest.fn();
        
        auth(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.status().send).toHaveBeenCalledWith("Invalid token.");
    });
});
