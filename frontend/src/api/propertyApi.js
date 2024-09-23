// frontend/src/api/propertyApi.js
import axios from 'axios';

const API_URL = '/api/properties/';

export const getProperties = () => {
    return axios.get(API_URL);
};

export const createProperty = (property) => {
    return axios.post(API_URL, property);
};

export const updateProperty = (propertyId, property) => {
    return axios.put(API_URL + propertyId + '/', property);
};

export const deleteProperty = (propertyId) => {
    return axios.delete(API_URL + propertyId + '/');
};
