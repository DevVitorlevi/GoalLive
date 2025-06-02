// src/pages/MatchDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMatchDetails } from '../services/matches';
import { MatchDetailsContainer, MatchHeader, StatsGrid, StatCard, LineupsContainer, PlayerRow, TeamLineup, TabContainer, TabButton, ContentSection, CommentaryItem, MatchSummary, RefereeInfo, StadiumInfo, WeatherInfo } from '../styles/MatchDetails';
import { MatchEvents } from '../components/MatchEvents';
import { LoadingSpinner } from '../components/Loading';
import dayjs from 'dayjs';
import { IconBallFootball, IconUser, IconCloud, IconStar, IconShirt, IconCards } from '@tabler/icons-react'

export const MatchDetails = () => {
    const { matchId } = useParams();
    const [match, setMatch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('stats');
    const [lastUpdated, setLastUpdated] = useState('');

    const fetchMatchDetails = async () => {
        try {
            const data = await getMatchDetails(matchId);
            setMatch(data);
            setLastUpdated(dayjs().format('HH:mm:ss'));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMatchDetails();
        const interval = setInterval(fetchMatchDetails, 60000);
        return () => clearInterval(interval);
    }, [matchId]);

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error}</div>;
    if (!match) return <div>Partida não encontrada</div>;

    // Organiza eventos
    const events = {
        goals: match.events?.filter(e => e.type.toLowerCase().includes('goal')) || [],
        cards: match.events?.filter(e => e.type.toLowerCase().includes('card')) || [],
        substitutions: match.events?.filter(e => e.type.toLowerCase().includes('subst')) || [],
        allEvents: match.events || []
    };

    // Formata estatísticas
    const stats = {
        possession: match.statistics?.[0]?.statistics || [],
        shots: match.statistics?.[1]?.statistics || []
    };

    return (
        <MatchDetailsContainer>
            {/* Cabeçalho e abas permanecem iguais */}
            {/* Atualize as seções conforme a nova estrutura de dados */}
        </MatchDetailsContainer>
    );
};