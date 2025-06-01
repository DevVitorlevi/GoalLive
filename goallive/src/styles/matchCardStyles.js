import styled from 'styled-components';

export const MatchCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const MatchStatus = styled.span`
  display: block;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  margin-top: 4px;
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

export const TeamName = styled.span`
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  min-width: 20%;
`;

export const Time = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;