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
