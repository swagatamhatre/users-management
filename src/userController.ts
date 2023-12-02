import { Request, Response } from 'express';
import * as userModel from './userModel';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const userId = await userModel.createUser(req.body);
    if (userId == 0) {
        console.log("Inside if")
        res.status(500).json({ error: 'Error creating user' });
       
    } else {
        res.status(201).json({ message: 'User created successfully', id: userId });
    }    
    
  };
  export const getUsers =  async (req: Request, res: Response): Promise<void> => {
    const users = await userModel.getUsers();
    if(users.length > 0) {
        res.status(200).json({data: users});
        
    } else {
        res.status(200).json({data: []});

    }
  };
  export const getUserById =  async (req: Request, res: Response): Promise<void> => {
    const user = await userModel.getUserById(parseInt (req.params.id));
    if(user != undefined && user != null && user.id == parseInt (req.params.id)) {
        res.status(200).json({data: user});
        
    } else {
        res.status(404).json({data: {}});

    }
  };
  
  export const updateUser =  async (req: Request, res: Response): Promise<void> => {
    const isUpdated = await userModel.updateUser(parseInt (req.params.id), req.body);
    if(isUpdated === true) {
        res.status(200).json({data: {}});
        
    } else {
        res.status(400).json({data: {}});

    }
  };
  export const deleteUser =  async (req: Request, res: Response): Promise<void> => {
    const isDeleted = await userModel.deleteUser(parseInt (req.params.id));
    if(isDeleted === true) {
        res.status(204).json({data: {}});
        
    } else {
        res.status(400).json({data: {}});

    }
  };


