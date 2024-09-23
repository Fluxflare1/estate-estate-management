import PaymentEdit from './payments/PaymentEdit';
// src/components/PaymentList.js
import React, { useEffect, useState } from 'react';
import { getPayments, createPayment, deletePayment } from '../services/paymentService';

const PaymentList = () => {
    const [payments, setPayments] = useState([]);
    const [newPayment, setNewPayment] = useState({ amount: '', userId: '' });

    useEffect(() => {
        loadPayments();
    }, []);

    const loadPayments = async () => {
        const response = await getPayments();
        setPayments(response.data);
    };

    const handleAddPayment = async () => {
        await createPayment(newPayment);
        loadPayments();
        setNewPayment({ amount: '', userId: '' }); // Reset form
    };

    const handleDeletePayment = async (id) => {
        await deletePayment(id);
        loadPayments();
    };

    return (
        <div>
            <h2>Payment List</h2>
            <input
                type="number"
                placeholder="Amount"
                value={newPayment.amount}
                onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
            />
            <input
                type="text"
                placeholder="User ID"
                value={newPayment.userId}
                onChange={(e) => setNewPayment({ ...newPayment, userId: e.target.value })}
            />
            <button onClick={handleAddPayment}>Add Payment</button>
            <ul>
                {payments.map(payment => (
                    <li key={payment.id}>
                        Amount: {payment.amount}, User ID: {payment.userId}
                        <button onClick={() => handleDeletePayment(payment.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentList;
