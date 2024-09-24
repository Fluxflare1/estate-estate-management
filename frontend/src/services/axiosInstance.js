import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Adjust the URL based on your Django API
  timeout: 1000,
});

// Optional: Add request/response interceptors here if needed

export default axiosInstance;
