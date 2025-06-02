import React, { useState, useEffect } from 'react';
import { getTodayMatches } from '../../services/matchesService.js';
import MatchStatusTabs from '../../components/matches/MatchStatusTab/MatchStatusTab.jsx';
import LeagueSection from '../../components/matches/LeagueSection/LeagueSection.jsx';
import Loading from '../../components/common/Loading/Loading.jsx';
import Error from '../../components/common/Error/Errora.jsx';
import { HomeContainer } from './Home.js';

const Home = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

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

        // Set up interval for live updates (every 30 seconds)
        const intervalId = setInterval(fetchMatches, 30000);

        return () => clearInterval(intervalId);
    }, []);

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    // Group matches by league
    const matchesByLeague = matches.reduce((acc, match) => {
        const leagueId = match.league.id;
        if (!acc[leagueId]) {
            acc[leagueId] = {
                league: match.league,
                matches: [],
            };
        }
        acc[leagueId].matches.push(match);
        return acc;
    }, {});

    // Filter matches based on active tab
    const filteredMatchesByLeague = Object.values(matchesByLeague).map((league) => ({
        ...league,
        matches: league.matches.filter((match) => {
            if (activeTab === 'all') return true;
            if (activeTab === 'live') return match.fixture.status.short === 'LIVE';
            if (activeTab === 'finished') return match.fixture.status.short === 'FT';
            if (activeTab === 'scheduled') return match.fixture.status.short === 'NS';
            return true;
        }),
    }));

    // Remove leagues with no matches after filtering
    const leaguesToDisplay = filteredMatchesByLeague.filter(
        (league) => league.matches.length > 0
    );

    return (
        <HomeContainer>
            <MatchStatusTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {leaguesToDisplay.length > 0 ? (
                leaguesToDisplay.map((leagueData) => (
                    <LeagueSection
                        key={leagueData.league.id}
                        league={leagueData.league}
                        matches={leagueData.matches}
                    />
                ))
            ) : (
                <p>No matches found for the selected category.</p>
            )}
        </HomeContainer>
    );
};

export default Home;