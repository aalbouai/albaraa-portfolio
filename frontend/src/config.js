import axios from 'axios';

// API Configuration
// In production, use the environment variable for the backend URL
// In development, use the Vite proxy (empty string means relative URLs)
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// Create axios instance with base URL
export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Export the base URL for direct use if needed
export const API_URL = API_BASE_URL;

