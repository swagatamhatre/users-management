import { Request, Response } from 'express';
import * as UserModel from '../Models/UserModel';
import validator from 'validator';
import bcrypt from 'bcrypt';


const isValidEmail = (email: string): boolean => {

    return validator.isEmail(email);
};
const isValidName = (username: string): boolean => {
    return validator.isAlpha(username.replace(/\s/g, ''), 'en-US', { ignore: ' ' });
};
  
const isValidPassword = (password: string): boolean => {
    
    return validator.isLength(password, { min: 8 });
};

export const createUser = async (req: Request, res: Response): Promise<void> => {

    // Email validation //
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    if (!isValidEmail(email)) {
        console.log('Please enter valid email ');
        res.status(400).send({"error": "Please enter valid email"});
        return;

    } 

    if (!isValidName(username)) {
        console.log('User name cannot be empty or must be alphabates');
        res.status(400).send({ "error": "User name cannot be empty or must be alphabetes"});
        return ;
    } 
    
    if (!isValidPassword(password)) {
        console.log('Please enter valid password');
        res.status(400).send({"error": "Please enter valid password"});
        return;
    }

    //Ecrypt Password //
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password,saltRound);
    console.log("hashepasswooo",hashedPassword);
    let user = req.body;
    user.password = hashedPassword
    try {
        const userId = await UserModel.createUser(user);
        if (userId == 0) {
            res.status(500).json({ error: 'Error in creating user' });
        
        } else {
            res.status(201).json({ message: 'User created successfully', id: userId });
        }
    } catch (err :any) {
        console.log("Inside err", err)
        if (err.errno === 1062) {
            res.status(409).send({"error" : "Email already exist"})
        }
    }        
    
};
export const getUsers =  async (req: Request, res: Response): Promise<void> => {
    const users = await UserModel.getUsers();
    if(users.length > 0) {

        res.status(200).json({data: users});
        
    } else {

        res.status(200).json({data: []});

    }
};
export const getUserById =  async (req: Request, res: Response): Promise<void> => {

        const user = await UserModel.getUserById(parseInt (req.params.id));
        if(user != undefined && user != null && user.id == parseInt (req.params.id)) {

            res.status(200).json({data: user});
            
        } else {

            res.status(404).json({data: {}});

        }
};
  
export const updateUser =  async (req: Request, res: Response): Promise<void> => {

    const isUpdated = await UserModel.updateUser(parseInt (req.params.id), req.body);
    if(isUpdated === true) {

        res.status(200).json({data: {}});
        
    } else {

        res.status(400).json({data: {}});

    }
  };
export const deleteUser =  async (req: Request, res: Response): Promise<void> => {

    const isDeleted = await UserModel.deleteUser(parseInt (req.params.id));
    if(isDeleted === true) {

        res.status(204).json({data: {}});
        
    } else {

        res.status(400).json({data: {}});

    }
};


