import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Register User
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Login User
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  
  return response.data;
};

// Logout User
const logout = () => {
  localStorage.removeItem('token');
};

// Get Auth Token
const getToken = () => {
  return localStorage.getItem('token');
};

// Set Authorization Header
const setAuthHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export default { register, login, logout, getToken, setAuthHeader };
