import React from 'react';
import {
    StatsContainer,
    StatRow,
    StatName,
    StatValue,
    StatBar,
    NoStatsMessage
} from './MatchStatsStyle';

const STATS_CONFIG = [
    { key: 'ball_possession', name: 'Posse de Bola', isPercentage: true },
    { key: 'total_shots', name: 'Finalizações' },
    { key: 'shots_on_goal', name: 'Finalizações no Gol' },
    { key: 'shots_off_goal', name: 'Finalizações para Fora' },
    { key: 'shots_blocked', name: 'Finalizações Bloqueadas' },
    { key: 'corner_kicks', name: 'Escanteios' },
    { key: 'fouls', name: 'Faltas' },
    { key: 'yellow_cards', name: 'Cartões Amarelos' },
    { key: 'red_cards', name: 'Cartões Vermelhos' }
];

const MatchStats = ({ stats }) => {
    if (!stats || stats.length !== 2 || !stats[0].statistics || !stats[1].statistics) {
        return <NoStatsMessage>Estatísticas não disponíveis para esta partida</NoStatsMessage>;
    }

    const getStatValue = (teamStats, statKey) => {
        const stat = teamStats.statistics.find(s => s.type === statKey);
        if (!stat) return '0';
        return stat.value;
    };

    const [homeStats, awayStats] = stats;

    return (
        <StatsContainer>
            {STATS_CONFIG.map(({ key, name, isPercentage }) => {
                const homeValue = getStatValue(homeStats, key);
                const awayValue = getStatValue(awayStats, key);

                // Converter valores para números (removendo % se necessário)
                const homeNum = parseFloat(homeValue) || 0;
                const awayNum = parseFloat(awayValue) || 0;
                const total = homeNum + awayNum || 1; // Evita divisão por zero

                const homePercentage = (homeNum / total) * 100;
                const awayPercentage = (awayNum / total) * 100;

                return (
                    <StatRow key={key}>
                        <StatValue>{isPercentage ? `${homeNum}%` : homeValue}</StatValue>
                        <StatBar>
                            <div style={{ width: `${homePercentage}%` }} />
                        </StatBar>
                        <StatName>{name}</StatName>
                        <StatBar $reverse>
                            <div style={{ width: `${awayPercentage}%` }} />
                        </StatBar>
                        <StatValue>{isPercentage ? `${awayNum}%` : awayValue}</StatValue>
                    </StatRow>
                );
            })}
        </StatsContainer>
    );
};

export default MatchStats;