import axios from 'axios';

const API_KEY = '9c08267e4c40fc635cb4e89303d336a0';
const BASE_URL = 'https://v3.football.api-sports.io';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'v3.football.api-sports.io',
  },
});

export default api;