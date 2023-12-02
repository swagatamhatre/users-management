import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as userController from './userController';
const app: Application = express();
app.use(bodyParser.json());

// MySQL Connection Configuration

app.post('/user', userController.createUser);
app.get('/users', userController.getUsers);
app.get('/user/:id',userController.getUserById); 
app.put('/user/:id', userController.updateUser);
app.delete('/user/:id',userController.deleteUser);

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app;
