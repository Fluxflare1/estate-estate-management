import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EnergyBillingDashboard = () => {
    const [billingData, setBillingData] = useState([]);

    useEffect(() => {
        fetchBillingData();
    }, []);

    const fetchBillingData = async () => {
        try {
            const response = await axios.get('/api/energy-billing'); // Adjust the endpoint accordingly
            setBillingData(response.data);
        } catch (error) {
            console.error("Error fetching billing data", error);
        }
    };

    return (
        <div>
            <h1>Energy Billing Dashboard</h1>
            {/* Render billing data */}
            {billingData.map((billing, index) => (
                <div key={index}>
                    <h2>Billing Account: {billing.accountName}</h2>
                    <p>Consumption: {billing.consumption} kWh</p>
                    <p>Total Amount: ₦{billing.totalAmount}</p>
                </div>
            ))}
        </div>
    );
};

export default EnergyBillingDashboard;
// frontend/src/components/EnergyBilling/EnergyBillingDashboard.js
import React, { useState } from 'react';
import EnergyBillingForm from './EnergyBillingForm';
import TenantBillingInfo from './TenantBillingInfo';

const EnergyBillingDashboard = () => {
    const [tenants, setTenants] = useState([]);

    const handleBillingSubmit = (data) => {
        // Process the billing data
        // For example, make an API call to save the data
        // Then update the tenant state
        // For demonstration, we will mock tenant data
        const mockTenants = [
            { name: 'Tenant 1', totalConsumption: 300, amountOwed: 1500, paymentsMade: 500, outstandingBalance: 1000 },
            { name: 'Tenant 2', totalConsumption: 400, amountOwed: 2000, paymentsMade: 2000, outstandingBalance: 0 },
        ];
        setTenants(mockTenants);
    };

    return (
        <div>
            <h2>Energy Billing Dashboard</h2>
            <EnergyBillingForm onSubmit={handleBillingSubmit} />
            <div>
                <h3>Tenant Billing Information</h3>
                {tenants.map((tenant, index) => (
                    <TenantBillingInfo key={index} tenant={tenant} />
                ))}
            </div>
        </div>
    );
};

export default EnergyBillingDashboard;
