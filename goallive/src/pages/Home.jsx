import React, { useEffect, useState } from 'react';
import { getTodayMatches } from '../services/matches';
import { LiveMatches } from '../../components/matches/LiveMatches';
import { HomeContainer } from '../styles/home';

export const Home = () => {
    const [matches, setMatches] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const data = await getTodayMatches();
                setMatches(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
        // Atualização periódica a cada 1 minuto
        const interval = setInterval(fetchMatches, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <HomeContainer>
            <LiveMatches matches={matches} />
        </HomeContainer>
    );
};