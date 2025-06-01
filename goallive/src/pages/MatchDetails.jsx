import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatchDetails } from '../services/matches';
import {
    MatchDetailsContainer,
    MatchHeader,
    StatsGrid,
    StatCard,
    LineupsContainer,
    PlayerRow,
    TeamLineup,
    TabContainer,
    TabButton,
    ContentSection,
    CommentaryItem,
    MatchSummary,
    RefereeInfo,
    StadiumInfo,
    WeatherInfo
} from '../styles/MatchDetails';
import { MatchEvents } from '../components/MatchEvents';
import { LoadingSpinner } from '../components/Loading';
import dayjs from 'dayjs';
import {
    IconBallFootball,
    IconUser,
    IconCloud,
    IconStar,
    IconShirt,
    IconCards,
} from '@tabler/icons-react';

import { IoMdRefresh } from 'react-icons/io';

export const MatchDetails = () => {
    const { matchId } = useParams();
    const navigate = useNavigate();
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
        const interval = setInterval(fetchMatchDetails, 60000); // Atualiza a cada minuto
        return () => clearInterval(interval);
    }, [matchId]);

    const handleRefresh = () => {
        setLoading(true);
        fetchMatchDetails();
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error}</div>;
    if (!match) return <div>Partida não encontrada</div>;

    // Organiza eventos por tipo e tempo
    const events = {
        goals: match.events?.filter(e => e.type === 'GOAL').sort((a, b) => a.time - b.time) || [],
        cards: match.events?.filter(e => e.type.includes('CARD')).sort((a, b) => a.time - b.time) || [],
        substitutions: match.events?.filter(e => e.type === 'SUBSTITUTION').sort((a, b) => a.time - b.time) || [],
        allEvents: match.events?.sort((a, b) => a.time - b.time) || []
    };

    // Formação dos times
    const homeFormation = match.homeTeam?.formation?.split('-').join('-') || 'N/A';
    const awayFormation = match.awayTeam?.formation?.split('-').join('-') || 'N/A';

    return (
        <MatchDetailsContainer>
            <MatchHeader>
                <div className="team">
                    <img
                        src={match.homeTeam.crest || 'https://via.placeholder.com/50'}
                        alt={match.homeTeam.name}
                        width="50"
                        height="50"
                    />
                    <span>{match.homeTeam.shortName || match.homeTeam.name}</span>
                </div>

                <div className="score-time">
                    {match.status === 'FINISHED' ? (
                        <>
                            <span className="score">
                                {match.score.fullTime.home} - {match.score.fullTime.away}
                            </span>
                            <span className="status">Encerrado</span>
                        </>
                    ) : match.status === 'IN_PLAY' ? (
                        <>
                            <span className="score">
                                {match.score.fullTime.home !== null ? match.score.fullTime.home : '0'} -
                                {match.score.fullTime.away !== null ? match.score.fullTime.away : '0'}
                            </span>
                            <span className="status">{match.minute}'</span>
                        </>
                    ) : (
                        <>
                            <span className="time">{dayjs(match.utcDate).format('HH:mm')}</span>
                            <span className="status">Agendado</span>
                        </>
                    )}
                </div>

                <div className="team">
                    <img
                        src={match.awayTeam.crest || 'https://via.placeholder.com/50'}
                        alt={match.awayTeam.name}
                        width="50"
                        height="50"
                    />
                    <span>{match.awayTeam.shortName || match.awayTeam.name}</span>
                </div>
            </MatchHeader>

            <div className="match-info">
                <StadiumInfo>
                    <FaStar /> {match.venue || 'Estádio não informado'}
                </StadiumInfo>
                {match.referees?.length > 0 && (
                    <RefereeInfo>
                        <FaUserTie /> Árbitro: {match.referees[0].name}
                    </RefereeInfo>
                )}
                {match.weather && (
                    <WeatherInfo>
                        <FaCloudSun /> {match.weather.description} ({match.weather.temperature}°C)
                    </WeatherInfo>
                )}
                <div className="last-updated">
                    <button onClick={handleRefresh}>
                        <IoMdRefresh /> Atualizar
                    </button>
                    <span>Última atualização: {lastUpdated}</span>
                </div>
            </div>

            <TabContainer>
                <TabButton
                    active={activeTab === 'stats'}
                    onClick={() => setActiveTab('stats')}
                >
                    Estatísticas
                </TabButton>
                <TabButton
                    active={activeTab === 'lineups'}
                    onClick={() => setActiveTab('lineups')}
                >
                    Escalações
                </TabButton>
                <TabButton
                    active={activeTab === 'events'}
                    onClick={() => setActiveTab('events')}
                >
                    Eventos
                </TabButton>
                <TabButton
                    active={activeTab === 'commentary'}
                    onClick={() => setActiveTab('commentary')}
                >
                    Comentários
                </TabButton>
            </TabContainer>

            {activeTab === 'stats' && (
                <ContentSection>
                    <h3>Estatísticas da Partida</h3>
                    <StatsGrid>
                        <StatCard>
                            <h4>Posse de Bola</h4>
                            <div>
                                <span>{match.statistics?.possession?.home || '0'}%</span>
                                <progress value={match.statistics?.possession?.home || 0} max="100"></progress>
                                <span>{match.statistics?.possession?.away || '0'}%</span>
                            </div>
                        </StatCard>

                        <StatCard>
                            <h4>Finalizações</h4>
                            <div>
                                <span>{match.statistics?.shots?.home || '0'}</span>
                                <progress
                                    value={match.statistics?.shots?.home || 0}
                                    max={Math.max(match.statistics?.shots?.home || 0, match.statistics?.shots?.away || 0, 1)}
                                ></progress>
                                <span>{match.statistics?.shots?.away || '0'}</span>
                            </div>
                        </StatCard>

                        <StatCard>
                            <h4>Finalizações no Gol</h4>
                            <div>
                                <span>{match.statistics?.shotsOnTarget?.home || '0'}</span>
                                <progress
                                    value={match.statistics?.shotsOnTarget?.home || 0}
                                    max={Math.max(match.statistics?.shotsOnTarget?.home || 0, match.statistics?.shotsOnTarget?.away || 0, 1)}
                                ></progress>
                                <span>{match.statistics?.shotsOnTarget?.away || '0'}</span>
                            </div>
                        </StatCard>

                        <StatCard>
                            <h4>Escanteios</h4>
                            <div>
                                <span>{match.statistics?.corners?.home || '0'}</span>
                                <progress
                                    value={match.statistics?.corners?.home || 0}
                                    max={Math.max(match.statistics?.corners?.home || 0, match.statistics?.corners?.away || 0, 1)}
                                ></progress>
                                <span>{match.statistics?.corners?.away || '0'}</span>
                            </div>
                        </StatCard>

                        <StatCard>
                            <h4>Faltas</h4>
                            <div>
                                <span>{match.statistics?.fouls?.home || '0'}</span>
                                <progress
                                    value={match.statistics?.fouls?.home || 0}
                                    max={Math.max(match.statistics?.fouls?.home || 0, match.statistics?.fouls?.away || 0, 1)}
                                ></progress>
                                <span>{match.statistics?.fouls?.away || '0'}</span>
                            </div>
                        </StatCard>

                        <StatCard>
                            <h4>Impedimentos</h4>
                            <div>
                                <span>{match.statistics?.offsides?.home || '0'}</span>
                                <progress
                                    value={match.statistics?.offsides?.home || 0}
                                    max={Math.max(match.statistics?.offsides?.home || 0, match.statistics?.offsides?.away || 0, 1)}
                                ></progress>
                                <span>{match.statistics?.offsides?.away || '0'}</span>
                            </div>
                        </StatCard>
                    </StatsGrid>

                    <MatchSummary>
                        <h4>Resumo da Partida</h4>
                        <div className="summary-grid">
                            <div>
                                <span>Cartões Amarelos</span>
                                <span>
                                    <FaYellowCard color="#ffcc00" /> {events.cards.filter(c => c.type === 'YELLOW_CARD').length}
                                </span>
                            </div>
                            <div>
                                <span>Cartões Vermelhos</span>
                                <span>
                                    <FaRedCard color="#ff3333" /> {events.cards.filter(c => c.type === 'RED_CARD').length}
                                </span>
                            </div>
                            <div>
                                <span>Substituições</span>
                                <span>
                                    <FaSubway /> {events.substitutions.length}
                                </span>
                            </div>
                            <div>
                                <span>Formação</span>
                                <span>{homeFormation} vs {awayFormation}</span>
                            </div>
                        </div>
                    </MatchSummary>
                </ContentSection>
            )}

            {activeTab === 'lineups' && match.lineups && (
                <ContentSection>
                    <h3>Escalações</h3>
                    <LineupsContainer>
                        <TeamLineup>
                            <h4>{match.homeTeam.shortName || match.homeTeam.name} ({homeFormation})</h4>
                            <h5>Titulares</h5>
                            {match.lineups[0]?.startXI?.map((player, index) => (
                                <PlayerRow key={`home-${index}`}>
                                    <span className="number">{player.player.number}</span>
                                    <span className="name">{player.player.name}</span>
                                    <span className="position">{player.player.position}</span>
                                </PlayerRow>
                            ))}
                            <h5>Reservas</h5>
                            {match.lineups[0]?.substitutes?.map((player, index) => (
                                <PlayerRow key={`home-sub-${index}`}>
                                    <span className="number">{player.player.number}</span>
                                    <span className="name">{player.player.name}</span>
                                    <span className="position">{player.player.position}</span>
                                </PlayerRow>
                            ))}
                        </TeamLineup>

                        <TeamLineup>
                            <h4>{match.awayTeam.shortName || match.awayTeam.name} ({awayFormation})</h4>
                            <h5>Titulares</h5>
                            {match.lineups[1]?.startXI?.map((player, index) => (
                                <PlayerRow key={`away-${index}`}>
                                    <span className="number">{player.player.number}</span>
                                    <span className="name">{player.player.name}</span>
                                    <span className="position">{player.player.position}</span>
                                </PlayerRow>
                            ))}
                            <h5>Reservas</h5>
                            {match.lineups[1]?.substitutes?.map((player, index) => (
                                <PlayerRow key={`away-sub-${index}`}>
                                    <span className="number">{player.player.number}</span>
                                    <span className="name">{player.player.name}</span>
                                    <span className="position">{player.player.position}</span>
                                </PlayerRow>
                            ))}
                        </TeamLineup>
                    </LineupsContainer>
                </ContentSection>
            )}

            {activeTab === 'events' && (
                <ContentSection>
                    <h3>Eventos da Partida</h3>
                    <div className="events-tabs">
                        <button
                            className={activeTab === 'all' ? 'active' : ''}
                            onClick={() => setActiveTab('all')}
                        >
                            Todos Eventos
                        </button>
                        <button
                            className={activeTab === 'goals' ? 'active' : ''}
                            onClick={() => setActiveTab('goals')}
                        >
                            <FaFutbol /> Gols
                        </button>
                        <button
                            className={activeTab === 'cards' ? 'active' : ''}
                            onClick={() => setActiveTab('cards')}
                        >
                            Cartões
                        </button>
                        <button
                            className={activeTab === 'subs' ? 'active' : ''}
                            onClick={() => setActiveTab('subs')}
                        >
                            Substituições
                        </button>
                    </div>

                    {activeTab === 'all' && <MatchEvents events={events.allEvents} />}
                    {activeTab === 'goals' && <MatchEvents events={events.goals} />}
                    {activeTab === 'cards' && <MatchEvents events={events.cards} />}
                    {activeTab === 'subs' && <MatchEvents events={events.substitutions} />}
                </ContentSection>
            )}

            {activeTab === 'commentary' && (
                <ContentSection>
                    <h3>Comentários da Partida</h3>
                    {match.commentary?.length > 0 ? (
                        match.commentary.map((item, index) => (
                            <CommentaryItem key={index}>
                                <span className="time">{item.time}'</span>
                                <p>{item.text}</p>
                                {item.important && <span className="highlight">Destaque</span>}
                            </CommentaryItem>
                        ))
                    ) : (
                        <p>Nenhum comentário disponível para esta partida.</p>
                    )}
                </ContentSection>
            )}
        </MatchDetailsContainer>
    );
};