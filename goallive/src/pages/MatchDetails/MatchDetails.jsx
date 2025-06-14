import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    getMatchDetails,
    getMatchStatistics,
    getMatchEvents,
    getMatchLineups
} from '../../services/matchesService';
import { COMPETITIONS } from '../../utils/competions';
import MatchHeader from '../../components/MatchDetails/MatchHeader/MatchHeader';
import MatchStats from '../../components/MatchDetails/MatchStats/MatchStats';
import Lineups from '../../components/MatchDetails/Lineups/Lineups';
import EventsTimeline from '../../components/MatchDetails/EventsTimeline/EventsTimeline';
import Loading from '../../components/common/Loading/Loading';
import Error from '../../components/common/Error/Error';
import { MatchDetailsContainer, MatchTabs, Tab } from './MatchDetailsStyle';

const MatchDetails = () => {
    const { id } = useParams();
    const [match, setMatch] = useState(null);
    const [stats, setStats] = useState(null);
    const [events, setEvents] = useState(null);
    const [lineups, setLineups] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('stats');

    useEffect(() => {
        const fetchMatchData = async () => {
            try {
                const [matchData, statsData, eventsData, lineupsData] = await Promise.all([
                    getMatchDetails(id),
                    getMatchStatistics(id),
                    getMatchEvents(id),
                    getMatchLineups(id)
                ]);

                // Verificação adicional dos dados
                if (!matchData || !statsData || !lineupsData) {
                    throw new Error('Dados incompletos da partida');
                }

                setMatch(matchData);
                setStats(statsData);
                setEvents(eventsData);

                // Garantir que as escalações tenham a estrutura correta
                const formattedLineups = lineupsData.map(team => ({
                    ...team,
                    startXI: team.startXI || [],
                    substitutes: team.substitutes || []
                }));

                setLineups(formattedLineups);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchMatchData();
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;
    if (!match) return <Error message="Partida não encontrada" />;

    return (
        <MatchDetailsContainer>
            <MatchHeader match={match} />

            <MatchTabs>
                <Tab
                    $active={activeTab === 'stats'}
                    onClick={() => setActiveTab('stats')}
                >
                    Estatísticas
                </Tab>
                <Tab
                    $active={activeTab === 'lineups'}
                    onClick={() => setActiveTab('lineups')}
                >
                    Escalações
                </Tab>
                <Tab
                    $active={activeTab === 'events'}
                    onClick={() => setActiveTab('events')}
                >
                    Linha do Tempo
                </Tab>
            </MatchTabs>

            {activeTab === 'stats' && <MatchStats stats={stats} />}
            {activeTab === 'lineups' && <Lineups lineups={lineups} />}
            {activeTab === 'events' && <EventsTimeline events={events} />}
        </MatchDetailsContainer>
    );
};

export default MatchDetails;