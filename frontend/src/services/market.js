
export async function fetchMarketData() {
  return axios.get('http://localhost:5000/api/market');
}