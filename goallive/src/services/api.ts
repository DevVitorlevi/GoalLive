import axios from 'axios';

const api = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
    headers: {
        'x-apisports-key': '9c08267e4c40fc635cb4e89303d336a0',
    },
});

export const fetchGamesToday = async () => {
    const today = new Date().toISOString().split('T')[0];
    const response = await api.get('/fixtures', {
        params: { date: today },
    });
    return response.data;
};

export const fetchTable = async (leagueId: number, season: number) => {
    const response = await api.get('/standings', {
        params: { league: leagueId, season },
    });
    return response.data;
};

export default api;
