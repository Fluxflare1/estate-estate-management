// frontend/src/components/EditPayment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditPayment = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState({ property: '', amount: '', status: '' });

  useEffect(() => {
    axios.get(`/api/payments/${id}/`)
      .then(res => {
        setPayment(res.data);
      })
      .catch(err => {
        console.error('Error fetching payment:', err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/payments/${id}/`, payment)
      .then(res => {
        console.log('Payment updated:', res.data);
      })
      .catch(err => {
        console.error('Error updating payment:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Property ID"
        value={payment.property}
        onChange={(e) => setPayment({ ...payment, property: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={payment.amount}
        onChange={(e) => setPayment({ ...payment, amount: e.target.value })}
      />
      <select
        value={payment.status}
        onChange={(e) => setPayment({ ...payment, status: e.target.value })}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="Failed">Failed</option>
      </select>
      <button type="submit">Update Payment</button>
    </form>
  );
};

export default EditPayment;
