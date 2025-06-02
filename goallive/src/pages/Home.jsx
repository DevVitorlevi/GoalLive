import React, { useEffect, useState } from 'react';
import { getTodayMatches } from '../services/matches';
import { LiveMatches } from '../components/LiveMatches';
import { MatchFilters } from '../components/MatchFilter';
import { LoadingSpinner } from '../components/Loading';
import { HomeContainer } from '../styles/Home';

export const Home = () => {
    const [matches, setMatches] = useState(null);
    const [filteredMatches, setFilteredMatches] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMatches = async () => {
        try {
            setLoading(true);
            const data = await getTodayMatches();

            if (!data || data.length === 0) {
                throw new Error('Nenhuma partida encontrada');
            }

            setMatches(data);
            setFilteredMatches(data);
            setError(null);
        } catch (err) {
            console.error('Erro ao buscar partidas:', err);
            setError(err.message);
            setMatches([]);
            setFilteredMatches([]);
        } finally {
            setLoading(false);
        }
    };

    const handleFilter = ({ type, searchTerm }) => {
        if (!matches || matches.length === 0) return;

        let filtered = [...matches];

        // Filtros atualizados para APISports
        if (type === 'live') {
            filtered = filtered.filter(m => ['1H', '2H', 'HT'].includes(m.status));
        } else if (type === 'scheduled') {
            filtered = filtered.filter(m => m.status === 'NS');
        } else if (type === 'finished') {
            filtered = filtered.filter(m => ['FT', 'AET', 'PEN'].includes(m.status));
        } else if (type !== 'all') {
            filtered = filtered.filter(m => m.competition?.name === type);
        }

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(m =>
                m.homeTeam?.name?.toLowerCase().includes(term) ||
                m.awayTeam?.name?.toLowerCase().includes(term) ||
                m.competition?.name?.toLowerCase().includes(term)
            );
        }

        setFilteredMatches(filtered);
    };

    useEffect(() => {
        fetchMatches();

        // Atualiza a cada 1 minuto (60000 ms)
        const interval = setInterval(fetchMatches, 60000);

        // Limpa o intervalo quando o componente desmontar
        return () => clearInterval(interval);
    }, []);

    if (loading && !matches) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <HomeContainer>
                <div style={{ color: '#ff3333', textAlign: 'center', padding: '2rem' }}>
                    Erro: {error}
                    <button
                        onClick={fetchMatches}
                        style={{
                            marginTop: '1rem',
                            padding: '0.5rem 1rem',
                            background: '#00ff87',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Tentar novamente
                    </button>
                </div>
            </HomeContainer>
        );
    }

    return (
        <HomeContainer>
            <MatchFilters matches={{ matches }} onFilter={handleFilter} />
            {filteredMatches && <LiveMatches matches={filteredMatches} />}
        </HomeContainer>
    );
};