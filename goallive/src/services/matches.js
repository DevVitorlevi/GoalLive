// src/services/matches.js
import { api } from './api';

export const getTodayMatches = async () => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const response = await api.get('/fixtures', {
      params: {
        date: today,
        timezone: 'America/Sao_Paulo'
      }
    });
    return formatMatchesData(response.data.response);
  } catch (error) {
    console.error('Error fetching today matches:', error.response?.data || error.message);
    throw error;
  }
};

export const getMatchDetails = async (matchId) => {
  try {
    const response = await api.get('/fixtures', {
      params: {
        id: matchId,
        timezone: 'America/Sao_Paulo'
      }
    });
    return formatMatchDetails(response.data.response[0]);
  } catch (error) {
    console.error('Error fetching match details:', error);
    throw error;
  }
};

// Funções auxiliares para formatar os dados
const formatMatchesData = (matches) => {
  return matches.map(match => ({
    id: match.fixture.id,
    date: match.fixture.date,
    status: match.fixture.status.short,
    minute: match.fixture.status.elapsed,
    homeTeam: {
      id: match.teams.home.id,
      name: match.teams.home.name,
      shortName: match.teams.home.name,
      crest: match.teams.home.logo
    },
    awayTeam: {
      id: match.teams.away.id,
      name: match.teams.away.name,
      shortName: match.teams.away.name,
      crest: match.teams.away.logo
    },
    score: {
      fullTime: {
        home: match.goals.home,
        away: match.goals.away
      }
    },
    competition: {
      name: match.league.name,
      area: {
        name: match.league.country,
        flag: match.league.flag
      }
    }
  }));
};

const formatMatchDetails = (match) => {
  return {
    ...match,
    fixture: {
      ...match.fixture,
      venue: match.fixture.venue?.name || 'Estádio não informado'
    },
    teams: {
      home: {
        ...match.teams.home,
        formation: match.lineups[0]?.formation || 'N/A'
      },
      away: {
        ...match.teams.away,
        formation: match.lineups[1]?.formation || 'N/A'
      }
    },
    events: match.events.map(event => ({
      ...event,
      team: {
        name: event.team.name
      },
      player: {
        name: event.player.name
      },
      assist: event.assist ? { name: event.assist.name } : null
    }))
  };
};