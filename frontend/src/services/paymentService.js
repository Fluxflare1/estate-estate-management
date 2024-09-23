import axios from 'axios';

const API_URL = 'http://localhost:8000/api/payments/';

export const getPayments = () => {
    return axios.get(API_URL);
};

export const createPayment = (paymentData) => {
    return axios.post(API_URL, paymentData);
};

export const updatePayment = (paymentId, paymentData) => {
    return axios.put(`${API_URL}${paymentId}/`, paymentData);
};

export const deletePayment = (paymentId) => {
    return axios.delete(`${API_URL}${paymentId}/`);
};
