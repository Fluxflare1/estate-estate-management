import axios from 'axios';

const API_URL = 'http://localhost:8000/api/properties/';

export const getProperties = () => {
    return axios.get(API_URL);
};

export const createProperty = (propertyData) => {
    return axios.post(API_URL, propertyData);
};

export const updateProperty = (propertyId, propertyData) => {
    return axios.put(`${API_URL}${propertyId}/`, propertyData);
};

export const deleteProperty = (propertyId) => {
    return axios.delete(`${API_URL}${propertyId}/`);
};
