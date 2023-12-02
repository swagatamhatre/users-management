import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
import dotenv from 'dotenv';
dotenv.config();

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')
    if (!token) {
        res.status(401).json({ message: 'Unauthorized: No token provided' });
        return;
    }
    console.log("Token ==>", token);
    try {
        let encodedToken = token.split(" ")[1];
       // console.log("Secret key", process.env.SECRET_KEY)
        const decoded = jwt.verify(encodedToken, process.env.SECRET_KEY)

        next();
    } catch (error) {
        res.status(403).json({ message: 'Forbidden: Invalid token' });
        return;
    }
};
