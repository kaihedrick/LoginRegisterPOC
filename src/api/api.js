// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7161', // Replace with your API base URL
});

// Interceptor to add token to headers if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const registerUser = async (userData) => api.post('/api/User/register', userData);
export const loginUser = async (credentials) => api.post('/api/User/login', credentials);

export default api;
