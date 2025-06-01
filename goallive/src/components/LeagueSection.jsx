import {
    LeagueSectionContainer,
    LeagueHeader,
    LeagueLogo,
    LeagueName,
    LeagueRound,
    MatchesGrid
} from '../styles/leagueSectionStyles';
import MatchCard from './MatchCard';

const leaguePriority = [
    2,    // UEFA Champions League
    3,    // UEFA Europa League
    4,    // UEFA Conference League
    5,    // Copa Libertadores
    6,    // Copa Sudamericana
    1,    // FIFA Club World Cup
    13,   // English Premier League (ou 39)
    39,   // English Premier League (atual)
    78,   // Bundesliga (Alemanha)
    61,   // Ligue 1 (França)
    135,  // Serie A (Itália)
    140,  // La Liga (Espanha)
    71,   // Brasileirão Série A
    72,   // Brasileirão Série B 
    128,  // Liga Portugal (Liga NOS)
    94,   // Argentine Liga Profesional
    262,  // Campeonato Chileno
    203,  // MLS (EUA)
    253,  // J1 League (Japão)
    81,   // Eredivisie (Holanda)
    667,  // Copa do Brasil
    602   // Recopa Sudamericana
];


export default function LeagueSection({ league, matches }) {
    // Verifica se a liga está na lista de prioridades
    const isPriorityLeague = leaguePriority.includes(league.id);

    // Mostra apenas ligas prioritárias
    if (!isPriorityLeague) return null;

    return (
        <LeagueSectionContainer>
            <LeagueHeader $leagueId={league.id}>
                <LeagueLogo src={league.logo} alt={league.name} />
                <LeagueName>{league.name}</LeagueName>
                <LeagueRound>Rodada {league.round.split(' ').pop()}</LeagueRound>
            </LeagueHeader>

            <MatchesGrid>
                {matches.map(match => (
                    <MatchCard key={match.fixture.id} match={match} />
                ))}
            </MatchesGrid>
        </LeagueSectionContainer>
    );
}