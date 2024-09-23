// src/components/PaymentEdit.js
import React, { useEffect, useState } from 'react';
import { getPayments, updatePayment } from '../services/paymentService';

const PaymentEdit = ({ paymentId, onClose }) => {
    const [payment, setPayment] = useState(null);

    useEffect(() => {
        const fetchPayment = async () => {
            const response = await getPayments(paymentId);
            setPayment(response.data);
        };
        fetchPayment();
    }, [paymentId]);

    const handleUpdatePayment = async () => {
        await updatePayment(paymentId, payment);
        onClose(); // Close edit modal or component
    };

    if (!payment) return null;

    return (
        <div>
            <h2>Edit Payment</h2>
            <input
                type="number"
                value={payment.amount}
                onChange={(e) => setPayment
