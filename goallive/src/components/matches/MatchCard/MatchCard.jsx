import React from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import {
    MatchCardContainer,
    TeamsContainer,
    Team,
    TeamName,
    ScoreContainer,
    MatchStatus
} from './MatchCardStyle';

const MatchCard = ({ match }) => {
    const navigate = useNavigate();
    const { fixture, teams, goals } = match;
    const isLive = ['LIVE', 'HT', 'ET', 'PEN'].includes(fixture.status.short);
    const isFinished = ['FT', 'AET', 'PEN'].includes(fixture.status.short);

    const handleCardClick = () => {
        navigate(`/match/${fixture.id}`);
    };

    const getMatchStatus = () => {
        if (isLive) {
            if (fixture.status.short === 'HT') return 'Intervalo';
            if (fixture.status.short === 'ET') return 'Prorrogação';
            if (fixture.status.short === 'PEN') return 'Pênaltis';
            return `${fixture.status.elapsed}'`;
        }
        if (isFinished) return 'Encerrado';
        return dayjs(fixture.date).format('HH:mm');
    };

    return (
        <MatchCardContainer
            onClick={handleCardClick}
            $isLive={isLive}
            $isFinished={isFinished}
        >
            <TeamsContainer>
                <Team>
                    <img src={teams.home.logo} alt={teams.home.name} width="40" height="40" />
                    <TeamName>{teams.home.name}</TeamName>
                </Team>

                <ScoreContainer>
                    {fixture.status.short !== 'NS' ? (
                        <>
                            <span>{goals.home}</span>
                            <span>:</span>
                            <span>{goals.away}</span>
                        </>
                    ) : (
                        <span>vs</span>
                    )}
                </ScoreContainer>

                <Team>
                    <img src={teams.away.logo} alt={teams.away.name} width="40" height="40" />
                    <TeamName>{teams.away.name}</TeamName>
                </Team>
            </TeamsContainer>

            <MatchStatus $isLive={isLive} $isFinished={isFinished}>
                {getMatchStatus()}
            </MatchStatus>
        </MatchCardContainer>
    );
};

export default MatchCard;