import React from 'react';
import {
    StatsContainer,
    StatRow,
    StatName,
    StatValue,
    StatBar
} from './MatchStatsStyle';

const MatchStats = ({ stats }) => {
    if (!stats || stats.length === 0) {
        return <div>Estatísticas não disponíveis</div>;
    }

    const getStatValue = (team, statName) => {
        const stat = stats.find(s => s.team.id === team)?.statistics;
        return stat?.find(s => s.type === statName)?.value || '0';
    };

    const statsToShow = [
        { name: 'Posse de Bola', key: 'ball_possession' },
        { name: 'Finalizações', key: 'total_shots' },
        { name: 'Finalizações no Gol', key: 'shots_on_goal' },
        { name: 'Escanteios', key: 'corner_kicks' },
        { name: 'Faltas', key: 'fouls' },
        { name: 'Cartões Amarelos', key: 'yellow_cards' },
        { name: 'Cartões Vermelhos', key: 'red_cards' },
    ];

    return (
        <StatsContainer>
            {statsToShow.map((stat) => {
                const homeValue = getStatValue(stats[0].team.id, stat.key);
                const awayValue = getStatValue(stats[1].team.id, stat.key);
                const total = Number(homeValue) + Number(awayValue);
                const homePercentage = total > 0 ? (Number(homeValue)) / total * 100 : 50;

                return (
                    <StatRow key={stat.key}>
                        <StatValue>{homeValue}</StatValue>
                        <StatBar $direction="left">
                            <div style={{ width: `${homePercentage}%` }} />
                        </StatBar>
                        <StatName>{stat.name}</StatName>
                        <StatBar $direction="right">
                            <div style={{ width: `${100 - homePercentage}%` }} />
                        </StatBar>
                        <StatValue>{awayValue}</StatValue>
                    </StatRow>
                );
            })}
        </StatsContainer>
    );
};

export default MatchStats;