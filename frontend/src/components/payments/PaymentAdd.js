// frontend/src/components/PaymentAdd.js
import React, { useState } from 'react';
import { addPayment } from '../api/payments'; // Assuming the API call is implemented

const PaymentAdd = ({ onPaymentAdded }) => {
    const [amount, setAmount] = useState('');
    const [userId, setUserId] = useState('');

    const handleAddPayment = async () => {
        await addPayment({ amount, userId });
        onPaymentAdded(); // Callback to refresh payment list or handle post-addition actions
        setAmount('');
        setUserId('');
    };

    return (
        <div>
            <h2>Add New Payment</h2>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleAddPayment}>Add Payment</button>
        </div>
    );
};

export default PaymentAdd;
