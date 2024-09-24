import axiosInstance from './axiosInstance';

// Fetch all tenants
export const fetchTenants = async () => {
  try {
    const response = await axiosInstance.get('/tenants/');
    return response.data; // Returns the tenant data
  } catch (error) {
    console.error('Error fetching tenants:', error);
    throw error; // Propagate error for further handling
  }
};

// Fetch all energy purchases
export const fetchEnergyPurchases = async () => {
  try {
    const response = await axiosInstance.get('/energy-purchases/');
    return response.data; // Returns energy purchase data
  } catch (error) {
    console.error('Error fetching energy purchases:', error);
    throw error; // Propagate error for further handling
  }
};

// Add more API functions as needed
