import React from 'react';
import MatchCard from '../MatchCard/MatchCard.jsx';
import { LeagueSectionContainer, LeagueHeader, LeagueName, LeagueRound, MatchesGrid } from './LeagueSection';

const LeagueSection = ({ league, matches }) => {
    return (
        <LeagueSectionContainer>
            <LeagueHeader>
                <LeagueName>
                    <img src={league.logo} alt={league.name} width="24" height="24" />
                    <span>{league.name}</span>
                </LeagueName>
                <LeagueRound>{league.round}</LeagueRound>
            </LeagueHeader>

            <MatchesGrid>
                {matches.map((match) => (
                    <MatchCard key={match.fixture.id} match={match} />
                ))}
            </MatchesGrid>
        </LeagueSectionContainer>
    );
};

export default LeagueSection;