import React, { useState } from 'react';
import axios from 'axios';

const EnergyBillingForm = () => {
    const [energyPurchased, setEnergyPurchased] = useState(0);
    const [meterReading, setMeterReading] = useState(0);
    const [tenantId, setTenantId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/energy-billing', {
                energyPurchased,
                meterReading,
                tenantId,
            });
            alert('Billing data submitted successfully');
        } catch (error) {
            console.error("Error submitting billing data", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Submit Energy Billing</h1>
            <input
                type="number"
                placeholder="Total Energy Purchased"
                value={energyPurchased}
                onChange={(e) => setEnergyPurchased(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Current Meter Reading"
                value={meterReading}
                onChange={(e) => setMeterReading(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Tenant ID"
                value={tenantId}
                onChange={(e) => setTenantId(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default EnergyBillingForm;
// frontend/src/components/EnergyBilling/EnergyBillingForm.js
import './EnergyBillingForm.scss';
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
