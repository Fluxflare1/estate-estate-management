// frontend/src/components/EnergyBilling/TenantBillingInfo.js
import React from 'react';

const TenantBillingInfo = ({ tenant }) => {
    return (
        <div>
            <h4>Billing Info for {tenant.name}</h4>
            <p>Total Consumption: {tenant.totalConsumption} kWh</p>
            <p>Amount Owed: ₦{tenant.amountOwed}</p>
            <p>Payments Made: ₦{tenant.paymentsMade}</p>
            <p>Outstanding Balance: ₦{tenant.outstandingBalance}</p>
        </div>
    );
};

export default TenantBillingInfo;
