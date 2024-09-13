import axios from 'axios';
import { normalizeGuardianAd, normalizeTimesAd } from '../utils/normalizeArticles';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

export async function searchAds(query) {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/search`, { query });
    const data = response.data;

    // Normalize data
    const normalizedData = {
      Guardian: data.Guardian.map(normalizeGuardianAd),
      Times: data.Times.map(normalizeTimesAd),
    };

    return normalizedData;
  } catch (error) {
    console.error('Error fetching ads:', error);
    throw error;
  }
}