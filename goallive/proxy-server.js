// proxy-server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;
const API_KEY = '69e8cbbede3c4f0c86c69b5e2fb899c0';
const API_URL = 'https://api.football-data.org/v4';

app.use(cors());

app.get('/api/*', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}${req.url}`, {
      headers: {
        'X-Auth-Token': API_KEY,
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});