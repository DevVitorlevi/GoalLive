import styled from 'styled-components';

export const LeagueSectionContainer = styled.div`
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const LeagueHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme, $leagueId }) => {
    const leagueColors = {
      2: theme.colors.championsLeague,   // Champions League
      5: theme.colors.libertadores,      // Libertadores
      13: theme.colors.premierLeague,    // Premier League
      71: theme.colors.brasileirao       // Brasileirão
    };
    return leagueColors[$leagueId] || theme.colors.secondary;
  }};
`;

export const LeagueLogo = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px;
  object-fit: contain;
`;

export const LeagueName = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  margin: 0;
  font-weight: 600;
`;

export const LeagueRound = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-left: auto;
`;

export const MatchesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;