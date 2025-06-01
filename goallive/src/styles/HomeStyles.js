import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const DateInfo = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 2px;
  }
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${({ theme, $active }) => 
    $active ? theme.colors.accent : theme.colors.secondary};
  color: ${({ theme, $active }) => 
    $active ? '#000' : theme.colors.text};
  border: none;
  cursor: pointer;
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
