import React from "react";
import { Card, TeamInfo, TeamLogo, Score, MatchTime } from "../styles/components";

interface GameCardProps {
    game: any;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    const { teams, fixture, goals, status } = game;
    const matchTime = status.elapsed !== null ? `${status.elapsed}'` : fixture.date.split("T")[1].slice(0, 5);

    return (
        <Card>
            <TeamInfo>
                <TeamLogo src={teams.home.logo} alt={teams.home.name} />
                <span>{teams.home.name}</span>
            </TeamInfo>

            <MatchTime>{matchTime}</MatchTime>

            <Score>
                {goals.home ?? "-"} : {goals.away ?? "-"}
            </Score>

            <TeamInfo>
                <span>{teams.away.name}</span>
                <TeamLogo src={teams.away.logo} alt={teams.away.name} />
            </TeamInfo>
        </Card>
    );
};

export default GameCard;
