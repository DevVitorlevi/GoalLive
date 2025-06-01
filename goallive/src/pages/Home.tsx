import React, { useEffect, useState } from 'react';
import { getLeagues, getFixturesByLeagueAndDate } from '../services/api';
import ChampionshipBlock from '../components/ChampionshipBlock';

const today = new Date().toISOString().slice(0, 10); // '2025-06-01'

const Home: React.FC = () => {
    const [leagues, setLeagues] = useState<any[]>([]);
    const [fixturesByLeague, setFixturesByLeague] = useState<{ [key: number]: any[] }>({});

    useEffect(() => {
        const fetchData = async () => {
            const leaguesData = await getLeagues();
            setLeagues(leaguesData);

            // Para cada campeonato, buscar jogos do dia
            const fixturesMap: { [key: number]: any[] } = {};
            for (const league of leaguesData) {
                const fixtures = await getFixturesByLeagueAndDate(league.league.id, today);
                fixturesMap[league.league.id] = fixtures;
            }
            setFixturesByLeague(fixturesMap);
        };

        fetchData();
    }, []);

    return (
        <div style={{ padding: 20, backgroundColor: '#000', color: '#fff' }}>
            <h1>Os jogos de hoje</h1>
            <p>{new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>

            {leagues.map((league) => (
                <ChampionshipBlock
                    key={league.league.id}
                    league={league}
                    fixtures={fixturesByLeague[league.league.id] || []}
                />
            ))}
        </div>
    );
};

export default Home;
