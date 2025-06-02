
import api from './api';
import dayjs from 'dayjs';
import { COMPETITIONS, ALLOWED_COMPETITION_IDS } from '../utils/competions';

export const getTodayMatches = async () => {
  const today = dayjs().format('YYYY-MM-DD');
  try {
    const response = await api.get('/fixtures', {
      params: {
        date: today,
      },
    });
    
    // 1. Filtrar apenas os campeonatos permitidos
    const filteredMatches = response.data.response.filter(match => 
      ALLOWED_COMPETITION_IDS.includes(match.league.id)
    );
    
    // 2. Ordenar as partidas filtradas
    return filteredMatches.sort((a, b) => {
      const priorityA = COMPETITIONS[a.league.id]?.priority || 3;
      const priorityB = COMPETITIONS[b.league.id]?.priority || 3;
      
      // Ordenar por prioridade (menor número primeiro)
      if (priorityA !== priorityB) return priorityA - priorityB;
      
      // Se mesma prioridade, ordenar por horário
      return new Date(a.fixture.date) - new Date(b.fixture.date);
    });
  } catch (error) {
    console.error('Error fetching today matches:', error);
    throw error;
  }
};
export const getMatchDetails = async (matchId) => {
  try {
    const response = await api.get('/fixtures', {
      params: {
        id: matchId,
      },
    });

    // Verificar se a resposta contém dados válidos
    if (!response.data || !response.data.response || response.data.response.length === 0) {
      throw new Error('Dados da partida não encontrados');
    }

    const matchData = response.data.response[0];

    // Verificar se a partida pertence a um campeonato permitido
    if (!matchData.league || !ALLOWED_COMPETITION_IDS.includes(matchData.league.id)) {
      throw new Error('Partida não pertence a um campeonato suportado');
    }

    return matchData;
  } catch (error) {
    console.error('Error fetching match details:', error);
    throw new Error(`Não foi possível obter os detalhes da partida: ${error.message}`);
  }
};
export const getMatchStatistics = async (matchId) => {
  try {
    const response = await api.get('/fixtures/statistics', {
      params: {
        fixture: matchId,
      },
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching match statistics:', error);
    throw error;
  }
};

export const getMatchEvents = async (matchId) => {
  try {
    const response = await api.get('/fixtures/events', {
      params: {
        fixture: matchId,
      },
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching match events:', error);
    throw error;
  }
};

export const getMatchLineups = async (matchId) => {
  try {
    const response = await api.get('/fixtures/lineups', {
      params: {
        fixture: matchId,
      },
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching match lineups:', error);
    throw error;
  }
};