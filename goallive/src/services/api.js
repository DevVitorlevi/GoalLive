import axios from 'axios';

const API_KEY = '69e8cbbede3c4f0c86c69b5e2fb899c0'; 
const BASE_URL = 'https://api.football-data.org/v4';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Auth-Token': API_KEY,
    'Content-Type': 'application/json',
  },
});