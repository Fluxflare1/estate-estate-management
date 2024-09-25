const express = require('express');
const router = express.Router();
const db = require('../database'); // MySQL connection

// Create Lease
router.post('/leases', (req, res) => {
    const { property_id, tenant_name, start_date, end_date, amount } = req.body;
    const query = 'INSERT INTO leases (property_id, tenant_name, start_date, end_date, amount) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [property_id, tenant_name, start_date, end_date, amount], (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(201).json({ message: 'Lease created successfully', id: results.insertId });
    });
});

// Get Leases
router.get('/leases/:propertyId', (req, res) => {
    const { propertyId } = req.params;
    const query = 'SELECT * FROM leases WHERE property_id = ?';
    db.query(query, [propertyId], (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(200).json(results);
    });
});

module.exports = router;
