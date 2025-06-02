import styled from 'styled-components';

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const StatRow = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 120px 1fr 50px;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const StatName = styled.span`
  text-align: center;
  font-size: 0.9rem;
`;

export const StatValue = styled.span`
  text-align: center;
  font-weight: 600;
`;

export const StatBar = styled.div`
  height: 8px;
  background-color: ${({ theme }) => theme.colors.surfaceVariant};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: ${({ $direction }) => $direction === 'right' ? 'row-reverse' : 'row'};

  div {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;