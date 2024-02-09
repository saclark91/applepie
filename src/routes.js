const express = require('express');
const router = express.Router();
const sql = require('mssql');

// Define your API endpoints

// GET /api/books
router.get('/books', async (req, res) => {
    try {
        const pool = await sql.connect(config); // Use the configured SQL connection
        const result = await pool.request().query('SELECT * FROM Books');
        res.json(result.recordset);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// POST /api/books
router.post('/books', async (req, res) => {
    try {
        const { title, author } = req.body;
        const pool = await sql.connect(config); // Use the configured SQL connection
        await pool.request()
            .input('title', sql.NVarChar, title)
            .input('author', sql.NVarChar, author)
            .query('INSERT INTO Books (Title, Author) VALUES (@title, @author)');
        
        res.status(201).send('Book added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
