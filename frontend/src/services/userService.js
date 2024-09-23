import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users/'; // Change this URL according to your backend configuration

export const getUsers = () => {
    return axios.get(API_URL);
};

export const createUser = (userData) => {
    return axios.post(API_URL, userData);
};

export const updateUser = (userId, userData) => {
    return axios.put(`${API_URL}${userId}/`, userData);
};

export const deleteUser = (userId) => {
    return axios.delete(`${API_URL}${userId}/`);
};
