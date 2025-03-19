import axios from 'axios';
import authService from './auth';

const API_URL = 'http://localhost:5000/api/buyers';

const getBuyers = async () => {
  const response = await axios.get(API_URL, { headers: authService.setAuthHeader() });
  return response.data;
};

const addBuyer = async (buyerData) => {
  const response = await axios.post(API_URL, buyerData, { headers: authService.setAuthHeader() });
  return response.data;
};

export default { getBuyers, addBuyer };
