import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStandingsByLeague } from "../services/api";
import { StandingsTable } from "../components/StandingsTable";
import { Container, Title } from "../styles/pages";

const currentSeason = new Date().getFullYear();

const Standings: React.FC = () => {
    const { leagueId } = useParams<{ leagueId: string }>();
    const [standings, setStandings] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!leagueId) return;

        setLoading(true);
        getStandingsByLeague(Number(leagueId), currentSeason)
            .then((response) => {
                const data = response.data.response[0].league.standings[0];
                setStandings(data);
            })
            .finally(() => setLoading(false));
    }, [leagueId]);

    return (
        <Container>
            <Title>Classificação</Title>
            {loading && <p>Carregando classificação...</p>}
            {!loading && <StandingsTable standings={standings} />}
        </Container>
    );
};

export default Standings;
