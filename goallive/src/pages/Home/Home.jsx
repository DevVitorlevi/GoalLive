import React, { useState, useEffect } from 'react';
import { getTodayMatches } from '../../services/matchesService';
import { ALLOWED_COMPETITION_IDS, COMPETITIONS } from '../../utils/competitions';
import MatchStatusTabs from '../../components/matches/MatchStatusTabs/MatchStatusTabs';
import CompetitionFilter from '../../components/matches/CompetitionFilter/CompetitionFilter';
import LeagueSection from '../../components/matches/LeagueSection/LeagueSection';
import Loading from '../../components/common/Loading/Loading';
import Error from '../../components/common/Error/ErrorStyle';
import { HomeContainer, HomeContent } from './Home.styles';

const Home = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('all');
    const [selectedCompetitions, setSelectedCompetitions] = useState(ALLOWED_COMPETITION_IDS);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const data = await getTodayMatches();
                setMatches(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchMatches();
        const intervalId = setInterval(fetchMatches, 30000);
        return () => clearInterval(intervalId);
    }, []);

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    // Filtrar e agrupar partidas
    const filteredMatches = matches.filter(match =>
        selectedCompetitions.includes(match.league.id) &&
        (activeTab === 'all' ||
            (activeTab === 'live' && match.fixture.status.short === 'LIVE') ||
            (activeTab === 'finished' && match.fixture.status.short === 'FT') ||
            (activeTab === 'scheduled' && match.fixture.status.short === 'NS'))
    );

    const matchesByLeague = filteredMatches.reduce((acc, match) => {
        const leagueId = match.league.id;
        if (!acc[leagueId]) {
            acc[leagueId] = {
                league: {
                    ...match.league,
                    ...COMPETITIONS[match.league.id]
                },
                matches: [],
            };
        }
        acc[leagueId].matches.push(match);
        return acc;
    }, {});

    const leaguesToDisplay = Object.values(matchesByLeague)
        .filter(league => league.matches.length > 0)
        .sort((a, b) => a.league.priority - b.league.priority);

    return (
        <HomeContainer>
            <CompetitionFilter
                selectedCompetitions={selectedCompetitions}
                setSelectedCompetitions={setSelectedCompetitions}
            />

            <HomeContent>
                <MatchStatusTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                {leaguesToDisplay.length > 0 ? (
                    leaguesToDisplay.map(leagueData => (
                        <LeagueSection
                            key={leagueData.league.id}
                            league={leagueData.league}
                            matches={leagueData.matches}
                        />
                    ))
                ) : (
                    <p>Nenhuma partida encontrada para os filtros selecionados.</p>
                )}
            </HomeContent>
        </HomeContainer>
    );
};

export default Home;