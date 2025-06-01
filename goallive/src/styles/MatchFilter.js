import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  .filter-buttons {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .search-section {
    display: flex;
    gap: 1rem;

    select {
      background-color: #1e1e1e;
      color: #f5f5f5;
      border: 1px solid #333;
      border-radius: 4px;
      padding: 0.5rem;
      min-width: 200px;
    }
  }
`;

export const FilterButton = styled.button`
  background-color: ${({ active }) => active ? '#00ff87' : '#1e1e1e'};
  color: ${({ active }) => active ? '#121212' : '#f5f5f5'};
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ active }) => active ? '#00ff87' : '#333'};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  background-color: #1e1e1e;
  color: #f5f5f5;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  min-width: 200px;

  &::placeholder {
    color: #666;
  }
`;