import { useParams } from 'react-router-dom';

export function DetalheJogo() {
    const { matchId } = useParams();
    return <h1>Detalhes da Partida {matchId}</h1>;
}
