import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding: ${({ theme }) => theme.spacing.md};
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const HomeContent = styled.div`
  overflow: hidden;
`;