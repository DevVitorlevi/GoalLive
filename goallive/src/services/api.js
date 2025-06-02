// src/services/api.js
import axios from 'axios';

const API_KEY = '9c08267e4c40fc635cb4e89303d336a0'; // Sua chave APISports
const BASE_URL = 'https://v3.football.api-sports.io';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-apisports-key': API_KEY,
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// Interceptor para monitorar limites de requisições
api.interceptors.response.use(response => {
  const remaining = response.headers['x-ratelimit-requests-remaining'];
  console.log(`Requisições restantes hoje: ${remaining}`);
  return response;
}, error => {
  console.error('Erro na API:', error.response?.data || error.message);
  return Promise.reject(error);
});