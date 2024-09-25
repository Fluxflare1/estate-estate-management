// frontend/src/components/AddPayment.js
import React, { useState } from 'react';
import axios from 'axios';

const AddPayment = () => {
  const [property, setProperty] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Pending'); // Default status
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!property || !amount) {
      setMessage('Please fill out all fields');
      return;
    }

    const newPayment = { property, amount, status };
    
    axios.post('/api/payments/', newPayment)
      .then(res => {
        setMessage('Payment added successfully!');
        setProperty('');
        setAmount('');
        setStatus('Pending');
      })
      .catch(err => {
        console.error('Error adding payment:', err);
        setMessage('Error adding payment');
      });
  };

  return (
    <div>
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

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddPayment;
