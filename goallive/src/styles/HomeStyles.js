import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export const Filters = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  background: ${({ theme, $active }) => 
    $active ? theme.colors.accent : theme.colors.secondary};
  color: ${({ theme, $active }) => 
    $active ? theme.colors.primary : theme.colors.text};
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;