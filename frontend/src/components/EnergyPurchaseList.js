import React, { useEffect, useState } from 'react';
import { fetchEnergyPurchases } from '../services/api';

const EnergyPurchasesList = () => {
  const [energyPurchases, setEnergyPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEnergyPurchases = async () => {
      try {
        const data = await fetchEnergyPurchases();
        setEnergyPurchases(data);
      } catch (err) {
        setError('Failed to fetch energy purchases.');
      } finally {
        setLoading(false);
      }
    };
    
    getEnergyPurchases();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Energy Purchases List</h2>
      <ul>
        {energyPurchases.map(purchase => (
          <li key={purchase.id}>
            {purchase.tenant_name}: {purchase.amount} kWh - ${purchase.total_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnergyPurchasesList;
