import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.surfaceVariant};
    }
  }
`;