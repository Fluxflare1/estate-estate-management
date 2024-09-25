import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeaseManager = ({ propertyId }) => {
    const [leases, setLeases] = useState([]);
    const [newLease, setNewLease] = useState({ tenant_name: '', start_date: '', end_date: '', amount: '' });

    useEffect(() => {
        const fetchLeases = async () => {
            const response = await axios.get(`/api/leases/${propertyId}`);
            setLeases(response.data);
        };
        fetchLeases();
    }, [propertyId]);

    const addLease = async () => {
        await axios.post('/api/leases', { ...newLease, property_id: propertyId });
        setLeases([...leases, newLease]);
        setNewLease({ tenant_name: '', start_date: '', end_date: '', amount: '' });
    };

    return (
        <div>
            <h3>Lease Agreements</h3>
            <input type="text" placeholder="Tenant Name" value={newLease.tenant_name} onChange={(e) => setNewLease({ ...newLease, tenant_name: e.target.value })} />
            <input type="date" value={newLease.start_date} onChange={(e) => setNewLease({ ...newLease, start_date: e.target.value })} />
            <input type="date" value={newLease.end_date} onChange={(e) => setNewLease({ ...newLease, end_date: e.target.value })} />
            <input type="number" placeholder="Amount" value={newLease.amount} onChange={(e) => setNewLease({ ...newLease, amount: e.target.value })} />
            <button onClick={addLease}>Add Lease</button>
            <ul>
                {leases.map(lease => (
                    <li key={lease.id}>{lease.tenant_name}: {lease.start_date} to {lease.end_date} - ${lease.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default LeaseManager;
