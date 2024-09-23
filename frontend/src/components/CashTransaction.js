// frontend/src/components/CashTransaction.js

import React, { useState } from 'react';
import axios from 'axios';

const CashTransaction = () => {
    const [amount, setAmount] = useState('');
    const [purpose, setPurpose] = useState('');

    const handleSubmit = async () => {
        await axios.post('/api/cash-transactions/', { amount, purpose });
        setAmount('');
        setPurpose('');
        // Optionally, fetch transactions again
    };

    return (
        <div>
            <h2>Record Cash Transaction</h2>
            <input 
                type="number" 
                placeholder="Amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Purpose" 
                value={purpose} 
                onChange={(e) => setPurpose(e.target.value)} 
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default CashTransaction;
