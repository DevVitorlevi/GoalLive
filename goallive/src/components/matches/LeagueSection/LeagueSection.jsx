import React from 'react';
import MatchCard from '../MatchCard/MatchCard';
import {
    LeagueSectionContainer,
    LeagueHeader,
    LeagueName,
    LeagueCountry,
    LeagueRound,
    MatchesGrid
} from './LeagueSection.styles';

const LeagueSection = ({ league, matches }) => {
    return (
        <LeagueSectionContainer $priority={league.priority}>
            <LeagueHeader>
                <div>
                    <LeagueName>
                        {league.logo && <img src={league.logo} alt={league.name} width="24" height="24" />}
                        <span>{league.name}</span>
                    </LeagueName>
                    <LeagueCountry>{league.country}</LeagueCountry>
                </div>
                <LeagueRound>{league.round}</LeagueRound>
            </LeagueHeader>

            <MatchesGrid>
                {matches.map(match => (
                    <MatchCard key={match.fixture.id} match={match} />
                ))}
            </MatchesGrid>
        </LeagueSectionContainer>
    );
};

export default LeagueSection;