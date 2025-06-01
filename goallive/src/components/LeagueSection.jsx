import {
    LeagueSectionContainer,
    LeagueHeader,
    LeagueLogo,
    LeagueName,
    LeagueRound,
    MatchesContainer
} from '../styles/leagueSectionStyles';
import MatchCard from './MatchCard';

export default function LeagueSection({ league, matches }) {
    return (
        <LeagueSectionContainer>
            <LeagueHeader>
                <LeagueLogo src={league.logo} alt={league.name} />
                <LeagueName>{league.name}</LeagueName>
                <LeagueRound>{league.round}</LeagueRound>
            </LeagueHeader>

            <MatchesContainer>
                {matches.map(match => (
                    <MatchCard key={match.fixture.id} match={match} />
                ))}
            </MatchesContainer>
        </LeagueSectionContainer>
    );
}