const apiHelper = require('../utils/apiHelper');

const GUARDIAN_API_URL = process.env.GUARDIAN_API_URL;
const GUARDIAN_API_KEY = process.env.GUARDIAN_API_KEY;

async function searchAds(query) {
  try {
    const response = await apiHelper.get(`${GUARDIAN_API_URL}?q=${encodeURIComponent(query)}&api-key=${GUARDIAN_API_KEY}`, {
      headers: { 'API-Key': GUARDIAN_API_KEY }
    });
    
    // Transform the response data to match your frontend expectations
    return response.data.ads.map(ad => ({
      title: ad.title,
      description: ad.description,
      price: ad.price,
      link: ad.url
    }));
  } catch (error) {
    console.error('Error fetching The Guardian ads:', error);
    return [];
  }
}

module.exports = { searchAds };