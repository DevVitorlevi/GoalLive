import { useParams } from 'react-router-dom';

export function Tabela() {
    const { leagueId } = useParams();
    return <h1>Tabela do Campeonato {leagueId}</h1>;
}
