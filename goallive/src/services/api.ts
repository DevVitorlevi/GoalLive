import axios from 'axios';

const API_KEY = 'SUA_API_KEY_AQUI';
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
});

// Buscar campeonatos prioritários
export const getLeagues = async () => {
    try {
        const response = await axiosInstance.get('/leagues');
        const leagues = response.data.response;

        const priorityLeagues = leagues.filter((league: any) =>
            [
                'Campeonato Brasileiro Série A',
                'Campeonato Brasileiro Série B',
                'Copa do Brasil',
                'Copa Libertadores',
                'Copa Sudamericana',
                'Premier League',
                'La Liga',
                'Serie A',
                'Bundesliga',
                'Ligue 1',
                'UEFA Champions League',
                'Copa do Mundo',
                'Copa Intercontinental',
            ].includes(league.league.name)
        );

        return priorityLeagues;
    } catch (error) {
        console.error('Erro ao buscar campeonatos:', error);
        return [];
    }
};

// Buscar jogos do dia (vivos, futuros, passados) por campeonato
export const getFixturesByLeagueAndDate = async (leagueId: number, date: string) => {
    try {
        const response = await axiosInstance.get('/fixtures', {
            params: {
                league: leagueId,
                date: date, // formato YYYY-MM-DD
            },
        });

        return response.data.response;
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        return [];
    }
};

// Buscar jogos ao vivo
export const getLiveFixturesByLeague = async (leagueId: number) => {
    try {
        const response = await axiosInstance.get('/fixtures', {
            params: {
                league: leagueId,
                live: 'all',
            },
        });

        return response.data.response;
    } catch (error) {
        console.error('Erro ao buscar jogos ao vivo:', error);
        return [];
    }
};

// Buscar tabela de classificação de um campeonato
export const getStandings = async (leagueId: number) => {
    try {
        const response = await axiosInstance.get('/standings', {
            params: {
                league: leagueId,
            },
        });

        return response.data.response[0]?.league.standings[0] || [];
    } catch (error) {
        console.error('Erro ao buscar tabela de classificação:', error);
        return [];
    }
};
