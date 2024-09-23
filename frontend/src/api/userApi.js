// frontend/src/api/userApi.js
import axios from 'axios';

const API_URL = '/api/users/profile/';

export const getUserProfile = () => {
    return axios.get(API_URL);
};

export const updateUserProfile = (user) => {
    return axios.put(API_URL + user.id + '/', user);
};
