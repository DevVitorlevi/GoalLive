// src/components/MatchCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MatchCardContainer, Teams, Team, Score, MatchTime, CompetitionInfo } from '../styles/MatchCard';
import dayjs from 'dayjs';

export const MatchCard = ({ match }) => {
    const navigate = useNavigate();

    const handleMatchClick = () => {
        navigate(`/estatisticas/${match.id}`);
    };

    const getMatchStatus = () => {
        if (['1H', '2H', 'HT'].includes(match.status)) return `${match.minute}'`;
        if (match.status === 'HT') return 'Intervalo';
        if (['FT', 'AET', 'PEN'].includes(match.status)) return 'Encerrado';
        return dayjs(match.date).format('HH:mm');
    };

    return (
        <MatchCardContainer onClick={handleMatchClick} status={match.status}>
            <CompetitionInfo>
                <span>{match.competition.name}</span>
                {match.competition.area.flag && (
                    <img src={match.competition.area.flag} alt={match.competition.area.name} height="20" />
                )}
            </CompetitionInfo>

            <Teams>
                <Team>
                    <img
                        src={match.homeTeam.crest || 'https://via.placeholder.com/30'}
                        alt={match.homeTeam.name}
                        width="30"
                        height="30"
                    />
                    <span>{match.homeTeam.shortName || match.homeTeam.name}</span>
                </Team>

                <Score>
                    {match.score.fullTime.home !== null ? (
                        <>
                            <span>{match.score.fullTime.home}</span>
                            <span>:</span>
                            <span>{match.score.fullTime.away}</span>
                        </>
                    ) : (
                        <MatchTime status={match.status}>{getMatchStatus()}</MatchTime>
                    )}
                </Score>

                <Team>
                    <img
                        src={match.awayTeam.crest || 'https://via.placeholder.com/30'}
                        alt={match.awayTeam.name}
                        width="30"
                        height="30"
                    />
                    <span>{match.awayTeam.shortName || match.awayTeam.name}</span>
                </Team>
            </Teams>
        </MatchCardContainer>
    );
};