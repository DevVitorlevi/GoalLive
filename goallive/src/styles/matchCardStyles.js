import styled from 'styled-components';

export const MatchCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  border-left: 4px solid ${({ theme, $isLive }) => 
    $isLive ? theme.colors.accent : 'transparent'};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const MatchStatus = styled.div`
  font-size: 0.75rem;
  color: ${({ theme, $isLive }) => 
    $isLive ? theme.colors.accent : theme.colors.textSecondary};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
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
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

export const TeamName = styled.span`
  text-align: center;
  font-size: 0.9rem;
  font-weight: ${({ $isWinner }) => $isWinner ? '600' : '400'};
  color: ${({ theme, $isWinner }) => 
    $isWinner ? theme.colors.text : theme.colors.textSecondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 20%;
`;

export const Score = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Divider = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const MatchTime = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;