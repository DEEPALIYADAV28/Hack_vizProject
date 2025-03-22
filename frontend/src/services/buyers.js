

export async function fetchBuyersData() {
  return axios.get('http://localhost:5000/api/buyers');
}