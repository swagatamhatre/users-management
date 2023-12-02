import express from 'express';
import * as UserController from '../Controllers/UserController';
import { authenticateToken } from'../../middleware/Auth';
import upload from '../Utils/FileUpload';
const router = express.Router();

/**
 * @openapi
 * /user:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *               profile_pic: 
 *                 type: string
 *               address:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *               - address
 *     responses:
 *       '201':
 *         description: Successful response indicating user creation
 *       '409':
 *         description: Email already exist
 *       '500':
 *         description: Error in creating user
 */
router.post('/user', authenticateToken, upload.single('profile_pic'),  UserController.createUser);

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of all users
 *     responses:
 *       '200':
 *         description: Successful response returning a list of users
 */
router.get('/users', authenticateToken, UserController.getUsers);

/**
 * @openapi
 * /user/{$id}:
 *   get:
 *     summary: Get a single user from id
 *     description: Retrieve single user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: Numeric id of user to retrieve
 *       - in: header
 *         name: Authorization
 *         required: true
 *         schema: 
 *           type: string
 *           description: JWT token      
 *     responses:
 *       '200':
 *         description: Successful response returning a user
 *       '404':
 *         description: User not found
 */
router.get('/user/:id', authenticateToken, UserController.getUserById); 

/**
 * @openapi
 * /user/{$id}:
 *   put:
 *     summary: Update user
 *     description: update existing user based on id
 *     responses:
 *       '200':
 *         description: Successful response updating user
 *       '400':
 *         description: Bad input
 */
router.put('/user/:id', authenticateToken, upload.single('profile_pic'), UserController.updateUser);

/**
 * @openapi
 * /user/{$id}:
 *   delete:
 *     summary: Delete user
 *     description: Delete user by id
 *     responses:
 *       '204':
 *         description: Successful response deleting users
 *       '400':
 *         description: Bad input
 */
router.delete('/user/:id', authenticateToken, UserController.deleteUser);


export default router;
