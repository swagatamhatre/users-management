const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
let token = jwt.sign({"_id": "shatgwtajjjsbsfg"}, process.env.SECRET_KEY, { expiresIn: '1h'});
console.log('Generated JWT:', token);
