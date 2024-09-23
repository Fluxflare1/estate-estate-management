import React, { useState } from 'react';
import { generateDocument } from '../api'; // Define this API function

const DocumentGenerator = () => {
    const [tenantId, setTenantId] = useState('');
    const [landlordId, setLandlordId] = useState('');

    const handleGenerate = async () => {
        await generateDocument({ tenantId, landlordId });
        // Logic to notify user of successful generation
    };

    return (
        <div>
            <h1>Generate Document</h1>
            <input type="text" placeholder="Tenant ID" value={tenantId} onChange={(e) => setTenantId(e.target.value)} />
            <input type="text" placeholder="Landlord ID" value={landlordId} onChange={(e) => setLandlordId(e.target.value)} />
            <button onClick={handleGenerate}>Generate</button>
        </div>
    );
};

export default DocumentGenerator;
