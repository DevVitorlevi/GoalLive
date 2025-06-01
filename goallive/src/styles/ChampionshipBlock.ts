import styled from "styled-components";

export const BlockContainer = styled.section`
  background-color: #121212;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Logo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 0.75rem;
`;

export const ChampionshipName = styled.h2`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  flex-grow: 1;
`;

export const Round = styled.span`
  color: #bbb;
  font-size: 0.9rem;
`;

export const GamesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
`;
