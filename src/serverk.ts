/*const message: string = 'Hello, TypeScript!';
console.log(message); */

import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './userRoutes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
