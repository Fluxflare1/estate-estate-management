import React, { useState } from 'react';
import axios from 'axios';

const PaymentInput = () => {
    const [amount, setAmount] = useState('');
    const [tenantId, setTenantId] = useState('');
    const [paymentType, setPaymentType] = useState('full');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/payments/', {
                amount,
                tenant: tenantId,
                payment_type: paymentType,
            });
            console.log(response.data);
            // Clear input fields after successful submission
            setAmount('');
            setTenantId('');
            setPaymentType('full');
        } catch (error) {
            console.error('Error creating payment', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
            <input type="text" value={tenantId} onChange={(e) => setTenantId(e.target.value)} placeholder="Tenant ID" required />
            <select value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
                <option value="full">Full</option>
                <option value="partial">Partial</option>
                <option value="advance">Advance</option>
                <option value="none">No Payment</option>
            </select>
            <button type="submit">Submit Payment</button>
        </form>
    );
};

export default PaymentInput;
