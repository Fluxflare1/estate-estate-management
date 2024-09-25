// frontend/src/components/AddPayment.js
import React, { useState } from 'react';
import axios from 'axios';

const AddPayment = () => {
  const [property, setProperty] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Pending');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const validateFields = () => {
    let errors = {};
    if (!property) {
      errors.property = 'Property ID is required';
    } else if (!/^\d+$/.test(property)) {
      errors.property = 'Property ID must be a valid number';
    }

    if (!amount) {
      errors.amount = 'Amount is required';
    } else if (amount <= 0) {
      errors.amount = 'Amount must be a positive number';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage('');
      return;
    }

    const newPayment = { property, amount, status };
    axios.post('/api/payments/', newPayment)
      .then(res => {
        setMessage('Payment successfully added');
        setErrors({});
        setProperty('');
        setAmount('');
        setStatus('Pending');
      })
      .catch(err => {
        console.error('Error adding payment:', err);
        setMessage('Failed to add payment. Please try again.');
      });
  };

  return (
    <div>
      <h2>Add New Payment</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Property ID:</label>
          <input
            type="text"
            placeholder="Property ID"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
          />
          {errors.property && <p className="error">{errors.property}</p>}
        </div>

        <div>
          <label>Amount (€):</label>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {errors.amount && <p className="error">{errors.amount}</p>}
        </div>

        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        <button type="submit">Add Payment</button>
      </form>
    </div>
  );
};

export default AddPayment;
