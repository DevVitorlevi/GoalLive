import styled from 'styled-components';

export const MatchCardContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-bottom: 1px solid #2A2A2A;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #252525;
  }

  &:active {
    background-color: #2A2A2A;
  }
`;

export const MatchStatus = styled.div`
  font-size: 0.7rem;
  color: ${({ theme, $isLive }) => 
    $isLive ? '#00FF87' : theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  text-transform: uppercase;
  font-weight: ${({ $isLive }) => $isLive ? 'bold' : 'normal'};
`;

export const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;

export const TeamBadge = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-bottom: 4px;
  transition: transform 0.2s ease;

  ${MatchCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const TeamName = styled.span`
  font-size: 0.9rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  transition: color 0.2s ease;

  ${MatchCardContainer}:hover & {
    color: white;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Score = styled.span`
  font-size: 1.2rem;
  transition: color 0.2s ease;

  ${MatchCardContainer}:hover & {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Divider = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const MatchTime = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.2s ease;

  ${MatchCardContainer}:hover & {
    color: ${({ theme }) => theme.colors.text};
  }
`;