// frontend/src/components/AddPayment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPayment = () => {
  const [property, setProperty] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Pending'); // Default status

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPayment = { property, amount, status };
    axios.post('/api/payments/', newPayment)
      .then(res => {
        console.log('Payment added:', res.data);
      })
      .catch(err => {
        console.error('Error adding payment:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Property ID"
        value={property}
        onChange={(e) => setProperty(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="Failed">Failed</option>
      </select>
      <button type="submit">Add Payment</button>
    </form>
  );
};

export default AddPayment;
