import React from "react";
import GameCard from "./GameCard";
import { LeagueBlock, LeagueHeader, RoundInfo, GamesGrid, FooterLink } from "../styles/components";

interface GameListProps {
    leagueName: string;
    games: any[];
}

export const GameList: React.FC<GameListProps> = ({ leagueName, games }) => {
    const round = games[0]?.league.round || "";

    return (
        <LeagueBlock>
            <LeagueHeader>
                <img src={games[0]?.league.logo} alt={leagueName} width={30} height={30} />
                <h3>{leagueName}</h3>
                <RoundInfo>{round}</RoundInfo>
            </LeagueHeader>

            <GamesGrid>
                {games.map((game) => (
                    <GameCard key={game.fixture.id} game={game} />
                ))}
            </GamesGrid>

            <FooterLink href={`/standings/${games[0]?.league.id}`}>Ver a tabela ›</FooterLink>
        </LeagueBlock>
    );
};
