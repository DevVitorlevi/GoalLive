import axios from 'axios';

const API_KEY = '9c08267e4c40fc635cb4e89303d336a0'; // Substitua pela sua chave
const BASE_URL = 'https://v3.football.api-sports.io';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'v3.football.api-sports.io'
  }
});

export const getMatches = async (date = 'today') => {
  try {
    const response = await api.get('/fixtures', {
      params: {
        date: date === 'today' ? new Date().toISOString().split('T')[0] : date,
        timezone: 'America/Sao_Paulo' 
      }
    });
    
    // Ordena as partidas: ao vivo primeiro, depois encerradas, depois futuras
    return response.data.response.sort((a, b) => {
      if (a.fixture.status.short === 'LIVE') return -1;
      if (b.fixture.status.short === 'LIVE') return 1;
      if (a.fixture.status.short === 'FT') return -1;
      if (b.fixture.status.short === 'FT') return 1;
      return new Date(a.fixture.date) - new Date(b.fixture.date);
    });
    
  } catch (error) {
    console.error('Error fetching matches:', error);
    return [];
  }
};