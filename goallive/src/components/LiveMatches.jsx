
import { MatchCard } from '../components/MatchCard';
import { LiveMatchesContainer, SectionTitle, MatchesGrid } from '../styles/LiveMatches';

const groupMatchesByStatus = (matches) => {
    const grouped = {
        live: [],
        scheduled: [],
        finished: []
    };

    matches?.matches?.forEach(match => {
        if (match.status === 'IN_PLAY' || match.status === 'PAUSED') {
            grouped.live.push(match);
        } else if (match.status === 'SCHEDULED') {
            grouped.scheduled.push(match);
        } else if (match.status === 'FINISHED') {
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