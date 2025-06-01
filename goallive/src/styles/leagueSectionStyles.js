import styled from 'styled-components';

export const LeagueSectionContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  border: 1px solid #2A2A2A;
`;

export const LeagueHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme, $leagueId }) => 
    theme.colors.leagueColors[$leagueId] || theme.colors.cardBackground};
  color: white;
`;

export const LeagueLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const LeagueName = styled.h2`
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
`;

export const LeagueRound = styled.span`
  font-size: 0.8rem;
  margin-left: auto;
  opacity: 0.8;
`;

export const MatchesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1px;
  background-color: #2A2A2A;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;