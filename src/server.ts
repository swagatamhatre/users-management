import express, { Application} from 'express';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
dotenv.config();
console.log("DATABASE ", process.env.DATABASE);
import UserRouter from './Routes/UserRoutes';

const app: Application = express();
app.use(bodyParser.json());
app.use('/', UserRouter);

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app;
