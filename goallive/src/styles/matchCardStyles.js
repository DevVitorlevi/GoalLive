import styled from 'styled-components';

export const MatchCardContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-bottom: 1px solid #2A2A2A;
`;

export const MatchStatus = styled.div`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  text-transform: uppercase;
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
  gap: 8px;
`;

export const Score = styled.span`
  font-size: 1.2rem;
`;

export const Divider = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const MatchTime = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;