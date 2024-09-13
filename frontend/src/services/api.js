import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

export async function searchAds(query) {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/search`, { query });
    return response.data;
  } catch (error) {
    console.error('Error fetching ads:', error);
    throw error;
  }
}