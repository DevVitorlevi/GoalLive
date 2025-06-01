import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import LeagueSection from '../components/LeagueSection';
import { getMatches } from '../services/api';
import {
    HomeContainer,
    Header,
    Title,
    DateInfo,
    FilterContainer,
    FilterButton,
    LoadingMessage
} from '../styles/HomeStyles';

dayjs.locale('pt-br');

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

    const today = dayjs().format('dddd, D [de] MMMM [de] YYYY');

    if (loading) return (
        <LoadingMessage>
            Carregando partidas...
        </LoadingMessage>
    );

    return (
        <HomeContainer>
            <Header>
                <Title>GOALLIVE</Title>
                <DateInfo>Hoje, {today}</DateInfo>
            </Header>

            <FilterContainer>
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
            </FilterContainer>

            {Object.values(matchesByLeague).length > 0 ? (
                Object.values(matchesByLeague)
                    .sort((a, b) => b.matches.length - a.matches.length)
                    .map(({ league, matches }) => (
                        <LeagueSection
                            key={league.id}
                            league={league}
                            matches={matches}
                        />
                    ))
            ) : (
                <LoadingMessage>Nenhuma partida encontrada</LoadingMessage>
            )}
        </HomeContainer>
    );
}
