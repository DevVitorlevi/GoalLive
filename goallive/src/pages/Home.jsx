import { useState, useEffect } from 'react';
import LeagueSection from '../components/LeagueSection';
import { getMatches } from '../services/api';
import {
    HomeContainer,
    Title,
    Filters,
    FilterButton
} from '../styles/HomeStyles';

export default function Home() {
    const [matches, setMatches] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const data = await getMatches();
                setMatches(data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    const filteredMatches = matches.filter(match => {
        if (filter === 'live') return match.fixture.status.short === 'LIVE';
        if (filter === 'finished') return match.fixture.status.short === 'FT';
        if (filter === 'upcoming') return match.fixture.status.short === 'NS';
        return true;
    });

    // Agrupa as partidas por liga
    const matchesByLeague = filteredMatches.reduce((acc, match) => {
        const leagueId = match.league.id;
        if (!acc[leagueId]) {
            acc[leagueId] = {
                league: match.league,
                matches: []
            };
        }
        acc[leagueId].matches.push(match);
        return acc;
    }, {});

    if (loading) return <div>Carregando...</div>;

    return (
        <HomeContainer>
            <Title>GOALLIVE - Partidas em Tempo Real</Title>

            <Filters>
                <FilterButton
                    $active={filter === 'all'}
                    onClick={() => setFilter('all')}
                >
                    Todas
                </FilterButton>
                <FilterButton
                    $active={filter === 'live'}
                    onClick={() => setFilter('live')}
                >
                    Ao Vivo
                </FilterButton>
                <FilterButton
                    $active={filter === 'finished'}
                    onClick={() => setFilter('finished')}
                >
                    Encerradas
                </FilterButton>
                <FilterButton
                    $active={filter === 'upcoming'}
                    onClick={() => setFilter('upcoming')}
                >
                    Futuras
                </FilterButton>
            </Filters>

            {Object.values(matchesByLeague).length > 0 ? (
                Object.values(matchesByLeague).map(({ league, matches }) => (
                    <LeagueSection
                        key={league.id}
                        league={league}
                        matches={matches}
                    />
                ))
            ) : (
                <div>Nenhuma partida encontrada</div>
            )}
        </HomeContainer>
    );
}