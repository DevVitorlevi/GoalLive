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

export default function MatchCard({ match, leagueId }) {
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

    const getWinner = () => {
        if (!isFinished) return null;
        if (goals.home > goals.away) return 'home';
        if (goals.away > goals.home) return 'away';
        return 'draw';
    };

    return (
        <MatchCardContainer
            $isLive={isLive}
            $leagueId={leagueId}
        >
            <MatchStatus
                $isLive={isLive}
                $leagueId={leagueId}
            >
                {isLive ? 'AO VIVO' : match.league.name}
            </MatchStatus>

            <TeamsContainer>
                <Team>
                    <TeamBadge
                        src={teams.home.logo}
                        alt={teams.home.name}
                    />
                    <TeamName
                        $isWinner={getWinner() === 'home'}
                        $leagueId={leagueId}
                    >
                        {teams.home.name}
                    </TeamName>
                </Team>

                <ScoreContainer>
                    {isLive || isFinished ? (
                        <>
                            <Score $leagueId={leagueId}>{goals.home}</Score>
                            <Divider $leagueId={leagueId}>-</Divider>
                            <Score $leagueId={leagueId}>{goals.away}</Score>
                        </>
                    ) : (
                        <MatchTime $leagueId={leagueId}>{getMatchStatus()}</MatchTime>
                    )}
                </ScoreContainer>

                <Team>
                    <TeamBadge
                        src={teams.away.logo}
                        alt={teams.away.name}
                    />
                    <TeamName
                        $isWinner={getWinner() === 'away'}
                        $leagueId={leagueId}
                    >
                        {teams.away.name}
                    </TeamName>
                </Team>
            </TeamsContainer>
        </MatchCardContainer>
    );
}