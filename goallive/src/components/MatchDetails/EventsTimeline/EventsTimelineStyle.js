import styled from 'styled-components';

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const TimelineTime = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  text-align: right;
`;

export const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const HomeEvent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-start;
`;

export const AwayEvent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-end;
`;

export const EventIcon = styled.span`
  font-size: 1.2rem;
`;

export const EventPlayer = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
`;
export const NoEventsMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
`;