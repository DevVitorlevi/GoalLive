import api from './api';
import dayjs from 'dayjs';

export const getTodayMatches = async () => {
  const today = dayjs().format('YYYY-MM-DD');
  try {
    const response = await api.get('/fixtures', {
      params: {
        date: today,
      },
    });
    return response.data.response;
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
    return response.data.response[0];
  } catch (error) {
    console.error('Error fetching match details:', error);
    throw error;
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