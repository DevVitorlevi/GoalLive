import styled from 'styled-components';

const StandingsContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export default function Standings() {
    return (
        <StandingsContainer>
            <Title>Tabela de Classificação</Title>
            {/* Conteúdo da tabela será adicionado aqui */}
        </StandingsContainer>
    );
}