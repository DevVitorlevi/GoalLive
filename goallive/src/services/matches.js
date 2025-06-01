import { api } from './api';

export const getTodayMatches = async () => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const response = await api.get(`/matches?date=${today}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching today matches:', error);
    throw error;
  }
};

export const getMatchDetails = async (matchId) => {
  try {
    const response = await api.get(`/matches/${matchId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching match details:', error);
    throw error;
  }
};

export const getCompetitionMatches = async (competitionId) => {
  try {
    const response = await api.get(`/competitions/${competitionId}/matches`);
    return response.data;
  } catch (error) {
    console.error('Error fetching competition matches:', error);
    throw error;
  }
};

export const getTeamMatches = async (teamId) => {
  try {
    const response = await api.get(`/teams/${teamId}/matches`);
    return response.data;
  } catch (error) {
    console.error('Error fetching team matches:', error);
    throw error;
  }
};