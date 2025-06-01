import React from "react";
import {
    TableContainer,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    TeamCell,
    PositionCell,
    VariationIcon,
} from "../styles/components";

interface Standing {
    rank: number;
    team: {
        id: number;
        name: string;
        logo: string;
    };
    points: number;
    form: string;
    description: string;
    goalsDiff: number;
    all: {
        played: number;
        win: number;
        draw: number;
        lose: number;
    };
    update: string;
}

interface StandingsTableProps {
    standings: Standing[];
}

export const StandingsTable: React.FC<StandingsTableProps> = ({ standings }) => {
    const renderVariationIcon = (variation: string) => {
        if (variation === "up") return "🔼";
        if (variation === "down") return "🔽";
        return "⚪";
    };

    return (
        <TableContainer>
            <Table>
                <thead>
                    <TableRow>
                        <TableHeader>Posição</TableHeader>
                        <TableHeader>Variação</TableHeader>
                        <TableHeader>Time</TableHeader>
                        <TableHeader>J</TableHeader>
                        <TableHeader>V</TableHeader>
                        <TableHeader>E</TableHeader>
                        <TableHeader>D</TableHeader>
                        <TableHeader>DG</TableHeader>
                        <TableHeader><strong>PTS</strong></TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {standings.map((team) => (
                        <TableRow key={team.team.id}>
                            <PositionCell>{team.rank}</PositionCell>
                            <VariationIcon>{renderVariationIcon(team.description)}</VariationIcon>
                            <TeamCell>
                                <img src={team.team.logo} alt={team.team.name} width={24} height={24} />
                                {team.team.name}
                            </TeamCell>
                            <TableCell>{team.all.played}</TableCell>
                            <TableCell>{team.all.win}</TableCell>
                            <TableCell>{team.all.draw}</TableCell>
                            <TableCell>{team.all.lose}</TableCell>
                            <TableCell>{team.goalsDiff}</TableCell>
                            <TableCell><strong>{team.points}</strong></TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </TableContainer>
    );
};
