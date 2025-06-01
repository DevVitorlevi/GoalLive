import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import {
    MatchCardContainer,
    MatchStatus,
    TeamsContainer,
    Team,
    TeamBadge,
    TeamName,
    ScoreContainer,
    Score,
    Divider,
    MatchTime
} from '../styles/matchCardStyles';

dayjs.locale('pt-br');

export default function MatchCard({ match }) {
    const {
        fixture,
        teams,
        goals,
        league
    } = match;

    const isLive = fixture.status.short === 'LIVE';
    const isFinished = fixture.status.short === 'FT';

    const getMatchStatus = () => {
        if (isLive) return `${fixture.status.elapsed}'`;
        if (isFinished) return 'Encerrado';
        return dayjs(fixture.date).format('HH:mm');
    };

    const getWinner = () => {
        if (!isFinished) return null;
        if (goals.home > goals.away) return 'home';
        if (goals.away > goals.home) return 'away';
        return 'draw';
    };

    return (
        <MatchCardContainer $isLive={isLive}>
            <MatchStatus $isLive={isLive}>
                {isLive ? 'AO VIVO' : league.name}
            </MatchStatus>

            <TeamsContainer>
                <Team>
                    <TeamBadge
                        src={teams.home.logo}
                        alt={teams.home.name}
                    />
                    <TeamName
                        $isWinner={getWinner() === 'home'}
                    >
                        {teams.home.name}
                    </TeamName>
                </Team>

                <ScoreContainer>
                    {isLive || isFinished ? (
                        <>
                            <Score>{goals.home}</Score>
                            <Divider>-</Divider>
                            <Score>{goals.away}</Score>
                        </>
                    ) : (
                        <MatchTime>{getMatchStatus()}</MatchTime>
                    )}
                </ScoreContainer>

                <Team>
                    <TeamBadge
                        src={teams.away.logo}
                        alt={teams.away.name}
                    />
                    <TeamName
                        $isWinner={getWinner() === 'away'}
                    >
                        {teams.away.name}
                    </TeamName>
                </Team>
            </TeamsContainer>
        </MatchCardContainer>
    );
}