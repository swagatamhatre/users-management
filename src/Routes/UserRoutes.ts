import express from 'express';
import * as UserController from '../Controllers/UserController';
import { authenticateToken } from'../../middleware/Auth';

const router = express.Router();


router.post('/user', authenticateToken, UserController.createUser);
router.get('/users', authenticateToken, UserController.getUsers);
router.get('/user/:id', authenticateToken, UserController.getUserById); 
router.put('/user/:id', authenticateToken, UserController.updateUser);
router.delete('/user/:id', authenticateToken, UserController.deleteUser);


export default router;
