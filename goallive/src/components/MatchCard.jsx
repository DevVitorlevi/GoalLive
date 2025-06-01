import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import {
    MatchCardContainer,
    MatchStatus,
    TeamsContainer,
    Team,
    TeamName,
    Score,
    Time
} from '../styles/matchCardStyles';

export default function MatchCard({ match }) {
    const {
        fixture,
        teams,
        goals
    } = match;

    const isLive = fixture.status.short === 'LIVE';
    const isFinished = fixture.status.short === 'FT';

    const getMatchStatus = () => {
        if (isLive) return `${fixture.status.elapsed}'`;
        if (isFinished) return 'Encerrado';
        return dayjs(fixture.date).format('HH:mm');
    };

    return (
        <MatchCardContainer>
            <TeamsContainer>
                <Team>
                    <img
                        src={teams.home.logo}
                        alt={teams.home.name}
                        width="40"
                        height="40"
                    />
                    <TeamName>{teams.home.name}</TeamName>
                </Team>

                <Score>
                    {isLive || isFinished ? (
                        <>
                            <span>{goals.home}</span>
                            <Time> - </Time>
                            <span>{goals.away}</span>
                            {isLive && <MatchStatus>AO VIVO</MatchStatus>}
                        </>
                    ) : (
                        <Time>{getMatchStatus()}</Time>
                    )}
                </Score>

                <Team>
                    <img
                        src={teams.away.logo}
                        alt={teams.away.name}
                        width="40"
                        height="40"
                    />
                    <TeamName>{teams.away.name}</TeamName>
                </Team>
            </TeamsContainer>
        </MatchCardContainer>
    );
}