const apiHelper = require('../utils/apiHelper');

const TIMES_API_URL = process.env.TIMES_API_URL;
const TIMES_API_KEY = process.env.TIMES_API_KEY;

async function searchAds(query) {
  try {
    const response = await apiHelper.get(`${TIMES_API_URL}?q=${encodeURIComponent(query)}&api-key=${TIMES_API_KEY}`, {
      headers: { 'API-Key': TIMES_API_KEY }
    });
    
    // Transform the response data to match your frontend expectations
    return response.data.advertisements.map(ad => ({
      title: ad.headline,
      description: ad.summary,
      price: ad.cost,
      link: ad.detailUrl
    }));
  } catch (error) {
    console.error('Error fetching Times ads:', error);
    if (!TIMES_API_URL || !TIMES_API_KEY) {
      throw new Error('Missing TIMES API URL or API Key');
    }
    if (!GUARDIAN_API_URL || !GUARDIAN_API_KEY) {
      throw new Error('Missing GUARDIAN API URL or API Key');
    }
    return[];
  }
}

module.exports = { searchAds };