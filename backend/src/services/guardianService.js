const axios = require('axios');

// Load API URL and API key from environment variables
const GUARDIAN_API_URL = process.env.GUARDIAN_API_URL;
const GUARDIAN_API_KEY = process.env.GUARDIAN_API_KEY;

const guardianService = {
  searchAds: async (query) => {
    // Check if the necessary environment variables are present
    if (!GUARDIAN_API_URL || !GUARDIAN_API_KEY) {
      console.error('Guardian API URL or API Key missing');
      throw new Error('Missing GUARDIAN API URL or API Key');
    }

    // Construct the request URL
    const url = `${GUARDIAN_API_URL}?q=${query}&api-key=${GUARDIAN_API_KEY}`;
    console.log("Requesting URL: ", url); // Log the constructed URL

    try {
      // Send the GET request to the Guardian API
      const response = await axios.get(url);
      
      // Log the response for debugging
      console.log("Guardian API Response: ", response.data);
      
      // Return the results from the response
      return response.data.response.results;
    } catch (error) {
      console.error("Error fetching Guardian data: ", error);
      throw error;
    }
  },
};

module.exports = guardianService;