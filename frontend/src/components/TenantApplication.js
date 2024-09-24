import React, { useState } from 'react';
import axios from 'axios';

const TenantApplication = ({ propertyId }) => {
    const [applicationStatus, setApplicationStatus] = useState('');
    
    const handleApply = async () => {
        try {
            const response = await axios.post(`/api/tenants/apply/${propertyId}/`);
            setApplicationStatus('Application submitted successfully!');
        } catch (error) {
            setApplicationStatus('Error submitting application.');
        }
    };

    return (
        <div>
            <h2>Apply to Rent</h2>
            <button onClick={handleApply}>Submit Application</button>
            {applicationStatus && <p>{applicationStatus}</p>}
        </div>
    );
};

export default TenantApplication;
