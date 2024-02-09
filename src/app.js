const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const booksRouter = require('./routes');
const sql = require('mssql');

// Middleware
app.use(bodyParser.json());

// Configure database connection
const config = {
    server: 'applepie-server.database.windows.net', // Your server name
    database: 'dbo.Books', // Your database name
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DB_USERNAME, // Your username
            password: process.env.DB_PASSWORD // Your password
        }
    },
    options: {
        encrypt: true // Use encryption
    }
};

// Mount the router at a specific base path
app.use('/api', booksRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
