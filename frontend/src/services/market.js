import axios from 'axios';

const API_URL = 'http://localhost:5000/api/market';

const getMarketTrends = async () => {
  const response = await axios.get(`${API_URL}/trends`);
  return response.data;
};

const predictPrice = async (crop, season) => {
  const response = await axios.post(`${API_URL}/predict`, { crop, season });
  return response.data;
};

export default { getMarketTrends, predictPrice };
