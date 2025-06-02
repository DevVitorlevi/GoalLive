import React from 'react';
import dayjs from 'dayjs';
import {
    HeaderContainer,
    TeamsContainer,
    Team,
    TeamName,
    ScoreContainer,
    MatchInfo,
    LeagueInfo,
    MatchStatus
} from './MatchHeaderStyle';

const MatchHeader = ({ match }) => {
    const { fixture, teams, goals, league } = match;
    const isLive = ['LIVE', 'HT'].includes(fixture.status.short);
    const isFinished = fixture.status.short === 'FT';

    const getMatchTime = () => {
        if (isLive) return `${fixture.status.elapsed}'`;
        if (isFinished) return 'Encerrado';
        return dayjs(fixture.date).format('HH:mm');
    };

    return (
        <HeaderContainer $isLive={isLive} $isFinished={isFinished}>
            <LeagueInfo>
                <img src={league.logo} alt={league.name} width={24} height={24} />
                <span>{league.name} - {league.round}</span>
            </LeagueInfo>

            <TeamsContainer>
                <Team>
                    <img src={teams.home.logo} alt={teams.home.name} width={60} height={60} />
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
                        <span>VS</span>
                    )}
                </ScoreContainer>

                <Team>
                    <img src={teams.away.logo} alt={teams.away.name} width={60} height={60} />
                    <TeamName>{teams.away.name}</TeamName>
                </Team>
            </TeamsContainer>

            <MatchInfo>
                <MatchStatus $isLive={isLive}>
                    {getMatchTime()}
                </MatchStatus>
                <span>{dayjs(fixture.date).format('DD/MM/YYYY')}</span>
                <span>{fixture.venue.name}, {fixture.venue.city}</span>
            </MatchInfo>
        </HeaderContainer>
    );
};

export default MatchHeader;