import React, { useEffect, useState } from 'react';
import { fetchTenants } from '../services/api';

const TenantsList = () => {
  const [tenants, setTenants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTenants = async () => {
      try {
        const data = await fetchTenants();
        setTenants(data);
      } catch (err) {
        setError('Failed to fetch tenants.');
      }
    };
    
    getTenants();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Tenants List</h2>
      <ul>
        {tenants.map(tenant => (
          <li key={tenant.id}>{tenant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TenantsList;
