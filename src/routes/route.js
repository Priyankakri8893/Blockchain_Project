const express= require('express')
const router= express.Router()
const axios = require('axios');


// Endpoint to retrieve the top 100 coins
router.get('/api/top-coins', async (req, res) => {
  try {
    const response = await axios.get('https://api.coincap.io/v2/assets');
    const coins = response.data.data;

    // Sort coins based on growth in the last 24 hours
    coins.sort((a, b) => {
      const percentChangeA = parseFloat(a.changePercent24Hr);
      const percentChangeB = parseFloat(b.changePercent24Hr);
      return percentChangeB - percentChangeA;
    });

    // Create an array of formatted coin objects
    const formattedCoins = coins.map((coin) => ({
      symbol: coin.symbol,
      name: coin.name,
      marketCapUsd: coin.marketCapUsd,
      priceUsd: coin.priceUsd,
    }));

    res.status(200).send(formattedCoins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports= router