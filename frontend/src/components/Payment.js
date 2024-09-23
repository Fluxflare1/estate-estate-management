import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const [amount, setAmount] = useState('');

    const handlePayment = async () => {
        await axios.post('/api/payments/', { user: 1, amount, status: 'completed' }); // replace 1 with actual user ID
        // Handle success/failure
    };

    return (
        <div>
            <input type="number" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
            <button onClick={handlePayment}>Make Payment</button>
        </div>
    );
};

export default Payment;
