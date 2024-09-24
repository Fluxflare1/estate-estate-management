// frontend/src/components/EnergyBilling/EnergyBillingForm.js
import React, { useState } from 'react';

const EnergyBillingForm = ({ onSubmit }) => {
    const [energyPurchased, setEnergyPurchased] = useState('');
    const [meterReadings, setMeterReadings] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            energyPurchased,
            meterReadings
        };
        onSubmit(data);
        // Reset the form
        setEnergyPurchased('');
        setMeterReadings([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Energy Billing Input</h3>
            <label>
                Total Energy Purchased (₦):
                <input
                    type="number"
                    value={energyPurchased}
                    onChange={(e) => setEnergyPurchased(e.target.value)}
                    required
                />
            </label>
            <label>
                Meter Readings:
                <textarea
                    value={meterReadings}
                    onChange={(e) => setMeterReadings(e.target.value.split(','))}
                    placeholder="Enter meter readings separated by commas"
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EnergyBillingForm;
