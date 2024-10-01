// src/utils/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // base URL for your API
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any custom headers if needed, but no token here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data; // Return the data directly
  },
  (error) => {
    // Handle errors globally
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
