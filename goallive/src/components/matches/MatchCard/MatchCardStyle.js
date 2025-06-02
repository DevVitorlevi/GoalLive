import styled from 'styled-components';

export const MatchCardContainer = styled.div`
  background-color: ${({ theme, $isLive, $isFinished }) => 
    $isLive 
      ? theme.colors.surfaceVariant 
      : $isFinished 
        ? 'rgba(30, 30, 30, 0.7)' 
        : theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${({ theme, $isLive, $isFinished }) => 
      $isLive 
        ? theme.colors.primary 
        : $isFinished 
          ? theme.colors.textSecondary 
          : 'transparent'};
  }
`;

export const TeamsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const TeamName = styled.span`
  font-size: 0.9rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
  font-size: 1.2rem;

  span:nth-child(2) {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const MatchStatus = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme, $isLive, $isFinished }) => 
    $isLive 
      ? theme.colors.primary 
      : $isFinished 
        ? theme.colors.textSecondary 
        : theme.colors.text};
  background-color: ${({ theme, $isLive }) => 
    $isLive ? 'rgba(0, 255, 135, 0.1)' : 'transparent'};
  padding: ${({ theme, $isLive }) => $isLive ? theme.spacing.xs : 0};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;