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
    const isLive = fixture.status.short === 'LIVE' || fixture.status.short === 'HT';
    const isFinished = fixture.status.short === 'FT';

    const handleCardClick = () => {
        navigate(`/match/${fixture.id}`);
    };

    const getMatchStatus = () => {
        if (fixture.status.short === 'LIVE') return `${fixture.status.elapsed}'`;
        if (fixture.status.short === 'HT') return 'HT';
        if (fixture.status.short === 'FT') return 'FT';
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