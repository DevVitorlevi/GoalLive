import {
    LeagueSectionContainer,
    LeagueHeader,
    LeagueLogo,
    LeagueName,
    LeagueRound,
    MatchesGrid
} from '../styles/leagueSectionStyles';
import MatchCard from './MatchCard';

const leaguePriorityOrder = [
    2,    // Champions League
    5,    // Libertadores
    1,    // Mundial de Clubes
    39,   // Premier League
    13,   // Premier League (alternativo)
    71,   // Brasileirão A
    140,  // La Liga
    78,   // Bundesliga
    135,  // Serie A
    61,   // Ligue 1
    667,  // Copa do Brasil
    6,    // Sul-Americana
    16,   // Sul-Americana (alternativo)
    3,    // Europa League
    4,    // Conference League
    602,  // Recopa
    72,   // Brasileirão B
    128,  // Liga Portugal
    81,   // Eredivisie
    94,   // Liga Argentina
    262,  // Chileno
    203,  // MLS
    253   // J1 League
];

export default function LeagueSection({ league, matches }) {
    // Verifica se a liga está na lista de prioridades
    const isPriorityLeague = leaguePriorityOrder.includes(league.id);

    // Mostra apenas ligas prioritárias
    if (!isPriorityLeague) return null;

    return (
        <LeagueSectionContainer $leagueId={league.id}>
            <LeagueHeader $leagueId={league.id}>
                <LeagueLogo
                    src={league.logo}
                    alt={league.name}
                    $leagueId={league.id}
                />
                <LeagueName $leagueId={league.id}>{league.name}</LeagueName>
                <LeagueRound>Rodada {league.round.split(' ').pop()}</LeagueRound>
            </LeagueHeader>

            <MatchesGrid $leagueId={league.id}>
                {matches.map(match => (
                    <MatchCard
                        key={match.fixture.id}
                        match={match}
                        leagueId={league.id}
                    />
                ))}
            </MatchesGrid>
        </LeagueSectionContainer>
    );
}