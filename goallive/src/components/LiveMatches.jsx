// src/components/LiveMatches.jsx
import { MatchCard } from '../components/MatchCard';
import { LiveMatchesContainer, SectionTitle, MatchesGrid } from '../styles/LiveMatches';

const groupMatchesByStatus = (matches) => {
    const grouped = {
        live: [],
        scheduled: [],
        finished: []
    };

    matches?.forEach(match => {
        if (match.status === '1H' || match.status === '2H' || match.status === 'HT') {
            grouped.live.push(match);
        } else if (match.status === 'NS') {
            grouped.scheduled.push(match);
        } else if (match.status === 'FT' || match.status === 'AET' || match.status === 'PEN') {
            grouped.finished.push(match);
        }
    });

    return grouped;
};

export const LiveMatches = ({ matches }) => {
    const groupedMatches = groupMatchesByStatus(matches);

    return (
        <LiveMatchesContainer>
            {groupedMatches.live.length > 0 && (
                <>
                    <SectionTitle>⚽ Partidas ao Vivo</SectionTitle>
                    <MatchesGrid>
                        {groupedMatches.live.map(match => (
                            <MatchCard key={match.id} match={match} />
                        ))}
                    </MatchesGrid>
                </>
            )}

            {groupedMatches.scheduled.length > 0 && (
                <>
                    <SectionTitle>⏱️ Partidas Agendadas</SectionTitle>
                    <MatchesGrid>
                        {groupedMatches.scheduled.map(match => (
                            <MatchCard key={match.id} match={match} />
                        ))}
                    </MatchesGrid>
                </>
            )}

            {groupedMatches.finished.length > 0 && (
                <>
                    <SectionTitle>🏁 Partidas Encerradas</SectionTitle>
                    <MatchesGrid>
                        {groupedMatches.finished.map(match => (
                            <MatchCard key={match.id} match={match} />
                        ))}
                    </MatchesGrid>
                </>
            )}
        </LiveMatchesContainer>
    );
};