// services/auth.js
import axios from 'axios';

export async function login(credentials) {
  return axios.post('http://localhost:5000/api/auth/login', credentials);
}

export async function register(userData) {
  return axios.post('http://localhost:5000/api/auth/register', userData);
}

export async function getUserProfile() {
  return axios.get('http://localhost:5000/api/auth/profile');
}



