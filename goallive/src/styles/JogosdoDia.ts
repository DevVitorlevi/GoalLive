import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const LeagueBlock = styled.div`
  margin-top: 2rem;
  background: ${({ theme }) => theme.colors.card};
  padding: 1.5rem;
  border-radius: 12px;
`;

export const LeagueHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 32px;
    height: 32px;
  }

  strong {
    font-size: 1.2rem;
  }

  small {
    display: block;
    color: ${({ theme }) => theme.colors.subtext};
  }
`;

export const MatchList = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 0.75rem;
`;

export const MatchCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 0.75rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Team = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 0.9rem;
  }
`;

export const Score = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;

  span {
    display: block;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.subtext};
  }
`;

export const LinkTabela = styled(Link)`
  display: block;
  margin-top: 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
`;
