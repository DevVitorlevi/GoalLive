import styled from 'styled-components';

export const LiveMatchesContainer = styled.div`
  margin-top: 2rem;
`;

export const SectionTitle = styled.h2`
  color: #f5f5f5;
  margin: 1.5rem 0 1rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

export const MatchesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;