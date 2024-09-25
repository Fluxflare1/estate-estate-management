const express = require('express');
const router = express.Router();
const db = require('../database'); // MySQL connection

// Create Utility Bill
router.post('/bills', (req, res) => {
    const { property_id, utility_type, amount, due_date } = req.body;
    const query = 'INSERT INTO utility_bills (property_id, utility_type, amount, due_date) VALUES (?, ?, ?, ?)';
    db.query(query, [property_id, utility_type, amount, due_date], (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(201).json({ message: 'Utility bill created successfully', id: results.insertId });
    });
});

// Get Utility Bills
router.get('/bills/:propertyId', (req, res) => {
    const { propertyId } = req.params;
    const query = 'SELECT * FROM utility_bills WHERE property_id = ?';
    db.query(query, [propertyId], (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(200).json(results);
    });
});

module.exports = router;
