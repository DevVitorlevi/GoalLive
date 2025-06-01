import { useEffect, useState } from 'react';
import api from '../services/api';
import { type Match } from '../types/match';
import * as S from '../styles/JogosdoDIa'

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface MatchesByLeague {
    [leagueName: string]: {
        logo: string;
        round: string;
        leagueId: number;
        matches: Match[];
    };
}

export function JogosDoDia() {
    const [games, setGames] = useState<MatchesByLeague>({});
    const today = format(new Date(), 'yyyy-MM-dd');

    useEffect(() => {
        async function fetchGames() {
            try {
                const response = await api.get(`/fixtures?date=${today}`);
                const matches: Match[] = response.data.response;

                const grouped = matches.reduce((acc: MatchesByLeague, match) => {
                    const leagueName = match.league.name;

                    if (!acc[leagueName]) {
                        acc[leagueName] = {
                            logo: match.league.logo,
                            round: match.league.round,
                            leagueId: match.league.id,
                            matches: [],
                        };
                    }

                    acc[leagueName].matches.push(match);
                    return acc;
                }, {});

                setGames(grouped);
            } catch (error) {
                console.error('Erro ao carregar jogos:', error);
            }
        }

        fetchGames();
    }, []);

    return (
        <S.Container>
            <h1>Os jogos de hoje</h1>
            <p>{format(new Date(), "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })}</p>


            {Object.entries(games).map(([league, data]) => (
                <S.LeagueBlock key={league}>
                    <S.LeagueHeader>
                        <img src={data.logo} alt={league} />
                        <div>
                            <strong>{league}</strong>
                            <small>{data.round}</small>
                        </div>
                    </S.LeagueHeader>

                    <S.MatchList>
                        {data.matches.map((match) => (
                            <S.MatchCard key={match.fixture.id}>
                                <S.Team>
                                    <img src={match.teams.home.logo} alt={match.teams.home.name} />
                                    <span>{match.teams.home.name}</span>
                                </S.Team>

                                <S.Score>
                                    {match.goals.home} - {match.goals.away}
                                    <span>{match.fixture.status.short}</span>
                                </S.Score>

                                <S.Team>
                                    <img src={match.teams.away.logo} alt={match.teams.away.name} />
                                    <span>{match.teams.away.name}</span>
                                </S.Team>
                            </S.MatchCard>
                        ))}
                    </S.MatchList>

                    <S.LinkTabela to={`/tabela/${data.leagueId}`}>Ver a tabela ›</S.LinkTabela>
                </S.LeagueBlock>
            ))}
        </S.Container>
    );
}
