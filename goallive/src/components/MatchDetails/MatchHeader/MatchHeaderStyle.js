import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${({ theme, $isLive, $isFinished }) => 
    $isLive 
      ? theme.colors.surfaceVariant 
      : $isFinished 
        ? 'rgba(30, 30, 30, 0.7)'
        : theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const LeagueInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;

export const TeamsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const TeamName = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 2rem;
  font-weight: 700;

  span:nth-child(2) {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const MatchStatus = styled.span`
  color: ${({ theme, $isLive }) => 
    $isLive ? theme.colors.primary : theme.colors.text};
  font-weight: 600;
  font-size: 1rem;
`;