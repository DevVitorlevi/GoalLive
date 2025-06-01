import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 ${({ theme }) => theme.spacing.small} 0;
`;

export const DateInfo = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin: 0;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  overflow-x: auto;
  padding-bottom: 4px;
`;

export const FilterButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #2A2A2A;
  background: ${({ $active }) => $active ? '#2A2A2A' : 'transparent'};
  color: white;
  font-size: 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
`;
export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`;