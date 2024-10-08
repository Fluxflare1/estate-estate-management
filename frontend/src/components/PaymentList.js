// frontend/src/components/PaymentList.js
import React, { useState } from 'react';

const PaymentList = ({ payments }) => {
    const [error, setError] = useState(null);

    const handleDownloadReceipt = (paymentId) => {
        setError(null); // Reset error message before download

        fetch(`/api/payments/${paymentId}/receipt/`)
            .then((response) => {
                if (response.ok) {
                    // If the response is ok, open the PDF in a new tab
                    window.open(`/api/payments/${paymentId}/receipt/`, '_blank');
                } else {
                    // Handle non-OK responses (e.g., 404 or 500)
                    setError('Failed to download the receipt. Please try again later.');
                }
            })
            .catch((err) => {
                // Catch any network errors
                setError('An error occurred while downloading the receipt.');
            });
    };

    return (
        <div>
            <h2>Payments</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>User</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.date}</td>
                            <td>{payment.userId}</td>
                            <td>
                                <button onClick={() => handleDownloadReceipt(payment.id)}>
                                    Download Receipt
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentList;
// frontend/src/components/PaymentList.js
import React from 'react';

const PaymentList = ({ payments }) => {
    const handleDownloadReceipt = (paymentId) => {
        // Trigger download by opening the PDF URL
        window.open(`/api/payments/${paymentId}/receipt/`, '_blank');
    };

    return (
        <div>
            <h2>Payments</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>User</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment.id}>
                            <td>{payment.id}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.date}</td>
                            <td>{payment.userId}</td>
                            <td>
                                <button onClick={() => handleDownloadReceipt(payment.id)}>
                                    Download Receipt
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentList;
// frontend/src/components/PaymentList.js
import React, { useState, useEffect } from 'react';
import { getPayments } from '../api/payments'; // Assuming the API call is implemented

const PaymentList = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            const response = await getPayments();
            setPayments(response.data);
        };
        fetchPayments();
    }, []);

    if (payments.length === 0) return <p>No payments available.</p>;

    return (
        <div>
            <h2>Payment History</h2>
            <ul>
                {payments.map((payment) => (
                    <li key={payment.id}>
                        {payment.amount} - {payment.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentList;
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
