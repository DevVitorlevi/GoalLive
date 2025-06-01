import React, { useEffect, useState } from "react";
import { getFixturesByDate } from "../services/api";
import { GameList } from "../components/GameList";
import { Container, Title, Subtitle } from "../styles/pages";

const leaguePriorityIds = [
    // Exemplos de ligas nacionais e internacionais para priorizar
    71, // Brasileirão Série A
    72, // Brasileirão Série B
    8,  // Copa Sul-Americana
    2,  // UEFA Champions League
    3,  // UEFA Europa League
    4,  // UEFA Europa Conference League
    5,  // FIFA Club World Cup
    // Pode adicionar mais conforme a API oferecer
];

const Games: React.FC = () => {
    const [gamesByLeague, setGamesByLeague] = useState<Record<string, any[]>>({});
    const [date] = useState(() => new Date().toISOString().split("T")[0]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getFixturesByDate(date, leaguePriorityIds)
            .then((response) => {
                const fixtures = response.data.response;

                // Agrupa jogos por liga
                const grouped: Record<string, any[]> = {};
                fixtures.forEach((fixture: any) => {
                    const leagueName = fixture.league.name;
                    if (!grouped[leagueName]) grouped[leagueName] = [];
                    grouped[leagueName].push(fixture);
                });

                setGamesByLeague(grouped);
            })
            .finally(() => setLoading(false));
    }, [date]);

    return (
        <Container>
            <Title>Os jogos de hoje</Title>
            <Subtitle>{new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</Subtitle>

            {loading && <p>Carregando jogos...</p>}

            {!loading && Object.entries(gamesByLeague).map(([league, games]) => (
                <GameList key={league} leagueName={league} games={games} />
            ))}
        </Container>
    );
};

export default Games;
