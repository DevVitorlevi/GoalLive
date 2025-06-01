import styled from 'styled-components';

export const LeagueSectionContainer = styled.div`
  margin-bottom: 30px;
`;

export const LeagueHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const LeagueLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const LeagueName = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin: 0;
`;

export const LeagueRound = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  margin-left: auto;
`;

export const MatchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;