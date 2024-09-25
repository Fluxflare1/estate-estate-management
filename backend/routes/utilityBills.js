const express = require('express');
const router = express.Router();
const db = require('../database'); // MySQL connection

// Create Utility Bill
router.post('/utilities/bills', (req, res) => {
    const { property_id, utility_type, amount, due_date } = req.body;
    const query = 'INSERT INTO utility_bills (property_id, utility_type, amount, due_date) VALUES (?, ?, ?, ?)';
    db.query(query, [property_id, utility_type, amount, due_date], (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(201).json({ message: 'Utility bill created successfully', id: results.insertId });
    });
});

// Get Utility Bills
router.get('/utilities/bills/:propertyId', (req, res) => {
    const { propertyId } = req.params;
    const query = 'SELECT * FROM utility_bills WHERE property_id = ?';
    db.query(query, [propertyId], (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(200).json(results);
    });
});

// Update Utility Bill
router.put('/utilities/bills/:id', (req, res) => {
    const { id } = req.params;
    const { utility_type, amount, due_date, status } = req.body;
    const query = 'UPDATE utility_bills SET utility_type = ?, amount = ?, due_date = ?, status = ? WHERE id = ?';
    db.query(query, [utility_type, amount, due_date, status, id], (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(200).json({ message: 'Utility bill updated successfully' });
    });
});

// Delete Utility Bill
router.delete('/utilities/bills/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM utility_bills WHERE id = ?';
    db.query(query, [id], (error, results) => {
        if (error) return res.status(500).json({ error });
        res.status(200).json({ message: 'Utility bill deleted successfully' });
    });
});

module.exports = router;
