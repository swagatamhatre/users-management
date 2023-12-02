import mysql, { Connection } from 'mysql';

const db: Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'swagata123',
    database: 'usersmanagement'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

export default db;