import styled from 'styled-components';

export const FilterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const FilterGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FilterTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 1rem;
`;

export const FilterItem = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  
  background-color: ${({ $active, theme }) => 
    $active ? theme.colors.surfaceVariant : 'transparent'};
  
  color: ${({ $active, $priority, theme }) => 
    $active 
      ? theme.colors.primary 
      : $priority === 1 
        ? theme.colors.text 
        : theme.colors.textSecondary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceVariant};
  }
`;