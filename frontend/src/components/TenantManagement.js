import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TenantManagement = () => {
    const [tenants, setTenants] = useState([]);

    useEffect(() => {
        const fetchTenants = async () => {
            const response = await axios.get('/api/tenants/');
            setTenants(response.data);
        };

        fetchTenants();
    }, []);

    const handleApproval = async (tenantId) => {
        await axios.patch(`/api/tenants/approve/${tenantId}/`);
        setTenants(tenants.map(tenant => tenant.id === tenantId ? { ...tenant, status: 'approved' } : tenant));
    };

    const handleRejection = async (tenantId) => {
        await axios.patch(`/api/tenants/reject/${tenantId}/`);
        setTenants(tenants.map(tenant => tenant.id === tenantId ? { ...tenant, status: 'rejected' } : tenant));
    };

    return (
        <div>
            <h2>Tenant Management</h2>
            <ul>
                {tenants.map(tenant => (
                    <li key={tenant.id}>
                        {tenant.user.username} - {tenant.property.title} - {tenant.status}
                        {tenant.status === 'pending' && (
                            <>
                                <button onClick={() => handleApproval(tenant.id)}>Approve</button>
                                <button onClick={() => handleRejection(tenant.id)}>Reject</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TenantManagement;
