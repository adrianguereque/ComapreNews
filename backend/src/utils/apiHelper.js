const axios = require('axios');

async function get(url, config = {}) {
  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

module.exports = { get };