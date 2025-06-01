import styled from "styled-components";

// Container da página
export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 10px;
  color: #ddd;
  background-color: #000;
  min-height: 100vh;
`;

// Títulos das páginas
export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  margin-bottom: 0;
`;

export const Subtitle = styled.h2`
  color: #bbb;
  font-weight: 400;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 20px;
`;

// LeagueBlock para agrupar campeonato e jogos
export const LeagueBlock = styled.section`
  margin-bottom: 40px;
`;

// Cabeçalho do campeonato
export const LeagueHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;

  h3 {
    color: white;
    font-size: 1.4rem;
    margin: 0;
    font-weight: 600;
  }
`;

// Informação da rodada
export const RoundInfo = styled.span`
  margin-left: auto;
  font-size: 1rem;
  color: #aaa;
`;

// Grid dos cards de jogos (3 colunas)
export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 12px;
`;

// Link para a tabela
export const FooterLink = styled.a`
  display: inline-block;
  margin-top: 12px;
  font-size: 1rem;
  color: #6666ff;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Card do jogo
export const Card = styled.div`
  background-color: #222;
  border-radius: 8px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

// Time na card
export const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 110px;
`;

// Logo do time
export const TeamLogo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

// Tempo da partida
export const MatchTime = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  color: #ddd;
  width: 50px;
  text-align: center;
`;

// Placar do jogo
export const Score = styled.span`
  font-weight: 700;
  font-size: 1.4rem;
  color: #ddd;
  min-width: 40px;
  text-align: center;
`;

// Tabela de classificação container
export const TableContainer = styled.div`
  overflow-x: auto;
`;

// Tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: white;
`;

// Linha da tabela
export const TableRow = styled.tr`
  border-bottom: 1px solid #333;
`;

// Cabeçalho da tabela
export const TableHeader = styled.th`
  text-align: center;
  padding: 8px 10px;
  font-weight: 600;
`;

// Células da tabela
export const TableCell = styled.td`
  text-align: center;
  padding: 8px 10px;
`;

// Célula com logo e nome do time
export const TeamCell = styled.td`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  text-align: left;
`;

// Posição na tabela
export const PositionCell = styled.td`
  font-weight: 600;
  font-size: 1rem;
`;

// Variação da posição
export const VariationIcon = styled.td`
  font-size: 1.2rem;
`;
