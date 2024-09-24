// src/components/BillingAccountForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BillingAccountForm = () => {
    const [biller, setBiller] = useState('');
    const [energyPurchased, setEnergyPurchased] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { biller, energyPurchased };
        await axios.post('/api/energy-billings/accounts/', data);
        // Handle success (e.g., show a message or redirect)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={biller} onChange={(e) => setBiller(e.target.value)} placeholder="Biller" required />
            <input type="number" value={energyPurchased} onChange={(e) => setEnergyPurchased(e.target.value)} placeholder="Energy Purchased" required />
            <button type="submit">Create Billing Account</button>
        </form>
    );
};

export default BillingAccountForm;
