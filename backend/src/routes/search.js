const express = require('express');
const router = express.Router();
const guardianService = require('../services/guardianService');
const timesService = require('../services/timesService');

router.post('/search', async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    const guardianAds = await guardianService.searchAds(query);
    const timesAds = await timesService.searchAds(query);

    res.json({
      Guardian: guardianAds,
      Times: timesAds,
    });
  } catch (error) {
    console.error('Error in search route:', error);
    res.status(500).json({ error: 'An error occurred while fetching ads' });
  }
});

module.exports = router;