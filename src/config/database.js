require('dotenv').config();
const mysql = require('mysql2');

//Connection
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 
});


// // Connection configuration
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// // Establish connection
// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err.stack);
//         return;
//     }
    
//     console.log('Connected to MySQL database.');
// });

// Perform database operations
pool.query('SELECT * FROM produtos', (err, results, fields) => {
    if (err) {
        console.error('Error executing query:', err.stack);
        return;
    }
    console.log('Query results:', results);
});

//
//module.exports = pool.promise();