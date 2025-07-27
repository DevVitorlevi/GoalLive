import axios from 'axios';

const BASE_URL = 'https://v3.football.api-sports.io';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-apisports-key': import.meta.env.VITE_API_KEY
  }
});

export default api;
