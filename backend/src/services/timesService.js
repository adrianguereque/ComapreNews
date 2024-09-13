const axios = require('axios');

// Load API URL and API key from environment variables
const TIMES_API_URL = process.env.TIMES_API_URL;
const TIMES_API_KEY = process.env.TIMES_API_KEY;

const timesService = {
  searchAds: async (query) => {
    // Check if the necessary environment variables are present
    if (!TIMES_API_URL || !TIMES_API_KEY) {
      console.error('Times API URL or API Key missing');
      throw new Error('Missing TIMES API URL or API Key');
    }

    // Construct the request URL
    const url = `${TIMES_API_URL}?q=${query}&api-key=${TIMES_API_KEY}`;
    console.log("Requesting URL: ", url); // Log the constructed URL

    try {
      // Send the GET request to the Times API
      const response = await axios.get(url);
      
      // Log the response for debugging
      console.log("Times API Response: ", response.data);
      
      // Return the results from the response
      return response.data.response.docs; // Times API returns articles in the 'docs' field
    } catch (error) {
      console.error("Error fetching Times data: ", error);
      throw error;
    }
  },
};

module.exports = timesService;