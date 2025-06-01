import axios from 'axios';

const API_KEY = 'SUA_API_KEY_AQUI'; // Substitua pela sua chave da Football-Data.org
const BASE_URL = 'https://api.football-data.org/v4';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Auth-Token': API_KEY,
    'Content-Type': 'application/json',
  },
});