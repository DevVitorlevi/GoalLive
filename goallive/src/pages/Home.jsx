import React, { useEffect, useState } from 'react';
import { getTodayMatches } from '../services/matches';
import { LiveMatches } from '../components/LiveMatches';
import { MatchFilters } from '../components/MatchFilter';
import { LoadingSpinner } from '../components/Loading';
import { HomeContainer } from '../styles/Home'

export const Home = () => {
    const [matches, setMatches] = useState(null);
    const [filteredMatches, setFilteredMatches] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMatches = async () => {
        try {
            const data = await getTodayMatches();
            setMatches(data);
            setFilteredMatches(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFilter = ({ type, searchTerm }) => {
        if (!matches) return;

        let filtered = matches.matches;

        // Filtro por status
        if (type === 'live') {
            filtered = filtered.filter(m => m.status === 'IN_PLAY' || m.status === 'PAUSED');
        } else if (type === 'scheduled') {
            filtered = filtered.filter(m => m.status === 'SCHEDULED');
        } else if (type === 'finished') {
            filtered = filtered.filter(m => m.status === 'FINISHED');
        } else if (type !== 'all') {
            // Filtro por competição
            filtered = filtered.filter(m => m.competition.name === type);
        }

        // Filtro por busca
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(m =>
                m.homeTeam.name.toLowerCase().includes(term) ||
                m.awayTeam.name.toLowerCase().includes(term) ||
                m.competition.name.toLowerCase().includes(term)
            )
        }

        setFilteredMatches({ ...matches, matches: filtered });
    };

    useEffect(() => {
        fetchMatches();
        const interval = setInterval(fetchMatches, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error}</div>;

    return (
        <HomeContainer>
            <MatchFilters matches={matches} onFilter={handleFilter} />
            <LiveMatches matches={filteredMatches} />
        </HomeContainer>
    );
};